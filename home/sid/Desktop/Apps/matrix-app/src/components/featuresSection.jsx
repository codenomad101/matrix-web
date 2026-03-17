'use client'

import { useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const feature = features[activeIndex]

  return (
    <section className="home-section bg-white">
      <div className="container-page">
        <h2 className="home-section-title">Features</h2>
        <p className="home-section-body max-w-2xl mb-6">
          World-class facilities for the best learning experience.
        </p>

        {/* Tabs on top – same style as Our Courses */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-2">
          {features.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-[#B30027] text-white border-b-2 border-[#B30027]'
                  : 'text-gray-800 bg-transparent hover:text-gray-600'
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        {/* Content: image LEFT, text RIGHT */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <div className="relative block min-h-[260px] md:min-h-[320px] bg-gray-100">
            <OptimizedImage
              cloudinaryId={feature.cloudinaryId}
              alt={feature.title}
              width={600}
              height={400}
              className="w-full h-full object-cover min-h-[260px] md:min-h-[320px]"
              crop="fill"
              loading="eager"
            />
            <span className="absolute bottom-4 right-4 bg-gray-900/80 text-white text-sm font-semibold px-3 py-1.5 rounded">
              {feature.title}
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h3 className="home-section-subtitle">{feature.title}</h3>
            <p className="home-section-body mb-5">{feature.description}</p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 text-gray-800 font-semibold hover:underline text-sm"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
