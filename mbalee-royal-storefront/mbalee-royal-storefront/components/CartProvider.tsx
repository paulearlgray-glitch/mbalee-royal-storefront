'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Cart = any;
type CartContextValue = {
  cart: Cart | null;
  open: boolean;
  setOpen: (value: boolean) => void;
  add: (variantId: string, quantity?: number) => Promise<void>;
  loading: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cartId = localStorage.getItem('mbalee_cart_id');
    if (!cartId) return;
    fetch('/api/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'get', cartId }) })
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.cart) setCart(data.cart); })
      .catch(() => {});
  }, []);

  async function add(variantId: string, quantity = 1) {
    setLoading(true);
    try {
      const cartId = localStorage.getItem('mbalee_cart_id');
      const response = await fetch('/api/cart', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add', cartId, variantId, quantity })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not add to cart');
      setCart(data.cart);
      localStorage.setItem('mbalee_cart_id', data.cart.id);
      setOpen(true);
    } finally { setLoading(false); }
  }

  const value = useMemo(() => ({ cart, open, setOpen, add, loading }), [cart, open, loading]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error('useCart must be used inside CartProvider');
  return value;
}
