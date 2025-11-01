import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/directors-message" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Directors Message
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/enquiry" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/courses" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/faculty" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link 
                  to="/results" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Activities</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/activities/performance" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/course-selection" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Course Selection
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/iit-neet-timeline" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  IIT-JEE/NEET Timeline
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/mht-cet-timeline" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  MHT-CET Timeline
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/on-demand-courses" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  On Demand Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/activities/felicitation" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Felicitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <span className="font-medium text-white">Email:</span> jadhavsbj755@gmail.com
              </li>
              <li className="text-slate-300">
                <span className="font-medium text-white">Branches:</span> Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-300 text-sm">
            © {new Date().getFullYear()} Matrix Science Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/images/matrix_logo1.png" alt="MSA logo" className="h-8 w-8 object-contain" />
              <span className="text-sm font-semibold">
                <span className="text-red-500">Matrix</span>{' '}
                <span className="text-slate-300">Science</span>{' '}
                <span className="text-brand">Academy</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

