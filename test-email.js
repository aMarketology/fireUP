require('dotenv').config({ path: '.env' })
const sgMail = require('@sendgrid/mail')

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

console.log('🔥 Testing Fire Up Hibachi Email Integration...\n')
console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY ? '✅ Found' : '❌ Missing')
console.log('Notification Email 1:', process.env.NOTIFICATION_EMAIL_1 || '❌ Missing')
console.log('Notification Email 2:', process.env.NOTIFICATION_EMAIL_2 || '❌ Missing')
console.log('\n---\n')

// Test data
const testFormData = {
  name: 'John Test',
  email: 'test@example.com', // Change this to your email for testing
  phone: '(555) 123-4567',
  eventType: 'Birthday Party',
  eventDate: '2025-12-15',
  guestCount: '25',
  eventLocation: 'Irvine, CA',
  budget: '$1,500 - $2,000',
  dietaryRestrictions: 'Vegetarian options needed',
  message: 'This is a test inquiry for my birthday party!'
}

// Email to business owners (NO customer email - only notification to business)
const notificationEmail = {
  to: [
    process.env.NOTIFICATION_EMAIL_1 || 'Fireuphibachi@gmail.com',
    process.env.NOTIFICATION_EMAIL_2 || 'info@amarketology.com'
  ],
  from: 'info@amarketology.com',
  subject: `🔥 New Event Inquiry - ${testFormData.name}`,
  html: `
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
            <h1>🔥 TEST - New Event Inquiry</h1>
          </div>
          <div class="content">
            <h2>Contact Information</h2>
            <div class="detail-box">
              <p><span class="label">Name:</span> ${testFormData.name}</p>
              <p><span class="label">Email:</span> ${testFormData.email}</p>
              <p><span class="label">Phone:</span> ${testFormData.phone}</p>
            </div>
            
            <h2>Event Details</h2>
            <div class="detail-box">
              <p><span class="label">Event Type:</span> ${testFormData.eventType}</p>
              <p><span class="label">Event Date:</span> ${testFormData.eventDate}</p>
              <p><span class="label">Guest Count:</span> ${testFormData.guestCount}</p>
              <p><span class="label">Location:</span> ${testFormData.eventLocation}</p>
              <p><span class="label">Budget:</span> ${testFormData.budget}</p>
            </div>
            
            <h2>Dietary Restrictions</h2>
            <div class="detail-box">
              <p>${testFormData.dietaryRestrictions}</p>
            </div>
            
            <h2>Additional Message</h2>
            <div class="detail-box">
              <p>${testFormData.message}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

async function sendTestEmails() {
  try {
    console.log('📧 Sending notification email to business owners...\n')
    
    console.log('Sending to:')
    console.log('   -', process.env.NOTIFICATION_EMAIL_1)
    console.log('   -', process.env.NOTIFICATION_EMAIL_2)
    await sgMail.send(notificationEmail)
    console.log('   ✅ Notification emails sent successfully!\n')
    
    console.log('🎉 Test email sent successfully!')
    console.log('\n📬 Check your inboxes (and spam folders) for the test email.')
    
  } catch (error) {
    console.error('❌ Error sending test emails:', error.message)
    if (error.response) {
      console.error('Response body:', error.response.body)
    }
  }
}

sendTestEmails()
