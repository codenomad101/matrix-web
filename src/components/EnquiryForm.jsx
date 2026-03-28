'use client'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

// WhatsApp numbers for each branch
// Format: country code + number (without + or spaces)
// Example: '919876543210' for +91 98765 43210
const BRANCH_WHATSAPP_NUMBERS = {
  'Nigdi': '917058740609',
  'Shahunagar': '917058740609',
  'Chinchwad': '917058740609',
  'Ravet': '917058740609',
  'Wakad': '917058740609',
  'Moshi': '917058740609',
  'Kolhapur': '917058740609',
  'Rahatani': '917058740609',
}

const BRANCH_OPTIONS = Object.keys(BRANCH_WHATSAPP_NUMBERS)

const ENQUIRY_EMAIL = 'jadhavsbj755@gmail.com'
const SITE_NAME = 'Matrix Science Academy'

const COURSE_OPTIONS = [
  'IIT-JEE (Main/Advanced)',
  'MHT-CET',
  'NEET',
  'IISER Foundation',
  '8th–12th Boards',
  'Vriksha / Foundation',
]

const CLASS_OPTIONS = ['8th', '9th', '10th', '11th Science', '12th Science', 'Repeater', 'Other']

export default function EnquiryForm({
  initialMessage = '',
  minimal = false,
  counselingSession = false,
  counselingDarkBg = false,
  counselingRelaxed = false,
  counselingCentered = false,
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const branchParam = searchParams.get('branch')
  const initialBranch = BRANCH_OPTIONS.includes(branchParam || '') ? branchParam : 'Nigdi'
  const fromCounseling = searchParams.get('counseling') === '1' || initialMessage
  const messagePlaceholder = fromCounseling ? "E.g. I'd like to schedule a free career counseling session." : 'Tell us about your goals'
  const defaultMessage = initialMessage || (fromCounseling ? 'I am interested in free career counseling session.' : '')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleCounselingSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const formData = new FormData(e.target)
    const studentName = String(formData.get('name') || '').trim()
    const phoneDigits = String(formData.get('phone') || '').replace(/\D/g, '')
    const currentClass = String(formData.get('currentClass') || '')
    const course = String(formData.get('course') || '')

    if (phoneDigits.length !== 10) {
      setSubmitError('Please enter a valid 10-digit mobile number.')
      setIsSubmitting(false)
      return
    }

    const displayPhone = `+91 ${phoneDigits.slice(0, 5)} ${phoneDigits.slice(5)}`
    const message = `Free academic counseling (homepage)\nStudent name: ${studentName}\nParent phone: +91${phoneDigits}\nCurrent class: ${currentClass}\nCourse interest: ${course}`

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: studentName,
          phone: displayPhone,
          email: ENQUIRY_EMAIL,
          course,
          branch: 'Counseling',
          currentClass,
          message,
          site: SITE_NAME,
          _subject: `${SITE_NAME} – Counseling enquiry: ${studentName} – ${course}`,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Submit failed')
      router.push('/thank-you')
    } catch {
      setSubmitError('Could not send. Please call +91 70587 40609.')
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submitType = e.nativeEvent?.submitter?.value || 'whatsapp' // 'whatsapp' | 'email'
    setIsSubmitting(true)
    setSubmitError(null)

    const formData = new FormData(e.target)
    const formValues = {
      name: minimal ? '—' : (formData.get('name') || ''),
      phone: formData.get('phone') || '',
      email: formData.get('email') || '',
      course: minimal ? '—' : (formData.get('course') || ''),
      branch: minimal ? '—' : (formData.get('branch') || initialBranch),
      message: formData.get('message') || 'No message provided'
    }

    if (submitType === 'email') {
      const formSubmitPayload = {
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email,
        course: formValues.course,
        branch: formValues.branch,
        message: formValues.message,
        site: SITE_NAME,
        _replyto: formValues.email,
        _subject: `${SITE_NAME} – Enquiry: ${formValues.name} – ${formValues.course} (${formValues.branch})`,
      }
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formSubmitPayload),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error(data.message || 'Submit failed')
        router.push('/thank-you')
        return
      } catch (err) {
        setSubmitError('Could not send. Please try "Send via WhatsApp" or call us.')
        setIsSubmitting(false)
        return
      }
    }

    const whatsappNumber = BRANCH_WHATSAPP_NUMBERS[formValues.branch] || BRANCH_WHATSAPP_NUMBERS['Nigdi']
    const whatsappMessage = `*New Enquiry from ${SITE_NAME} Website*

*Name:* ${formValues.name}
*Phone:* ${formValues.phone}
*Email:* ${formValues.email}
*Course:* ${formValues.course}
*Branch:* ${formValues.branch}
*Message:* ${formValues.message}

_This enquiry was submitted through the website._`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')

    setTimeout(() => {
      e.target.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  if (counselingSession) {
    const fieldPad = counselingRelaxed ? 'px-3.5 py-3' : 'px-3 py-2.5'
    const fieldPadCode = counselingRelaxed ? 'px-2.5 py-3' : 'px-2 py-2.5'
    const formGap = counselingRelaxed ? 'gap-6' : 'gap-5'
    const submitPad = counselingRelaxed ? 'py-4' : 'py-3.5'

    const align = counselingCentered ? ' text-center' : ''
    const inputCls =
      (counselingDarkBg
        ? `mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 ${fieldPad} text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#3377F5]/50 focus:border-[#548FF7] [&>option]:bg-neutral-900 [&>option]:text-white`
        : `mt-1.5 w-full rounded-xl border border-neutral-200 bg-neutral-50 ${fieldPad} text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#3377F5]/40 focus:border-[#3377F5]`) + align
    const labelCls =
      (counselingDarkBg
        ? 'block text-[10px] font-semibold uppercase tracking-wide text-white/75 sm:text-xs'
        : 'block text-xs font-semibold uppercase tracking-wide text-neutral-700') + align
    const selectCodeCls =
      (counselingDarkBg
        ? `w-[4.75rem] shrink-0 rounded-xl border border-white/20 bg-white/10 ${fieldPadCode} text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#3377F5]/50 [&>option]:bg-neutral-900 [&>option]:text-white`
        : `w-[4.75rem] shrink-0 rounded-xl border border-neutral-200 bg-neutral-50 ${fieldPadCode} text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#3377F5]/40`) + align

    return (
      <div className={counselingCentered ? 'text-center' : ''}>
        {submitError && (
          <p
            className={`mb-4 text-sm ${counselingDarkBg ? 'text-red-300' : 'text-red-600'}${counselingCentered ? ' text-center' : ''}`}
            role="alert"
          >
            {submitError}
          </p>
        )}
        <form
          className={`grid grid-cols-1 ${formGap}${counselingCentered ? ' text-center' : ''}`}
          onSubmit={handleCounselingSubmit}
          noValidate
        >
          <div>
            <label htmlFor="counsel-student-name" className={labelCls}>
              Student name
            </label>
            <input
              id="counsel-student-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter student's full name"
              className={inputCls}
            />
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 md:gap-4 ${counselingRelaxed ? 'gap-6' : 'gap-5'}${counselingCentered ? ' [&>div]:text-center' : ''}`}
          >
            <div>
              <label htmlFor="counsel-parent-phone" className={labelCls}>
                Parent&apos;s phone
              </label>
              <div className={`mt-1.5 flex gap-2${counselingCentered ? ' justify-center' : ''}`}>
                <select
                  name="countryCode"
                  className={selectCodeCls}
                  defaultValue="+91"
                  aria-label="Country code"
                >
                  <option value="+91">+91</option>
                </select>
                <input
                  id="counsel-parent-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="98765 43210"
                  className={`${inputCls} mt-0 flex-1`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="counsel-class" className={labelCls}>
                Current class
              </label>
              <select id="counsel-class" name="currentClass" required className={inputCls}>
                <option value="">Select class</option>
                {CLASS_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="counsel-course" className={labelCls}>
              Course interest
            </label>
            <select id="counsel-course" name="course" required className={inputCls}>
              <option value="">Select course</option>
              {COURSE_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-1 w-full rounded-xl bg-[#3377F5] ${submitPad} text-base font-bold text-white shadow-md transition hover:bg-[#2563d4] disabled:opacity-60`}
          >
            {isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    )
  }

  const formFields = (
    <form
      className={minimal ? 'grid grid-cols-1 gap-4' : 'mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'}
      onSubmit={handleSubmit}
    >
      {!minimal && (
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-body">Full Name</label>
          <input required name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
        </div>
      )}

      <div className={minimal ? '' : 'sm:col-span-1'}>
        <label className="block text-sm font-medium text-body">Phone</label>
        <input required name="phone" type="tel" placeholder="98765 43210" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
      </div>

      <div className={minimal ? '' : 'sm:col-span-1'}>
        <label className="block text-sm font-medium text-body">Email</label>
        <input required name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
      </div>

      {!minimal && (
        <>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-body">Course</label>
            <select name="course" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]">
              {COURSE_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-body">Preferred Branch</label>
            <select name="branch" defaultValue={initialBranch} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]">
              {BRANCH_OPTIONS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className={minimal ? '' : 'sm:col-span-2'}>
        <label className="block text-sm font-medium text-body">Message</label>
        <textarea name="message" rows={minimal ? 3 : 4} placeholder={messagePlaceholder} defaultValue={defaultMessage} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]"></textarea>
      </div>

      <div className={minimal ? 'flex flex-wrap gap-3' : 'sm:col-span-2 flex flex-wrap gap-3'}>
        <button
          type="submit"
          name="submitType"
          value="whatsapp"
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] px-4 py-2.5 font-semibold text-sm transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
        </button>
        <button
          type="submit"
          name="submitType"
          value="email"
          className="inline-flex justify-center items-center gap-2 rounded-lg border-2 border-[var(--brand-red)] bg-white text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white px-4 py-2.5 font-semibold text-sm transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit via email'}
        </button>
        <a href="tel:7058740609" className="inline-flex justify-center items-center gap-2 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white px-4 py-2.5 font-semibold text-sm transition-colors">Call Us</a>
      </div>
    </form>
  )

  if (minimal) {
    return (
      <div>
        {submitError && (
          <p className="mb-3 text-sm text-[var(--brand-red)]" role="alert">{submitError}</p>
        )}
        {formFields}
      </div>
    )
  }

  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="page-card p-6 sm:p-8">
          <h2 className="text-left text-xl font-bold text-heading">Enquiry Form</h2>
          <p className="mt-1 text-body text-sm">Fill your details and choose how to send.</p>

          {submitError && (
            <p className="mt-3 text-sm text-[var(--brand-red)]" role="alert">{submitError}</p>
          )}

          {formFields}
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
          <h3 className="text-left text-xl font-semibold text-heading">Why enquire?</h3>
          <ul className="mt-3 space-y-2 text-body">
            <li>• Get a personalized study plan</li>
            <li>• Fee details and scholarship options</li>
            <li>• Centre timings and batch schedules</li>
            <li>• Meet counsellors and mentors</li>
          </ul>
          <div className="mt-6 text-sm text-body/80">
            <strong>Send via WhatsApp</strong> opens WhatsApp with your details pre-filled. <strong>Submit via email</strong> sends your enquiry to our team by email—no mail app opens.
          </div>
        </div>
      </div>
    </div>
  )
}
