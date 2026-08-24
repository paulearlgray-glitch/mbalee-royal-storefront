import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VariantPicker from '@/components/VariantPicker';
import { getProduct } from '@/lib/shopify';

export const revalidate = 60;

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();
  return <main className="product-page"><Link href="/shop" className="back-link">← Back to shop</Link><div className="product-detail"><div className="product-detail-image">{product.featuredImage && <Image src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} fill sizes="(max-width: 800px) 100vw, 55vw" />}</div><div className="product-info"><span className="eyebrow dark">MBALEE ROYAL</span><h1>{product.title}</h1>{product.description && <p className="description">{product.description}</p>}<VariantPicker variants={product.variants.nodes} /><div className="purchase-notes"><span>✓ Secure Shopify checkout</span><span>✓ Prices shown in ZAR when supplied by Shopify</span><span>✓ Stock status synced from your store</span></div></div></div></main>;
}
