'use client'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import EventInquiryForm from '../../components/EventInquiryForm'
import LocationSEO from '../../components/LocationSEO'
import SanDiegoLocations from '../../components/SanDiegoLocations'

export default function OceansidePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <LocationSEO city="Oceanside" serviceArea="Oceanside" slug="/san-diego/oceanside"
        title="Hibachi Catering Oceanside | Private Teppanyaki | Fire Up Hibachi"
        description="Mobile hibachi catering in Oceanside, CA. Family events, military appreciation parties, birthdays & weddings. Book Fire Up Hibachi for your Oceanside event today." />
      <Navigation />

      <section className="pt-36 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-300">Home</Link><span className="mx-2">›</span>
            <Link href="/san-diego" className="hover:text-zinc-300">San Diego</Link><span className="mx-2">›</span>
            <span className="text-zinc-300">Oceanside</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Oceanside, San Diego County</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-5">
            Hibachi Catering in <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Oceanside, CA</span>
          </h1>
          <p className="text-xl text-zinc-300 leading-relaxed mb-6 max-w-2xl">
            Fire Up Hibachi brings the full live teppanyaki experience to Oceanside. Chef Hernan — with 14 years of professional hibachi expertise — comes directly to your home, backyard, or venue. Perfect for military appreciation events, large family parties, birthdays, and weddings throughout Oceanside and Camp Pendleton adjacent communities.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-8 max-w-xl">
            {['Birthday parties','Military & family events','Wedding receptions','Backyard cookouts','Corporate dinners','Graduation parties'].map(i => (
              <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                <span className="text-red-500">✓</span>{i}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-xl">
              Get a Free Oceanside Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+19513766014" className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-red-600 text-zinc-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition">(951) 376-6014</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">Book Your <span className="text-red-500">Oceanside</span> Hibachi Event</h2>
          <EventInquiryForm />
        </div>
      </section>

      <SanDiegoLocations currentSlug="/san-diego/oceanside" />
      <Footer />
    </div>
  )
}
