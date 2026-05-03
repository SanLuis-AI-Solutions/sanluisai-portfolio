'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const problems = [
  { name: 'Manufacturing', desc: 'Production bottlenecks slowing throughput. Unplanned downtime reducing output. Quality gaps driving waste.' },
  { name: 'Healthcare', desc: 'Administrative overhead consuming clinical hours. Prior authorization delays. Patient intake backlogs.' },
  { name: 'Real Estate', desc: 'Lead response gaps losing deals. Property management tasks cascading. Market analysis cycles too slow.' },
  { name: 'Professional Services', desc: 'Billable hours drowning in admin. Document review backlogs. Client onboarding stretching to weeks.' },
]

export default function Problem() {
  return (
    <section id="problem" className="py-32 md:py-40 bg-bone-100">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <FadeIn delay={0}><span className="sl-eyebrow mb-8">The Challenges We Solve</span></FadeIn>
          <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">Every industry has processes that slow it down.</h2></FadeIn>
          <FadeIn delay={0.2}><p className="sl-lede mb-16 max-w-[56ch]">We find the one costing you the most — and eliminate it with AI.</p></FadeIn>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200 rounded overflow-hidden">
          {problems.map((p, i) => (
            <FadeIn key={p.name} delay={0.2 + i * 0.08}>
              <div className="bg-bone-100 p-8 md:p-10 h-full">
                <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{p.name}</div>
                <p className="font-sans text-sm text-fg2 leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
