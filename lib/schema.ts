// Schema.org / JSON-LD structured data for SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  '@id': 'https://fireuphibachi.com',
  name: 'Haru Teppanyaki Catering',
  alternateName: 'Fire Up Hibachi',
  image: 'https://fireuphibachi.com/hero-bg-hibachi.jpg',
  description: '14 years of cooking experience. Premium hibachi and teppanyaki catering serving all Southern California. Best quality only.',
  url: 'https://fireuphibachi.com',
  telephone: '+1 858-434-7166',
  founder: {
    '@type': 'Person',
    name: 'Hernan Loredo',
    jobTitle: 'Executive Chef & Owner',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'California' },
    { '@type': 'City', name: 'Los Angeles' },
    { '@type': 'City', name: 'San Diego' },
    { '@type': 'City', name: 'Orange County' },
    { '@type': 'City', name: 'Riverside' },
    { '@type': 'City', name: 'San Bernardino' },
  ],
  servesCuisine: ['Japanese', 'Teppanyaki', 'Hibachi'],
  priceRange: '$$$',
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
  name: 'Haru Teppanyaki Catering',
  hasOfferingCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hibachi Catering',
          description: 'Live hibachi chef entertainment at your venue. Complete setup with fresh ingredients, professional cooking show, and authentic Japanese teppanyaki experience.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Events',
          description: 'Customized hibachi experiences for birthdays, corporate events, weddings, and special occasions. Accommodating all group sizes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teppanyaki Entertainment',
          description: '14 years of cooking expertise with authentic Japanese teppanyaki techniques, knife skills, and entertaining chef performance.',
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
        text: 'We serve all of Southern California including Los Angeles, San Diego, Orange County, Riverside, and San Bernardino.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much experience does the chef have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chef Hernan has 14 years of professional teppanyaki and hibachi cooking experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of events do you cater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cater all types of events including birthdays, weddings, corporate events, private parties, and special occasions of any size.',
      },
    },
  ],
};

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Haru Teppanyaki Catering',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};
