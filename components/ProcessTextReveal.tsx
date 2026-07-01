'use client'

import { Kino, TextReveal } from 'react-kino'

const phrases = [
  'We start with your operation, not a template.',
  'One Discovery Session maps your work.',
  'We find the highest-impact opportunity.',
  'You get a written plan before any build begins.',
  'Fixed price. Fixed scope.',
  'We build the tool, test it against your real work.',
  'In weeks, not months.',
  'Installed into your workflow.',
  'Your team trained. Baseline set.',
  'You own everything from day one.',
  'We do not disappear.',
  'Post-launch support, monthly tune-ups.',
  'Your system keeps delivering as your business grows.',
]

export default function ProcessTextReveal() {
  return (
    <section className="bg-navy-900 py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kino>
          <div className="space-y-6 md:space-y-8 font-display text-xl md:text-3xl text-bone-50 leading-relaxed tracking-[-0.01em]">
            {phrases.map((phrase, i) => (
              <TextReveal key={i} mode="word" at={i * 0.07}>
                {phrase}
              </TextReveal>
            ))}
          </div>
        </Kino>
      </div>
    </section>
  )
}
