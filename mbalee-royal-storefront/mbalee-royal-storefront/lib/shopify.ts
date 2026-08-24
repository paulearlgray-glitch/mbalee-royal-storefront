const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || '2025-10';

export type Money = { amount: string; currencyCode: string };
export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  productType: string;
  tags: string[];
  featuredImage?: { url: string; altText?: string | null } | null;
  priceRange: { minVariantPrice: Money };
  variants: { nodes: Array<{ id: string; title: string; availableForSale: boolean; price: Money }> };
};

async function storefront<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!domain || !token) throw new Error('Missing Shopify Storefront API environment variables.');

  const response = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await response.json();
  if (!response.ok || json.errors) {
    console.error(json.errors || json);
    throw new Error('Shopify Storefront API request failed.');
  }
  return json.data;
}

const productFields = `
  id title handle description productType tags
  featuredImage { url altText }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 50) { nodes { id title availableForSale price { amount currencyCode } } }
`;

export async function getProducts(first = 24): Promise<Product[]> {
  const data = await storefront<{ products: { nodes: Product[] } }>(`
    query Products($first: Int!) {
      products(first: $first, sortKey: UPDATED_AT, reverse: true) { nodes { ${productFields} } }
    }
  `, { first });
  return data.products.nodes;
}

export async function getProduct(handle: string): Promise<Product | null> {
  const data = await storefront<{ product: Product | null }>(`
    query Product($handle: String!) {
      product(handle: $handle) { ${productFields} }
    }
  `, { handle });
  return data.product;
}

export async function createCart(merchandiseId: string, quantity = 1) {
  const data = await storefront<any>(`
    mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { id checkoutUrl totalQuantity cost { totalAmount { amount currencyCode } }
          lines(first: 20) { nodes { id quantity merchandise { ... on ProductVariant { id title product { title handle featuredImage { url altText } } price { amount currencyCode } } } } }
        }
        userErrors { field message }
      }
    }
  `, { input: { lines: [{ merchandiseId, quantity }] } });
  if (data.cartCreate.userErrors?.length) throw new Error(data.cartCreate.userErrors[0].message);
  return data.cartCreate.cart;
}

export async function addCartLine(cartId: string, merchandiseId: string, quantity = 1) {
  const data = await storefront<any>(`
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { id checkoutUrl totalQuantity cost { totalAmount { amount currencyCode } }
          lines(first: 20) { nodes { id quantity merchandise { ... on ProductVariant { id title product { title handle featuredImage { url altText } } price { amount currencyCode } } } } }
        }
        userErrors { field message }
      }
    }
  `, { cartId, lines: [{ merchandiseId, quantity }] });
  if (data.cartLinesAdd.userErrors?.length) throw new Error(data.cartLinesAdd.userErrors[0].message);
  return data.cartLinesAdd.cart;
}

export async function getCart(cartId: string) {
  const data = await storefront<any>(`
    query Cart($id: ID!) {
      cart(id: $id) { id checkoutUrl totalQuantity cost { totalAmount { amount currencyCode } }
        lines(first: 20) { nodes { id quantity merchandise { ... on ProductVariant { id title product { title handle featuredImage { url altText } } price { amount currencyCode } } } } }
      }
    }
  `, { id: cartId });
  return data.cart;
}
