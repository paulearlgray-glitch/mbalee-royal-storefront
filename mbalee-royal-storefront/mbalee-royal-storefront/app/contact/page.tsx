import Link from 'next/link';

const whatsappUrl = 'https://wa.me/27694090116?text=Hi%20MBALEE%20ROYAL%2C%20I%20need%20help%20with%20an%20order%20or%20product.';

export default function ContactPage() {
  return <main className="contact-page">
    <section className="contact-hero">
      <span className="eyebrow dark">MBALEE ROYAL · CUSTOMER CARE</span>
      <h1>Real help,<br/><em>before and after checkout.</em></h1>
      <p>Questions about a product, delivery, an existing order, returns or warranty? Reach the MBALEE ROYAL customer-care team directly.</p>
      <div className="contact-hero-actions">
        <a className="contact-primary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us ↗</a>
        <a className="contact-secondary" href="mailto:hello@mbaleeroyal.co.za">Email customer care</a>
      </div>
    </section>

    <section className="contact-options">
      <article><small>01</small><span>FASTEST CHANNEL</span><h2>WhatsApp</h2><p>For product questions, delivery queries and order support.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">+27 69 409 0116 ↗</a></article>
      <article><small>02</small><span>EMAIL</span><h2>Customer care</h2><p>Best for detailed requests, documents, returns and written follow-up.</p><a href="mailto:hello@mbaleeroyal.co.za">hello@mbaleeroyal.co.za ↗</a></article>
      <article><small>03</small><span>DELIVERY</span><h2>3–5 working days</h2><p>Our standard South African delivery estimate after order confirmation and successful payment.</p><Link href="/policies/shipping-delivery">Delivery policy ↗</Link></article>
    </section>

    <section className="support-before-contact">
      <div><span className="eyebrow dark">HELP US HELP YOU</span><h2>Have these details ready.</h2></div>
      <div className="support-checklist">
        <div><b>Order support</b><p>Your order number, customer name and the mobile number/email used at checkout.</p></div>
        <div><b>Delivery issue</b><p>Your order number, tracking details if available, and a description of the problem.</p></div>
        <div><b>Product / defect query</b><p>Product name, order number, issue description and clear photos or video where reasonably possible.</p></div>
        <div><b>Return request</b><p>Contact us before sending anything. We will provide or confirm the correct return process and address.</p></div>
      </div>
    </section>

    <section className="contact-links-section">
      <span className="eyebrow">SELF-SERVICE</span>
      <h2>Answers without waiting.</h2>
      <div><Link href="/faq">Customer FAQ ↗</Link><Link href="/policies">All policies ↗</Link><Link href="/shop">Continue shopping ↗</Link></div>
    </section>
  </main>;
}
