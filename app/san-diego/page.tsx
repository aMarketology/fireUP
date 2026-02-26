'use client'

import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EventInquiryForm from '../components/EventInquiryForm'
import LocationSEO from '../components/LocationSEO'
import SanDiegoLocations from '../components/SanDiegoLocations'

const sdNeighborhoods = [
  { city: 'La Jolla', slug: '/san-diego/la-jolla', desc: 'Luxury coastal events & upscale private parties' },
  { city: 'Chula Vista', slug: '/san-diego/chula-vista', desc: 'Birthdays, quinceañeras & family celebrations' },
  { city: 'Coronado', slug: '/san-diego/coronado', desc: 'Island luxury weddings & private estate dinners' },
  { city: 'Encinitas', slug: '/san-diego/encinitas', desc: 'Beach events, backyard parties & weddings' },
  { city: 'Carlsbad', slug: '/san-diego/carlsbad', desc: 'Corporate events & milestone celebrations' },
  { city: 'Oceanside', slug: '/san-diego/oceanside', desc: 'Military appreciation events & family parties' },
  { city: 'Del Mar', slug: '/san-diego/del-mar', desc: 'Upscale private dining & estate events' },
  { city: 'Escondido', slug: '/san-diego/escondido', desc: 'Large backyard events & family gatherings' },
]

const faqItems = [
  {
    q: 'Do you serve all of San Diego County?',
    a: 'Yes — Fire Up Hibachi serves the entire San Diego County area, including coastal neighborhoods like La Jolla, Coronado, and Encinitas, as well as inland communities like Escondido, Chula Vista, and El Cajon.',
  },
  {
    q: 'How far will you travel for a San Diego hibachi event?',
    a: 'We regularly travel from our Riverside base to San Diego County for events. Travel fees may apply depending on your specific location. Contact us for a custom quote that includes your address.',
  },
  {
    q: 'What is included in a hibachi catering package in San Diego?',
    a: 'Every package includes: Chef Hernan cooking live at your event, all cooking equipment and hibachi grill, fresh high-quality ingredients, full setup and cleanup. Menu options include steak, chicken, shrimp, vegetables, fried rice, and noodles.',
  },
  {
    q: 'How many guests can you serve at a San Diego event?',
    a: 'We can accommodate groups of all sizes — from intimate backyard dinners of 10 guests to large corporate events and weddings of 100+ guests. We scale our setup to match your headcount.',
  },
  {
    q: 'How much does hibachi catering cost in San Diego?',
    a: 'Pricing depends on guest count, menu selection, and location. Most San Diego events range from $45–$85 per person. Contact us for a free custom quote — there\'s no commitment required.',
  },
  {
    q: 'Can you cater weddings in San Diego?',
    a: 'Absolutely. We specialize in wedding hibachi catering throughout San Diego County, including venue setups in La Jolla, Coronado, Del Mar, Encinitas, and beyond. Contact us early to lock in your date.',
  },
]

export default function SanDiegoPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <LocationSEO
        city="San Diego"
        serviceArea="San Diego"
        slug="/san-diego"
        title="Hibachi Catering San Diego | Private Teppanyaki Chef | Fire Up Hibachi"
        description="Fire Up Hibachi brings premium private hibachi catering to San Diego. Chef Hernan — 14 years of teppanyaki experience — serves birthdays, weddings & corporate events. Free quote."
        isHub
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-zinc-950 pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950">
            <img
              src="/hero-bg-hibachi.jpg"
              alt="Fire Up Hibachi San Diego"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-zinc-300 transition">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-zinc-300">San Diego</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">San Diego County, California</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-zinc-100 tracking-tight leading-none mb-4">
            Hibachi Catering<br />
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent font-normal">
              San Diego
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mb-8 leading-relaxed">
            San Diego's premier private hibachi experience. Chef Hernan Loredo — <strong className="text-zinc-100 font-semibold">14 years of teppanyaki expertise</strong> — comes directly to your San Diego home, venue, or event space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-0.5 shadow-xl"
            >
              Get a Free San Diego Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+19513766014"
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-red-600 text-zinc-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition"
            >
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (951) 376-6014
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { stat: '14', label: 'Years Experience' },
              { stat: '1,000+', label: 'Events Catered' },
              { stat: '5.0 ★', label: 'Google Rating' },
              { stat: '100%', label: 'Satisfaction' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-red-500">{item.stat}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">What We Bring</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              The Complete San Diego{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Hibachi Experience
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
              Everything included — we arrive, set up, cook, entertain, and clean up. You just enjoy the show.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Live Teppanyaki Show',
                desc: 'Chef Hernan performs the full hibachi experience — fire tricks, knife skills, onion volcano — right at your San Diego event.',
              },
              {
                icon: '🦐',
                title: 'Premium Ingredients',
                desc: 'Filet mignon, lobster, jumbo shrimp, chicken, vegetables. We source quality ingredients and cook everything fresh at your location.',
              },
              {
                icon: '🍚',
                title: 'Full Menu',
                desc: 'Hibachi proteins, garlic fried rice, yakisoba noodles, grilled vegetables, yum yum sauce, ginger sauce. A complete meal for every guest.',
              },
              {
                icon: '🎂',
                title: 'All Event Types',
                desc: 'Birthdays, quinceañeras, weddings, anniversaries, corporate events, backyard parties, graduation parties — we do it all across San Diego.',
              },
              {
                icon: '🚚',
                title: 'We Come to You',
                desc: 'Backyard, beach, rooftop, private estate, venue — if there\'s space to cook, we\'ll be there. Serving all of San Diego County.',
              },
              {
                icon: '✅',
                title: 'Setup to Cleanup',
                desc: 'We handle everything from arrival through final cleanup. You focus on your guests — we handle the kitchen and the show.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-red-600/30 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900/30 to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Events We Serve</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
                Private Hibachi Chef for{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Any San Diego Event
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                From intimate La Jolla dinner parties to large Chula Vista quinceañeras and Coronado wedding receptions — Fire Up Hibachi has served it all across San Diego County.
              </p>
              <ul className="space-y-3">
                {[
                  'Birthday parties & milestone celebrations',
                  'Wedding receptions & rehearsal dinners',
                  'Quinceañeras & family celebrations',
                  'Corporate events & team building',
                  'Graduation & achievement parties',
                  'Backyard cookouts & neighborhood events',
                  'Private estate & luxury dinners',
                  'Holiday parties & seasonal events',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Rating card */}
              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-7xl font-bold text-red-600 mb-2">5.0</div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-400">47 verified 5-star reviews</p>
                  <p className="text-zinc-500 text-sm mt-1">Serving Southern California since 2012</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '14', label: 'Years Experience' },
                  { stat: '1,000+', label: 'Events Catered' },
                  { stat: 'All SD', label: 'County Coverage' },
                  { stat: '24hr', label: 'Quote Turnaround' },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                    <div className="text-3xl font-bold text-red-500 mb-1">{item.stat}</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego Neighborhoods */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Hibachi Catering Across{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                All of San Diego
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              We serve every neighborhood in San Diego County. Click your city for local pricing, availability, and to get a custom quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdNeighborhoods.map((area) => (
              <Link
                key={area.slug}
                href={area.slug}
                className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-red-600/50 hover:bg-zinc-800/40 transition-all"
              >
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-red-400 transition mb-2">
                  Hibachi {area.city}
                </h3>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition">{area.desc}</p>
                <div className="mt-4 text-xs text-red-500 font-semibold uppercase tracking-wider group-hover:text-red-400">
                  Get a quote →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900/30 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-4">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-100">
              Hibachi Catering San Diego —{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="text-zinc-100 font-semibold text-lg mb-3">{item.q}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-zinc-100 mb-3">
              Book Your San Diego{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Hibachi Event
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Fill out the form and we&apos;ll send a custom San Diego quote within 24 hours. No commitment required.
            </p>
          </div>
          <EventInquiryForm />
        </div>
      </section>

      {/* Internal links to all SD areas */}
      <SanDiegoLocations currentSlug="/san-diego" />

      <Footer />
    </div>
  )
}
