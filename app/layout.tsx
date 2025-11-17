import type { Metadata } from 'next'
import { organizationSchema, servicesSchema, reviewSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haru Teppanyaki Catering | Fire Up Hibachi | Southern California',
  description: '14 years of cooking experience! Premium hibachi catering serving all Southern California. Best quality teppanyaki chef entertainment for your events. Book Chef Hernan today!',
  keywords: 'hibachi catering, teppanyaki catering, Southern California, private chef, hibachi chef, event catering, party catering, Los Angeles hibachi, San Diego hibachi, Orange County catering',
  metadataBase: new URL('https://fireuphibachi.com'),
  openGraph: {
    type: 'website',
    url: 'https://fireuphibachi.com',
    title: 'Haru Teppanyaki Catering | Premium Hibachi Entertainment',
    description: '14 years cooking experience. Best quality hibachi catering serving all Southern California.',
    siteName: 'Haru Teppanyaki Catering',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haru Teppanyaki Catering | Fire Up Hibachi',
    description: 'Premium hibachi catering with 14 years of cooking experience serving Southern California',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification" />
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
