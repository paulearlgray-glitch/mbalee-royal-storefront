export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Policy = {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  effective: string;
  sections: PolicySection[];
};

export const legalPlaceholders = {
  legalEntity: 'Royal Beauty, an unregistered business trading as MBALEE ROYAL',
  registrationNumber: 'Not applicable at present — Royal Beauty is not yet registered as a company',
  officeBearers: 'Royal Mbalee — responsible person',
  websiteAddress: 'MBALEE ROYAL online storefront',
  physicalAddress: '160 Main Street, City and Suburban, Marshalltown, Johannesburg, 2094, South Africa',
  legalServiceAddress: '160 Main Street, City and Suburban, Marshalltown, Johannesburg, 2094, South Africa',
  email: 'hello@mbaleeroyal.co.za',
  phone: '+27 69 409 0116',
  returnsAddress: 'Contact customer care first for return authorisation and the approved return instructions',
  informationOfficer: 'Royal Mbalee — hello@mbaleeroyal.co.za'
};

export const policies: Policy[] = [
  {
    slug: 'shipping-delivery',
    title: 'Shipping & Delivery Policy',
    shortTitle: 'Shipping & Delivery',
    intro: 'Clear delivery expectations for MBALEE ROYAL orders within South Africa.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Delivery timeframe', paragraphs: ['Our standard delivery estimate is 3–5 working days after an order is confirmed and payment has been successfully processed. Working days exclude Saturdays, Sundays and South African public holidays.', 'The 3–5 working day period is an estimate rather than a guaranteed delivery appointment. Courier disruptions, severe weather, access restrictions or exceptional events outside our reasonable control may cause delays. If a material delay occurs, we will communicate where reasonably possible.'] },
      { heading: 'Delivery area', paragraphs: ['MBALEE ROYAL currently serves delivery addresses within South Africa unless a product or checkout page states otherwise. Delivery availability and any applicable delivery charge are confirmed at checkout.'] },
      { heading: 'Tracking', paragraphs: ['Where courier tracking is available, tracking information is sent or made available after fulfilment. Tracking may take a short period to become active after the courier receives the parcel.'] },
      { heading: 'Delivery address', paragraphs: ['Customers are responsible for providing a complete and accurate delivery address and contact number. Contact us as soon as possible if an address needs to be corrected. Once an order has entered fulfilment or has been handed to a courier, an address change may not be possible.'] },
      { heading: 'Delivery attempts and uncollected parcels', paragraphs: ['If a courier cannot complete delivery because no authorised person is available, the courier may arrange another attempt, collection or return-to-sender process. Any additional courier cost caused by an incorrect address or repeated failed delivery may be for the customer’s account where permitted by law and disclosed before the charge is imposed.'] },
      { heading: 'Damaged, missing or incorrect delivery', paragraphs: ['If a parcel appears damaged, incomplete or incorrect, notify MBALEE ROYAL as soon as reasonably possible and keep the packaging, order confirmation and photographs where available. Prompt notice helps us investigate with the courier, but it does not remove any statutory consumer rights.'] },
      { heading: 'Unavailable goods', paragraphs: ['If we cannot perform an order because the goods are unavailable, we will notify the customer and process the legally required refund.'] }
    ]
  },
  {
    slug: 'returns-refunds',
    title: 'Returns, Refunds & Cancellation Policy',
    shortTitle: 'Returns & Refunds',
    intro: 'How cancellations, change-of-mind returns, incorrect goods and refunds are handled.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Your statutory rights come first', paragraphs: ['Nothing in this policy removes or reduces rights that a South African consumer has under applicable law, including the Electronic Communications and Transactions Act 25 of 2002 (ECTA) and the Consumer Protection Act 68 of 2008 (CPA).'] },
      { heading: 'Online cooling-off period', paragraphs: ['Where ECTA section 44 applies, a consumer may cancel an eligible online transaction for goods without reason and without penalty within seven days after receiving the goods. The direct cost of returning the goods may be charged to the consumer. Certain transactions are excluded from this statutory cooling-off right under ECTA.', 'Where payment was already made and the statutory cooling-off right applies, the refund must be made within the period required by law.'] },
      { heading: 'Defective or unsafe goods', paragraphs: ['Defective, unsafe or poor-quality goods are handled under the CPA and our Warranty & Defective Goods Policy. A change-of-mind return is different from a defect claim and does not reduce the customer’s rights for defective goods.'] },
      { heading: 'Incorrect goods or delivery error', paragraphs: ['If we deliver a product that is materially different from what was ordered, contact us promptly. We will assess the order and arrange the appropriate remedy in line with applicable law.'] },
      { heading: 'How to request a return', bullets: ['Have your order number and contact details ready.', 'Tell us which item you want to return and the reason.', 'For a defect or delivery issue, include photos or video where reasonably available.', `Before sending any return: ${legalPlaceholders.returnsAddress}. Do not send a device without return authorisation.`, 'Do not send a device to an unconfirmed address.'] },
      { heading: 'Refund method and timing', paragraphs: ['Approved refunds are normally returned to the original payment method unless another lawful arrangement is agreed. Bank, card network and payment-provider processing times may apply after MBALEE ROYAL releases the refund.'] },
      { heading: 'Order cancellation before dispatch', paragraphs: ['If you need to cancel or change an order, contact us immediately. We will try to assist before fulfilment begins. Once the order is already dispatched, the applicable return or statutory cancellation process will apply.'] }
    ]
  },
  {
    slug: 'warranty-defects',
    title: 'Warranty & Defective Goods Policy',
    shortTitle: 'Warranty & Defects',
    intro: 'Consumer-law protection for defective goods, plus any product-specific warranty stated on the listing.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Six-month implied warranty of quality', paragraphs: ['South African consumer law provides an implied warranty of quality. Within six months after delivery, if goods fail to meet the quality standards protected by the CPA, the consumer may return the goods without penalty and at the supplier’s risk and expense and choose the remedy available under section 56: repair, replacement or refund, subject to the Act.'] },
      { heading: 'If a repair fails', paragraphs: ['If goods are repaired and, within three months after that repair, the same defect is not remedied or a further qualifying defect is discovered, the CPA provides further replacement or refund rights as set out in section 56(3).'] },
      { heading: 'Manufacturer or additional warranty', paragraphs: ['A manufacturer warranty or any additional MBALEE ROYAL warranty applies only where it is expressly stated on the product listing, invoice or warranty documentation. Any additional warranty is in addition to, not a replacement for, statutory consumer rights.'] },
      { heading: 'What is not automatically a product defect', paragraphs: ['Damage caused after delivery by misuse, accidental impact, unauthorised modification, improper installation or other customer-caused damage is not automatically a manufacturing or quality defect. Each claim must be assessed on its facts and applicable law.'] },
      { heading: 'How to make a warranty or defect claim', bullets: ['Contact MBALEE ROYAL with your order number.', 'Describe the problem and when it started.', 'Provide photos/video or diagnostic information where reasonably possible.', 'Back up your personal data before handing over a device where possible.', 'Remove personal accounts, passcodes and activation locks if requested for lawful testing or return processing.'] },
      { heading: 'Personal data on devices', paragraphs: ['Customers should back up and remove personal information before a device is returned for inspection, repair or replacement. MBALEE ROYAL is not responsible for data loss caused by a lawful repair, reset or replacement process except to the extent liability cannot lawfully be excluded.'] }
    ]
  },
  {
    slug: 'pre-owned',
    title: 'Pre-Owned Device Policy',
    shortTitle: 'Pre-Owned Devices',
    intro: 'The condition, battery, accessories and expectations that matter when buying a pre-owned iPhone.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Clearly identified condition', paragraphs: ['A pre-owned product must be identified as pre-owned. The listing should disclose the known cosmetic condition, storage capacity, colour, included accessories and any known material limitation that may affect a reasonable purchasing decision.'] },
      { heading: 'Condition is product-specific', paragraphs: ['Normal cosmetic wear can vary from device to device. Product photographs may be representative unless the listing expressly says they show the exact device. Any condition grade used by MBALEE ROYAL should be read together with the written condition description.'] },
      { heading: 'Battery health', paragraphs: ['Battery health naturally changes with age and use. A minimum battery-health percentage is not promised unless the specific product listing expressly states one. Where battery-health information is available for an individual device, it should be shown or confirmed before purchase.'] },
      { heading: 'Activation lock and accounts', paragraphs: ['A pre-owned iPhone supplied for normal resale should not require the previous owner’s personal account to activate it. If a customer receives a device that cannot be activated because of a previous-owner account or undisclosed lock, contact MBALEE ROYAL promptly.'] },
      { heading: 'What is in the box', paragraphs: ['Pre-owned devices may not include original retail packaging, charger, cable, earphones or other accessories unless the product listing says they are included. The product description is the source of truth for included items.'] },
      { heading: 'Consumer rights still apply', paragraphs: ['Selling a device as pre-owned does not remove statutory consumer rights. However, the CPA recognises that where a consumer has been expressly informed that goods are offered in a specific condition and has expressly accepted that condition, the disclosed condition is relevant to the quality expectation.'] }
    ]
  },
  {
    slug: 'payments-security',
    title: 'Payments & Checkout Security Policy',
    shortTitle: 'Payments & Security',
    intro: 'How payment, pricing and checkout work on the MBALEE ROYAL storefront.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Currency', paragraphs: ['Product prices are displayed in South African rand (ZAR) when supplied by Shopify. The final order total, including delivery charges, taxes or adjustments where applicable, is shown in checkout before payment is completed.'] },
      { heading: 'Secure checkout', paragraphs: ['The MBALEE ROYAL storefront uses Shopify cart and checkout infrastructure. Available payment methods are the methods enabled on the connected Shopify store and displayed to the customer at checkout.'] },
      { heading: 'Card and payment information', paragraphs: ['The custom storefront does not need to store full payment-card details. Payment credentials are handled by the checkout/payment providers used for the transaction, subject to their security standards and privacy terms.'] },
      { heading: 'Payment verification and fraud prevention', paragraphs: ['Orders may be subject to reasonable payment, identity, delivery or fraud checks. We may pause or cancel an order where required to prevent suspected fraud, unlawful activity or unauthorised payment, subject to applicable law.'] },
      { heading: 'Pricing errors', paragraphs: ['We take reasonable care with pricing, but a clear and genuine pricing error may be corrected in accordance with applicable law. If an affected order cannot lawfully or reasonably be fulfilled at the erroneous amount, the customer will be notified and any payment that must be returned will be refunded.'] }
    ]
  },
  {
    slug: 'privacy',
    title: 'Privacy & POPIA Notice',
    shortTitle: 'Privacy & POPIA',
    intro: 'How MBALEE ROYAL collects, uses, shares and protects personal information.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Responsible party', paragraphs: [`MBALEE ROYAL is the trading name used for this storefront. Responsible party: ${legalPlaceholders.legalEntity}. Privacy / Information Officer contact: ${legalPlaceholders.informationOfficer}.`] },
      { heading: 'Information we may collect', bullets: ['Name and contact details.', 'Delivery and billing information.', 'Order, product, refund and support history.', 'Account or authentication information where customer accounts are enabled.', 'Device, browser, IP address, cookie and website-usage information.', 'Marketing preferences and consent records.', 'Payment status and transaction references. Full payment-card credentials are handled by the relevant checkout/payment provider rather than stored by this custom storefront.'] },
      { heading: 'Why we process information', bullets: ['To process and fulfil orders and provide customer support.', 'To manage delivery, returns, warranties and fraud prevention.', 'To comply with tax, accounting, consumer-protection and other legal obligations.', 'To operate, secure, troubleshoot and improve the website.', 'To send marketing where permitted and to honour opt-outs.', 'To establish, exercise or defend legal rights where necessary.'] },
      { heading: 'Who information may be shared with', paragraphs: ['Personal information may be shared with operators and service providers where reasonably necessary, including Shopify, payment providers, Vercel/hosting infrastructure, couriers, customer-support providers, professional advisers, analytics or marketing providers if enabled, and authorities where disclosure is legally required. Operators are expected to process information subject to appropriate confidentiality and security safeguards.'] },
      { heading: 'Cross-border processing', paragraphs: ['Some technology and commerce service providers may process information outside South Africa. Where personal information is transferred internationally, MBALEE ROYAL must take appropriate steps to comply with POPIA’s requirements for cross-border processing.'] },
      { heading: 'Retention', paragraphs: ['Personal information is kept only for as long as reasonably necessary for the purpose for which it was collected, to meet legal/accounting obligations, resolve disputes, prevent fraud or enforce agreements. Information that is no longer required should be securely deleted, destroyed or de-identified where appropriate.'] },
      { heading: 'Security', paragraphs: ['We use reasonable technical and organisational safeguards appropriate to the information and risks involved. No online system is completely risk-free, but security controls should be reviewed and updated as threats and technology change.'] },
      { heading: 'Your POPIA rights', bullets: ['Ask whether we hold personal information about you.', 'Request access to personal information, subject to applicable law.', 'Request correction or deletion where legally permitted.', 'Object to certain processing on lawful grounds.', 'Withdraw consent where processing depends on consent.', 'Opt out of direct marketing.', 'Complain to the Information Regulator if you believe your information has been handled unlawfully.'] },
      { heading: 'Direct marketing', paragraphs: ['Electronic marketing must be sent in accordance with POPIA and other applicable law. Every marketing message should provide a practical way to opt out, and an opt-out request should be honoured.'] },
      { heading: 'Children', paragraphs: ['The store is not intended to knowingly collect children’s personal information for independent purchasing. A person under 18 should use the store with the involvement of a parent or legal guardian where required.'] },
      { heading: 'Contact for privacy requests', paragraphs: [`Privacy and information requests should be directed to: ${legalPlaceholders.informationOfficer}. General contact: ${legalPlaceholders.email}.`] }
    ]
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    shortTitle: 'Cookies',
    intro: 'How cookies and similar technologies support the MBALEE ROYAL website.',
    effective: '24 August 2026',
    sections: [
      { heading: 'What cookies are', paragraphs: ['Cookies are small files or browser-storage records used to remember information about a visit, keep a shopping experience working, improve security or measure website usage.'] },
      { heading: 'Essential technologies', paragraphs: ['Essential cookies or storage may be required for functions such as the shopping bag, security, routing, consent preferences and checkout. These are used because the site cannot provide the requested service reliably without them.'] },
      { heading: 'Analytics and marketing', paragraphs: ['Analytics, advertising or social-media tracking should only be enabled where configured and used in accordance with applicable privacy and marketing requirements. If non-essential tracking is introduced, the consent controls on the website must be updated so user choices are respected.'] },
      { heading: 'Your choices', paragraphs: ['You can use the site’s cookie preference controls where available and may also manage cookies in your browser. Blocking essential technologies may cause cart, login or checkout features to stop working correctly.'] }
    ]
  },
  {
    slug: 'terms',
    title: 'Website & Terms of Sale',
    shortTitle: 'Terms of Sale',
    intro: 'The terms that govern use of the MBALEE ROYAL website and purchases made through it.',
    effective: '24 August 2026',
    sections: [
      { heading: 'About these terms', paragraphs: ['These terms apply to use of the MBALEE ROYAL website and, together with the applicable product page, checkout information and policies, form part of the terms governing online purchases. Statutory consumer rights are not excluded.'] },
      { heading: 'Who may place an order', paragraphs: ['A person placing an order must have legal capacity to enter into the transaction or act with the required consent of a parent, guardian or authorised representative.'] },
      { heading: 'Product information', paragraphs: ['We aim to provide accurate descriptions, prices, condition information and images. Screen colours and representative photographs can differ slightly from the physical product. For pre-owned devices, the written condition disclosure and item-specific information are particularly important.'] },
      { heading: 'Orders and availability', paragraphs: ['Submitting an order does not guarantee stock until the transaction is accepted and confirmed. Products may become unavailable before fulfilment because inventory can change quickly. If an order cannot be supplied, the customer will be notified and the appropriate refund processed.'] },
      { heading: 'Delivery', paragraphs: ['Delivery is governed by the Shipping & Delivery Policy. Our standard estimate is 3–5 working days after order confirmation.'] },
      { heading: 'Returns and warranties', paragraphs: ['Returns, refunds, cooling-off rights, defective goods and warranty claims are governed by our Returns & Refunds Policy, Warranty & Defective Goods Policy and applicable South African law.'] },
      { heading: 'Acceptable website use', bullets: ['Do not attempt to disrupt, probe, reverse engineer or unlawfully access the website, Shopify checkout or connected systems.', 'Do not use the store for fraudulent orders, stolen payment methods, abusive conduct or unlawful activity.', 'Do not copy or exploit brand content, photography or website content except as permitted by law or written permission.'] },
      { heading: 'Third-party services', paragraphs: ['The website relies on third-party services such as Shopify, payment providers, hosting and couriers. Their systems and terms may apply to the parts of the service they provide.'] },
      { heading: 'Liability', paragraphs: ['Nothing in these terms excludes liability or consumer rights that cannot lawfully be excluded. To the extent permitted by law, MBALEE ROYAL is not responsible for indirect loss caused solely by events outside its reasonable control or by misuse of the website or products.'] },
      { heading: 'Governing law', paragraphs: ['These terms are governed by the laws of the Republic of South Africa, subject to any mandatory consumer protections that apply.'] }
    ]
  },
  {
    slug: 'promotions',
    title: 'Promotions & Discount Code Policy',
    shortTitle: 'Promotions',
    intro: 'Simple rules for campaign offers, influencer codes and promotional pricing.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Promotion-specific terms', paragraphs: ['Each promotion may have its own dates, eligible products, minimum spend, stock limits or code. Those specific terms apply together with this general policy.'] },
      { heading: 'Codes and eligibility', paragraphs: ['Unless expressly stated otherwise, discount codes are intended for the recipient or campaign audience, are not redeemable for cash and may be limited to one code per order. A code may be withdrawn or corrected where it is used fraudulently or contrary to its stated terms, subject to applicable law.'] },
      { heading: 'Stock', paragraphs: ['Promotional products remain subject to availability. Adding an item to a cart does not reserve stock unless Shopify expressly confirms reservation.'] },
      { heading: 'Returns from discounted orders', paragraphs: ['Where a lawful return is approved, the refund is based on the amount actually paid for the returned item after applicable discounts, unless the law requires otherwise.'] },
      { heading: 'Creator and affiliate transparency', paragraphs: ['Where MBALEE ROYAL publishes paid, sponsored or affiliate content for a third-party product or service, that commercial relationship should be disclosed clearly and in a way that is reasonably noticeable to the audience.'] }
    ]
  },
  {
    slug: 'complaints',
    title: 'Complaints & Customer Resolution Policy',
    shortTitle: 'Complaints',
    intro: 'A clear route for delivery, product, payment, privacy and service complaints.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Contact us first', paragraphs: [`Send the order number, customer name, contact details and a clear description of the problem to ${legalPlaceholders.email} or ${legalPlaceholders.phone}. Supporting photos or documents can help us resolve delivery and product issues faster.`] },
      { heading: 'What happens next', paragraphs: ['We will acknowledge and assess the complaint within a reasonable period, request any information needed to investigate, and communicate the proposed resolution or next step.'] },
      { heading: 'Escalation', paragraphs: ['If a complaint cannot be resolved directly, the customer may use any complaint, ombud, regulator or dispute-resolution mechanism available under South African law. Nothing in this policy prevents a consumer from exercising statutory rights.'] },
      { heading: 'Privacy complaints', paragraphs: ['Privacy complaints may also be taken to the Information Regulator of South Africa after or in addition to contacting MBALEE ROYAL, as permitted by POPIA.'] }
    ]
  },
  {
    slug: 'legal-information',
    title: 'Legal Information & E-Commerce Disclosures',
    shortTitle: 'Legal Information',
    intro: 'Supplier information that should be publicly available for an online South African store.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Trading and legal identity', bullets: [`Trading name: MBALEE ROYAL`, `Legal entity / proprietor: ${legalPlaceholders.legalEntity}`, `Registration number (if applicable): ${legalPlaceholders.registrationNumber}`, `Director / office bearer(s): ${legalPlaceholders.officeBearers}`, 'Place of registration: South Africa'] },
      { heading: 'Contact details', bullets: [`Physical business address: ${legalPlaceholders.physicalAddress}`, `Telephone / WhatsApp: ${legalPlaceholders.phone}`, `Email: ${legalPlaceholders.email}`, `Website: ${legalPlaceholders.websiteAddress}`, 'Storefront platform: Custom MBALEE ROYAL storefront connected to Shopify'] },
      { heading: 'Address for legal service', paragraphs: [legalPlaceholders.legalServiceAddress] },
      { heading: 'Transaction information', paragraphs: ['Product characteristics, prices, available variants and stock are shown on the relevant product page and checkout. Payment method availability is shown at Shopify checkout. Standard delivery is estimated at 3–5 working days. Return, refund, warranty, privacy and security terms are available in the linked policy pages.'] },
      { heading: 'Self-regulatory or accreditation bodies', paragraphs: ['No membership or accreditation should be claimed here unless MBALEE ROYAL actually belongs to the relevant body. Add details if applicable.'] },
      { heading: 'Business status', paragraphs: ['Royal Beauty is currently an unregistered business trading as MBALEE ROYAL. No company-registration or VAT-registration claim is made on this page. If the business status changes, these disclosures should be updated promptly.'] }
    ]
  },
  {
    slug: 'paia',
    title: 'PAIA & Information Requests',
    shortTitle: 'PAIA',
    intro: 'Information-access and privacy-request guidance for MBALEE ROYAL.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Access to information', paragraphs: ['The Promotion of Access to Information Act 2 of 2000 (PAIA) provides a process for requesting access to certain records held by public and private bodies where the statutory requirements are met.'] },
      { heading: 'Information Officer', paragraphs: [`MBALEE ROYAL’s privacy / Information Officer contact is: ${legalPlaceholders.informationOfficer}.`] },
      { heading: 'How to request records or personal information', bullets: ['Identify the record or personal information requested as clearly as possible.', 'Provide sufficient contact details and proof of identity where reasonably required.', 'Explain the right you seek to exercise or protect where PAIA requires this.', 'Use the prescribed form/process where applicable.'] },
      { heading: 'Formal PAIA manual', paragraphs: ['A formal PAIA manual is a separate compliance document that should be completed using the business’s real legal entity, Information Officer, categories of records and request procedures. This webpage is not a substitute for that formal manual.'] }
    ]
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    shortTitle: 'Accessibility',
    intro: 'Our aim is a storefront that works well across mobile devices, assistive technology and keyboard navigation.',
    effective: '24 August 2026',
    sections: [
      { heading: 'Our approach', paragraphs: ['MBALEE ROYAL aims to provide a clear, mobile-friendly shopping experience with readable contrast, semantic page structure, descriptive image text where appropriate, keyboard-accessible controls and responsive layouts.'] },
      { heading: 'Known limitations and feedback', paragraphs: [`If you experience an accessibility barrier, contact ${legalPlaceholders.email} and tell us the page, device and issue so we can investigate and improve it.`] }
    ]
  }
];

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug);
}
