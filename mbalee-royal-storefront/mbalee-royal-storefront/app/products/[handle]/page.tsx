import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VariantPicker from '@/components/VariantPicker';
import { getProduct } from '@/lib/shopify';

export const revalidate = 60;

const whatsappUrl = 'https://wa.me/27694090116?text=Hi%20MBALEE%20ROYAL%2C%20I%20have%20a%20question%20about%20a%20product.';

const faqs = [
  { question: 'How long does delivery take?', answer: 'Standard delivery is estimated at 3–5 working days after order confirmation and successful payment. Weekends and South African public holidays are excluded.' },
  { question: 'Will I receive tracking?', answer: 'Where courier tracking is available, it is shared or becomes available after fulfilment. Tracking may take a short period to activate after the courier receives the parcel.' },
  { question: 'Do you deliver throughout South Africa?', answer: 'The store is configured for South African customers. Delivery availability and any applicable delivery charge are confirmed at checkout for the address entered.' },
  { question: 'Is the stock shown live?', answer: 'Product availability, variants and pricing are pulled from Shopify and refreshed regularly. Fast-moving stock can still change between browsing and checkout.' },
  { question: 'How do I know if the phone is new or pre-owned?', answer: 'The product page should identify the category and condition. Pre-owned buyers should read the condition description carefully before checkout.' },
  { question: 'What battery health can I expect on a pre-owned iPhone?', answer: 'Battery health varies by device. A minimum percentage is only promised if the specific listing expressly states one. If it is not shown, confirm the device-specific battery information before buying.' },
  { question: 'What comes in the box?', answer: 'Box contents vary by model and condition. Pre-owned devices may not include original packaging, charger, cable or other accessories unless the listing says they are included.' },
  { question: 'Can I return an online order if I change my mind?', answer: 'Where ECTA section 44 applies, an eligible online goods transaction can be cancelled without reason within seven days after receipt. The direct cost of returning the goods may be for the customer’s account, and statutory exceptions can apply.' },
  { question: 'What if the phone is defective?', answer: 'South African consumer law provides an implied warranty of quality. If qualifying goods fail the protected quality standards within six months after delivery, the Consumer Protection Act provides repair, replacement or refund remedies subject to section 56.' },
  { question: 'Does pre-owned still have consumer protection?', answer: 'Yes. Pre-owned status does not remove statutory consumer rights, although a condition or limitation that was clearly disclosed and expressly accepted is relevant to the expected condition of the goods.' },
  { question: 'Is checkout secure?', answer: 'Yes. Your cart is created through Shopify and payment is completed through Shopify checkout using the payment methods enabled for MBALEE ROYAL.' },
  { question: 'Can I change or cancel my order after paying?', answer: 'Contact MBALEE ROYAL immediately. We will try to assist before fulfilment begins. Once the parcel is dispatched, the applicable cancellation or returns process applies.' },
  { question: 'How can I contact MBALEE ROYAL?', answer: 'WhatsApp customer care on +27 69 409 0116 or email hello@mbaleeroyal.co.za. For an existing order, include your order number so the team can assist faster.' }
];

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  return <main className="product-page">
    <Link href="/shop" className="back-link">← Back to shop</Link>

    <div className="product-detail">
      <div className="product-detail-image">
        {product.featuredImage && <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          fill
          sizes="(max-width: 800px) 100vw, 55vw"
          priority
        />}
        <span className="image-trust-badge">MBALEE ROYAL SELECT</span>
      </div>

      <div className="product-info">
        <span className="eyebrow dark">MBALEE ROYAL · SOUTH AFRICA</span>
        <h1>{product.title}</h1>
        <div className="product-confidence-line"><span>Authentic tech</span><i>•</i><span>Secure checkout</span><i>•</i><span>3–5 working days</span></div>
        {product.description && <p className="description">{product.description}</p>}
        <VariantPicker variants={product.variants.nodes} />

        <div className="purchase-confidence">
          <div><strong>03–05</strong><span><b>Working day delivery</b>Estimated delivery across South Africa after order confirmation.</span></div>
          <div><strong>✓</strong><span><b>Live availability</b>Stock and variants sync from the Shopify store.</span></div>
          <div><strong>SSL</strong><span><b>Secure payment</b>Checkout and payment are handled securely by Shopify.</span></div>
        </div>
      </div>
    </div>

    <section className="product-trust-band" aria-label="Shopping confidence">
      <div><small>01</small><b>3–5 working days</b><span>Clear delivery expectations before you order.</span></div>
      <div><small>02</small><b>Shopify secure checkout</b><span>Your payment details are handled through the store’s secure checkout.</span></div>
      <div><small>03</small><b>Live product data</b><span>Pricing, variants and availability come directly from Shopify.</span></div>
      <div><small>04</small><b>Buy with clarity</b><span>Condition, warranty and box contents should be confirmed before purchase.</span></div>
    </section>

    <section className="before-you-buy">
      <div className="before-you-buy-heading">
        <span className="eyebrow dark">BEFORE YOU BUY</span>
        <h2>Everything you should know.</h2>
        <p>Buying an iPhone is a considered purchase. This section keeps the important information close to the product, so customers do not have to hunt for answers.</p>
      </div>
      <div className="buy-info-grid">
        <article><span>DELIVERY</span><h3>3–5 working days.</h3><p>Orders are estimated to arrive within 3–5 working days after confirmation. Weekends and public holidays are excluded.</p></article>
        <article><span>CONDITION</span><h3>Know exactly what you’re buying.</h3><p>New and pre-owned devices should be clearly identified. Pre-owned condition and battery details should be checked before checkout.</p></article>
        <article><span>PAYMENT</span><h3>Secure from cart to checkout.</h3><p>The storefront creates your Shopify cart and sends you to Shopify’s secure checkout for payment.</p></article>
        <article><span>AFTER PURCHASE</span><h3>Keep your order details.</h3><p>Your order confirmation is your reference for fulfilment, tracking and any support you may need after purchase.</p></article>
      </div>
    </section>

    <section className="product-faq">
      <div className="faq-heading">
        <span className="eyebrow dark">FAQ</span>
        <h2>Questions before checkout?</h2>
        <p>Answers to the questions customers commonly ask before buying a new or pre-owned iPhone online.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => <details key={faq.question} className="faq-item" open={index === 0}>
          <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i>+</i></summary>
          <p>{faq.answer}</p>
        </details>)}
      </div>
    </section>

    <section className="product-reassurance-cta">
      <span className="eyebrow">STILL UNSURE?</span>
      <h2>Ask before you order.</h2>
      <p>For the full rules on delivery, returns, warranty, pre-owned devices and checkout, read the customer policies before ordering.</p>
      <div className="reassurance-links"><a href={whatsappUrl} target="_blank" rel="noreferrer">Ask on WhatsApp</a><Link href="/faq">Read FAQ</Link><Link href="/policies">View policies</Link></div>
    </section>
  </main>;
}
