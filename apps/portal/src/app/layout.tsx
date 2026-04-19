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
            /* VerveMind Brand — Electric Violet */
            --vm-primary: #8B5CF6;
            --vm-primary-light: #A78BFA;
            --vm-primary-dim: #7C3AED;
            --vm-primary-glow: rgba(139, 92, 246, 0.25);
            --vm-primary-surface: rgba(139, 92, 246, 0.08);
            
            /* Warm accent for CTAs & revenue */
            --vm-accent: #F59E0B;
            --vm-accent-surface: rgba(245, 158, 11, 0.12);
            
            /* Success / positive states */
            --vm-positive: #34D399;
            --vm-positive-surface: rgba(52, 211, 153, 0.12);
            
            /* Obsidian surfaces */
            --vm-base: #0C0C0E;
            --vm-surface-low: #111114;
            --vm-surface: #18181B;
            --vm-surface-high: #1F1F23;
            --vm-surface-highest: #27272C;
            
            /* Text hierarchy */
            --vm-text: #F4F4F5;
            --vm-text-secondary: #A1A1AA;
            --vm-text-muted: #71717A;
            
            /* Borders via tonal shift (no hard lines) */
            --vm-border: rgba(244, 244, 245, 0.06);
            --vm-border-active: rgba(139, 92, 246, 0.3);
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
