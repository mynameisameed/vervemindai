import { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

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
        `}</style>
      </head>
      <body>
        {/* Luminescent Base Layer */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, var(--vm-base) 100%)' }} />
        
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
