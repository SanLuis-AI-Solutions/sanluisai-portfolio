import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ''
const AIRTABLE_BASE = 'app6ogTLP23Fy37bR'
const AIRTABLE_TABLE = 'tblGveYdPHYv8BKlI'

const SMTP_HOST = 'smtp.gmail.com'
const SMTP_PORT = 465
const SMTP_USER = 'contact@sanluisai.com'
const SMTP_PASS = process.env.SMTP_PASS || ''
const CAL_LINK = 'https://cal.com/sanluisai/discovery-session'

function buildReportEmailHtml(
  name: string,
  email: string,
  percentScore: number,
  verdict: string,
  categories: { key: string; label: string; score: number; max: number }[]
): string {
  const bars = categories
    .map(
      (c) => `
    <tr>
      <td style="padding: 8px 0; color: #1A3160; font-size: 14px;">${c.label}</td>
      <td style="padding: 8px 0;">
        <div style="background: #E5E7EB; border-radius: 4px; height: 8px; width: 100%;">
          <div style="background: ${c.score >= 70 ? '#10B981' : c.score >= 40 ? '#D9A434' : '#EF4444'}; height: 8px; border-radius: 4px; width: ${c.score}%;"></div>
        </div>
      </td>
      <td style="padding: 8px 0; color: #67758B; font-size: 14px; text-align: right;">${c.score}/${c.max}</td>
    </tr>`
    )
    .join('')

  return `
<div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F1; color: #1A3160;">
  <div style="border-bottom: 2px solid #D9A434; padding-bottom: 16px; margin-bottom: 24px;">
    <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; margin: 0;">SanLuis AI</h1>
    <p style="color: #67758B; font-size: 14px; margin: 4px 0 0;">Surgical AI Implementations</p>
  </div>

  <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
  <p style="font-size: 16px; line-height: 1.6;">Here is your AI Readiness Assessment summary.</p>

  <div style="text-align: center; margin: 24px 0;">
    <div style="display: inline-block; width: 120px; height: 120px; border-radius: 50%; border: 6px solid #D9A434; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
      <span style="font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: bold; color: #1A3160;">${percentScore}</span>
    </div>
    <p style="color: #67758B; font-size: 14px; margin-top: 4px;">out of 100</p>
  </div>

  <p style="font-size: 18px; font-weight: 600; color: #1A3160; text-align: center;">${verdict}</p>

  <table style="width: 100%; margin: 24px 0;">
    ${bars}
  </table>

  <p style="font-size: 16px; line-height: 1.6;">
    The next step is a 60-minute Discovery Session where we identify your specific challenges and build a custom AI Action Plan.
  </p>

  <div style="text-align: center; margin: 32px 0;">
    <a href="${CAL_LINK}" 
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

async function sendEmail(
  to: string,
  name: string,
  percentScore: number,
  verdict: string,
  breakdown: { key: string; label: string; score: number; max: number }[]
): Promise<boolean> {
  if (!SMTP_PASS) return false
  try {
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    await transporter.sendMail({
      from: `"SanLuis AI" <${SMTP_USER}>`,
      to,
      subject: `Your AI Readiness Score: ${percentScore}/100 — SanLuis AI`,
      html: buildReportEmailHtml(name, to, percentScore, verdict, breakdown),
    })
    return true
  } catch {
    return false
  }
}

const ALL_CATEGORIES = [
  { key: 'clarity', label: 'Clarity', max: 100 },
  { key: 'data', label: 'Data', max: 100 },
  { key: 'adoption', label: 'Adoption', max: 100 },
  { key: 'infrastructure', label: 'Infrastructure', max: 100 },
  { key: 'leadership', label: 'Leadership', max: 100 },
]

function getVerdict(score: number): string {
  if (score >= 80) return 'Ready to Build'
  if (score >= 55) return 'Discovery Recommended'
  if (score >= 35) return 'Foundation Phase'
  return 'Discovery First'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, scores } = body as {
      name: string
      email: string
      scores: Record<string, number>
    }

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email required' }, { status: 400 })
    }

    const total = Object.values(scores).reduce((a: number, b: number) => a + b, 0)
    const maxPossible = ALL_CATEGORIES.length * 100
    const percentScore = Math.round((total / maxPossible) * 100)
    const verdict = getVerdict(percentScore)
    const displayName = name || email.split('@')[0] || 'there'

    // Build breakdown for email
    const breakdown = ALL_CATEGORIES.map((c) => ({
      ...c,
      score: scores[c.key] || 0,
    }))

    // Build Airtable description
    const lines = breakdown.map((c) => `${c.label}: ${c.score}/${c.max}`)
    const description = [
      `Source: Assessment Quiz`,
      `Score: ${percentScore}/100 — ${verdict}`,
      '',
      ...lines,
    ].join('\n')

    // Write to Airtable
    let airtableId: string | null = null
    if (AIRTABLE_API_KEY) {
      const now = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', hour12: false }).replace(',', '')
      const fields: Record<string, string | number> = {
        Name: displayName,
        Industry: '',
        Stage: 'Lead New',
        Description: description,
        'Lead Score': Math.min(Math.round(percentScore / 2) + 30, 70),
        'Last Updated': now,
        Email: email,
      }

      const filterFormula = encodeURIComponent(`{Email}="${email}"`)
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
            body: JSON.stringify({ fields }),
          }
        )
        const result: any = await updateRes.json()
        airtableId = result?.id
      } else {
        const createRes = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
          {
            method: 'POST',
            headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields }),
          }
        )
        const result: any = await createRes.json()
        airtableId = result?.id
      }
    }

    // Send report email
    const emailSent = await sendEmail(email, displayName, percentScore, verdict, breakdown)

    return NextResponse.json({
      success: true,
      airtable: airtableId ? { id: airtableId } : null,
      email_sent: emailSent,
      score: percentScore,
      verdict,
    })
  } catch (error) {
    console.error('[assessment] Error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'Assessment endpoint active' })
}
