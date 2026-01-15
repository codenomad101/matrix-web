export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy explaining how Matrix Science Academy collects, uses, and protects your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-[#0a1a67] mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 14, 2026</p>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>Matrix Science Academy values your privacy.</p>

          <p>
            We collect basic details such as name, phone number, email, class details, and payment
            information for academic and communication purposes.
          </p>

          <p>
            Your data is used to provide services, send WhatsApp updates, process payments, and
            improve our website.
          </p>

          <p>We do not sell or misuse your personal information.</p>

          <p>
            Data may be shared only with trusted services like payment gateways, analytics tools,
            and WhatsApp (Meta).
          </p>

          <p>
            You can opt out of WhatsApp communications anytime by replying{' '}
            <span className="font-semibold">STOP</span>.
          </p>

          <p>Reasonable security measures are used to protect your data.</p>

          <div className="mt-6 space-y-1">
            <p>Pune / Chinchwad, Maharashtra</p>
            <p>Email: admin@matrixscienceacademy.co.in</p>
            <p>WhatsApp: +91-7058740609</p>
          </div>
        </div>
      </div>
    </div>
  )
}


