import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import CartDrawer, { CartButton } from '@/components/CartDrawer';
import CookieBanner from '@/components/CookieBanner';
import MobileMenu from '@/components/MobileMenu';

export const metadata: Metadata = {
  title: 'MBALEE ROYAL | The Royal Drop',
  description: 'A curated South African edit of new iPhones, premium pre-owned devices and accessories.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider>
    <div className="announcement">3–5 WORKING DAY DELIVERY <span>•</span> SOUTH AFRICA · ZAR <span>•</span> SECURE SHOPIFY CHECKOUT</div>
    <header className="site-header">
      <MobileMenu />
      <Link href="/" className="brand" aria-label="MBALEE ROYAL home">MBALEE <span>ROYAL</span></Link>
      <nav className="desktop-nav">
        <Link href="/shop?category=new">New</Link>
        <Link href="/shop?category=preowned">Pre-Owned</Link>
        <Link href="/shop?category=accessories">Accessories</Link>
        <Link href="/shop">Shop All</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <CartButton />
    </header>
    {children}
    <CartDrawer />
    <CookieBanner />
    <footer className="site-footer premium-footer">
      <div className="footer-brand"><strong>MBALEE ROYAL</strong><p>The phone is part of the look.</p><span>South Africa · ZAR · 3–5 working day delivery</span></div>
      <div className="footer-column"><small>SHOP</small><Link href="/shop">Shop all</Link><Link href="/shop?category=new">New iPhones</Link><Link href="/shop?category=preowned">Pre-Owned</Link><Link href="/shop?category=accessories">Accessories</Link></div>
      <div className="footer-column"><small>HELP</small><Link href="/contact">Contact / WhatsApp</Link><Link href="/faq">FAQ</Link><Link href="/policies/shipping-delivery">Shipping & delivery</Link><Link href="/policies/returns-refunds">Returns & refunds</Link><Link href="/policies/warranty-defects">Warranty & defects</Link></div>
      <div className="footer-column"><small>LEGAL</small><Link href="/policies">All policies</Link><Link href="/policies/privacy">Privacy & POPIA</Link><Link href="/policies/terms">Terms of sale</Link><Link href="/policies/legal-information">Legal information</Link><Link href="/policies/paia">PAIA</Link></div>
      <div className="footer-bottom"><span>Customer care: hello@mbaleeroyal.co.za · +27 69 409 0116</span><span>Checkout powered securely by Shopify</span><Link href="/policies/cookies">Cookie preferences</Link><Link href="/policies/accessibility">Accessibility</Link></div>
    </footer>
  </CartProvider></body></html>;
}
