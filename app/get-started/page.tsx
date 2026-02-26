'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EventInquiryForm from '../components/EventInquiryForm'

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navigation />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white pt-28 pb-16 px-4 relative overflow-hidden">
        {/* Decorative fire glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Book in Minutes
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Let&apos;s Fire Up Your Event
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll send you a custom quote within 24 hours. No commitment — just a conversation about making your event unforgettable.
          </p>
        </div>
      </section>

      {/* Steps + Form Section */}
      <section className="flex-1 py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* How It Works Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Steps */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-6">How It Works</h3>

                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Tell Us About Your Event',
                      desc: 'Fill out the quick form with your event details — date, guest count, and location.',
                    },
                    {
                      step: '2',
                      title: 'Get Your Custom Quote',
                      desc: 'We\'ll review your details and send a personalized quote within 24 hours.',
                    },
                    {
                      step: '3',
                      title: 'We Bring the Fire',
                      desc: 'Sit back and enjoy — our chefs arrive with everything needed for an incredible show.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg shadow-red-600/20">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-zinc-100 mb-1">{item.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-zinc-100 mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation & custom quote',
                    'Professional hibachi chef at your door',
                    'Premium ingredients included',
                    'Full setup & cleanup',
                    'Entertaining live cooking show',
                    'Flexible menu options',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-red-600/10 to-orange-500/10 border border-red-600/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">Prefer to Call?</h3>
                <p className="text-sm text-zinc-400 mb-4">We&apos;d love to hear from you directly.</p>
                <a
                  href="tel:(951) 376-6014"
                  className="inline-flex items-center gap-2 text-lg font-bold text-red-500 hover:text-red-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (951) 376-6014
                </a>
              </div>
            </div>

            {/* Event Inquiry Form */}
            <div className="lg:col-span-2">
              <EventInquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
