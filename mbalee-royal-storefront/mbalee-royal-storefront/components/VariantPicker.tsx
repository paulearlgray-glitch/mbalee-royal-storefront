'use client';
import { useState } from 'react';
import AddToCart from './AddToCart';

export default function VariantPicker({ variants }: { variants: Array<{ id: string; title: string; availableForSale: boolean; price: { amount: string; currencyCode: string } }> }) {
  const available = variants.filter(v => v.availableForSale);
  const [id, setId] = useState(available[0]?.id || variants[0]?.id || '');
  const selected = variants.find(v => v.id === id);
  return <div className="variant-picker">
    {variants.length > 1 && <label>Choose option<select value={id} onChange={e => setId(e.target.value)}>{variants.map(v => <option value={v.id} key={v.id} disabled={!v.availableForSale}>{v.title}{!v.availableForSale ? ' — Sold out' : ''}</option>)}</select></label>}
    {selected && <div className="product-price">{new Intl.NumberFormat('en-ZA', { style: 'currency', currency: selected.price.currencyCode || 'ZAR' }).format(Number(selected.price.amount))}</div>}
    <AddToCart variantId={id} />
  </div>;
}
