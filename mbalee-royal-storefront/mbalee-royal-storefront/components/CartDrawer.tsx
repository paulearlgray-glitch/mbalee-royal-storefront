'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartProvider';

function money(m: { amount: string; currencyCode: string }) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: m.currencyCode || 'ZAR' }).format(Number(m.amount));
}

export function CartButton() {
  const { cart, setOpen } = useCart();
  return <button className="cart-button" onClick={() => setOpen(true)} aria-label="Open shopping bag"><span className="cart-label">Bag</span><span className="cart-count">{cart?.totalQuantity || 0}</span></button>;
}

export default function CartDrawer() {
  const { cart, open, setOpen } = useCart();
  if (!open) return null;
  return (
    <div className="cart-backdrop" onClick={() => setOpen(false)}>
      <aside className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-head"><div><small>MBALEE ROYAL</small><strong>Your bag</strong></div><button onClick={() => setOpen(false)} aria-label="Close cart">×</button></div>
        {!cart?.lines?.nodes?.length ? <div className="empty-cart"><span>0 items</span><h3>Your bag is waiting.</h3><p>Start with the latest iPhones or Mbalee's curated accessories.</p><Link href="/shop" onClick={() => setOpen(false)}>Shop the drop ↗</Link></div> : <>
          <div className="cart-lines">{cart.lines.nodes.map((line: any) => {
            const v = line.merchandise; const img = v.product.featuredImage;
            return <div className="cart-line" key={line.id}>
              <div className="cart-thumb">{img && <Image src={img.url} alt={img.altText || v.product.title} width={84} height={84} />}</div>
              <div><Link href={`/products/${v.product.handle}`} onClick={() => setOpen(false)}>{v.product.title}</Link><small>{v.title !== 'Default Title' ? v.title : ''}</small><small>Quantity {line.quantity}</small></div>
              <strong>{money(v.price)}</strong>
            </div>;
          })}</div>
          <div className="cart-summary"><div className="cart-total"><span>Total</span><strong>{money(cart.cost.totalAmount)}</strong></div><p>Taxes and delivery are calculated in Shopify checkout where applicable.</p></div>
          <a className="checkout" href={cart.checkoutUrl}>Secure checkout <span>↗</span></a>
          <p className="checkout-note">Checkout powered securely by Shopify.</p>
        </>}
      </aside>
    </div>
  );
}
