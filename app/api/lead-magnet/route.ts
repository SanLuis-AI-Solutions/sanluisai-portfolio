import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_PIPELINE_KEY = process.env.SUPABASE_PIPELINE_KEY || ''

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = String(body?.email || '').trim().toLowerCase()
    const name = String(body?.name || '').trim()
    const sourcePath = String(body?.sourcePath || '/blog')

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 })
    }

    if (!SUPABASE_URL || !SUPABASE_PIPELINE_KEY) {
      return NextResponse.json({ success: false, error: 'Lead capture is not configured' }, { status: 503 })
    }

    const displayName = name || email.split('@')[0]
    const now = new Date().toISOString()

    // Step 1: Create pipeline_leads record
    const leadPayload = {
      company_name: displayName,
      source: 'AI Cost Audit Template',
      stage: 'new',
      score: 55,
      notes: [
        'Source: AI Cost Audit Template',
        `Requested from: ${sourcePath}`,
        'Intent: Wants cost audit worksheet / lead magnet from blog content.',
      ].join('\n'),
      created_at: now,
      updated_at: now,
    }

    const leadRes = await fetch(`${SUPABASE_URL}/rest/v1/pipeline_leads`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PIPELINE_KEY,
        Authorization: `Bearer ${SUPABASE_PIPELINE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(leadPayload),
    })

    if (!leadRes.ok) {
      const text = await leadRes.text()
      console.error('[lead-magnet] pipeline_leads write failed:', leadRes.status, text)
      return NextResponse.json({ success: false, error: 'Lead capture failed' }, { status: 502 })
    }

    const leadRecord = await leadRes.json()
    const leadId = leadRecord?.[0]?.id

    // Step 2: Create pipeline_contacts record
    if (leadId) {
      const contactPayload = {
        lead_id: leadId,
        name: displayName,
        email,
        is_primary: true,
        created_at: now,
      }

      const contactRes = await fetch(`${SUPABASE_URL}/rest/v1/pipeline_contacts`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PIPELINE_KEY,
          Authorization: `Bearer ${SUPABASE_PIPELINE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactPayload),
      })

      if (!contactRes.ok) {
        const text = await contactRes.text()
        console.error('[lead-magnet] pipeline_contacts write failed:', contactRes.status, text)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[lead-magnet] Error:', error)
    return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'Lead magnet endpoint active' })
}
