import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/shopify';

export const revalidate = 60;

export default async function Shop({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  let products = await getProducts(48);
  if (category) {
    products = products.filter(p => {
      const hay = `${p.title} ${p.productType} ${p.tags.join(' ')}`.toLowerCase();
      if (category === 'preowned') return /pre.?owned|refurb|used/.test(hay);
      if (category === 'accessories') return /accessor|case|charger|cable|airpod|watch|screen|protector/.test(hay);
      if (category === 'new') return !/pre.?owned|refurb|used|accessor|case|charger|cable|airpod|watch|screen|protector/.test(hay);
      return true;
    });
  }
  return <main className="shop-page"><div className="shop-intro"><span className="eyebrow dark">MBALEE ROYAL STORE</span><h1>{category === 'preowned' ? 'Pre-Owned' : category === 'accessories' ? 'Accessories' : category === 'new' ? 'New iPhones' : 'Shop everything'}</h1><p>Live products, variants, prices and availability from Shopify.</p></div><div className="filter-links"><a href="/shop">All</a><a href="/shop?category=new">New</a><a href="/shop?category=preowned">Pre-Owned</a><a href="/shop?category=accessories">Accessories</a></div><div className="product-grid">{products.map(p => <ProductCard product={p} key={p.id} />)}</div></main>;
}
