'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm SanLuis AI. Ready to explore how AI can transform your business? Ask me anything or book a Discovery Session to get started.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = useCallback(async () => {
    const text = input.trim()
    if (!text || isLoading) return

    setInput('')
    setError(null)

    const userMessage: Message = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No response stream')

      const decoder = new TextDecoder()
      let assistantContent = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed === 'data: [DONE]') continue
          if (trimmed.startsWith('data: ')) {
            try {
              const data = JSON.parse(trimmed.slice(6))
              const delta = data?.choices?.[0]?.delta?.content
              if (delta) {
                assistantContent += delta
                setMessages((prev) => {
                  const updated = [...prev]
                  updated[updated.length - 1] = {
                    role: 'assistant',
                    content: assistantContent,
                  }
                  return updated
                })
              }
            } catch {
              // skip malformed JSON lines
            }
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading, messages])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend]
  )

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-goldGlow bg-gold-600 hover:bg-gold-500 transition-all duration-200 active:scale-95"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1A33" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1A33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex flex-col rounded overflow-hidden shadow-4 transition-all duration-300 ease-out origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
          w-[calc(100vw-48px)] max-w-[380px] h-[520px] max-h-[calc(100vh-160px)]`}
        style={{ backgroundColor: '#0B1A33' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: '#D9A434' }}>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded" style={{ backgroundColor: '#D9A434' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0B1A33">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0B1A33" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span className="font-sans text-sm font-semibold" style={{ color: '#FAF7F1' }}>
              Ask SanLuis AI
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAF7F1" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth" style={{ backgroundColor: '#0B1A33' }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed rounded ${
                  msg.role === 'user'
                    ? ''
                    : ''
                }`}
                style={{
                  backgroundColor: msg.role === 'user' ? '#D9A434' : '#1A3160',
                  color: msg.role === 'user' ? '#0B1A33' : '#FAF7F1',
                }}
              >
                {msg.content || (msg.role === 'assistant' && isLoading ? (
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#D9A434', animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#D9A434', animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#D9A434', animationDelay: '300ms' }} />
                  </span>
                ) : null)}
              </div>
            </div>
          ))}

          {error && (
            <div className="text-center">
              <span
                className="inline-block px-3 py-1.5 text-xs rounded"
                style={{ backgroundColor: 'rgba(217, 52, 52, 0.15)', color: '#e06060' }}
              >
                {error}
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 px-4 py-2" style={{ backgroundColor: '#0B1A33' }}>
          <button
            onClick={() => router.push('/booking')}
            className="flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors"
            style={{ backgroundColor: '#D9A434', color: '#0B1A33' }}
          >
            Book a Discovery Session
          </button>
          <button
            onClick={() => router.push('/services')}
            className="flex-1 px-3 py-1.5 text-xs font-medium rounded border transition-colors"
            style={{ borderColor: '#D9A434', color: '#D9A434' }}
          >
            View Services
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-t" style={{ borderColor: '#1A3160', backgroundColor: '#0B1A33' }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            disabled={isLoading}
            className="flex-1 px-3 py-2 text-sm rounded outline-none placeholder:text-sm disabled:opacity-50"
            style={{
              backgroundColor: '#1A3160',
              color: '#FAF7F1',
            }}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded transition-colors disabled:opacity-40"
            style={{ backgroundColor: '#D9A434' }}
            aria-label="Send"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0B1A33">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
