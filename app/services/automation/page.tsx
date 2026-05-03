import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation — SanLuis AI Solutions',
  description: 'Eliminate manual busywork with intelligent workflow automation. Recover 20-40 hours per week per department with custom AI automation pipelines.',
}

export default function AutomationPage() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-6">AI Automation</h1>
          <p className="sl-body-lg max-w-prose mb-6">
            Workflow automation eliminates manual busywork. Your team spends hours on repetitive tasks that follow predictable rules &mdash; data entry, invoice processing, report generation, email triage. Every minute spent there is a minute stolen from work that actually needs your brain.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            We build intelligent automation pipelines that handle these workflows end to end. Our systems read, write, route, and act across your tools so your people can focus on decisions, not data.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            Typical automation projects recover 20 to 40 hours per week per department.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </main>
      
    </>
  )
}
