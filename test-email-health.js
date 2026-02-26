// Weekly Email Health Check - Tests both Mailgun and Mailjet
require('dotenv').config({ path: '.env.local' })
const Mailgun = require('mailgun.js')
const FormData = require('form-data')
const Mailjet = require('node-mailjet')
const fs = require('fs')

const results = {
  testDate: new Date().toISOString(),
  mailgun: { status: 'untested', error: null, messageId: null, responseTime: 0 },
  mailjet: { status: 'untested', error: null, messageId: null, responseTime: 0 },
  overallStatus: 'unknown'
}

async function testMailgun() {
  console.log('Testing Mailgun...')
  const startTime = Date.now()
  
  try {
    const mailgun = new Mailgun(FormData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })

    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: process.env.MAILGUN_FROM,
      to: [process.env.NOTIFICATION_EMAIL_1],
      subject: '🔥 Weekly Health Check - Mailgun Test',
      text: 'Mailgun is operational',
    })

    results.mailgun.status = 'success'
    results.mailgun.messageId = result.id
    results.mailgun.responseTime = Date.now() - startTime
    console.log('✅ Mailgun: SUCCESS')
    
  } catch (error) {
    results.mailgun.status = 'failed'
    results.mailgun.error = error.message
    results.mailgun.responseTime = Date.now() - startTime
    console.error('❌ Mailgun: FAILED -', error.message)
  }
}

async function testMailjet() {
  console.log('Testing Mailjet...')
  const startTime = Date.now()
  
  try {
    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY,
      process.env.MAILJET_SECRET_KEY
    )

    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'info@amarketology.com',
            Name: 'Fire Up Hibachi',
          },
          To: [
            {
              Email: process.env.NOTIFICATION_EMAIL_1,
              Name: 'Fire Up Hibachi',
            },
          ],
          Subject: '🔥 Weekly Health Check - Mailjet Test',
          TextPart: 'Mailjet is operational',
        },
      ],
    })

    results.mailjet.status = 'success'
    results.mailjet.messageId = result.body.Messages[0].To[0].MessageID
    results.mailjet.responseTime = Date.now() - startTime
    console.log('✅ Mailjet: SUCCESS')
    
  } catch (error) {
    results.mailjet.status = 'failed'
    results.mailjet.error = error.message
    results.mailjet.responseTime = Date.now() - startTime
    console.error('❌ Mailjet: FAILED -', error.message)
  }
}

function determineOverallStatus() {
  const mailgunWorking = results.mailgun.status === 'success'
  const mailjetWorking = results.mailjet.status === 'success'
  
  if (mailgunWorking) {
    results.overallStatus = 'healthy'
  } else if (mailjetWorking) {
    results.overallStatus = 'degraded'
  } else {
    results.overallStatus = 'critical'
  }
}

async function sendHealthReport() {
  const mailgunWorking = results.mailgun.status === 'success'
  const mailjetWorking = results.mailjet.status === 'success'

  const statusEmoji = {
    healthy: '✅',
    degraded: '⚠️',
    critical: '🚨'
  }

  const statusColor = {
    healthy: '#10b981',
    degraded: '#f59e0b',
    critical: '#ef4444'
  }

  const statusBg = {
    healthy: '#dcfce7',
    degraded: '#fef3c7',
    critical: '#fee2e2'
  }

  const htmlReport = `
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
          .header h1 { font-size: 28px; margin-bottom: 8px; }
          .header .tagline { color: #a1a1aa; font-size: 13px; }
          .content { padding: 35px 30px; }
          .status-banner {
            background: ${statusBg[results.overallStatus]};
            border: 2px solid ${statusColor[results.overallStatus]};
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            margin-bottom: 30px;
          }
          .status-banner .icon { font-size: 48px; margin-bottom: 10px; }
          .status-banner h2 { 
            color: ${statusColor[results.overallStatus]};
            font-size: 24px;
            margin-bottom: 8px;
          }
          .provider-card {
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
          }
          .provider-card.success { border-color: #10b981; background: #f0fdf4; }
          .provider-card.failed { border-color: #ef4444; background: #fef2f2; }
          .provider-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          .provider-name {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
          }
          .badge.success { background: #10b981; color: white; }
          .badge.failed { background: #ef4444; color: white; }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 14px;
          }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { color: #6b7280; font-weight: 600; }
          .detail-value { color: #111827; }
          .footer {
            background: #18181b;
            color: #a1a1aa;
            padding: 30px;
            text-align: center;
            font-size: 13px;
          }
          .footer .brand { color: #ef4444; font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="gradient-bar"></div>
          
          <div class="header">
            <h1>🔥 Email System Health Report</h1>
            <p class="tagline">Weekly Automated Check</p>
          </div>
          
          <div class="content">
            <div class="status-banner">
              <div class="icon">${statusEmoji[results.overallStatus]}</div>
              <h2>System Status: ${results.overallStatus.toUpperCase()}</h2>
              <p style="color: #374151; margin-top: 8px;">
                ${results.overallStatus === 'healthy' ? 'All email providers are operational' :
                  results.overallStatus === 'degraded' ? 'Primary provider down, fallback active' :
                  'Critical: All email providers are down'}
              </p>
            </div>

            <h3 style="color: #111827; margin-bottom: 15px;">Provider Test Results</h3>
            
            <!-- Mailgun Results -->
            <div class="provider-card ${results.mailgun.status}">
              <div class="provider-header">
                <span class="provider-name">Mailgun (Primary)</span>
                <span class="badge ${results.mailgun.status}">${results.mailgun.status}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Response Time:</span>
                <span class="detail-value">${results.mailgun.responseTime}ms</span>
              </div>
              ${results.mailgun.messageId ? `
              <div class="detail-row">
                <span class="detail-label">Message ID:</span>
                <span class="detail-value" style="font-size: 11px; word-break: break-all;">${results.mailgun.messageId}</span>
              </div>
              ` : ''}
              ${results.mailgun.error ? `
              <div class="detail-row">
                <span class="detail-label">Error:</span>
                <span class="detail-value" style="color: #ef4444;">${results.mailgun.error}</span>
              </div>
              ` : ''}
            </div>

            <!-- Mailjet Results -->
            <div class="provider-card ${results.mailjet.status}">
              <div class="provider-header">
                <span class="provider-name">Mailjet (Fallback)</span>
                <span class="badge ${results.mailjet.status}">${results.mailjet.status}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Response Time:</span>
                <span class="detail-value">${results.mailjet.responseTime}ms</span>
              </div>
              ${results.mailjet.messageId ? `
              <div class="detail-row">
                <span class="detail-label">Message ID:</span>
                <span class="detail-value" style="font-size: 11px; word-break: break-all;">${results.mailjet.messageId}</span>
              </div>
              ` : ''}
              ${results.mailjet.error ? `
              <div class="detail-row">
                <span class="detail-label">Error:</span>
                <span class="detail-value" style="color: #ef4444;">${results.mailjet.error}</span>
              </div>
              ` : ''}
            </div>

            ${results.overallStatus !== 'healthy' ? `
            <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; border-radius: 6px; margin-top: 25px;">
              <p style="color: #991b1b; margin: 0;">
                <strong>⚠️ Action Required:</strong> 
                ${results.overallStatus === 'degraded' ? 
                  'Your primary email provider (Mailgun) is not responding. The fallback (Mailjet) is handling emails, but you should investigate Mailgun.' :
                  'Both email providers are down! Check your API credentials and provider dashboards immediately.'}
              </p>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <div class="brand">🔥 Fire Up Hibachi</div>
            <p style="margin-top: 10px; color: #71717a;">Automated Email Health Check</p>
            <p style="margin-top: 10px; font-size: 11px; color: #52525b;">
              Test run: ${new Date(results.testDate).toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  // Try to send the report using whichever provider is working
  console.log('\nSending health report...')
  
  if (mailgunWorking) {
    try {
      const mailgun = new Mailgun(FormData)
      const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY,
      })

      await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: process.env.MAILGUN_FROM,
        to: [process.env.NOTIFICATION_EMAIL_1, process.env.NOTIFICATION_EMAIL_2],
        subject: `${statusEmoji[results.overallStatus]} Email System Health Report - ${results.overallStatus.toUpperCase()}`,
        html: htmlReport,
      })
      console.log('✅ Health report sent via Mailgun')
    } catch (error) {
      console.error('❌ Failed to send report via Mailgun:', error.message)
    }
  } else if (mailjetWorking) {
    try {
      const mailjet = Mailjet.apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_SECRET_KEY
      )

      await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: { Email: 'info@amarketology.com', Name: 'Fire Up Hibachi' },
            To: [
              { Email: process.env.NOTIFICATION_EMAIL_1, Name: 'Fire Up Hibachi' },
              { Email: process.env.NOTIFICATION_EMAIL_2, Name: 'A Marketology' },
            ],
            Subject: `${statusEmoji[results.overallStatus]} Email System Health Report - ${results.overallStatus.toUpperCase()}`,
            HTMLPart: htmlReport,
          },
        ],
      })
      console.log('✅ Health report sent via Mailjet')
    } catch (error) {
      console.error('❌ Failed to send report via Mailjet:', error.message)
    }
  } else {
    console.error('🚨 CRITICAL: Cannot send health report - both providers are down!')
  }
}

async function runHealthCheck() {
  console.log('='.repeat(60))
  console.log('🔥 Fire Up Hibachi - Email System Health Check')
  console.log('='.repeat(60))
  console.log(`Test Date: ${new Date().toLocaleString()}`)
  console.log('')

  await testMailgun()
  await testMailjet()
  
  determineOverallStatus()
  
  console.log('')
  console.log('='.repeat(60))
  console.log('Overall Status:', results.overallStatus.toUpperCase())
  console.log('='.repeat(60))
  
  // Save results to file (for GitHub Actions artifact)
  const reportText = `
Email System Health Check
Test Date: ${new Date(results.testDate).toLocaleString()}

Overall Status: ${results.overallStatus.toUpperCase()}

Mailgun (Primary):
  Status: ${results.mailgun.status.toUpperCase()}
  Response Time: ${results.mailgun.responseTime}ms
  ${results.mailgun.messageId ? `Message ID: ${results.mailgun.messageId}` : ''}
  ${results.mailgun.error ? `Error: ${results.mailgun.error}` : ''}

Mailjet (Fallback):
  Status: ${results.mailjet.status.toUpperCase()}
  Response Time: ${results.mailjet.responseTime}ms
  ${results.mailjet.messageId ? `Message ID: ${results.mailjet.messageId}` : ''}
  ${results.mailjet.error ? `Error: ${results.mailjet.error}` : ''}
  `
  
  fs.writeFileSync('email-health-report.txt', reportText.trim())
  
  await sendHealthReport()
  
  // Exit with error code if critical
  if (results.overallStatus === 'critical') {
    process.exit(1)
  }
}

runHealthCheck().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
