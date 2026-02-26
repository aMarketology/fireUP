import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hibachi Event Gallery | Fire Up Hibachi | Photos & Videos',
  description: 'See Fire Up Hibachi in action — real event photos, live teppanyaki chef performances, and delicious cuisine from events across San Diego, Riverside & the Inland Empire.',
  keywords: 'hibachi catering photos, teppanyaki event gallery, hibachi chef San Diego, private hibachi event pictures, live hibachi cooking videos, Fire Up Hibachi gallery',
  alternates: {
    canonical: 'https://fireuphibachi.com/gallery',
  },
  openGraph: {
    title: 'Hibachi Event Gallery | Fire Up Hibachi',
    description: 'See real hibachi events, live teppanyaki performances & Chef Hernan in action across San Diego & the Inland Empire.',
    url: 'https://fireuphibachi.com/gallery',
    type: 'website',
    images: [{ url: 'https://fireuphibachi.com/hero-bg-hibachi.jpg', width: 1200, height: 630, alt: 'Fire Up Hibachi Event Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hibachi Event Gallery | Fire Up Hibachi',
    description: 'Real event photos — live teppanyaki chef performances across San Diego & Inland Empire.',
  },
}
