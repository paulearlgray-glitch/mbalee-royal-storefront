import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import CartDrawer, { CartButton } from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'MBALEE ROYAL | iPhones & Accessories',
  description: 'New iPhones, premium pre-owned devices and curated accessories in South Africa.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider>
    <header className="site-header"><Link href="/" className="brand">MBALEE ROYAL</Link><nav><Link href="/">Home</Link><Link href="/shop">Shop</Link><a href="#preowned">Pre-Owned</a><a href="#accessories">Accessories</a></nav><CartButton /></header>
    {children}<CartDrawer />
    <footer><div><strong>MBALEE ROYAL</strong><p>Premium tech. Personal style.</p></div><div><span>South Africa · ZAR</span><span>Secure checkout powered by Shopify</span></div></footer>
  </CartProvider></body></html>;
}
