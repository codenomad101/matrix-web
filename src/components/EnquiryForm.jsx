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

export default function EnquiryForm({ initialMessage = '', minimal = false }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const branchParam = searchParams.get('branch')
  const initialBranch = BRANCH_OPTIONS.includes(branchParam || '') ? branchParam : 'Nigdi'
  const fromCounseling = searchParams.get('counseling') === '1' || initialMessage
  const messagePlaceholder = fromCounseling ? "E.g. I'd like to schedule a free career counseling session." : 'Tell us about your goals'
  const defaultMessage = initialMessage || (fromCounseling ? 'I am interested in free career counseling session.' : '')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

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
      // FormSubmit: submit in-place via AJAX, no mail app, no redirect away (formsubmit.co)
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
        setSubmitError('Could not send. Please try "Send WhatsApp details" or call us.')
        setIsSubmitting(false)
        return
      }
    }

    // WhatsApp: get number and open WhatsApp with pre-filled message
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

  const formFields = (
    <form
      className={minimal ? 'grid grid-cols-1 gap-4' : 'mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'}
      onSubmit={handleSubmit}
    >
      {!minimal && (
        <div className="sm:col-span-1">
          <label className="block text-sm font-medium text-body">Full Name</label>
          <input required name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]" />
        </div>
      )}

      <div className={minimal ? '' : 'sm:col-span-1'}>
        <label className="block text-sm font-medium text-body">Phone</label>
        <input required name="phone" type="tel" placeholder="98765 43210" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]" />
      </div>

      <div className={minimal ? '' : 'sm:col-span-1'}>
        <label className="block text-sm font-medium text-body">Email</label>
        <input required name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]" />
      </div>

      {!minimal && (
        <>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-body">Course</label>
            <select name="course" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]">
              <option>IIT-JEE (Main/Advanced)</option>
              <option>MHT-CET</option>
              <option>NEET</option>
              <option>IISER Foundation</option>
              <option>8th–12th Boards</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-body">Preferred Branch</label>
            <select name="branch" defaultValue={initialBranch} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]">
              {BRANCH_OPTIONS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className={minimal ? '' : 'sm:col-span-2'}>
        <label className="block text-sm font-medium text-body">Message</label>
        <textarea name="message" rows={minimal ? 3 : 4} placeholder={messagePlaceholder} defaultValue={defaultMessage} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B30027] focus:border-[#B30027]"></textarea>
      </div>

      <div className={minimal ? 'flex flex-wrap gap-3' : 'sm:col-span-2 flex flex-wrap gap-3'}>
        <button
          type="submit"
          name="submitType"
          value="whatsapp"
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] px-4 py-2.5 font-semibold text-sm transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send WhatsApp details'}
        </button>
        <button
          type="submit"
          name="submitType"
          value="email"
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] px-4 py-2.5 font-semibold text-sm transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit via email'}
        </button>
        <a href="tel:7058740609" className="inline-flex justify-center items-center gap-2 rounded-lg border-2 border-[#0a1a67] text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white px-4 py-2.5 font-semibold text-sm transition-colors">Call Us</a>
      </div>
    </form>
  )

  if (minimal) {
    return (
      <div>
        {submitError && (
          <p className="mb-3 text-sm text-[#B30027]" role="alert">{submitError}</p>
        )}
        {formFields}
      </div>
    )
  }

  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="page-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-heading">Enquiry Form</h2>
          <p className="mt-1 text-body text-sm">Fill your details and choose how to send.</p>

          {submitError && (
            <p className="mt-3 text-sm text-[#B30027]" role="alert">{submitError}</p>
          )}

          {formFields}
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-heading">Why enquire?</h3>
          <ul className="mt-3 space-y-2 text-body">
            <li>• Get a personalized study plan</li>
            <li>• Fee details and scholarship options</li>
            <li>• Centre timings and batch schedules</li>
            <li>• Meet counsellors and mentors</li>
          </ul>
          <div className="mt-6 text-sm text-body/80">
            <strong>Send WhatsApp details</strong> opens WhatsApp with your details pre-filled. <strong>Submit via email</strong> sends your enquiry to our team by email—no mail app opens.
          </div>
        </div>
      </div>
    </div>
  )
}




