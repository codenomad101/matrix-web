'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const SESSION_KEY = 'msa_showstopper_dismissed'
const RECIPIENT_EMAIL = 'jadhavsbj755@gmail.com'
const COURSE_OPTIONS = [
  'IIT-JEE (Main/Advanced)',
  'NEET',
  'MHT-CET',
  'IISER Foundation',
  '8th–12th Boards',
]

export default function ShowStopperPopup() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')
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
    if (!dismissed) setVisible(true)
  }, [mounted])

  const handleClose = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch (_) {}
  }

  useEffect(() => {
    if (!visible || !mounted) return
    const onEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [visible, mounted])

  const formspreeId = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_FORMSPREE_SHOWSTOPPER_ID : null

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
            course,
            _replyto: email,
            _subject: `Show Stopper: ${course} – ${email}`,
          }),
        })
        if (!res.ok) throw new Error('Submit failed')
        setSubmitted(true)
      } catch (err) {
        setSubmitError('Could not send. Try the link below.')
      } finally {
        setSubmitting(false)
      }
    } else {
      const subject = encodeURIComponent(`Matrix Science Academy – Course interest: ${course}`)
      const body = encodeURIComponent(`Email: ${email}\nCourse: ${course}\n\n(Sent from Show Stopper popup)`)
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
      className="fixed inset-0 z-[10003] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#B30027]/30 overflow-hidden animate-fadeIn max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header – red theme */}
        <div className="bg-[#B30027] px-6 py-4 flex items-center justify-between">
          <h2 id="showstopper-title" className="text-xl font-bold text-white">
            Scholarship closing soon – Register for free
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B30027]"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 text-[#0a1a67]">
          <p className="text-base leading-relaxed font-medium text-[#0a1a67]">
            Limited-time scholarship for IIT-JEE, NEET, MHT-CET & IISER. Register now for free and take the first step towards a bright future.
          </p>
          <p className="mt-2 text-sm text-[#B30027] font-semibold">
            Scholarship seats closing now – don’t miss out.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="showstopper-email" className="block text-sm font-semibold text-[#0a1a67] mb-1">
                  Email
                </label>
                <input
                  id="showstopper-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border-2 border-[#B30027]/40 px-3 py-2.5 text-[#0a1a67] focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]"
                />
              </div>
              <div>
                <label htmlFor="showstopper-course" className="block text-sm font-semibold text-[#0a1a67] mb-1">
                  Course interest
                </label>
                <select
                  id="showstopper-course"
                  name="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-lg border-2 border-[#B30027]/40 px-3 py-2.5 text-[#0a1a67] focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027] bg-white"
                >
                  {COURSE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              {submitError && (
                <p className="text-sm text-[#B30027]">{submitError}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex justify-center items-center rounded-lg bg-[#B30027] hover:bg-[#8a001e] disabled:opacity-70 text-white font-semibold px-5 py-2.5 transition-colors"
                >
                  {submitting ? 'Registering…' : 'Register for free'}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex justify-center items-center rounded-lg border-2 border-[#B30027] text-[#B30027] hover:bg-[#B30027] hover:text-white font-semibold px-5 py-2.5 transition-colors"
                >
                  Close & explore site
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-4 p-5 rounded-xl bg-[#B30027]/10 border-2 border-[#B30027]/30">
              <p className="text-[#0a1a67] font-semibold text-lg">
                Thanks for registering!
              </p>
              <p className="mt-2 text-[#0a1a67] leading-relaxed">
                We’ve received your interest. Our team will get in touch with scholarship details and next steps to help you build a bright future.
              </p>
              <p className="mt-2 text-[#B30027] font-medium text-sm">
                Scholarship information will be sent to your email soon.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-4 inline-flex justify-center items-center rounded-lg bg-[#B30027] hover:bg-[#8a001e] text-white font-semibold px-5 py-2.5 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}
