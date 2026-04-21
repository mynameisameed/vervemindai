import type { Metadata } from "next";
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VerveMind AI Client Portal",
  description: "Campaign overview, call logs, and ROI tracking for VerveMind AI clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <style>{`
          * { box-sizing: border-box; }
          :root {
            /* Neural Luminary Brand — Electric Cyan */
            --vm-primary: #00F5D4;
            --vm-primary-light: #26fedc;
            --vm-primary-dim: #00dfc1;
            --vm-primary-glow: rgba(0, 245, 212, 0.25);
            --vm-primary-surface: rgba(0, 245, 212, 0.08);
            
            /* Secondary accent — Electric Purple */
            --vm-secondary: #d2bbff;
            --vm-secondary-surface: rgba(210, 187, 255, 0.12);
            
            /* Warm accent for CTAs & revenue */
            --vm-accent: #F59E0B;
            --vm-accent-surface: rgba(245, 158, 11, 0.12);
            
            /* Success / positive states */
            --vm-positive: #34D399;
            --vm-positive-surface: rgba(52, 211, 153, 0.12);
            
            /* Obsidian surfaces (Stitch Base) */
            --vm-base: #131315;
            --vm-surface-low: #0e0e10;
            --vm-surface: #131315;
            --vm-surface-high: #201f22;
            --vm-surface-highest: #353437;
            
            /* Text hierarchy */
            --vm-text: #e5e1e4;
            --vm-text-secondary: #b9cac4;
            --vm-text-muted: #83948f;
            
            /* Borders via tonal shift (Ghost Borders) */
            --vm-border: rgba(131, 148, 143, 0.15);
            --vm-border-active: rgba(0, 245, 212, 0.3);
          }
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-inter), 'Inter', system-ui, -apple-system, sans-serif;
            background: var(--vm-base);
            color: var(--vm-text);
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
