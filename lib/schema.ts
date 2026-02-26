// Schema.org / JSON-LD structured data for SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': 'https://fireuphibachi.com/#business',
  name: 'Fire Up Hibachi',
  alternateName: ['Fire Up Hibachi Catering', 'FireUp Hibachi'],
  image: [
    'https://fireuphibachi.com/hero-bg-hibachi.jpg',
  ],
  description: 'Premium mobile hibachi and teppanyaki catering serving San Diego, Riverside and the Inland Empire. Chef Hernan Loredo brings 14 years of professional teppanyaki experience directly to your event.',
  url: 'https://fireuphibachi.com',
  telephone: '+19513766014',
  priceRange: '$$$',
  servesCuisine: ['Japanese', 'Teppanyaki', 'Hibachi'],
  founder: {
    '@type': 'Person',
    name: 'Hernan Loredo',
    jobTitle: 'Executive Chef & Owner',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Riverside',
    addressRegion: 'CA',
    postalCode: '92501',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19513766014',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish'],
    contactOption: 'TollFree',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '22:00',
  },
  sameAs: [
    'https://www.instagram.com/fireuphibachi',
    'https://www.facebook.com/fireuphibachi',
    'https://www.yelp.com/biz/fire-up-hibachi',
  ],
  areaServed: [
    { '@type': 'State', name: 'California' },
    // Inland Empire
    { '@type': 'City', name: 'Riverside' },
    { '@type': 'City', name: 'Corona' },
    { '@type': 'City', name: 'Moreno Valley' },
    { '@type': 'City', name: 'Temecula' },
    { '@type': 'City', name: 'San Bernardino' },
    { '@type': 'City', name: 'Rancho Cucamonga' },
    { '@type': 'City', name: 'Ontario' },
    // San Diego County
    { '@type': 'City', name: 'San Diego' },
    { '@type': 'City', name: 'La Jolla' },
    { '@type': 'City', name: 'Chula Vista' },
    { '@type': 'City', name: 'Coronado' },
    { '@type': 'City', name: 'Encinitas' },
    { '@type': 'City', name: 'Carlsbad' },
    { '@type': 'City', name: 'Oceanside' },
    { '@type': 'City', name: 'Escondido' },
    { '@type': 'City', name: 'Del Mar' },
    { '@type': 'City', name: 'Poway' },
    { '@type': 'City', name: 'El Cajon' },
    { '@type': 'City', name: 'National City' },
    { '@type': 'City', name: 'Rancho Bernardo' },
    { '@type': 'City', name: 'Solana Beach' },
    { '@type': 'City', name: 'Santee' },
    { '@type': 'City', name: 'North Park' },
    { '@type': 'City', name: 'Point Loma' },
    { '@type': 'City', name: 'Mission Valley' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    ratingCount: '47',
    reviewCount: '47',
  },
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': 'https://fireuphibachi.com/#services',
  name: 'Fire Up Hibachi',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hibachi & Teppanyaki Catering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Hibachi Catering',
          description: 'Live hibachi chef at your home, backyard, or venue. Full setup with fresh ingredients, professional cooking show, and authentic Japanese teppanyaki experience.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teppanyaki Chef Entertainment',
          description: '14 years of hibachi expertise with authentic Japanese teppanyaki techniques, knife skills, and live chef performance for guests of all ages.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Hibachi Catering',
          description: 'Premium hibachi wedding catering — a unique live cooking experience for receptions and special occasions across San Diego and the Inland Empire.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Hibachi Events',
          description: 'Team dinners, client appreciation events and corporate parties with live hibachi chef entertainment serving San Diego and Riverside.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hibachi Birthday Party',
          description: 'Unforgettable birthday party hibachi catering with interactive chef show for all ages. Setup to cleanup handled by Fire Up Hibachi.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Quinceañera Hibachi Catering',
          description: 'Traditional and modern quinceañera celebrations elevated with a live hibachi chef experience across Southern California.',
        },
      },
    ],
  },
};

export const breadcrumbSchema = (path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fireuphibachi.com',
    },
    ...(path === '/about' ? [{
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://fireuphibachi.com/about',
    }] : []),
    ...(path === '/contact' ? [{
      '@type': 'ListItem',
      position: 2,
      name: 'Schedule',
      item: 'https://fireuphibachi.com/contact',
    }] : []),
  ],
});

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fire Up Hibachi serves all of San Diego County (La Jolla, Chula Vista, Coronado, Encinitas, Carlsbad, Oceanside, Del Mar, and more) as well as Riverside, Corona, Temecula, Moreno Valley, Rancho Cucamonga, and the entire Inland Empire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer hibachi catering in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Fire Up Hibachi serves all of San Diego County. We bring the full teppanyaki experience to your home, backyard, or venue anywhere in San Diego — including La Jolla, Chula Vista, Coronado, Encinitas, Carlsbad, Oceanside, Del Mar, and all surrounding neighborhoods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much experience does the chef have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chef Hernan Loredo has 14 years of professional teppanyaki and hibachi cooking experience, bringing authentic Japanese cooking techniques and live entertainment to every private event.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of events do you cater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cater birthdays, weddings, quincea\u00f1eras, corporate events, graduation parties, backyard cookouts, holiday parties, and any private gathering. We accommodate groups of all sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 2\u20134 weeks in advance to secure your preferred date, especially for weekends. Fill out our quick form at fireuphibachi.com/get-started and we will respond within 24 hours with a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a hibachi catering package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Fire Up Hibachi event includes Chef Hernan, all cooking equipment, a hibachi grill, fresh ingredients, full setup and cleanup, and the complete live teppanyaki performance. You just provide the space and the guests.',
      },
    },
  ],
};

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://fireuphibachi.com/#org',
  name: 'Fire Up Hibachi',
  url: 'https://fireuphibachi.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://fireuphibachi.com/#website',
  url: 'https://fireuphibachi.com',
  name: 'Fire Up Hibachi',
  description: 'Premium mobile hibachi and teppanyaki catering serving San Diego, Riverside and the Inland Empire.',
  publisher: {
    '@id': 'https://fireuphibachi.com/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://fireuphibachi.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};
