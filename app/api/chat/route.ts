import { NextRequest } from 'next/server'

const OLLAMA_URL = 'https://ollama.com/v1/chat/completions'
const MODEL = 'deepseek-v4-flash'

const SYSTEM_PROMPT = `You are the SanLuis AI assistant — intelligent, warm, and outcome-driven.
Brand voice: "Your business, running on AI."

Your mission: Help visitors connect their real business problem to a specific outcome SanLuis AI can deliver. You don't sell chatbots — you sell what happens after: faster quotes, automated busywork, clients who can't believe how quick they respond.

Core messaging principles:
1. SELL OUTCOMES, NOT FEATURES — People buy reduced costs, faster decisions, and eliminated busywork. Never describe what the tech does — describe what their business becomes.
2. GRAND SLAM OFFER — Every engagement solves ONE specific problem at a fixed price. You own everything. No subscriptions, no black boxes.
3. START SMALL — The $300 Discovery Session (1 hour) is the entry point. It's risk-free. Guide visitors here first.
4. TARGET: Houston-based SMB owners, operators, and decision-makers who value outcomes over hourly rates.

Always offer the Discovery Session (link: /booking) when relevant. Be concise, warm, and outcome-focused. Never be pushy — just helpful and insightful. Never list technical features. Always frame around time saved, revenue protected, or friction eliminated.`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const apiMessages = [{ role: 'system', content: SYSTEM_PROMPT }, ...messages]

    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: apiMessages,
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Ollama API error:', response.status, errorText)
      return new Response(JSON.stringify({ error: 'AI service unavailable' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const reader = response.body?.getReader()
          if (!reader) {
            controller.enqueue(encoder.encode('data: {"error":"No response stream"}\n\n'))
            controller.close()
            return
          }

          let buffer = ''
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            buffer += decoder.decode(value, { stream: true })

            const lines = buffer.split('\n')
            buffer = lines.pop() || ''

            for (const line of lines) {
              const trimmed = line.trim()
              if (!trimmed || trimmed === 'data: [DONE]') continue
              if (trimmed.startsWith('data: ')) {
                controller.enqueue(encoder.encode(trimmed + '\n\n'))
              }
            }
          }

          if (buffer.trim().startsWith('data: ')) {
            controller.enqueue(encoder.encode(buffer.trim() + '\n\n'))
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        } catch (err) {
          console.error('Stream error:', err)
          controller.enqueue(
            encoder.encode('data: {"error":"Stream interrupted"}\n\n')
          )
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('Chat API error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
