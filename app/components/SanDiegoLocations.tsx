// SanDiegoLocations — internal linking component for San Diego service area pages
// Drop into every /san-diego/* page to link to all other SD locations

import Link from 'next/link';

const sdLocations = [
  { city: 'San Diego', slug: '/san-diego', label: 'All of San Diego' },
  { city: 'La Jolla', slug: '/san-diego/la-jolla', label: 'La Jolla' },
  { city: 'Chula Vista', slug: '/san-diego/chula-vista', label: 'Chula Vista' },
  { city: 'Coronado', slug: '/san-diego/coronado', label: 'Coronado' },
  { city: 'Encinitas', slug: '/san-diego/encinitas', label: 'Encinitas' },
  { city: 'Carlsbad', slug: '/san-diego/carlsbad', label: 'Carlsbad' },
  { city: 'Oceanside', slug: '/san-diego/oceanside', label: 'Oceanside' },
  { city: 'Escondido', slug: '/san-diego/escondido', label: 'Escondido' },
  { city: 'Del Mar', slug: '/san-diego/del-mar', label: 'Del Mar' },
  { city: 'Poway', slug: '/san-diego/poway', label: 'Poway' },
  { city: 'El Cajon', slug: '/san-diego/el-cajon', label: 'El Cajon' },
  { city: 'National City', slug: '/san-diego/national-city', label: 'National City' },
  { city: 'Rancho Bernardo', slug: '/san-diego/rancho-bernardo', label: 'Rancho Bernardo' },
  { city: 'Solana Beach', slug: '/san-diego/solana-beach', label: 'Solana Beach' },
  { city: 'Mission Valley', slug: '/san-diego/mission-valley', label: 'Mission Valley' },
  { city: 'Santee', slug: '/san-diego/santee', label: 'Santee' },
  { city: 'North Park', slug: '/san-diego/north-park', label: 'North Park' },
  { city: 'Point Loma', slug: '/san-diego/point-loma', label: 'Point Loma' },
];

interface SanDiegoLocationsProps {
  currentSlug: string;
}

export default function SanDiegoLocations({ currentSlug }: SanDiegoLocationsProps) {
  const others = sdLocations.filter((l) => l.slug !== currentSlug);

  return (
    <section className="py-16 px-4 bg-zinc-900/30 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Service Areas</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-100">
            Also Serving These{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              San Diego Areas
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
            Fire Up Hibachi serves all of San Diego County. Click your area for more info and a custom quote.
          </p>
        </div>

        <nav aria-label="San Diego service areas">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {others.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={loc.slug}
                  className="block text-center px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-red-600/50 hover:text-red-400 hover:bg-zinc-800/50 transition-all duration-200"
                >
                  Hibachi {loc.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
