import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

// Initialize Mailjet
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_SECRET_KEY || ''
)

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
      message
    } = formData

    // Email HTML content
    const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ef4444; color: white; padding: 20px; text-align: center; }
              .content { background: #f9fafb; padding: 20px; }
              .detail-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #ef4444; }
              .label { font-weight: bold; color: #ef4444; display: inline-block; width: 180px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔥 New Event Inquiry</h1>
              </div>
              <div class="content">
                <h2>Contact Information</h2>
                <div class="detail-box">
                  <p><span class="label">Name:</span> ${name}</p>
                  <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                  <p><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></p>
                </div>
                
                <h2>Event Details</h2>
                <div class="detail-box">
                  <p><span class="label">Event Type:</span> ${eventType || 'Not specified'}</p>
                  <p><span class="label">Event Date:</span> ${eventDate || 'Not specified'}</p>
                  <p><span class="label">Guest Count:</span> ${guestCount || 'Not specified'}</p>
                  <p><span class="label">Location:</span> ${eventLocation || 'Not specified'}</p>
                  <p><span class="label">Budget:</span> ${budget || 'Not specified'}</p>
                </div>
                
                ${dietaryRestrictions ? `
                <h2>Dietary Restrictions</h2>
                <div class="detail-box">
                  <p>${dietaryRestrictions}</p>
                </div>
                ` : ''}
                
                ${message ? `
                <h2>Additional Message</h2>
                <div class="detail-box">
                  <p>${message}</p>
                </div>
                ` : ''}
                
                <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 5px;">
                  <p style="margin: 0;"><strong>⚡ Quick Action Required:</strong></p>
                  <p style="margin: 5px 0 0 0;">Respond to this inquiry within 24 hours to maintain our excellent customer service!</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `

    // Send email using Mailjet
    const request_mailjet = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'info@amarketology.com',
              Name: 'Fire Up Hibachi'
            },
            To: [
              {
                Email: process.env.NOTIFICATION_EMAIL_1 || 'Fireuphibachi@gmail.com',
                Name: 'Fire Up Hibachi'
              },
              {
                Email: process.env.NOTIFICATION_EMAIL_2 || 'info@amarketology.com',
                Name: 'A Marketology'
              }
            ],
            Subject: `🔥 New Event Inquiry - ${name}`,
            HTMLPart: htmlContent
          }
        ]
      })

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
