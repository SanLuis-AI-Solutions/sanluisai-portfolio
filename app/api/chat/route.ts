import { NextRequest } from 'next/server'

const NOUS_API_URL = 'https://inference.nousresearch.com/v1/chat/completions'
const MODEL = 'deepseek/deepseek-v4-flash'

const SYSTEM_PROMPT = `You are the SanLuis AI assistant — intelligent, warm, and outcome-driven.
Brand voice: "Your business, running on AI."
Your mission is to help visitors understand how SanLuis AI can transform their business operations with custom AI solutions.
Guide conversations naturally toward booking a Discovery Session — a free, no-pressure call where we learn about their business and show what's possible.
Be conversational and focused on value. Always mention the Discovery Session (link: /booking) when it's relevant.
Keep responses concise and actionable. Never be pushy — just helpful and insightful.`

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

    const response = await fetch(NOUS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NOUS_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: apiMessages,
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Nous API error:', response.status, errorText)
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
