// LocationSEO — injects LocalBusiness + BreadcrumbList JSON-LD for every San Diego location page
// Usage: place at the top of each location page component (outside 'use client' — this is a server component)

interface LocationSEOProps {
  city: string;            // e.g. "La Jolla"
  serviceArea: string;     // display name, e.g. "La Jolla" or "Mission Valley"
  slug: string;            // e.g. "/san-diego/la-jolla"
  title: string;           // page title for schema headline
  description: string;     // meta description text
  isHub?: boolean;         // true only for the /san-diego hub page
}

export default function LocationSEO({
  city,
  serviceArea,
  slug,
  title,
  description,
  isHub = false,
}: LocationSEOProps) {
  const baseUrl = 'https://fireuphibachi.com';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `${baseUrl}${slug}`,
    name: 'Fire Up Hibachi',
    description,
    url: `${baseUrl}${slug}`,
    telephone: '+19513766014',
    priceRange: '$$$',
    servesCuisine: ['Japanese', 'Teppanyaki', 'Hibachi'],
    image: `${baseUrl}/hero-bg-hibachi.jpg`,
    founder: {
      '@type': 'Person',
      name: 'Chef Hernan Loredo',
      jobTitle: 'Executive Chef & Owner',
    },
    address: {
      '@type': 'PostalAddress',
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
    areaServed: {
      '@type': 'City',
      name: serviceArea,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Hibachi Catering Services in ${serviceArea}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Private Hibachi Catering ${serviceArea}`,
            description: `Mobile hibachi chef comes to your ${serviceArea} location — setup to cleanup included.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Teppanyaki Chef for Events in ${serviceArea}`,
            description: `Authentic Japanese teppanyaki cooking experience with live chef entertainment in ${serviceArea}, CA.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Hibachi Birthday Party ${serviceArea}`,
            description: `Unforgettable hibachi birthday party catering in ${serviceArea}. Interactive chef show for all ages.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Wedding Hibachi Catering ${serviceArea}`,
            description: `Premium hibachi experience for weddings and receptions in ${serviceArea}, San Diego County.`,
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '47',
      bestRating: '5',
    },
  };

  // Breadcrumb: Home → San Diego → [City] (or just Home → San Diego for hub)
  const breadcrumbItems = isHub
    ? [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'San Diego Hibachi Catering', item: `${baseUrl}/san-diego` },
      ]
    : [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'San Diego Hibachi Catering', item: `${baseUrl}/san-diego` },
        { '@type': 'ListItem', position: 3, name: `Hibachi Catering ${serviceArea}`, item: `${baseUrl}${slug}` },
      ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  const locationFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you offer hibachi catering in ${serviceArea}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes! Fire Up Hibachi serves ${serviceArea}, CA with full mobile hibachi and teppanyaki catering. Chef Hernan brings all equipment, fresh ingredients, and the live cooking show directly to your ${serviceArea} venue.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does hibachi catering cost in ${serviceArea}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Pricing for ${serviceArea} hibachi catering events varies based on group size, menu selection, and event type. Contact Fire Up Hibachi at (951) 376-6014 or fill out our quick form at fireuphibachi.com/get-started for a free custom quote — we respond within 24 hours.`,
        },
      },
      {
        '@type': 'Question',
        name: `What hibachi events do you cater in ${serviceArea}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Fire Up Hibachi caters birthdays, weddings, quinceañeras, corporate events, graduation parties, backyard cookouts, and any private celebration in ${serviceArea}. We accommodate groups of all sizes with a fully interactive teppanyaki experience.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationFaqSchema) }}
      />
    </>
  );
}
