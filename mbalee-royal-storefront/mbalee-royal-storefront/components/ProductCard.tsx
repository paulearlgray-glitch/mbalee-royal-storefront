import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/shopify';
import AddToCart from './AddToCart';

export default function ProductCard({ product }: { product: Product }) {
  const v = product.variants.nodes.find(x => x.availableForSale) || product.variants.nodes[0];
  const m = product.priceRange.minVariantPrice;
  const price = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: m.currencyCode || 'ZAR' }).format(Number(m.amount));
  return <article className="product-card">
    <Link href={`/products/${product.handle}`} className="product-image-wrap">
      {product.featuredImage ? <Image src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image" /> : <div className="image-placeholder" />}
    </Link>
    <div className="product-card-body"><div><Link href={`/products/${product.handle}`}><h3>{product.title}</h3></Link><p>{price}</p></div>{v && <AddToCart variantId={v.id} label="Add" />}</div>
  </article>;
}
