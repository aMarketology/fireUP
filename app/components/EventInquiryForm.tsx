'use client'

import { useState } from 'react'

export default function EventInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    eventLocation: '',
    budget: '',
    dietaryRestrictions: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          eventLocation: '',
          budget: '',
          dietaryRestrictions: '',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your inquiry. Please try calling us at (858) 434-7166.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8 relative overflow-hidden">
      {/* Fire Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1">Schedule Your Hibachi Experience</h2>
      <p className="text-zinc-400 text-sm mb-6">Let's bring the fire to your event! Fill out the form and we'll respond within 24 hours</p>
      
      {submitted && (
        <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-green-500 font-semibold text-sm">Thank you for your inquiry!</p>
              <p className="text-green-400 text-xs">We'll contact you within 24 hours to discuss your event.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 123-4567"
              className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          />
        </div>

        {/* Event Details */}
        <div className="pt-3 border-t border-zinc-800">
          <h3 className="text-lg font-bold text-zinc-100 mb-3">Event Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventType" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              >
                <option value="">Select event type</option>
                <option value="birthday">Birthday Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding/Reception</option>
                <option value="anniversary">Anniversary Celebration</option>
                <option value="graduation">Graduation Party</option>
                <option value="family">Family Gathering</option>
                <option value="holiday">Holiday Party</option>
                <option value="other">Other Celebration</option>
              </select>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Event Date *
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="guestCount" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Number of Guests *
              </label>
              <select
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              >
                <option value="">Select guest count</option>
                <option value="10-25">10-25 guests</option>
                <option value="25-50">25-50 guests</option>
                <option value="50-75">50-75 guests</option>
                <option value="75-100">75-100 guests</option>
                <option value="100+">100+ guests</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              >
                <option value="">Select budget range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="eventLocation" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Event Location (City & Venue) *
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              required
              placeholder="e.g., Los Angeles - Private Residence or San Diego - Event Hall"
              className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="dietaryRestrictions" className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Dietary Restrictions or Special Requests
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              placeholder="e.g., Vegetarian options, seafood allergies, kids menu needed..."
              className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Tell Us About Your Vision
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your event details, special requests, theme ideas, or any questions about our hibachi catering service..."
            rows={3}
            className="w-full px-3 py-2 text-sm bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-zinc-700 disabled:to-zinc-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 disabled:transform-none shadow-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Book Your Hibachi Event
            </>
          )}
        </button>

        <p className="text-xs text-zinc-500 text-center">
          🔥 Serving all Southern California • 14 Years Experience • Best Quality Only
        </p>
      </form>
    </div>
  )
}
