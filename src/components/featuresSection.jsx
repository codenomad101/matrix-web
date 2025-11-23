import { useState } from 'react'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Doubt Solving Session',
      description: 'Personalized doubt clearing sessions with expert faculty members to ensure complete understanding of concepts.',
      cloudinaryId: 'v1763854823/doubtsolving_v5oyx1',
    },
    {
      id: 2,
      title: 'Floor Coordinator',
      description: 'Dedicated floor coordinators to assist students with queries, guidance, and academic support throughout the day.',
      cloudinaryId: 'v1763855123/coordinator_zrv2tf',
    },
    {
      id: 3,
      title: 'AC Classroom',
      description: 'Modern air-conditioned classrooms equipped with smart boards and comfortable seating for optimal learning environment.',
      cloudinaryId: 'v1763855368/acclassroom2_zzm4oj',
    },
    {
      id: 4,
      title: 'Spacious Parking',
      description: 'Ample and secure parking space for bicycles, scooters, and cars with 24/7 CCTV surveillance for safety.',
      cloudinaryId: 'v1763855637/parking_1_w6fh6f',
    },
    {
      id: 5,
      title: 'Parents Waiting Room',
      description: 'Comfortable waiting area for parents with seating arrangements and refreshments while their children attend classes.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Office',
      description: 'Well-equipped administrative office with friendly staff ready to help with admissions, inquiries, and student services.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  const getVisibleTabs = () => {
    const prev = activeTab === 0 ? features.length - 1 : activeTab - 1
    const next = activeTab === features.length - 1 ? 0 : activeTab + 1
    return [prev, activeTab, next]
  }

  const visibleTabs = getVisibleTabs()

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container-page max-w-5xl mx-auto">
        <div className="bg-[#004c8f] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/30 mb-2 tracking-wider">
            FEATURES
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Discover our world-class facilities designed to provide the best learning experience
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-hidden">
            {visibleTabs.map((tabIndex, idx) => {
              const isCenter = idx === 1
              const feature = features[tabIndex]
              
              return (
                <button
                  key={tabIndex}
                  onClick={() => setActiveTab(tabIndex)}
                  className={`
                    relative px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold
                    transition-all duration-300 text-xs sm:text-sm
                    ${isCenter 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105 z-10' 
                      : 'bg-white text-[#004c8f] opacity-50 hover:opacity-70 shadow-md'
                    }
                  `}
                  style={{
                    minWidth: isCenter ? '140px' : '120px',
                  }}
                >
                  <span className="block truncate">{feature.title}</span>
                  {isCenter && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-indigo-600"></span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveTab(activeTab === 0 ? features.length - 1 : activeTab - 1)}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004c8f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveTab(activeTab === features.length - 1 ? 0 : activeTab + 1)}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#004c8f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`
                transition-all duration-500 ease-in-out
                ${activeTab === idx ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}
              `}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    {feature.cloudinaryId ? (
                      <OptimizedImage
                        cloudinaryId={feature.cloudinaryId}
                        alt={feature.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        crop="fit"
                        loading="eager"
                      />
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-contain"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold">
                    Feature {idx + 1} of {features.length}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start pt-2">
                    <Link href="/enquiry" className="px-4 sm:px-6 py-2 bg-transparent text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 border-2 border-white text-sm text-center">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeTab === idx ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'}
              `}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}