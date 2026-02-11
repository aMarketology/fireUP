/**
 * Google Analytics 4 Measurement Protocol API
 * For server-side event tracking and conversions
 */

interface GA4Event {
  name: string
  params?: Record<string, any>
}

interface GA4Payload {
  client_id: string
  user_id?: string
  events: GA4Event[]
  user_properties?: Record<string, any>
}

/**
 * Send an event to GA4 using the Measurement Protocol
 * @param clientId - Unique client identifier (usually from ga cookie or generated)
 * @param events - Array of events to send
 * @param userProperties - Optional user properties
 * @param userId - Optional user ID for cross-session tracking
 */
export async function sendGA4Event(
  clientId: string,
  events: GA4Event[],
  userProperties?: Record<string, any>,
  userId?: string
): Promise<boolean> {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const apiSecret = process.env.GA4_API_SECRET

  if (!measurementId || !apiSecret) {
    console.warn('GA4 Measurement Protocol: Missing credentials')
    return false
  }

  const payload: GA4Payload = {
    client_id: clientId,
    ...(userId && { user_id: userId }),
    events,
    ...(userProperties && { user_properties: userProperties })
  }

  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      console.error('GA4 Measurement Protocol error:', response.status)
      return false
    }

    return true
  } catch (error) {
    console.error('Failed to send GA4 event:', error)
    return false
  }
}

/**
 * Track a form submission event
 */
export async function trackFormSubmission(
  clientId: string,
  formData: {
    form_name: string
    event_type?: string
    guest_count?: string | number
    budget?: string
    event_location?: string
    email?: string
  },
  userId?: string
) {
  return sendGA4Event(
    clientId,
    [
      {
        name: 'generate_lead',
        params: {
          form_name: formData.form_name,
          event_type: formData.event_type,
          guest_count: formData.guest_count,
          budget: formData.budget,
          location: formData.event_location,
          currency: 'USD',
          value: getBudgetValue(formData.budget),
        },
      },
    ],
    formData.email ? { user_email: { value: formData.email } } : undefined,
    userId
  )
}

/**
 * Track a conversion event
 */
export async function trackConversion(
  clientId: string,
  conversionData: {
    transaction_id: string
    value: number
    currency?: string
    items?: Array<{
      item_id: string
      item_name: string
      price: number
      quantity: number
    }>
  },
  userId?: string
) {
  return sendGA4Event(
    clientId,
    [
      {
        name: 'purchase',
        params: {
          transaction_id: conversionData.transaction_id,
          value: conversionData.value,
          currency: conversionData.currency || 'USD',
          items: conversionData.items || [],
        },
      },
    ],
    undefined,
    userId
  )
}

/**
 * Track a custom event
 */
export async function trackCustomEvent(
  clientId: string,
  eventName: string,
  params?: Record<string, any>,
  userId?: string
) {
  return sendGA4Event(
    clientId,
    [
      {
        name: eventName,
        params,
      },
    ],
    undefined,
    userId
  )
}

/**
 * Helper function to extract numeric value from budget string
 */
function getBudgetValue(budget?: string): number {
  if (!budget) return 0
  
  // Extract numbers from budget string (e.g., "$500-$1000" -> 750)
  const matches = budget.match(/\d+/g)
  if (!matches) return 0
  
  const numbers = matches.map(Number)
  if (numbers.length === 2) {
    // Return average if range
    return (numbers[0] + numbers[1]) / 2
  }
  return numbers[0] || 0
}

/**
 * Generate a client ID (v4 UUID)
 */
export function generateClientId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Hash an email for privacy-safe user identification
 * Uses SHA-256 to create a consistent user ID from email
 */
export async function hashEmail(email: string): Promise<string> {
  // Normalize email (lowercase, trim)
  const normalized = email.toLowerCase().trim()
  
  // Use Web Crypto API for hashing
  const encoder = new TextEncoder()
  const data = encoder.encode(normalized)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  return hashHex
}

/**
 * Generate a user ID from an email address
 * Returns hashed email for privacy-compliant user tracking
 */
export async function generateUserIdFromEmail(email: string): Promise<string> {
  return hashEmail(email)
}
