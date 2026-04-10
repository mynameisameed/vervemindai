import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#09090B', color: '#E5E2E1' }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
