// apps/web/src/components/Nav.tsx
"use client";
import Link from 'next/link';

const links = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing',      label: 'Pricing' },
  { href: '/about',         label: 'About' },
  { href: '/blog',          label: 'Blog' },
];

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 58,
      background: 'rgba(19,19,19,0.85)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontWeight: 900,
          fontSize: 17,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          textDecoration: 'none',
        }}>
          Verve<span style={{ color: 'var(--primary)' }}>Mind</span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/vervemindai/lead"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 800,
              padding: '8px 18px',
              borderRadius: 'var(--r)',
              background: 'linear-gradient(135deg, #00f5d4, #00c2a8)',
              color: '#001a14',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
