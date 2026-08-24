import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPolicy, policies } from '@/lib/policies';

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return <main className="legal-page">
    <header className="legal-hero">
      <Link href="/policies" className="back-link">← All policies</Link>
      <span className="eyebrow dark">MBALEE ROYAL · CUSTOMER CARE</span>
      <h1>{policy.title}</h1>
      <p>{policy.intro}</p>
      <div className="legal-effective">Effective {policy.effective}</div>
    </header>

    <div className="legal-layout">
      <aside className="legal-aside">
        <span>On this page</span>
        {policy.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}
      </aside>
      <article className="legal-content">
        {policy.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
          <small>{String(index + 1).padStart(2, '0')}</small>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>)}
      </article>
    </div>

    <section className="legal-help-cta">
      <span className="eyebrow">NEED MORE CLARITY?</span>
      <h2>Know before you buy.</h2>
      <p>Read the FAQ or contact customer care for practical help with delivery, pre-owned devices, returns, payment and warranty.</p>
      <div className="legal-help-actions"><Link href="/faq">Read customer FAQ ↗</Link><Link href="/contact">Contact customer care ↗</Link></div>
    </section>
  </main>;
}
