'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import EventInquiryForm from '../../components/EventInquiryForm'
import LocationSEO from '../../components/LocationSEO'
import SanDiegoLocations from '../../components/SanDiegoLocations'

export default function CoronadoPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <LocationSEO
        city="Coronado"
        serviceArea="Coronado"
        slug="/san-diego/coronado"
        title="Hibachi Catering Coronado | Luxury Private Chef | Fire Up Hibachi"
        description="Premium private hibachi catering on Coronado Island. Fire Up Hibachi specializes in luxury events — weddings, private dining & corporate affairs on Coronado, CA."
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-zinc-950 pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950">
            <img src="/hero-bg-hibachi.jpg" alt="Hibachi Catering Coronado Island" className="w-full h-full object-cover opacity-25" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-zinc-300 transition">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/san-diego" className="hover:text-zinc-300 transition">San Diego</Link>
            <span className="mx-2">›</span>
            <span className="text-zinc-300">Coronado</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Coronado Island, San Diego</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-zinc-100 leading-tight mb-4">
            Hibachi Catering on<br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-normal">Coronado Island, CA</span>
          </h1>

          <p className="text-xl text-zinc-300 max-w-2xl mb-8 leading-relaxed font-light">
            Elevate your Coronado Island event with a world-class private hibachi experience. Chef Hernan specializes in luxury events — from intimate estate dinners to grand wedding receptions on Coronado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-xl">
              Get a Free Coronado Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+19513766014" className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-red-600 text-zinc-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (951) 376-6014
            </a>
          </div>
        </div>
      </section>

      {/* Why Fire Up in Coronado */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Why Coronado Chooses Us</span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-100">
              Luxury Private Hibachi for<br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Coronado Events</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Coronado's iconic setting demands exceptional catering. Fire Up Hibachi delivers a premium teppanyaki experience befitting the island's reputation for luxury — elegant, interactive, and unforgettable. Chef Hernan has catered celebrations at private estates, Hotel del Coronado adjacent venues, and beachfront homes across the island.
            </p>
            <ul className="space-y-3">
              {[
                'Wedding receptions & rehearsal dinners',
                'Private estate & luxury home events',
                'Corporate client appreciation dinners',
                'Intimate private chef dinners',
                'Anniversary & milestone celebrations',
                'HOA & community events',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-5xl font-bold text-red-600 mb-2">5.0 ★</div>
              <p className="text-zinc-400">47 verified Google reviews — trusted for luxury events</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '14', label: 'Years Experience' },
                { stat: '$$$', label: 'Premium Service' },
                { stat: 'Island', label: 'Delivery Available' },
                { stat: '24hr', label: 'Quote Turnaround' },
              ].map((d) => (
                <div key={d.label} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">{d.stat}</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider">{d.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900/30 to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-zinc-100 mb-3">
              Book Your Coronado{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Hibachi Event</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Tell us about your Coronado event and we&apos;ll send a custom quote within 24 hours. No commitment required.
            </p>
          </div>
          <EventInquiryForm />
        </div>
      </section>

      <SanDiegoLocations currentSlug="/san-diego/coronado" />
      <Footer />
    </div>
  )
}
