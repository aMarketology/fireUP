// Test Mailgun email sending
require('dotenv').config({ path: '.env.local' })
const Mailgun = require('mailgun.js')
const FormData = require('form-data')

async function testMailgun() {
  try {
    console.log('Testing Mailgun configuration...')
    console.log('API Key:', process.env.MAILGUN_API_KEY ? '✓ Set' : '✗ Missing')
    console.log('Domain:', process.env.MAILGUN_DOMAIN || 'austin-web-services.com')
    console.log('From:', process.env.MAILGUN_FROM || 'team@austin-web-services.com')
    console.log('To:', process.env.NOTIFICATION_EMAIL_1, process.env.NOTIFICATION_EMAIL_2)
    console.log('')

    const mailgun = new Mailgun(FormData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })

    console.log('Sending test email via Mailgun...')
    
    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: process.env.MAILGUN_FROM,
      to: [process.env.NOTIFICATION_EMAIL_1, process.env.NOTIFICATION_EMAIL_2],
      subject: '🔥 Test Email - Mailgun Configuration Check',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #ef4444; color: white; padding: 20px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔥 Mailgun Test - Success!</h1>
              </div>
              <div style="background: #f9fafb; padding: 20px;">
                <p>This is a test email from Fire Up Hibachi's dual-provider email system.</p>
                <p><strong>Primary Provider:</strong> Mailgun (this email)</p>
                <p><strong>Fallback Provider:</strong> Mailjet (activates if Mailgun fails)</p>
                <p style="margin-top: 30px; padding: 15px; background: #dcfce7; border-left: 4px solid #16a34a;">
                  ✅ If you're reading this, Mailgun is working correctly!
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log('✅ SUCCESS! Email sent via Mailgun')
    console.log('Message ID:', result.id)
    console.log('Status:', result.status)
    console.log('')
    console.log('Check your inbox at:', process.env.NOTIFICATION_EMAIL_1)
    
  } catch (error) {
    console.error('❌ FAILED to send via Mailgun')
    console.error('Error:', error.message)
    console.error('Details:', error.details || error)
    process.exit(1)
  }
}

testMailgun()
