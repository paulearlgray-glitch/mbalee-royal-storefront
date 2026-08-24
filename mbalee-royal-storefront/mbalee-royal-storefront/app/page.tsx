import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/shopify';

export const revalidate = 60;

export default async function Home() {
  let products = [] as Awaited<ReturnType<typeof getProducts>>;
  let connected = true;
  try { products = await getProducts(8); } catch { connected = false; }

  return <main>
    <section className="hero">
      <Image src="/mbalee-hero.png" alt="MBALEE ROYAL campaign" fill priority className="hero-photo" />
      <div className="hero-overlay" />
      <div className="hero-copy"><span className="eyebrow">MBALEE ROYAL · SOUTH AFRICA</span><h1>Your next iPhone<br />looks good on you.</h1><p>New. Pre-owned. Curated with style.</p><div className="hero-actions"><Link className="hero-primary" href="/shop">Shop iPhones</Link><a className="hero-secondary" href="#preowned">Shop pre-owned</a></div></div>
      <div className="hero-note">Premium devices · Secure checkout · Nationwide delivery</div>
    </section>

    <section className="category-strip"><Link href="/shop?category=new"><b>01</b><span>New iPhones</span><em>Shop the latest</em></Link><Link id="preowned" href="/shop?category=preowned"><b>02</b><span>Pre-Owned</span><em>Premium value</em></Link><Link id="accessories" href="/shop?category=accessories"><b>03</b><span>Accessories</span><em>Finish the look</em></Link></section>

    <section className="editorial"><div><span className="eyebrow dark">MBALEE'S EDIT</span><h2>Tech, but make it personal.</h2></div><p>Shop a curated mix of iPhones, pre-owned devices and accessories — with live pricing and inventory pulled directly from Shopify.</p></section>

    <section className="products-section"><div className="section-head"><div><span className="eyebrow dark">LATEST</span><h2>Shop the drop</h2></div><Link href="/shop">View all →</Link></div>
      {!connected ? <div className="connection-card"><h3>Ready for Shopify</h3><p>Add the Storefront API token to <code>.env.local</code> and the real MBALEE ROYAL products will appear here automatically.</p></div> : <div className="product-grid">{products.map(p => <ProductCard product={p} key={p.id} />)}</div>}
    </section>

    <section className="trust"><div><b>Authentic tech</b><span>Clear product details and condition.</span></div><div><b>Secure payment</b><span>Checkout handled securely by Shopify.</span></div><div><b>South African store</b><span>Prices displayed in rand.</span></div></section>
  </main>;
}
