'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  return (
    <div className="min-h-screen bg-zinc-950 flex-col">
      <Navigation />

      {/* Fire Gradient Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600"/>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-zinc-900 to-black text-white py-20 px-4 pt-50">
        <div className="max-w-4xl mx-auto text-center mt-[75px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Our Services</h1>
          <p className="text-xl text-zinc-300">Premium Hibachi Catering for Every Occasion in Irvine & Orange County</p>
        </div>
      </section>

      {/* === WHY CHOOSE US SECTION === */}
      <section className="relative py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-zinc-100">
                Orange County's Premier
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Hibachi Catering</span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Fire Up Hibachi brings the authentic hibachi experience directly to your event. Our expert chefs combine traditional Japanese cooking techniques with modern flair, creating unforgettable culinary entertainment for your guests.
              </p>

              {/* Feature List with Icons */}
              <div className="space-y-4">
                {[
                  { title: 'Expert Chefs', desc: 'Professionally trained hibachi masters' },
                  { title: 'Full Service Catering', desc: 'Setup to cleanup included' },
                  { title: 'Interactive Experience', desc: 'Live cooking entertainment' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                    <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              {/* Large Feature Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-6xl font-bold text-red-600 mb-2">5.0</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-400">Rated 5.0 from 28 verified reviews on Google</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                  <div className="text-sm text-zinc-400">Events Catered</div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-3xl font-bold text-red-600 mb-1">5.0</div>
                  <div className="text-sm text-zinc-400">Star Rating</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="flex-1 py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Service 1: Corporate Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Corporate Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Corporate & Team Events</h2>
              <p className="text-xl text-red-600 font-semibold">
                Professional hibachi catering that transforms your corporate gatherings into unforgettable experiences
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Elevate your corporate events with our interactive hibachi catering. Our expert chefs bring the excitement of traditional Japanese hibachi cooking directly to your venue, creating an engaging atmosphere that your team and clients will remember.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team building activities & networking events
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Client appreciation dinners
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Product launches & company milestones
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Holiday parties & celebrations
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 shadow-lg">
                Request Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-zinc-800">
              <Image 
                src="/service-corporate-events.jpeg" 
                alt="Corporate hibachi event with chef performing for guests"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 2: Wedding Catering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-zinc-800 lg:order-1">
              <Image 
                src="/service-wedding-catering.jpeg" 
                alt="Elegant wedding hibachi catering setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Wedding Celebrations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Wedding & Anniversary Catering</h2>
              <p className="text-xl text-red-600 font-semibold">
                Make your special day extraordinary with interactive hibachi entertainment
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Create magical memories with our wedding hibachi catering service. Our skilled chefs provide not just exceptional cuisine, but a captivating performance that will delight your guests and make your celebration truly unique.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Wedding receptions & ceremonies
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rehearsal dinners
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Anniversary celebrations
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customizable menus for dietary needs
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 shadow-lg">
                Request Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Service 3: Private Parties */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Private Celebrations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">Private Parties & Celebrations</h2>
              <p className="text-xl text-red-600 font-semibold">
                Transform your backyard into an unforgettable dining experience
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Whether it's a birthday, graduation, or any special occasion, our private party hibachi catering brings restaurant-quality entertainment and cuisine to your home. Perfect for creating lasting memories with family and friends.
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Birthday parties & milestone celebrations
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Graduation & achievement parties
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Family reunions & gatherings
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Backyard parties & outdoor events
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 shadow-lg">
                Request Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-zinc-800">
              <Image 
                src="/service-private-party.jpeg" 
                alt="Private party hibachi event with guests enjoying the show"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-900/20 to-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Get a custom quote for your hibachi catering experience today
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition transform hover:-translate-y-1 shadow-xl text-lg">
            Schedule Your Event
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
