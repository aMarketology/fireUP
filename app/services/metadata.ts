import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hibachi Catering Services | Private Teppanyaki Chef | Fire Up Hibachi',
  description: 'Live hibachi chef at your venue — birthdays, weddings, corporate events & backyard parties. Fire Up Hibachi serves San Diego, Riverside & the Inland Empire. Free quote.',
  keywords: 'hibachi catering services, private hibachi chef, teppanyaki catering, mobile hibachi, corporate hibachi catering, wedding hibachi catering, backyard hibachi, hibachi birthday party, San Diego hibachi, Riverside hibachi, Inland Empire catering',
  alternates: {
    canonical: 'https://fireuphibachi.com/services',
  },
  openGraph: {
    title: 'Hibachi Catering Services | Private Teppanyaki Chef | Fire Up Hibachi',
    description: 'Live hibachi chef at your venue — birthdays, weddings, corporate events & more. Serving San Diego, Riverside & Inland Empire.',
    url: 'https://fireuphibachi.com/services',
    type: 'website',
    images: [{ url: 'https://fireuphibachi.com/hero-bg-hibachi.jpg', width: 1200, height: 630, alt: 'Fire Up Hibachi Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hibachi Catering Services | Fire Up Hibachi',
    description: 'Live hibachi chef for birthdays, weddings, corporate events & more. San Diego, Riverside & IE.',
  },
}
