'use client';
import { useCart } from './CartProvider';

export default function AddToCart({ variantId, label = 'Add to bag' }: { variantId: string; label?: string }) {
  const { add, loading } = useCart();
  return <button className="primary-button" disabled={loading} onClick={() => add(variantId)}>{loading ? 'Adding…' : label}</button>;
}
