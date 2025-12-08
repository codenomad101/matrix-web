'use client'
import { useEffect, useState } from 'react'

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

export default function EnquiryForm() {
  const [origin, setOrigin] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const formValues = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      course: formData.get('course'),
      branch: formData.get('branch'),
      message: formData.get('message') || 'No message provided'
    }

    // Get WhatsApp number for selected branch
    const whatsappNumber = BRANCH_WHATSAPP_NUMBERS[formValues.branch] || BRANCH_WHATSAPP_NUMBERS['Nigdi']

    // Format WhatsApp message
    const whatsappMessage = `*New Enquiry from Matrix Science Academy Website*

*Name:* ${formValues.name}
*Phone:* ${formValues.phone}
*Email:* ${formValues.email}
*Course:* ${formValues.course}
*Branch:* ${formValues.branch}
*Message:* ${formValues.message}

_This enquiry was submitted through the website._`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')

    // Reset form after a short delay
    setTimeout(() => {
      e.target.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="container-page py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#0a1a67]">Enquiry Form</h2>
          <p className="mt-1 text-[#0a1a67]">Fill this and our team will reach out shortly.</p>

          <form
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#0a1a67]">Full Name</label>
              <input required name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#0a1a67]">Phone</label>
              <input required name="phone" type="tel" placeholder="98765 43210" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#0a1a67]">Email</label>
              <input required name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#0a1a67]">Course</label>
              <select name="course" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand">
                <option>IIT-JEE (Main/Advanced)</option>
                <option>MHT-CET</option>
                <option>NEET</option>
                <option>IISER Foundation</option>
                <option>8th–12th Boards</option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-[#0a1a67]">Preferred Branch</label>
              <select name="branch" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand">
                <option>Nigdi</option>
                <option>Shahunagar</option>
                <option>Chinchwad</option>
                <option>Ravet</option>
                <option>Wakad</option>
                <option>Moshi</option>
                <option>Kolhapur</option>
                <option>Rahatani</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#0a1a67]">Message</label>
              <textarea name="message" rows="4" placeholder="Tell us about your goals" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"></textarea>
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="btn-primary inline-flex justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <a href="tel:+91XXXXXXXXXX" className="btn-outline inline-flex justify-center">Call Us</a>
            </div>
          </form>
        </div>

        <div className="rounded-2xl bg-brand/20 border border-brand/30 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[#0a1a67]">Why enquire?</h3>
          <ul className="mt-3 space-y-2 text-[#0a1a67]">
            <li>• Get a personalized study plan</li>
            <li>• Fee details and scholarship options</li>
            <li>• Centre timings and batch schedules</li>
            <li>• Meet counsellors and mentors</li>
          </ul>
          <div className="mt-6 text-sm text-[#0a1a67]">
            We'll send your enquiry via WhatsApp to the selected branch and email your details to our team instantly.
          </div>
        </div>
      </div>
    </div>
  )
}




