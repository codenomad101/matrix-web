import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div className="container-content py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Thank you!</h1>
      <p className="mt-2 text-slate-600">Your enquiry has been sent. Our team will contact you soon.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link to="/" className="btn-primary inline-flex">Back to Home</Link>
        <Link to="/courses" className="btn-outline inline-flex">Browse Courses</Link>
      </div>
    </div>
  )
}




