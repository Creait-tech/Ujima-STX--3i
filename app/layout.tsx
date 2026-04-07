import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ujima STX | Regenerative Community Development',
  description: 'Ujima STX designs and develops regenerative, resilient, and community-forward housing projects across St. Croix, USVI and Philadelphia. 564+ planned units rooted in equity, resilience, and innovation.',
  keywords: ['community development', 'affordable housing', 'St. Croix', 'USVI', 'Philadelphia', 'regenerative design', 'workforce housing', 'senior living'],
  authors: [{ name: 'Ujima STX' }],
  openGraph: {
    title: 'Ujima STX | Rooted in Place. Focused on Future.',
    description: 'Regenerative, resilient, and community-forward housing projects that serve people first. 564+ planned units across St. Croix and Philadelphia.',
    url: 'https://ujimastx.co',
    siteName: 'Ujima STX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ujima STX | Regenerative Community Development',
    description: 'Designing resilient, community-forward housing projects that serve people first.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://ujimastx.co'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
