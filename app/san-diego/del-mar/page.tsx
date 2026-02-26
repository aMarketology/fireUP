'use client'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import EventInquiryForm from '../../components/EventInquiryForm'
import LocationSEO from '../../components/LocationSEO'
import SanDiegoLocations from '../../components/SanDiegoLocations'

export default function DelMarPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <LocationSEO city="Del Mar" serviceArea="Del Mar" slug="/san-diego/del-mar"
        title="Hibachi Catering Del Mar | Luxury Private Chef | Fire Up Hibachi"
        description="Upscale private hibachi catering in Del Mar, CA. Luxury events, private estate dinners, weddings & corporate affairs. Book Chef Hernan for your Del Mar event today." />
      <Navigation />

      <section className="pt-36 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-300">Home</Link><span className="mx-2">›</span>
            <Link href="/san-diego" className="hover:text-zinc-300">San Diego</Link><span className="mx-2">›</span>
            <span className="text-zinc-300">Del Mar</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Del Mar, San Diego County</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-5">
            Hibachi Catering in <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Del Mar, CA</span>
          </h1>
          <p className="text-xl text-zinc-300 leading-relaxed mb-6 max-w-2xl">
            Del Mar's coastal estates and upscale lifestyle deserve a catering experience that matches. Fire Up Hibachi specializes in luxury private hibachi events — intimate oceanfront dinners, wedding receptions, and high-end corporate gatherings. Chef Hernan brings an impeccable teppanyaki performance to your Del Mar venue, delivering both world-class cuisine and unforgettable entertainment.
          </p>
          <ul className="grid grid-cols-2 gap-3 mb-8 max-w-xl">
            {['Private estate dinners','Luxury wedding receptions','Corporate client events','Racetrack & venue setups','Milestone celebrations','Intimate chef dinners'].map(i => (
              <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm"><span className="text-red-500">✓</span>{i}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-xl">
              Get a Free Del Mar Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+19513766014" className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-red-600 text-zinc-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition">(951) 376-6014</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">Book Your <span className="text-red-500">Del Mar</span> Hibachi Event</h2>
          <EventInquiryForm />
        </div>
      </section>

      <SanDiegoLocations currentSlug="/san-diego/del-mar" />
      <Footer />
    </div>
  )
}
