import { Metadata } from 'next';
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
  title: 'VerveMind Kits — AI Receptionist Resources para SMBs',
  description: 'Practical, actionable kits to help small businesses capture more leads and stop losing revenue from missed calls.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark`}>
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
          
          /* Custom scrollbar for glassmorphic feel */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .glass-panel {
            background: rgba(20, 20, 22, 0.4);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
          }

          .glow-cyan {
            box-shadow: 0 0 20px rgba(0, 245, 212, 0.3);
          }

          .terminal-text {
            font-family: 'Space Grotesk', monospace;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
        `}</style>
      </head>
      <body>
        {/* Luminescent Base Layer */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(0, 245, 212, 0.15) 0%, var(--vm-base) 100%)' }} />
        
        {/* Noise Film Grain Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 9999,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }} />

        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
