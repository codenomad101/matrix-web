import { useState, useEffect } from 'react'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Doubt Solving Session',
      description: 'Personalized doubt clearing sessions with expert faculty members to ensure complete understanding of concepts.',
      cloudinaryId: 'v1764181800/7_rhfwuq',
    },
    {
      id: 2,
      title: 'Floor Coordinator',
      description: 'Dedicated floor coordinators to assist students with queries, guidance, and academic support throughout the day.',
      cloudinaryId: 'v1764181802/2_qkyerp',
    },
    {
      id: 3,
      title: 'AC Classroom',
      description: 'Modern air-conditioned classrooms equipped with smart boards and comfortable seating for optimal learning environment.',
      cloudinaryId: 'v1764181811/6_txcbt4',
    },
    {
      id: 4,
      title: 'Spacious Parking',
      description: 'Ample and secure parking space for bicycles, scooters, and cars with 24/7 CCTV surveillance for safety.',
      cloudinaryId: 'v1764181896/5_iksmin',
    },
    {
      id: 5,
      title: 'Parents Waiting Room',
      description: 'Comfortable waiting area for parents with seating arrangements and refreshments while their children attend classes.',
      cloudinaryId: 'v1764181956/1_hvf5af',
    },
    {
      id: 6,
      title: 'Office',
      description: 'Well-equipped administrative office with friendly staff ready to help with admissions, inquiries, and student services.',
      cloudinaryId: 'v1764181872/4_phnnrh',
    },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [features.length, isPaused])

  return (
    <section className="py-3 sm:py-5 bg-gray-50">
      <div className="container-page max-w-6xl mx-auto">
        {/* Header - like Our Courses */}
        <div className="text-left mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B30027] mb-2">
            Features
          </h2>
          <p className="text-sm sm:text-base text-[#0a1a67]/80 max-w-2xl">
            Discover our world-class facilities designed to provide the best learning experience
          </p>
        </div>

        <div
          className="bg-box-bg border border-gray-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Content Area */}
          <div className="relative overflow-hidden mb-3 sm:mb-4">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className={`
                transition-all duration-500 ease-in-out
                ${activeTab === idx ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}
              `}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 items-center">
                  {/* Image */}
                  <div className="order-2 lg:order-1">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 p-1.5 sm:p-2">
                      <div className="rounded-lg sm:rounded-xl overflow-hidden max-h-64 sm:max-h-80">
                        {feature.cloudinaryId ? (
                          <OptimizedImage
                            cloudinaryId={feature.cloudinaryId}
                            alt={feature.title}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
                            crop="fit"
                            loading="eager"
                          />
                        ) : (
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description - like Our Courses: dark text, red heading */}
                  <div className="order-1 lg:order-2 space-y-2 sm:space-y-3 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-gray-200/80 text-[#0a1a67] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold">
                      Feature {idx + 1} of {features.length}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#B30027]">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0a1a67]/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {feature.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start pt-1">
                      <Link href="/enquiry" className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#B30027] text-white rounded-full font-semibold hover:bg-[#8a001e] hover:shadow-lg transition-all duration-300 text-xs sm:text-sm text-center">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnail Previews */}
          <div className="grid grid-cols-6 gap-2 sm:gap-3 mb-4">
            {features.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`
                relative rounded-lg overflow-hidden transition-all duration-300 border-2
                ${activeTab === idx
                    ? 'ring-2 ring-[#B30027] border-[#B30027] scale-105 shadow-lg'
                    : 'border-gray-200 opacity-70 hover:opacity-100 hover:scale-105 hover:border-gray-300'
                  }
              `}
              >
                <div className="aspect-video">
                  <OptimizedImage
                    cloudinaryId={feature.cloudinaryId}
                    alt={feature.title}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                    crop="fill"
                    loading="lazy"
                  />
                </div>
                {activeTab === idx && (
                  <div className="absolute inset-0 bg-[#B30027]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#B30027]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`
                h-2 rounded-full transition-all duration-300
                ${activeTab === idx ? 'w-8 bg-[#B30027]' : 'w-3 bg-gray-300 hover:bg-gray-400'}
              `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}