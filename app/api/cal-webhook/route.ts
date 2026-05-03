import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ''
const AIRTABLE_BASE = 'app6ogTLP23Fy37bR'
const AIRTABLE_TABLE = 'tblGveYdPHYv8BKlI'

// SMTP config from env or inline
const SMTP_HOST = 'smtp.gmail.com'
const SMTP_PORT = 465
const SMTP_USER = 'contact@sanluisai.com'
const SMTP_PASS = process.env.SMTP_PASS || ''
const CAL_LINK = 'https://cal.com/sanluisai/discovery-session'

function extractCompany(url: string, overview: string = '', businessType: string = ''): string {
  if (overview) {
    // Try to extract company name from business overview (first sentence or line)
    const firstLine = overview.split(/[.\n]/)[0].trim()
    if (firstLine && firstLine.length < 80) return firstLine
  }
  if (businessType) return businessType
  if (url) {
    try {
      const hostname = new URL(url.startsWith('http') ? url : `https://${url}`).hostname
      return hostname.replace(/^www\./, '').split('.')[0] || hostname
    } catch {}
  }
  return ''
}

function buildEmailHtml(name: string, company: string, calLink: string): string {
  const companyLine = company ? ` representing **${company}**` : ''
  return `
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F1; color: #1A3160;">
  <div style="border-bottom: 2px solid #D9A434; padding-bottom: 16px; margin-bottom: 24px;">
    <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; margin: 0;">SanLuis AI</h1>
    <p style="color: #67758B; font-size: 14px; margin: 4px 0 0;">Surgical AI Implementations</p>
  </div>
  
  <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
  
  <p style="font-size: 16px; line-height: 1.6;">
    You've taken the first step${companyLine} — and that takes guts.
  </p>
  
  <p style="font-size: 16px; line-height: 1.6;">
    Your <strong>$300 Discovery Session</strong> is a 60-minute structured diagnosis where we'll:
  </p>
  
  <ul style="font-size: 16px; line-height: 1.8; padding-left: 20px;">
    <li>Name your single most expensive bottleneck</li>
    <li>Map exactly what it costs you</li>
    <li>Outline the build that removes it</li>
  </ul>
  
  <p style="font-size: 16px; line-height: 1.6;">
    After the session, you'll receive a Custom AI Action Plan PDF documenting everything we covered.
  </p>
  
  <div style="text-align: center; margin: 32px 0;">
    <a href="${calLink}" 
       style="display: inline-block; background: #1A3160; color: white; text-decoration: none; 
              padding: 14px 32px; border-radius: 6px; font-size: 15px; font-weight: 600;">
      Book Your Discovery Session
    </a>
  </div>
  
  <p style="font-size: 14px; line-height: 1.6; color: #67758B;">
    Questions? Reply to this email or reach us on Telegram at @SanLuisAiClientbot.
  </p>
  
  <div style="border-top: 1px solid #D1D5DB; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #9CA3AF; text-align: center;">
    <p>SanLuis AI Solutions · Houston, TX</p>
  </div>
</div>`
}

async function sendEmail(to: string, name: string, company: string): Promise<boolean> {
  if (!SMTP_PASS) return false
  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    await transporter.sendMail({
      from: `"SanLuis AI" <${SMTP_USER}>`,
      to,
      subject: 'Your SanLuis AI Discovery Session — Next Steps',
      html: buildEmailHtml(name, company, CAL_LINK),
    })
    console.log(`[cal-webhook] Email sent to ${to}`)
    return true
  } catch (err) {
    console.error(`[cal-webhook] Email failed to ${to}:`, err)
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log('[cal-webhook] Booking event received')

    const booking = body?.payload?.booking || body?.booking || body
    const attendee = booking?.attendees?.[0] || booking?.attendee || {}
    const bookerEmail = attendee?.email || booking?.email || body?.email || ''
    const bookerName = attendee?.name || booking?.name || body?.name || 'Unknown'
    const eventTitle = booking?.eventType?.title || body?.eventType?.title || 'Discovery Session'
    const eventId = booking?.eventType?.id || body?.eventTypeId || 0
    const startTime = booking?.start || booking?.startTime || ''

    const responses = booking?.responses || body?.responses || body?.payload?.responses || {}
    const companyWebsite = responses?.['company-website']?.value || ''
    const businessOverview = responses?.['business-overview']?.value || ''
    const biggestPain = responses?.['biggest-pain']?.value || ''
    const currentTools = responses?.['current-tools']?.value || ''
    const aiExperience = responses?.['ai-experience']?.value || ''
    const budget = responses?.['budget']?.value || ''
    const languagePref = responses?.['language-preference']?.value || ''
    const businessType = responses?.['business-type']?.value || ''
    const whyExploring = responses?.['why-exploring']?.value || ''

    // Extract company name properly
    const company = extractCompany(companyWebsite, businessOverview, businessType)

    // Build the description
    const problemParts = [
      biggestPain ? `Pain: ${biggestPain}` : '',
      businessOverview ? `About: ${businessOverview}` : '',
      currentTools ? `Tools: ${currentTools}` : '',
      aiExperience ? `AI Exp: ${aiExperience}` : '',
      budget ? `Budget: ${budget}` : '',
      whyExploring ? `Why: ${whyExploring}` : '',
      businessType ? `Business: ${businessType}` : '',
    ].filter(Boolean)
    const description = problemParts.join('\n') || `Booked via website: ${eventTitle}`

    // Build Airtable record
    const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: false }).replace(',', '')
    const airtableFields: Record<string, string | number> = {
      Name: bookerName,
      Domain: companyWebsite || '',
      Industry: company,
      Stage: 'Lead New',
      Description: description,
      'Lead Score': companyWebsite || budget ? 60 : 50,
      'Last Updated': now,
    }
    if (bookerEmail) airtableFields['Email'] = bookerEmail

    // Write to Airtable with upsert
    let airtableId: string | null = null
    if (bookerEmail && AIRTABLE_API_KEY) {
      const filterFormula = encodeURIComponent(`{Email}="${bookerEmail}"`)
      const checkRes = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?filterByFormula=${filterFormula}`,
        { headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` } }
      )
      const checkData: any = await checkRes.json()
      const existing = checkData?.records || []

      if (existing.length > 0) {
        const recId = existing[0].id
        const updateRes = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}/${recId}`,
          {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields: airtableFields }),
          }
        )
        const result: any = await updateRes.json()
        airtableId = result?.id
        console.log(`[cal-webhook] Updated Airtable: ${airtableId}`)
      } else {
        const createRes = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
          {
            method: 'POST',
            headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields: airtableFields }),
          }
        )
        const result: any = await createRes.json()
        airtableId = result?.id
        console.log(`[cal-webhook] Created Airtable: ${airtableId}`)
      }
    }

    // Send email confirmation
    let emailSent = false
    if (bookerEmail) {
      emailSent = await sendEmail(bookerEmail, bookerName, company)
    }

    return NextResponse.json({
      success: true,
      airtable: airtableId ? { id: airtableId } : null,
      email_sent: emailSent,
    })
  } catch (error) {
    console.error('[cal-webhook] Error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'Cal.com webhook endpoint active' })
}
