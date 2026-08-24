import Link from 'next/link';

const groups = [
  {
    title: 'Delivery & orders',
    items: [
      ['How long does delivery take?', 'Standard delivery is estimated at 3–5 working days after your order is confirmed and payment has been successfully processed. Weekends and South African public holidays are not working days.'],
      ['Do you deliver throughout South Africa?', 'The store is configured for South African customers. Delivery availability and any delivery charge are confirmed at checkout for the address entered.'],
      ['Will I receive tracking?', 'Where courier tracking is available, it is shared or becomes available after fulfilment. Tracking may take a short time to activate after the courier receives the parcel.'],
      ['Can I change my address after ordering?', 'Contact MBALEE ROYAL immediately. We will try to update the address before fulfilment. Once the parcel is with the courier, a change may no longer be possible.'],
      ['What if my parcel is delayed?', 'Check the tracking first. Courier delays can happen, but if the parcel appears materially delayed, contact MBALEE ROYAL with your order number so the delivery can be investigated.']
    ]
  },
  {
    title: 'Products & pre-owned',
    items: [
      ['How do I know if a phone is new or pre-owned?', 'The product page should identify the category and condition. Read the condition description before checkout, especially for pre-owned devices.'],
      ['What battery health will a pre-owned iPhone have?', 'Battery health varies by device. A minimum percentage is only promised if the specific product listing expressly states one. If battery health is important to you and it is not shown, confirm the device-specific detail before buying.'],
      ['What comes in the box?', 'Box contents vary by model and condition. The product description is the source of truth. Pre-owned devices may not include original packaging, a charger, cable or other accessories unless the listing says they are included.'],
      ['Will a pre-owned iPhone be activation locked?', 'A device supplied for normal resale should not require a previous owner’s personal account to activate it. If a device arrives with an undisclosed previous-owner activation lock, contact MBALEE ROYAL promptly.'],
      ['Are product photos always the exact device?', 'For new products and some pre-owned listings, images may be representative. If a listing says the photos show the exact device, that statement applies. The written condition description remains important.']
    ]
  },
  {
    title: 'Returns & warranty',
    items: [
      ['Can I return an online order if I change my mind?', 'Where the ECTA seven-day cooling-off right applies, an eligible online goods transaction can be cancelled without reason within seven days after receipt. The direct return cost may be for the customer’s account. Statutory exceptions can apply.'],
      ['What if the phone is defective?', 'South African consumer law provides an implied warranty of quality. If goods fail the protected quality standards within six months after delivery, the remedies in section 56 of the Consumer Protection Act may include repair, replacement or refund at the consumer’s direction, subject to the Act.'],
      ['Does a pre-owned phone still have consumer protection?', 'Yes. Selling goods as pre-owned does not remove statutory consumer rights. However, a condition or limitation that was clearly disclosed and expressly accepted is relevant to the expected condition of the goods.'],
      ['Is there an Apple or manufacturer warranty?', 'A manufacturer warranty applies only where the product listing, invoice or warranty documentation expressly says it applies. Any manufacturer or additional store warranty sits alongside statutory consumer rights.'],
      ['What if a repaired device fails again?', 'Where the CPA section 56(3) requirements are met, a qualifying failure discovered within three months after a repair can trigger further replacement or refund rights.']
    ]
  },
  {
    title: 'Payment & checkout',
    items: [
      ['Is payment secure?', 'Yes. The custom website creates a Shopify cart and payment is completed through Shopify checkout using the payment methods enabled for the store.'],
      ['Are prices in rand?', 'Yes. Prices are shown in South African rand (ZAR) when supplied by Shopify. The final total is confirmed at checkout.'],
      ['Does MBALEE ROYAL store my full card details?', 'The custom storefront does not need to store full payment-card details. Payment credentials are handled by the checkout/payment providers involved in the transaction.'],
      ['Why was my payment or order held for review?', 'Some orders may be subject to reasonable fraud, payment or delivery verification. This helps protect customers and the store from unauthorised transactions.']
    ]
  },
  {
    title: 'Privacy & support',
    items: [
      ['What personal information do you use?', 'Typical information includes customer contact details, delivery details, order/support history, technical website information and marketing preferences. See the Privacy & POPIA Notice for the full explanation.'],
      ['Can I opt out of marketing?', 'Yes. Marketing messages should include an opt-out mechanism, and valid opt-out requests should be honoured.'],
      ['Where can I read all the policies?', 'Use the Legal & Policies hub in the footer for shipping, returns, warranty, pre-owned devices, privacy, cookies, terms and complaints.'],
      ['How do I contact MBALEE ROYAL?', 'WhatsApp customer care on +27 69 409 0116 or email hello@mbaleeroyal.co.za. For order support, include your order number.']
    ]
  }
];

export default function FAQPage() {
  return <main className="faq-page">
    <section className="faq-page-hero">
      <span className="eyebrow dark">CUSTOMER CARE</span>
      <h1>Questions,<br/><em>answered properly.</em></h1>
      <p>Delivery, pre-owned devices, returns, warranty, checkout and privacy — before you have to ask.</p>
    </section>
    <section className="faq-groups">
      {groups.map((group, groupIndex) => <div className="faq-group" key={group.title}>
        <header><small>{String(groupIndex + 1).padStart(2, '0')}</small><h2>{group.title}</h2></header>
        <div>
          {group.items.map(([question, answer], index) => <details className="faq-item" key={question} open={groupIndex === 0 && index === 0}>
            <summary><span>{String(index + 1).padStart(2, '0')}</span>{question}<i>+</i></summary>
            <p>{answer}</p>
          </details>)}
        </div>
      </div>)}
    </section>
    <section className="faq-policy-cta"><span className="eyebrow">STILL NEED HELP?</span><h2>Talk to customer care.</h2><div className="faq-cta-actions"><a href="https://wa.me/27694090116?text=Hi%20MBALEE%20ROYAL%2C%20I%20need%20help." target="_blank" rel="noreferrer">WhatsApp us ↗</a><a href="mailto:hello@mbaleeroyal.co.za">Email us ↗</a><Link href="/policies">View policies ↗</Link></div></section>
  </main>;
}
