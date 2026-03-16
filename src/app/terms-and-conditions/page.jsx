export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using Matrix Science Academy services and WhatsApp Business updates.',
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-heading mb-6">Terms &amp; Conditions</h1>
          <p className="text-sm text-body/80 mb-6">Effective Date: January 14, 2026</p>

          <div className="space-y-4 text-body leading-relaxed">
          <p>
            By accessing <span className="font-semibold">matrixscienceacademy.co.in</span> or
            subscribing to our WhatsApp Business updates, you agree to the following terms.
          </p>

          <p>
            Services include online/offline coaching for 11th &amp; 12th, study materials, schedules,
            and academic updates.
          </p>

          <p>
            By opting in, you consent to receive WhatsApp messages such as class updates, exam
            schedules, fee reminders, and promotional information. You may opt out anytime by
            replying <span className="font-semibold">STOP</span>.
          </p>

          <p>
            Users must be 13 years or older. If under 18, parental consent is required.
          </p>

          <p>
            All content is owned by Matrix Science Academy and may not be copied or misused.
          </p>

          <p>
            We are not responsible for indirect or consequential damages. Academic results may vary.
          </p>

          <p>
            These terms are governed by the laws of India, with jurisdiction in Maharashtra.
          </p>

          <div className="mt-6 space-y-1 text-body">
            <p>Pune / Chinchwad, Maharashtra</p>
            <p>Email: admin@matrixscienceacademy.co.in</p>
            <p>WhatsApp: +91-7058740609</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}


