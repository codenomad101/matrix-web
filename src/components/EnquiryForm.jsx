'use client'
import { useEffect, useState } from 'react'

export default function EnquiryForm() {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  return (
    <div className="container-page py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Enquiry Form</h2>
          <p className="mt-1 text-slate-600">Fill this and our team will reach out shortly.</p>

          <form
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            action="https://formsubmit.co/jadhavsbj755@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="MSA Website Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {origin && <input type="hidden" name="_next" value={`${origin}/thank-you`} />}
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input required name="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input required name="phone" type="tel" placeholder="98765 43210" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required name="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Course</label>
              <select name="course" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand">
                <option>IIT-JEE (Main/Advanced)</option>
                <option>MHT-CET</option>
                <option>NEET</option>
                <option>IISER Foundation</option>
                <option>8th–12th Boards</option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Preferred Branch</label>
              <select name="branch" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand">
                <option>Pradhikaran</option>
                <option>Nigdi</option>
                <option>Ravet</option>
                <option>Shahunagar</option>
                <option>Chinchwad</option>
                <option>Wakad</option>
                <option>Moshi</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="4" placeholder="Tell us about your goals" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"></textarea>
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="btn-primary inline-flex justify-center">Submit Enquiry</button>
              <a href="tel:+91XXXXXXXXXX" className="btn-outline inline-flex justify-center">Call Us</a>
            </div>
          </form>
        </div>

        <div className="rounded-2xl bg-brand/20 border border-brand/30 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">Why enquire?</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>• Get a personalized study plan</li>
            <li>• Fee details and scholarship options</li>
            <li>• Centre timings and batch schedules</li>
            <li>• Meet counsellors and mentors</li>
          </ul>
          <div className="mt-6 text-sm text-slate-600">
            We’ll email your details to our team instantly.
          </div>
        </div>
      </div>
    </div>
  )
}




