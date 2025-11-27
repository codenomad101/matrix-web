import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

export default function Footer() {
  return (
    <footer className="bg-[#0a1a67] text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B30027]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/directors-message" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Directors Message
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/enquiry" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B30027]">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/courses" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/faculty" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link 
                  href="/results" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B30027]">Activities</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/activities/performance" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link 
                  href="/activities/course-selection" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Course Selection
                </Link>
              </li>
              <li>
                <Link 
                  href="/activities/iit-neet-timeline" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  IIT-JEE/NEET Timeline
                </Link>
              </li>
              <li>
                <Link 
                  href="/activities/mht-cet-timeline" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  MHT-CET Timeline
                </Link>
              </li>
              <li>
                <Link 
                  href="/activities/on-demand-courses" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  On Demand Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/activities/felicitation" 
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 inline-block"
                >
                  Felicitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#B30027]">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <span className="font-medium text-white">Email:</span> jadhavsbj755@gmail.com
              </li>
              <li className="text-white/70">
                <span className="font-medium text-white">Branches:</span> Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} Matrix Science Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <OptimizedImage
                cloudinaryId="v1763788005/matrix_logo_cra98w"
                alt="MSA logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                crop="fit"
                loading="lazy"
              />
              <span className="text-sm font-semibold">
                <span className="text-[#B30027]">Matrix</span>{' '}
                <span className="text-white/70">Science</span>{' '}
                <span className="text-brand">Academy</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

