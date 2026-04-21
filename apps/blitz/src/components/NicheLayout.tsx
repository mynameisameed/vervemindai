'use client';

import React from 'react';
import Link from 'next/link';

interface NicheLayoutProps {
  nicheLabel: string;
  accentColor: string;
  accentTextColor: string;
  accentGradient: string;
  children: React.ReactNode;
}

export default function NicheLayout({
  nicheLabel,
  accentColor,
  accentTextColor,
  accentGradient,
  children,
}: NicheLayoutProps) {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        background: 'rgba(19,19,19,0.9)',
        borderBottom: '1px solid var(--border)',
        padding: '0 32px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <Link href="https://vervemindai.com" style={{
          color: 'var(--text-faint)',
          fontSize: '12px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          ← vervemindai.com
        </Link>

        <div style={{
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontWeight: 900,
          fontSize: '16px',
          letterSpacing: '-0.03em',
          color: 'var(--text)',
        }}>
          VerveMind <span style={{ color: accentColor }}>{nicheLabel}</span>
        </div>

        <a
          href="https://calendly.com/vervemindai/lead"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            padding: '7px 16px',
            borderRadius: 'var(--r)',
            textDecoration: 'none',
            background: accentGradient,
            color: accentTextColor,
          }}
        >
          Book Free Audit
        </a>
      </nav>

      {children}
    </div>
  );
}
