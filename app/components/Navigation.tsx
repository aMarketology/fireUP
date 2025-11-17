'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fire Gradient Bar Above Header - Desktop Always, Mobile When Scrolled */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        className="md:hidden fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
      />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:block fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"
      />
      
      {/* Desktop Navigation - Always Visible */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:block fixed top-1 left-0 right-0 z-50 bg-black shadow-lg transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/fireup-logo.png"
                alt="Fire Up Hibachi"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="flex gap-8 items-center">
            {['Home', 'About', 'Schedule'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item === 'Home' ? '/' : item === 'Schedule' ? '/contact' : `/${item.toLowerCase()}`}
                  className="font-medium text-white hover:text-red-500 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:(858) 434-7166"
              className="font-semibold px-6 py-2 rounded-lg text-white hover:text-red-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              (858) 434-7166
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>

      {/* Mobile Navigation - Only When Scrolled */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        className="md:hidden fixed top-1 left-0 right-0 z-50 bg-black shadow-lg transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/fireup-logo.png"
                alt="Fire Up Hibachi"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            className="flex flex-col gap-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-black rounded-lg mt-4 shadow-xl border border-zinc-800">
                {['Home', 'About', 'Schedule'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : item === 'Schedule' ? '/contact' : `/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-zinc-200 hover:bg-zinc-800 hover:text-red-500 transition font-medium rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-2">
                  <a
                    href="tel:(858) 434-7166"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold px-6 py-3 rounded-lg transition"
                  >
                    (858) 434-7166
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  )
}
