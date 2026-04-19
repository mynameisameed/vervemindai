import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: 'VerveMind AI | Autonomous Operating System for SMBs',
  description: 'VerveMind AI deploys specialized digital workforces that answer calls, book appointments, and reactivate leads 24/7. Built for MedSpa, Dental, and Home Services.',
  keywords: ['AI Voice Agents', 'MedSpa Automation', 'Dental AI Receptionist', 'Reactivation Engine', 'SMB Automation', 'VerveMind', 'AI Answering Service', 'Patient Reactivation'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'VerveMind AI | Fully Autonomous Business Engine',
    description: 'Deploy hyper-specialized AI workforces that answer calls, book appointments, and reactivate dormant leads with 0ms human latency.',
    url: 'https://vervemindai.com',
    siteName: 'VerveMind AI',
    images: [
      {
        url: 'https://vervemindai.com/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'VerveMind AI — Run Your Business On Autopilot'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerveMind AI | Autonomous Business Engine',
    description: 'Deploy AI workforces that answer calls, book appointments, and reactivate leads 24/7.',
    images: ['https://vervemindai.com/og_image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vervemindai.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VerveMind AI',
  url: 'https://vervemindai.com',
  logo: 'https://vervemindai.com/favicon.png',
  description: 'VerveMind AI deploys specialized digital workforces that answer calls, book appointments, and reactivate leads 24/7.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'team@vervemindai.com',
    contactType: 'sales',
    telephone: '+1-800-000-0000',
  },
  sameAs: [
    'https://www.linkedin.com/company/vervemind-ai'
  ],
  foundingDate: '2024',
  areaServed: 'US',
  serviceType: ['AI Voice Agents', 'Patient Reactivation', 'AI Receptionist', 'Lead Automation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'VerveMind AI',
          url: 'https://vervemindai.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: 'https://vervemindai.com/blog?q={search_term_string}' },
            'query-input': 'required name=search_term_string'
          }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Receptionist & Reactivation OS',
          provider: { '@type': 'Organization', name: 'VerveMind AI', url: 'https://vervemindai.com' },
          serviceType: 'AI Voice Automation',
          areaServed: 'US',
          description: 'Autonomous AI voice agents that answer calls 24/7, book appointments, and reactivate dormant patient lists for MedSpas, Dental, and Home Services businesses.',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '297',
            priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'USD', price: '297', unitText: 'MONTH' },
            url: 'https://vervemindai.com/pricing'
          }
        }) }} />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        background: '#131313', 
        color: '#E5E2E1', 
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        overflowX: 'hidden'
      }}>
        {/* Noise Overlay */}
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
        
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
