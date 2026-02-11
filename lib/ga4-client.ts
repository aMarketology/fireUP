/**
 * Client-side Google Analytics 4 utilities
 * For browser-based GA4 interactions
 */

/**
 * Set user ID in GA4 for cross-session tracking
 * Call this after user submits a form or logs in
 */
export function setGA4UserId(userId: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-381MHB6YGM', {
      user_id: userId,
    })
  }
}

/**
 * Get GA4 client ID from browser
 */
export function getGA4ClientId(): Promise<string> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('get', 'G-381MHB6YGM', 'client_id', (clientId: string) => {
        resolve(clientId || '')
      })
    } else {
      resolve('')
    }
  })
}

/**
 * Hash email client-side for privacy-safe user ID
 */
export async function hashEmailClient(email: string): Promise<string> {
  // Normalize email
  const normalized = email.toLowerCase().trim()
  
  // Use Web Crypto API
  const encoder = new TextEncoder()
  const data = encoder.encode(normalized)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  return hashHex
}

/**
 * Track form submission and set user ID
 */
export async function trackFormSubmitWithUserId(email: string) {
  const userId = await hashEmailClient(email)
  setGA4UserId(userId)
  
  // Also track the form_submit event
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      form_name: 'event_inquiry_form',
    })
  }
}
