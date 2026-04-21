import './globals.css';

export const metadata = {
  title: 'Reactivation Blitz | VerveMind AI',
  description: 'Win back lost revenue with autonomous AI reactivation campaigns.',
}

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-vm-base min-h-screen selection:bg-vm-primary selection:text-black">
        {children}
      </body>
    </html>
  )
}
