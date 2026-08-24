import Link from 'next/link';
import { policies } from '@/lib/policies';

const featured = new Set(['shipping-delivery','returns-refunds','warranty-defects','pre-owned','privacy','terms']);

export default function PoliciesPage() {
  return <main className="policies-page">
    <section className="policies-hero">
      <span className="eyebrow dark">MBALEE ROYAL · CUSTOMER CARE</span>
      <h1>Clear terms.<br/><em>No fine-print energy.</em></h1>
      <p>Everything customers should be able to find before and after buying — delivery, returns, warranty, pre-owned standards, privacy and legal information.</p>
    </section>

    <section className="policy-feature-grid">
      {policies.filter((p) => featured.has(p.slug)).map((policy, index) => <Link href={`/policies/${policy.slug}`} key={policy.slug}>
        <small>{String(index + 1).padStart(2, '0')}</small>
        <h2>{policy.shortTitle}</h2>
        <p>{policy.intro}</p>
        <span>Read policy ↗</span>
      </Link>)}
    </section>

    <section className="policy-all">
      <div><span className="eyebrow dark">ALL POLICIES</span><h2>The details.</h2></div>
      <div className="policy-list">
        {policies.map((policy, index) => <Link href={`/policies/${policy.slug}`} key={policy.slug}><span>{String(index + 1).padStart(2, '0')}</span><strong>{policy.title}</strong><i>↗</i></Link>)}
      </div>
    </section>
  </main>;
}
