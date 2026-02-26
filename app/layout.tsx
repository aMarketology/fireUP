import type { Metadata } from 'next'
import Script from 'next/script'
import { organizationSchema, servicesSchema, reviewSchema, faqSchema, websiteSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fire Up Hibachi | Premium Hibachi Catering | Riverside, San Diego & Inland Empire',
  description: '14 years of cooking experience! Premium hibachi catering serving San Diego, Riverside, Corona, Temecula & the Inland Empire. Best quality teppanyaki chef entertainment for your events. Book Chef Hernan today!',
  keywords: 'hibachi catering, teppanyaki catering, hibachi catering San Diego, Riverside hibachi, Inland Empire catering, private chef, hibachi chef, event catering, party catering, San Diego hibachi catering, Corona hibachi, Temecula catering',
  metadataBase: new URL('https://fireuphibachi.com'),
  openGraph: {
    type: 'website',
    url: 'https://fireuphibachi.com',
    title: 'Fire Up Hibachi | Private Hibachi & Teppanyaki Catering',
    description: 'Premium mobile hibachi catering serving San Diego, Riverside & the Inland Empire. Chef Hernan — 14 years of teppanyaki experience. Free quote.',
    siteName: 'Fire Up Hibachi',
    locale: 'en_US',
    images: [{ url: 'https://fireuphibachi.com/hero-bg-hibachi.jpg', width: 1200, height: 630, alt: 'Fire Up Hibachi — Private Teppanyaki Chef' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire Up Hibachi | Hibachi Catering San Diego & Inland Empire',
    description: 'Mobile hibachi catering — San Diego, Riverside & the Inland Empire. Chef Hernan, 14 years teppanyaki experience. Book your event today.',
    images: ['https://fireuphibachi.com/hero-bg-hibachi.jpg'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-381MHB6YGM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-381MHB6YGM');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
