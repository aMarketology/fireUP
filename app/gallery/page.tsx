'use client'

import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Gallery() {
  const galleryImages = [
    { src: '/about-chef-hernan.jpeg', title: 'Chef Hernan', alt: 'Chef Hernan Loredo' },
    { src: '/homepage-gallery-teppanyaki.jpeg', title: 'Teppanyaki Station', alt: 'Professional teppanyaki station' },
    { src: '/homepage-gallery-cooking-show.jpeg', title: 'Live Cooking Show', alt: 'Chef performing cooking entertainment' },
    { src: '/homepage-gallery-catering.jpeg', title: 'Event Catering', alt: 'Hibachi catering at event' },
    { src: '/service-wedding-catering.jpeg', title: 'Wedding Catering', alt: 'Wedding hibachi catering' },
    { src: '/homepage-gallery-live-cooking.jpeg', title: 'Cooking Performance', alt: 'Chef Hernan cooking performance' },
    { src: '/homepage-gallery-private-party.jpeg', title: 'Private Event', alt: 'Private hibachi event' },
    { src: '/homepage-gallery-setup.jpeg', title: 'Professional Setup', alt: 'Professional hibachi setup' },
    { src: '/homepage-gallery-chef-event.jpeg', title: 'Event Entertainment', alt: 'Hibachi entertainment at event' },
    { src: '/homepage-gallery-chef-skills.jpeg', title: 'Chef Skills', alt: 'Chef Hernan showcasing skills' },
    { src: '/service-private-party.jpeg', title: 'Private Party', alt: 'Private party hibachi catering' },
    { src: '/service-corporate-events.jpeg', title: 'Corporate Event', alt: 'Corporate hibachi event' },
    { src: '/Untitled_Artwork Hernan Loredo.jpeg', title: 'Custom Setup', alt: 'Custom hibachi setup' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-zinc-900 to-black text-white py-24 px-4 relative overflow-hidden">
        {/* Fire Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-zinc-300">14 years of unforgettable hibachi experiences across Southern California</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="flex-1 py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-2xl bg-zinc-900 aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center gap-2 text-orange-400 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      <span>Fire Up Hibachi</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-16 px-4 text-center border-t border-zinc-800">
        <h2 className="text-4xl font-bold text-zinc-100 mb-4">Ready to Create Your Own Memorable Event?</h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
          Let's bring the fire to your celebration with authentic hibachi entertainment
        </p>
        <a 
          href="tel:(858) 434-7166" 
          className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call (858) 434-7166
        </a>
      </section>

      <Footer />
    </div>
  )
}
