import { NextResponse } from 'next/server';
import { addCartLine, createCart, getCart } from '@/lib/shopify';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.action === 'get') {
      if (!body.cartId) return NextResponse.json({ cart: null });
      return NextResponse.json({ cart: await getCart(body.cartId) });
    }
    if (!body.variantId) return NextResponse.json({ error: 'Missing variantId' }, { status: 400 });
    const cart = body.cartId ? await addCartLine(body.cartId, body.variantId, body.quantity || 1) : await createCart(body.variantId, body.quantity || 1);
    return NextResponse.json({ cart });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Cart request failed' }, { status: 500 });
  }
}
