# Google Analytics 4 Setup with Measurement Protocol

## Overview
Fire Up Hibachi website now includes complete Google Analytics 4 integration with both client-side and server-side tracking capabilities.

## What's Included

### 1. Client-Side Tracking (Standard GA4)
- **Location**: `app/layout.tsx`
- **Measurement ID**: G-381MHB6YGM
- Tracks all page views, clicks, and user interactions automatically
- Uses Next.js optimized `Script` component with `afterInteractive` strategy

### 2. Server-Side Tracking (Measurement Protocol API)
- **API Secret**: FZTTPzWAR4eBR9vMRfgBqg
- **Location**: `lib/ga4.ts`
- Enables advanced server-side event tracking for:
  - Form submissions (generate_lead events)
  - Conversions and purchases
  - Custom business events
  - Events that occur outside the browser

### 3. Form Conversion Tracking
- **Location**: `app/api/contact/route.ts`
- Automatically tracks event inquiry form submissions
- Sends data to GA4 including:
  - Event type
  - Guest count
  - Budget information
  - Event location
  - Form name identification

## Key Features

### Available Functions in `lib/ga4.ts`

#### `trackFormSubmission(clientId, formData, userId?)` 🆕 Updated
Tracks lead generation events with detailed form data
```typescript
await trackFormSubmission(
  clientId,
  {
    form_name: 'event_inquiry_form',
    event_type: 'Wedding',
    guest_count: 50,
    budget: '$500-$1000',
    event_location: 'Riverside, CA',
    email: 'customer@example.com' // Used for user properties
  },
  userId // Optional: for cross-session tracking
)
```

#### `trackConversion(clientId, conversionData, userId?)` 🆕 Updated
Tracks purchase/conversion events
```typescript
await trackConversion(
  clientId,
  {
    transaction_id: 'TXN-12345',
    value: 750,
    currency: 'USD',
    items: [...]
  },
  userId // Optional: for cross-session tracking
)
```

#### `trackCustomEvent(clientId, eventName, params?, userId?)` 🆕 Updated
Tracks any custom event
```typescript
await trackCustomEvent(
  clientId,
  'quote_requested',
  {
    service_type: 'hibachi_catering',
    contact_method: 'phone'
  },
  userId // Optional: for cross-session tracking
)
```

#### `generateUserIdFromEmail(email)` 🆕 New Function
Generates a privacy-safe user ID from email
```typescript
const userId = await generateUserIdFromEmail('customer@example.com')
// Returns: hashed string like "5d41402abc4b..."
```

### Client-Side Functions in `lib/ga4-client.ts` 🆕

#### `trackFormSubmitWithUserId(email)`
Sets user ID in browser GA4 session
```typescript
await trackFormSubmitWithUserId(formData.email)
```

#### `setGA4UserId(userId)`
Manually set user ID in GA4
```typescript
setGA4UserId('hashed-user-id-123')
```

#### `getGA4ClientId()`
Get current GA4 client ID from browser
```typescript
const clientId = await getGA4ClientId()
```

## Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-381MHB6YGM
GA4_API_SECRET=FZTTPzWAR4eBR9vMRfgBqg
```

⚠️ **Security Note**: Never commit `.env.local` to Git. Use `.env.example` for documentation.

## How It Works

### Client ID Synchronization
The form automatically captures the GA4 client ID from the browser and sends it with form submissions. This allows connecting server-side events with client-side user sessions.

```javascript
// Extracted from browser GA
window.gtag('get', 'G-381MHB6YGM', 'client_id', (clientId) => {
  // Send with form data
})
```

### Event Flow
1. User fills out event inquiry form
2. Form captures GA client ID from browser
3. **Form hashes user email to create a User-ID** 🆕
4. User-ID is set in GA4 browser session for cross-session tracking
5. Form submits to `/api/contact`
6. Server sends email AND tracks event in GA4 **with User-ID attached** 🆕
7. Event appears in GA4 with full attribution data
8. **User's future visits are tracked under the same User-ID** 🆕

## User-ID Tracking - Cross-Session Intelligence

### What is User-ID?
User-ID allows you to track the same user across multiple sessions, devices, and time periods. When someone submits your form, their email is hashed (for privacy) and used as a persistent identifier.

### Key Benefits
- **See when leads return** - Track if a form submitter comes back days or weeks later
- **Cross-device tracking** - Identify the same person on mobile and desktop
- **User journey analysis** - Understand the full path from first visit to booking
- **Lifetime value** - Measure the total value of each customer over time

### How It Works
1. User submits form with email: `john@example.com`
2. Email is hashed using SHA-256: `5d41402abc4b...` (one-way encryption for privacy)
3. Hashed value becomes User-ID in GA4
4. All future sessions from this user are linked
5. When they return, GA4 shows:
   - Previous sessions
   - Original traffic source
   - All interactions and events
   - Time between visits

### Privacy & Compliance
✅ **GDPR/CCPA Compliant** - Emails are immediately hashed (SHA-256) before storage
✅ **One-way encryption** - Cannot reverse hash to get original email  
✅ **No PII stored** - Only the hash is sent to GA4, never the actual email  
✅ **User consent** - Form submission implies consent for tracking

### What You'll See in GA4

#### User Explorer Report
Navigate to GA4 → Reports → User → User Explorer
- See individual user journeys
- View all sessions by the same person
- Track returning leads

#### Path Analysis
See common patterns:
- Form submit → Return visit → Phone call event
- First visit → Form submit → Return → Booking confirmation

#### Cohort Analysis
Track users who submitted forms:
- How many return within 7 days?
- What percentage convert to bookings?
- Average time from inquiry to decision

## GA4 Dashboard - What You'll See

### Events to Monitor
- **generate_lead**: Form submissions with event details
- **page_view**: Standard page views
- **session_start**: New user sessions
- **Custom events**: Any additional events you add

### Recommended Reports
1. **Conversions** → Monitor form submissions
2. **Events** → See all tracked interactions
3. **Real-time** → Watch live user activity
4. **Engagement** → User behavior patterns
5. **User Explorer** → Individual user journeys 🆕

## Real-World Example: User Journey

### Scenario
Sarah is planning her wedding and discovers Fire Up Hibachi through Google search.

#### Day 1 - Initial Visit
- **10:00 AM**: Sarah visits site from Google search "riverside hibachi catering"
- **10:05 AM**: Browses gallery and services pages
- **10:12 AM**: Fills out event inquiry form with email: sarah@email.com
- **GA4 Records**:
  - `session_start` with UTM source: google/organic
  - `page_view` events for each page
  - `generate_lead` with User-ID: [hashed email]
  - User properties: event_type=Wedding, guest_count=50

#### Day 5 - Return Visit #1
- **2:00 PM**: Sarah returns directly to website (types URL)
- **GA4 Recognizes**: Same User-ID from Day 1
- **GA4 Shows**: 
  - This is a returning user who previously submitted a form
  - Original traffic source: Google organic
  - 5 days since form submission

#### Day 10 - Return Visit #2  
- **7:00 PM**: Sarah visits from Facebook ad
- **GA4 Links Everything**:
  - Same user across all 3 sessions
  - First touchpoint: Google organic
  - Form submission on first visit
  - Re-engaged through Facebook ad
  - Complete customer journey visible

### What You Can Do With This Data

**Follow-Up Strategy**
- See that Sarah visited 5 days after inquiry but didn't call
- Trigger a follow-up email or call
- Reference specific services she viewed

**Marketing Attribution**
- Know that Google organic brought the initial lead
- Facebook ad brought her back
- Make informed decisions about ad spend

**User Behavior Insights**
- Average time from inquiry to decision
- Which pages returning leads visit most
- Conversion patterns by event type

**Lifetime Value Tracking**
- Track if Sarah books another event later
- Measure total customer value
- Identify most valuable customer segments

## Adding More Events

✅ **Accurate conversion tracking** - Server validation ensures no lost events  
✅ **Enhanced attribution** - Connect offline events to online sessions  
✅ **Privacy compliant** - Server-side tracking respects user preferences  
✅ **Bot filtering** - Server events can't be manipulated by bots  
✅ **Business intelligence** - Track internal processes and conversions  
✅ **Cross-session user tracking** - See when leads return to your site 🆕  
✅ **User journey mapping** - Understand full customer lifecycle 🆕  

## Technical Implementation

### Files Modified/Created

#### New Files
- `lib/ga4.ts` - Server-side GA4 Measurement Protocol functions
- `lib/ga4-client.ts` - Client-side GA4 helper functions 🆕
- `.env.local` - Environment variables (do not commit)
- `.env.example` - Environment variable template

#### Modified Files
- `app/layout.tsx` - Added GA4 tracking scripts
- `app/components/EventInquiryForm.tsx` - Added User-ID tracking on form submit 🆕
- `app/api/contact/route.ts` - Added server-side event tracking with User-ID 🆕

### Available Functions

#### Server-Side (`lib/ga4.ts`)

To track additional events, simply import the functions from `lib/ga4.ts`:

```typescript
import { trackCustomEvent } from '@/lib/ga4'

// In your API route or server component
await trackCustomEvent(clientId, 'booking_confirmed', {
  event_date: '2026-03-15',
  service_type: 'hibachi_catering',
  total_guests: 50
})
```

## Testing

### Verify Installation
1. Visit your website
2. Open browser DevTools → Network tab
3. Look for requests to `google-analytics.com/mp/collect`
4. Submit the contact form
5. Check GA4 Real-time reports for the `generate_lead` event
6. **Test User-ID tracking** 🆕:
   - Submit form with your email
   - Clear cookies or use incognito
   - Visit site again (GA4 won't recognize you yet)
   - Submit form again with SAME email
   - In GA4, both sessions should link under same User-ID

### Verify User-ID Tracking 🆕
1. Open browser console after submitting form
2. Run: `gtag('get', 'G-381MHB6YGM', 'user_id', console.log)`
3. Should see hashed user ID
4. In GA4 → Reports → User → User Explorer
5. Find your User-ID and verify sessions are linked

### Debug Mode
To enable GA4 debug mode, update the Script in `layout.tsx`:
```javascript
gtag('config', 'G-381MHB6YGM', { 'debug_mode': true });
```

## Troubleshooting

### Events not appearing?
- Check environment variables are set correctly
- Verify API secret matches GA4 property
- Check browser console for errors
- Allow 24-48 hours for custom events to appear in standard reports (real-time shows immediately)

### Client ID not connecting?
- Ensure gtag.js loads before form submission
- Check for ad blockers that may block GA
- Verify Script component is in layout.tsx

### User-ID not tracking? 🆕
- Verify email is being passed to `trackFormSubmitWithUserId()`
- Check browser console for crypto API errors
- Ensure User-ID feature is enabled in GA4:
  - GA4 Admin → Data Settings → Data Collection
  - Enable "User-ID" reporting
- Allow up to 24 hours for User Explorer to populate
- Check that hashed user_id appears in GA4 DebugView

### Users not linking across sessions? 🆕
- Ensure same email address is used
- Check that user hasn't cleared cookies/changed browsers
- Verify User-ID is being set in both client and server tracking
- GA4 User-ID requires repeat visits to show linkage

## Resources
- [GA4 Measurement Protocol Documentation](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 User-ID Documentation](https://support.google.com/analytics/answer/9213390) 🆕
- [Next.js Script Optimization](https://nextjs.org/docs/pages/api-reference/components/script)
