'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const key = 'mbalee-cookie-choice';

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(!window.localStorage.getItem(key)); }, []);
  if (!show) return null;

  const choose = (value: 'essential' | 'accepted') => {
    window.localStorage.setItem(key, value);
    setShow(false);
  };

  return <aside className="cookie-banner" aria-label="Cookie preferences">
    <div><small>PRIVACY</small><strong>Your browsing, your choice.</strong><p>We use essential technology for the store to work. Non-essential analytics or marketing should only be enabled in line with your choices when those tools are configured.</p><Link href="/policies/cookies">Cookie policy ↗</Link></div>
    <div className="cookie-actions"><button onClick={() => choose('essential')}>Essential only</button><button className="cookie-accept" onClick={() => choose('accepted')}>Accept</button></div>
  </aside>;
}
