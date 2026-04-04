'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

const SESSION_KEY = 'msa_showstopper_dismissed'
const RECIPIENT_EMAIL = 'jadhavsbj755@gmail.com'
const COURSE_OPTIONS = [
  'IIT-JEE (Main/Advanced)',
  'NEET',
  'MHT-CET',
  'IISER Foundation',
  '8th–12th Boards',
]

function IconMail({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function IconPhone({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function IconBook({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

export default function ShowStopperPopup() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState(COURSE_OPTIONS[0])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    const dismissed = sessionStorage.getItem(SESSION_KEY)
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [mounted])

  const handleClose = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  useEffect(() => {
    if (!visible || !mounted) return
    const onEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [visible, mounted])

  // eslint-disable-next-line no-undef -- Next.js replaces process.env in client bundles
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_SHOWSTOPPER_ID ?? null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            phone,
            course,
            source: 'popup-counselling-scholarships',
            _replyto: email,
            _subject: `Counselling & scholarships: ${course} – ${email} – ${phone}`,
          }),
        })
        if (!res.ok) throw new Error('Submit failed')
        setSubmitted(true)
      } catch {
        setSubmitError('Could not send. Try the link below.')
      } finally {
        setSubmitting(false)
      }
    } else {
      const subject = encodeURIComponent(`Matrix Science Academy – Counselling & scholarships: ${course}`)
      const body = encodeURIComponent(
        `Email: ${email}\nPhone: ${phone}\nCourse: ${course}\n\nInterested in: Free Saturday counselling + scholarship info\n(Sent from site popup)`
      )
      window.open(`mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`, '_blank')
      setSubmitted(true)
      setSubmitting(false)
    }
  }

  if (!mounted || !visible) return null

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="showstopper-title"
      className="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-xl shadow-xl overflow-hidden animate-fadeIn max-h-[min(92vh,640px)] overflow-y-auto border border-gray-200 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-3 bg-white border-b border-gray-100">
          <div className="min-w-0 flex items-center gap-2">
            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-black/70" aria-hidden>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-black/70">Matrix Science Academy</p>
              <h2 id="showstopper-title" className="text-black text-sm sm:text-base font-bold leading-tight">
                Counselling &amp; scholarships — register free
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-xl leading-none border border-gray-200"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {!submitted ? (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] gap-4 md:gap-6">
            <div className="p-4 md:p-5 text-sm">
              <p className="text-black font-semibold text-sm leading-snug">
                Free academic counselling every Saturday — register for free.
              </p>
              <p className="mt-2 text-xs text-black/80 leading-relaxed">
                Get guidance on courses, batches, and planning. No fee to register your interest.
              </p>
              <p className="mt-2 text-xs text-black/80 leading-relaxed">
                We also offer scholarships — register to know more.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-gray-500">
                  <Link
                    href="/counseling"
                    className="text-black font-medium hover:underline hover:text-black"
                    onClick={handleClose}
                  >
                    Counselling
                  </Link>
                  <span className="text-gray-400">·</span>
                  <Link
                    href="/scholarships"
                    className="text-black font-medium hover:underline hover:text-black"
                    onClick={handleClose}
                  >
                    Scholarships
                  </Link>
                </span>

                {/* Simple badge placed next to the links */}
                <span
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-black/80 whitespace-nowrap"
                >
                  REGISTER NOW
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 md:p-5 flex flex-col gap-3 bg-white text-black rounded-xl border border-gray-200">
              <div className="space-y-2.5">
                <div>
                  <label htmlFor="showstopper-email" className="flex items-center gap-1.5 text-[11px] font-medium text-black/70 mb-1">
                    <IconMail className="w-3.5 h-3.5 text-black/70" />
                    Email
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-black/60">
                      <IconMail className="w-4 h-4" />
                    </span>
                    <input
                      id="showstopper-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-white pl-9 pr-2.5 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/20 focus:border-[var(--brand-red)]/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="showstopper-phone" className="flex items-center gap-1.5 text-[11px] font-medium text-black/70 mb-1">
                    <IconPhone className="w-3.5 h-3.5 text-black/70" />
                    Phone
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-black/60">
                      <IconPhone className="w-4 h-4" />
                    </span>
                    <input
                      id="showstopper-phone"
                      name="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full rounded-xl border border-gray-200 bg-white pl-9 pr-2.5 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/20 focus:border-[var(--brand-red)]/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="showstopper-course" className="flex items-center gap-1.5 text-[11px] font-medium text-black/70 mb-1">
                    <IconBook className="w-3.5 h-3.5 text-black/70" />
                    Course
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-black/60 z-[1]">
                      <IconBook className="w-4 h-4" />
                    </span>
                    <select
                      id="showstopper-course"
                      name="course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white pl-9 pr-8 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]/20 focus:border-[var(--brand-red)]/40"
                    >
                      {COURSE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-black/60 text-xs">▾</span>
                  </div>
                </div>
              </div>
              {submitError && <p className="text-xs text-black/70">{submitError}</p>}
              <div className="flex flex-wrap gap-2 pt-0.5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex justify-center items-center gap-1.5 rounded-lg bg-[var(--brand-red)] hover:bg-[var(--brand-red-hover)] disabled:opacity-70 text-white text-sm font-bold px-5 py-2.5 shadow-md"
                >
                  <span aria-hidden>✓</span>
                  {submitting ? 'Registering…' : 'Register for free'}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex justify-center items-center rounded-lg border border-gray-300 text-black/70 text-sm font-medium px-4 py-2.5 hover:bg-gray-100"
                >
                  Later
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="relative z-10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-black/70" aria-hidden>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <p className="text-black font-semibold text-base">Thanks for registering!</p>
                <p className="mt-1 text-xs text-black/80 leading-relaxed">
                  We will reach out at your email and phone about Saturday counselling and scholarships.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="shrink-0 inline-flex justify-center rounded-lg bg-[var(--brand-red)] hover:bg-[var(--brand-red-hover)] text-white text-sm font-semibold px-5 py-2.5"
            >
              Close
            </button>
          </div>
        )}
      </div>

    </div>
  )

  return createPortal(overlay, document.body)
}
