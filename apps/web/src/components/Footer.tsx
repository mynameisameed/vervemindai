// apps/web/src/components/Footer.tsx
import Link from 'next/link';

const cols = [
  {
    heading: 'Solutions',
    links: [
      { href: 'https://medspa.vervemindai.com', label: 'MedSpa AI' },
      { href: 'https://dental.vervemindai.com',  label: 'Dental AI' },
      { href: 'https://hvac.vervemindai.com',    label: 'HVAC AI' },
      { href: 'https://roofing.vervemindai.com', label: 'Roofing AI' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about',   label: 'About' },
      { href: '/blog',    label: 'Blog' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms',   label: 'Terms of Service' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: '60px 32px 32px',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-manrope), Manrope, sans-serif',
              fontWeight: 900,
              fontSize: 17,
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}>
              Verve<span style={{ color: 'var(--primary)' }}>Mind</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
              Autonomous AI operating system for local service businesses. Answer every call, book every appointment, recover every lead.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(({ href, label }) => (
                  <Link key={href} href={href} style={{
                    fontSize: 13,
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                  }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} VerveMind AI. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600 }}>
            Built with AI. Powered by results.
          </span>
        </div>
      </div>
    </footer>
  );
}
