'use client'

import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

const features = [
  { id: 1, title: 'Doubt Solving Session', description: 'Personalized doubt clearing sessions with expert faculty members to ensure complete understanding of concepts.', cloudinaryId: 'v1764181800/7_rhfwuq' },
  { id: 2, title: 'Floor Coordinator', description: 'Dedicated floor coordinators to assist students with queries, guidance, and academic support throughout the day.', cloudinaryId: 'v1764181802/2_qkyerp' },
  { id: 3, title: 'AC Classroom', description: 'Modern air-conditioned classrooms equipped with smart boards and comfortable seating for optimal learning environment.', cloudinaryId: 'v1764181811/6_txcbt4' },
  { id: 4, title: 'Spacious Parking', description: 'Ample and secure parking space for bicycles, scooters, and cars with 24/7 CCTV surveillance for safety.', cloudinaryId: 'v1764181896/5_iksmin' },
  { id: 5, title: 'Parents Waiting Room', description: 'Comfortable waiting area for parents with seating arrangements and refreshments while their children attend classes.', cloudinaryId: 'v1764181956/1_hvf5af' },
  { id: 6, title: 'Office', description: 'Well-equipped administrative office with friendly staff ready to help with admissions, inquiries, and student services.', cloudinaryId: 'v1764181872/4_phnnrh' },
]

export default function FeaturesSection() {
  return (
    <section className="home-section bg-white py-12 overflow-hidden">
      <div className="container-page">
        <h2 className="home-section-title">Features</h2>
        <p className="home-section-body max-w-2xl mb-10">
          World-class facilities for the best learning experience.
        </p>
      </div>

      {/* Outer wrapper: overflow hidden to clip the scrolling track */}
      <div className="relative w-full overflow-hidden">
        {/* Animated track — must NOT be constrained by container-page */}
        <div className="features-track flex gap-6">
          {[...features, ...features].map((feature, idx) => (
            <div
              key={`${feature.id}-${idx}`}
              className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-[190px] sm:h-[210px] bg-gray-100">
                <OptimizedImage
                  cloudinaryId={feature.cloudinaryId}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  crop="fill"
                  loading="eager"
                />
                <span className="absolute bottom-3 right-3 bg-gray-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {feature.title}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-1.5">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">{feature.description}</p>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-track {
          display: flex;
          width: max-content;
          animation: scroll-features 30s linear infinite;
        }
        .features-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-features {
          from {
            transform: translateX(0);
          }
          to {
            /* Moves exactly one full set (half the doubled list) to the left */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}