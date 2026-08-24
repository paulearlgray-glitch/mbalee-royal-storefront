'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartProvider';

function money(m: { amount: string; currencyCode: string }) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: m.currencyCode || 'ZAR' }).format(Number(m.amount));
}

export function CartButton() {
  const { cart, setOpen } = useCart();
  return <button className="cart-button" onClick={() => setOpen(true)} aria-label="Open cart">Bag <span>{cart?.totalQuantity || 0}</span></button>;
}

export default function CartDrawer() {
  const { cart, open, setOpen } = useCart();
  if (!open) return null;
  return (
    <div className="cart-backdrop" onClick={() => setOpen(false)}>
      <aside className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-head"><strong>Your bag</strong><button onClick={() => setOpen(false)}>Close</button></div>
        {!cart?.lines?.nodes?.length ? <p className="empty">Your bag is empty.</p> : <>
          <div className="cart-lines">{cart.lines.nodes.map((line: any) => {
            const v = line.merchandise; const img = v.product.featuredImage;
            return <div className="cart-line" key={line.id}>
              {img && <Image src={img.url} alt={img.altText || v.product.title} width={72} height={72} />}
              <div><Link href={`/products/${v.product.handle}`}>{v.product.title}</Link><small>{v.title !== 'Default Title' ? v.title : ''}</small><small>Qty {line.quantity}</small></div>
              <strong>{money(v.price)}</strong>
            </div>;
          })}</div>
          <div className="cart-total"><span>Total</span><strong>{money(cart.cost.totalAmount)}</strong></div>
          <a className="checkout" href={cart.checkoutUrl}>Secure checkout</a>
          <p className="checkout-note">Payment is completed securely through Shopify checkout.</p>
        </>}
      </aside>
    </div>
  );
}
