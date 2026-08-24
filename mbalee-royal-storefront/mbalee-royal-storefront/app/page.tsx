import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/shopify';

export const revalidate = 60;

export default async function Home() {
  let products = [] as Awaited<ReturnType<typeof getProducts>>;
  let connected = true;
  try { products = await getProducts(12); } catch { connected = false; }

  const picks = products.slice(0, 4);
  const latest = products.slice(4, 8);

  return <main>
    <section className="hero premium-hero">
      <Image src="/mbalee-hero.png" alt="MBALEE ROYAL campaign" fill priority className="hero-photo" sizes="100vw" />
      <div className="hero-overlay" />
      <div className="hero-copy">
        <span className="eyebrow">THE ROYAL DROP · 2026</span>
        <h1>The phone is<br/>part of the look.</h1>
        <p>A curated edit of new iPhones, premium pre-owned devices and the accessories that finish it.</p>
        <div className="hero-actions">
          <Link className="hero-primary" href="/shop">Shop the drop <span>↗</span></Link>
          <Link className="hero-secondary" href="/shop?category=preowned">Explore pre-owned</Link>
        </div>
      </div>
      <div className="hero-side-note"><span>CURATED BY</span><strong>MBALEE ROYAL</strong></div>
      <a className="hero-scroll" href="#edit" aria-label="Scroll to Mbalee's edit"><span>Scroll</span><i>↓</i></a>
    </section>

    <section className="category-rail" aria-label="Shop categories">
      <Link href="/shop?category=new"><small>01</small><strong>New iPhones</strong><span>The latest drop ↗</span></Link>
      <Link id="preowned" href="/shop?category=preowned"><small>02</small><strong>Pre-Owned</strong><span>Premium value ↗</span></Link>
      <Link id="accessories" href="/shop?category=accessories"><small>03</small><strong>Accessories</strong><span>Finish the look ↗</span></Link>
    </section>

    <section className="editorial-intro" id="edit">
      <div className="editorial-kicker"><span>MBalee's edit</span><i>01 / 03</i></div>
      <div className="editorial-copy"><h2>Tech,<br/><em>styled personally.</em></h2><p>MBALEE ROYAL is built like an editorial wardrobe for your tech: fewer distractions, stronger choices, and a premium path from discovery to checkout.</p></div>
    </section>

    <section className="products-section premium-products">
      <div className="section-head"><div><span className="eyebrow dark">MBALEE'S PICKS</span><h2>The edit</h2></div><Link href="/shop">See everything <span>↗</span></Link></div>
      {!connected ? <div className="connection-card"><h3>Shopify connection required</h3><p>Add the Storefront API environment variables and products will appear automatically.</p></div> : <div className="product-grid featured-grid">{picks.map((p, index) => <ProductCard product={p} key={p.id} featured={index === 0} />)}</div>}
    </section>

    <section className="royal-story">
      <div className="royal-story-image"><Image src="/mbalee-hero.png" alt="Mbalee Royal editorial campaign" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div className="royal-story-copy"><span className="eyebrow">THE MBALEE STANDARD</span><h2>Premium without the tech-store energy.</h2><p>Clear choices. Strong visuals. Real Shopify stock and pricing. A storefront designed around how people actually discover products from creators.</p><div className="story-points"><div><b>01</b><span>Curated, not cluttered</span></div><div><b>02</b><span>Mobile-first shopping</span></div><div><b>03</b><span>Secure Shopify checkout</span></div></div><Link href="/shop">Shop the full edit ↗</Link></div>
    </section>

    {connected && latest.length > 0 && <section className="products-section latest-section"><div className="section-head"><div><span className="eyebrow dark">JUST IN</span><h2>Fresh arrivals</h2></div><Link href="/shop">View all <span>↗</span></Link></div><div className="product-grid">{latest.map(p => <ProductCard product={p} key={p.id} />)}</div></section>}

    <section className="preowned-story">
      <div><span className="eyebrow">PRE-OWNED, REFRAMED</span><h2>Second life.<br/>First-class feel.</h2></div>
      <div className="preowned-copy"><p>Pre-owned should still feel premium. We keep condition and product information clear so the value feels intentional, not compromised.</p><ul><li>Clear condition information</li><li>Live availability from Shopify</li><li>Secure checkout in ZAR</li></ul><Link href="/shop?category=preowned">Shop pre-owned ↗</Link></div>
    </section>

    <section className="trust-strip"><div><small>01</small><b>Live Shopify inventory</b><span>Products and availability stay connected to the store.</span></div><div><small>02</small><b>Secure checkout</b><span>Payment is completed through Shopify checkout.</span></div><div><small>03</small><b>Built for mobile</b><span>Fast, thumb-friendly browsing from social to checkout.</span></div></section>

    <section className="closing-cta"><span className="eyebrow">MBALEE ROYAL</span><h2>Your upgrade era<br/>starts here.</h2><Link href="/shop">Enter the store <span>↗</span></Link></section>
  </main>;
}
