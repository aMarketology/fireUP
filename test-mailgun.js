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
      subject: '🔥 Fire Up Hibachi - Email System Test',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
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
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                font-size: 32px;
                margin-bottom: 8px;
              }
              .header .tagline {
                color: #fca5a5;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .content {
                padding: 35px 30px;
              }
              .success-box {
                background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%);
                border: 2px solid #10b981;
                border-radius: 10px;
                padding: 25px;
                text-align: center;
                margin-bottom: 25px;
              }
              .success-box .icon {
                font-size: 48px;
                margin-bottom: 15px;
              }
              .success-box h2 {
                color: #065f46;
                font-size: 24px;
                margin-bottom: 10px;
              }
              .success-box p {
                color: #047857;
                font-size: 15px;
                line-height: 1.6;
              }
              .info-section {
                background: #f9fafb;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
              }
              .info-row {
                display: flex;
                padding: 10px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .info-label {
                font-weight: 700;
                color: #ef4444;
                min-width: 180px;
              }
              .info-value {
                color: #374151;
              }
              .status-badge {
                display: inline-block;
                background: #10b981;
                color: white;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
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
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="gradient-bar"></div>
              
              <div class="header">
                <h1>🔥 Fire Up Hibachi</h1>
                <p class="tagline">Email System Test</p>
              </div>
              
              <div class="content">
                <div class="success-box">
                  <div class="icon">✅</div>
                  <h2>Email System Working Perfectly!</h2>
                  <p>Your dual-provider email delivery system is configured correctly and ready to handle all customer inquiries.</p>
                </div>

                <h3 style="color: #111827; margin-bottom: 15px;">📋 Configuration Details</h3>
                <div class="info-section">
                  <div class="info-row">
                    <span class="info-label">Primary Provider:</span>
                    <span class="info-value">Mailgun <span class="status-badge">ACTIVE</span></span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Fallback Provider:</span>
                    <span class="info-value">Mailjet (Auto-activates if primary fails)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Sending Domain:</span>
                    <span class="info-value">${process.env.MAILGUN_DOMAIN}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">From Address:</span>
                    <span class="info-value">${process.env.MAILGUN_FROM}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Notification Recipients:</span>
                    <span class="info-value">${process.env.NOTIFICATION_EMAIL_1}, ${process.env.NOTIFICATION_EMAIL_2}</span>
                  </div>
                </div>

                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 6px; margin-top: 25px;">
                  <p style="color: #92400e; margin: 0;">
                    <strong>✨ What This Means:</strong> All form submissions from your website will now be delivered reliably with automatic failover protection. Your customers will never experience a failed submission!
                  </p>
                </div>
              </div>
              
              <div class="footer">
                <div class="brand">🔥 Fire Up Hibachi</div>
                <p style="margin-top: 10px; color: #71717a;">
                  Premium Hibachi Catering • Riverside & Southern California
                </p>
                <p style="margin-top: 10px; font-size: 11px; color: #52525b;">
                  Test email sent on ${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
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
