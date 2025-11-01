import EnquiryForm from '../components/EnquiryForm.jsx'

export default function Enquiry() {
  return (
    <div>
      <div className="bg-brand/20 border-b">
        <div className="container-content py-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Enquiry Form</h1>
          <p className="mt-2 text-slate-600">Fill the form below and our team will reach out to you shortly</p>
        </div>
      </div>
      <EnquiryForm />
    </div>
  )
}

