import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import { trackFormSubmission, generateClientId, generateUserIdFromEmail } from '@/lib/ga4'

// ── Mailgun (Primary) ────────────────────────────────────────────────
async function sendViaMailgun(subject: string, htmlContent: string) {
  const mailgun = new Mailgun(FormData)
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  })

  const to = [
    process.env.NOTIFICATION_EMAIL_1 || 'Fireuphibachi@gmail.com',
    process.env.NOTIFICATION_EMAIL_2 || 'info@amarketology.com',
  ]

  await mg.messages.create(process.env.MAILGUN_DOMAIN || 'austin-web-services.com', {
    from: process.env.MAILGUN_FROM || 'team@austin-web-services.com',
    to,
    subject,
    html: htmlContent,
  })

  console.log('[email] Sent via Mailgun')
}

// ── Mailjet (Fallback) ───────────────────────────────────────────────
async function sendViaMailjet(subject: string, htmlContent: string) {
  const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY || '',
    process.env.MAILJET_SECRET_KEY || ''
  )

  await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'info@amarketology.com',
          Name: 'Fire Up Hibachi',
        },
        To: [
          {
            Email: process.env.NOTIFICATION_EMAIL_1 || 'Fireuphibachi@gmail.com',
            Name: 'Fire Up Hibachi',
          },
          {
            Email: process.env.NOTIFICATION_EMAIL_2 || 'info@amarketology.com',
            Name: 'A Marketology',
          },
        ],
        Subject: subject,
        HTMLPart: htmlContent,
      },
    ],
  })

  console.log('[email] Sent via Mailjet fallback')
}

// ── POST handler ─────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      guestCount,
      eventLocation,
      budget,
      dietaryRestrictions,
      message,
    } = formData

    // Email HTML content
    const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
                line-height: 1.6; 
                color: #1f2937; 
                background-color: #f3f4f6;
                padding: 20px;
              }
              .container { 
                max-width: 650px; 
                margin: 0 auto; 
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .gradient-bar {
                height: 6px;
                background: linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #ef4444 100%);
              }
              .header { 
                background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
                color: white; 
                padding: 40px 30px 30px;
                text-align: center;
                position: relative;
              }
              .header h1 {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 8px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
              }
              .header .tagline {
                color: #fca5a5;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
              }
              .content { 
                padding: 35px 30px;
                background: #ffffff;
              }
              .welcome-text {
                font-size: 16px;
                color: #4b5563;
                margin-bottom: 30px;
                padding: 20px;
                background: #fef3c7;
                border-left: 4px solid #f59e0b;
                border-radius: 6px;
              }
              .section {
                margin-bottom: 30px;
              }
              .section-title {
                font-size: 18px;
                font-weight: 700;
                color: #111827;
                margin-bottom: 15px;
                padding-bottom: 8px;
                border-bottom: 2px solid #ef4444;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .detail-box { 
                background: #f9fafb;
                padding: 20px;
                margin: 12px 0;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .detail-row {
                display: flex;
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .detail-row:last-child {
                border-bottom: none;
              }
              .label { 
                font-weight: 700;
                color: #ef4444;
                min-width: 140px;
                font-size: 14px;
              }
              .value {
                color: #374151;
                flex: 1;
                font-size: 14px;
              }
              .value a {
                color: #2563eb;
                text-decoration: none;
              }
              .value a:hover {
                text-decoration: underline;
              }
              .highlight-box {
                background: linear-gradient(135deg, #fee2e2 0%, #fef3c7 100%);
                border: 2px solid #f97316;
                border-radius: 10px;
                padding: 25px;
                margin-top: 30px;
                text-align: center;
              }
              .highlight-box .icon {
                font-size: 32px;
                margin-bottom: 10px;
              }
              .highlight-box h3 {
                color: #b91c1c;
                font-size: 20px;
                margin-bottom: 8px;
              }
              .highlight-box p {
                color: #92400e;
                font-size: 15px;
                line-height: 1.5;
              }
              .cta-buttons {
                display: flex;
                gap: 12px;
                justify-content: center;
                margin-top: 20px;
                flex-wrap: wrap;
              }
              .btn {
                display: inline-block;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.3s;
              }
              .btn-primary {
                background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
                color: white;
                box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
              }
              .btn-secondary {
                background: white;
                color: #ef4444;
                border: 2px solid #ef4444;
              }
              .footer {
                background: #18181b;
                color: #a1a1aa;
                padding: 30px;
                text-align: center;
                font-size: 13px;
              }
              .footer .brand {
                color: #ef4444;
                font-weight: 700;
                font-size: 18px;
                margin-bottom: 8px;
              }
              .footer .tagline {
                color: #71717a;
                margin-bottom: 15px;
              }
              .footer a {
                color: #f87171;
                text-decoration: none;
              }
              @media only screen and (max-width: 600px) {
                .detail-row {
                  flex-direction: column;
                }
                .label {
                  min-width: auto;
                  margin-bottom: 4px;
                }
                .cta-buttons {
                  flex-direction: column;
                }
                .btn {
                  width: 100%;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="gradient-bar"></div>
              
              <div class="header">
                <h1>🔥 Fire Up Hibachi</h1>
                <p class="tagline">New Event Inquiry Received</p>
              </div>
              
              <div class="content">
                <div class="welcome-text">
                  <strong>🎉 Exciting news!</strong> A new customer is ready to book an unforgettable hibachi experience. Review the details below and respond within 24 hours.
                </div>

                <!-- Contact Information Section -->
                <div class="section">
                  <h2 class="section-title">
                    <span>👤</span>
                    Contact Information
                  </h2>
                  <div class="detail-box">
                    <div class="detail-row">
                      <span class="label">Name:</span>
                      <span class="value">${name}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Email:</span>
                      <span class="value"><a href="mailto:${email}">${email}</a></span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Phone:</span>
                      <span class="value"><a href="tel:${phone}">${phone}</a></span>
                    </div>
                  </div>
                </div>
                
                <!-- Event Details Section -->
                <div class="section">
                  <h2 class="section-title">
                    <span>📅</span>
                    Event Details
                  </h2>
                  <div class="detail-box">
                    <div class="detail-row">
                      <span class="label">Event Type:</span>
                      <span class="value">${eventType || 'Not specified'}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Event Date:</span>
                      <span class="value">${eventDate || 'Not specified'}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Guest Count:</span>
                      <span class="value">${guestCount || 'Not specified'}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Location:</span>
                      <span class="value">${eventLocation || 'Not specified'}</span>
                    </div>
                    <div class="detail-row">
                      <span class="label">Budget Range:</span>
                      <span class="value">${budget || 'Not specified'}</span>
                    </div>
                  </div>
                </div>
                
                ${dietaryRestrictions ? `
                <!-- Dietary Restrictions Section -->
                <div class="section">
                  <h2 class="section-title">
                    <span>🥗</span>
                    Dietary Restrictions & Special Requests
                  </h2>
                  <div class="detail-box">
                    <p style="margin: 0; color: #374151;">${dietaryRestrictions}</p>
                  </div>
                </div>
                ` : ''}
                
                ${message ? `
                <!-- Additional Message Section -->
                <div class="section">
                  <h2 class="section-title">
                    <span>💬</span>
                    Customer Message
                  </h2>
                  <div class="detail-box">
                    <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                ` : ''}
                
                <!-- Call to Action -->
                <div class="highlight-box">
                  <div class="icon">⚡</div>
                  <h3>Quick Action Required</h3>
                  <p>Respond within 24 hours to maintain our 5-star customer service reputation and secure this booking!</p>
                  <div class="cta-buttons">
                    <a href="mailto:${email}" class="btn btn-primary">Reply to Customer</a>
                    <a href="tel:${phone}" class="btn btn-secondary">Call Now</a>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <div class="brand">🔥 Fire Up Hibachi</div>
                <div class="tagline">Premium Hibachi Catering • Riverside & Southern California</div>
                <p style="margin-top: 15px;">
                  <a href="tel:(951) 376-6014">(951) 376-6014</a> • 
                  <a href="https://fireuphibachi.com">fireuphibachi.com</a>
                </p>
                <p style="margin-top: 10px; font-size: 11px; color: #52525b;">
                  This is an automated notification from your website contact form.
                </p>
              </div>
            </div>
          </body>
        </html>
      `

    const subject = `🔥 New Event Inquiry - ${name}`

    // ── Dual-provider failover: Mailgun first, then Mailjet ──
    try {
      await sendViaMailgun(subject, htmlContent)
    } catch (mailgunError: any) {
      console.error('[email] Mailgun failed:', mailgunError.message)
      try {
        await sendViaMailjet(subject, htmlContent)
      } catch (mailjetError: any) {
        console.error('[email] Mailjet fallback also failed:', mailjetError.message)
        throw new Error('Both email providers failed')
      }
    }

    // Track form submission with GA4 Measurement Protocol
    const clientId = formData.ga_client_id || generateClientId()
    const userId = await generateUserIdFromEmail(email)

    await trackFormSubmission(
      clientId,
      {
        form_name: 'event_inquiry_form',
        event_type: eventType,
        guest_count: guestCount,
        budget: budget,
        event_location: eventLocation,
        email: email,
      },
      userId
    ).catch(err => console.error('GA4 tracking error:', err))

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending emails:', error)
    return NextResponse.json(
      { error: 'Failed to send emails', details: error.message },
      { status: 500 }
    )
  }
}
