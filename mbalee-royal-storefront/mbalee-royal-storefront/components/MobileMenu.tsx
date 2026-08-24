'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return <>
    <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
      <span /><span />
    </button>
    {open && <div className="mobile-menu-shell" role="dialog" aria-modal="true" aria-label="Navigation">
      <div className="mobile-menu-top">
        <span className="mobile-menu-brand">MBALEE ROYAL</span>
        <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
      </div>
      <nav className="mobile-menu-nav">
        <Link href="/" onClick={() => setOpen(false)}><small>01</small><span>Home</span></Link>
        <Link href="/shop" onClick={() => setOpen(false)}><small>02</small><span>Shop all</span></Link>
        <Link href="/shop?category=new" onClick={() => setOpen(false)}><small>03</small><span>New iPhones</span></Link>
        <Link href="/shop?category=preowned" onClick={() => setOpen(false)}><small>04</small><span>Pre-Owned</span></Link>
        <Link href="/shop?category=accessories" onClick={() => setOpen(false)}><small>05</small><span>Accessories</span></Link>
        <Link href="/faq" onClick={() => setOpen(false)}><small>06</small><span>FAQ</span></Link>
        <Link href="/policies" onClick={() => setOpen(false)}><small>07</small><span>Policies</span></Link>
      </nav>
      <div className="mobile-menu-foot">South Africa · ZAR · Secure Shopify checkout</div>
    </div>}
  </>;
}
