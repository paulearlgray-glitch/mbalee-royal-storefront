import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/shopify';
import AddToCart from './AddToCart';

function classify(product: Product) {
  const hay = `${product.title} ${product.productType} ${product.tags.join(' ')}`.toLowerCase();
  if (/pre.?owned|refurb|used/.test(hay)) return 'Pre-Owned';
  if (/accessor|case|charger|cable|airpod|watch|screen|protector|adapter/.test(hay)) return 'Accessory';
  return 'New';
}

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const v = product.variants.nodes.find(x => x.availableForSale) || product.variants.nodes[0];
  const m = product.priceRange.minVariantPrice;
  const price = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: m.currencyCode || 'ZAR' }).format(Number(m.amount));
  const badge = classify(product);
  return <article className={`product-card${featured ? ' product-card-featured' : ''}`}>
    <Link href={`/products/${product.handle}`} className="product-image-wrap">
      <span className="product-badge">{badge}</span>
      <span className="product-view">View ↗</span>
      {product.featuredImage ? <Image src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} fill sizes={featured ? '(max-width: 700px) 100vw, 50vw' : '(max-width: 700px) 50vw, 25vw'} className="product-image" /> : <div className="image-placeholder" />}
    </Link>
    <div className="product-card-body"><div className="product-copy"><Link href={`/products/${product.handle}`}><h3>{product.title}</h3></Link><p>{price}</p></div>{v && <AddToCart variantId={v.id} label="Add +" />}</div>
  </article>;
}
