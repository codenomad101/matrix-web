'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import NewsSlider from '../components/NewsSlider.jsx'
import OptimizedImage from '@/components/OptimizedImage'
import FeaturesSection from '@/components/featuresSection.jsx'

import TestimonialsShowcase from '@/components/Testimonials.jsx'

const topTestimonials = [
  {
    name: 'Dhruv Shinde',
    college: 'IIT MANDI',
    text: 'Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi.',
    exam: 'IIT-JEE',
    image: '/images/features/Dhruv-Shinde.jpg',
    instituteImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  },
  {
    name: 'Rahul Kavhale',
    college: 'IIT KHARAGPUR',
    text: 'Thanks to Matrix Science Academy, I achieved my goal of getting into IIT. Their expert teaching and supportive environment were vital to my success.',
    exam: 'IIT-JEE',
    image: '/images/features/Rahul-Kavhale.jpg',
    instituteImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop'
  },
  {
    name: 'Dhruv Unde',
    college: 'NIT TRICHY',
    text: 'Matrix Science Academy was instrumental in my journey to NIT Trichy. The exceptional teaching & comprehensive support helped me excel.',
    exam: 'MHT-CET',
    image: '/images/features/Dhruv-Unde.jpg',
    instituteImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
  },
  {
    name: 'Maithili Sagare',
    college: 'IIT GUWAHATI',
    text: 'Matrix Science Academy transformed my preparation journey. The dedicated faculty and structured curriculum helped me achieve my dream of joining IIT Guwahati.',
    exam: 'IIT-JEE',
    image: '/images/features/Maithili-Sagare.jpg',
    instituteImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'
  },
]

const topResults = {
  mhtcet: { count: 123, percentile: '98+', highlight: '60 students scored 99+ percentile' },
  iit: { count: 12, colleges: 'IIT Guwahati, IIT Kharagpur, IIT Mandi' },
  neet: { score: '5 selections', subject: 'AIIMS and MBBS', students: 'out of 53 students' },
}

// Latest News Section Component
function LatestNewsSection() {
  const newsItems = [
    "Admissions Open for 2025-26 Batch - IIT-JEE, NEET, MHT-CET",
    "86 Students scored 99+ Percentile in MHT-CET 2025",
    "12+ Students selected for IIT in 2025",
    "5 selections in AIIMS and MBBS out of 53 students",
    "Free Career Counselling Sessions Every Saturday",
    "Special Crash Course for Board Exams Starting January",
    "Matrix Science Academy ranked #1 in Pune Region",
  ]

  return (
    <section className="container-page py-8">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          {/* Left Side - Title and Description */}
          <div className="bg-[#0a1a67] p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Latest News & Updates
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Stay updated with the latest happenings, achievements, and announcements from Matrix Science Academy.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-5 h-5 animate-pulse text-[#B30027]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span></span>
            </div>
          </div>

          {/* Right Side - Scrolling News */}
          <div className="p-6 md:p-8 relative overflow-hidden h-[200px] md:h-[220px]">
            <div className="animate-scroll-vertical">
              {[...newsItems, ...newsItems].map((news, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-gray-100 last:border-0 flex items-start gap-3 group cursor-pointer hover:bg-gray-50 px-2 rounded-lg transition-colors duration-300"
                >
                  <span className="text-[#B30027] font-bold text-lg">›</span>
                  <span className="text-[#0a1a67] font-medium group-hover:text-[#B30027] transition-colors duration-300">
                    {news}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 20s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Overview Section Component
function OverviewSection() {
  const images = [
    { cloudinaryId: 'v1763852019/booksweoffer_bciiam', alt: 'Top Achievement 1' },
    //{ cloudinaryId: 'v1763786029/output_mdyqhp', alt: 'Top Achievement 2' },
    { cloudinaryId: 'v1763785958/output_cbx5g1', alt: 'Top Achievement 3' },
  ]

  return (
    <section className="container-page py-4">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-[#0a1a67] py-2">Overview and Features</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <OptimizedImage
              cloudinaryId={img.cloudinaryId}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto object-contain py-2"
              crop="fit"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// Results Image Slider Component
function ResultsImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { cloudinaryId: 'v1764181799/JEE_MAIN_o7kayq', alt: 'JEE Main Results' },
    { cloudinaryId: 'v1764181794/JEE_MAIN_2025_aoxekj', alt: 'JEE Main 2025 Results' },
    { cloudinaryId: 'v1764181786/IIT_knkkka', alt: 'IIT Results' },
    { cloudinaryId: 'v1764181835/NEET_riozts', alt: 'NEET Results' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100">
      {/* Main Slider */}
      <div className="relative h-[280px] md:h-[350px] lg:h-[400px] bg-white">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${currentIndex === idx
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
              }`}
          >
            <div className="w-full h-full bg-white p-2 md:p-4 lg:p-5 flex items-center justify-center">
              <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_800,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#0a1a67] rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border-2 border-[#0a1a67]/20 hover:border-[#0a1a67]"
        >
          <svg className="w-6 h-6 text-[#0a1a67] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#0a1a67] rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border-2 border-[#0a1a67]/20 hover:border-[#0a1a67]"
        >
          <svg className="w-6 h-6 text-[#0a1a67] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 py-4 bg-white border-t border-gray-100">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${currentIndex === idx
              ? 'w-10 bg-[#0a1a67] shadow-md'
              : 'w-3 bg-gray-300 hover:bg-[#0a1a67]/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

// Results Section Component with enhanced animations
function ResultsSection({ topResults }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const topCards = [


    // {
    //  value: topResults.neet.score,
    // title: 'NEET Biology',
    //  desc: `${topResults.neet.students} achieved perfect score`,
    //},
  ]

  const achievementCards = [
    {
      value: '30%',
      title: 'increase in IIT admissions',
      desc: '2025',
      subtext: 'Elite Engineering Dreams Realized',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      value: '5',
      title: 'Selections in AIIMS & MBBS',
      desc: 'out of 53 students',
      subtext: 'Future Doctors in Making',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      value: '86',
      title: 'Students with 99+ Percentile',
      desc: 'MHT-CET 2025',
      subtext: 'Top 1% Performers',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: '32',
      title: 'Students Scored 95%+',
      desc: 'JEE Advanced 2025',
      subtext: 'Excellence Personified',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '80+',
      title: 'Students Qualified',
      desc: 'JEE Advanced 2025',
      subtext: 'Breaking Barriers',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      value: '150+',
      title: 'Expert Faculty',
      desc: 'Teachers by Choice',
      subtext: 'Mentors Who Care',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ]

  return (
    <section className="container-page py-4" ref={sectionRef}>
      <div className="flex items-center justify-between mb-4 flex-col sm:flex-row gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1a67] text-center sm:text-left">
          One of the <span className="text-[#B30027]">Leading and most </span>  <span className="text-[#B30027]"> successful</span> Institutions in Pune
        </h2>

        <Link href="/results" className="btn-outline hover:scale-105 transition-transform duration-300 text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5">View All Results</Link>
      </div>

      {/* Results Image Slider */}
      <div className="mb-6">
        <ResultsImageSlider />
      </div>

      {/* Enhanced Results Display */}
      <div className="mt-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {topCards.filter((_, idx) => idx !== 1).map((card, filteredIdx) => {
            const bgColors = ['bg-[#B30027]', 'bg-brand-dark']
            return (
              <div
                key={filteredIdx}
                className={`${bgColors[filteredIdx]} p-6 text-center text-white rounded-2xl shadow-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group min-h-[180px] flex flex-col justify-center`}
              >
                <h2>Our Results</h2>
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    {card.value}
                  </div>
                  <div className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                    {card.title}
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/90 mt-2">
                    {card.desc}
                  </div>
                  {card.highlight && (
                    <div className="text-xs text-white/80 mt-2">
                      {card.highlight}
                    </div>
                  )}
                </div>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Testimonials Slider Component


// Combined Features & News Section
function FeaturesAndNewsSection() {
  const features = [
    { icon: '📚', title: 'Expert Faculty', desc: '150+ qualified teachers' },
    { icon: '🎯', title: 'Focused Learning', desc: 'Structured curriculum' },
    { icon: '🏆', title: 'Proven Results', desc: 'Top rankers every year' },
    { icon: '💡', title: 'Doubt Sessions', desc: 'Personalized attention' },
    { icon: '🏢', title: '8 Branches', desc: 'Across Pune region' },
    { icon: '📊', title: 'Performance Tracking', desc: 'Regular assessments' },
  ]

  const courses = [
    {
      id: 'iit-jee',
      icon: '🎯',
      name: 'IIT-JEE',
      fullName: 'Joint Entrance Examination',
      description: 'The gateway to India\'s premier engineering institutions - IITs, NITs, and IIITs.',
      examDates: 'JEE Main: Jan & Apr | JEE Advanced: May',
      ourResults: '30% increase in IIT admissions in 2025',
    },
    {
      id: 'mht-cet',
      icon: '📚',
      name: 'MHT-CET',
      fullName: 'Maharashtra Common Entrance Test',
      description: 'Maharashtra\'s premier entrance exam for engineering and pharmacy admissions.',
      examDates: 'Usually conducted in May',
      ourResults: '86 students scored 99+ percentile in 2025',
    },
    {
      id: 'neet',
      icon: '⚕️',
      name: 'NEET',
      fullName: 'National Eligibility cum Entrance Test',
      description: 'The single gateway to MBBS, BDS, and AYUSH courses across India.',
      examDates: 'Usually conducted in May',
      ourResults: '5 selections in AIIMS and MBBS out of 53 students',
    },
    {
      id: 'iiser',
      icon: '🔬',
      name: 'IISER',
      fullName: 'Indian Institutes of Science Education and Research',
      description: 'Premier institutes for integrated BS-MS programs in pure sciences.',
      examDates: 'Admission via JEE Advanced/KVPY',
      ourResults: 'Research-focused training',
    }
  ]

  const newsItems = [
    "Admissions Open for 2025-26 Batch - IIT-JEE, NEET, MHT-CET",
    "86 Students scored 99+ Percentile in MHT-CET 2025",
    "12+ Students selected for IIT in 2025",
    "5 selections in AIIMS and MBBS out of 53 students",
    "Free Career Counselling Sessions Every Saturday",
    "80+ Students Qualified for JEE Advanced",
    "32 Students Scored more than 95%ile",
    "86 Students Scored 99%ile in MHT-CET",
    "162 Students Scored 98%ile in MHT-CET",
  ]

  return (
    <section className="container-page py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left - Features */}
        <div className="hidden md:block bg-[#0a1a67] rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                <h3 className="text-white font-semibold text-sm md:text-base">{feature.title}</h3>
                <p className="text-white/70 text-xs md:text-sm mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 mt-6 text-white hover:text-white/80 transition-colors duration-300 font-medium">
            Learn More About Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Right - Latest News */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 md:col-span-1 lg:col-span-1">
          <div className="bg-[#B30027] p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Latest News & Updates
            </h2>
          </div>
          <div className="p-4 md:p-6 h-[320px] overflow-hidden relative">
            <div className="animate-scroll-news">
              {[...newsItems, ...newsItems].map((news, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-gray-100 last:border-0 flex items-start gap-3 group cursor-pointer hover:bg-gray-50 px-2 rounded-lg transition-colors duration-300"
                >
                  <span className="text-[#B30027] font-bold text-lg flex-shrink-0">›</span>
                  <span className="text-[#0a1a67] font-medium group-hover:text-[#B30027] transition-colors duration-300 text-sm md:text-base">
                    {news}
                  </span>
                </div>
              ))}
            </div>
            {/* Fade effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-3">Our Courses</h2>
          <p className="text-[#0a1a67]/70 text-lg">Comprehensive preparation for competitive examinations</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-[#0a1a67] rounded-xl sm:rounded-2xl p-3 sm:p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden block"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="text-2xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                <h3 className="text-sm sm:text-2xl font-bold mb-0.5 sm:mb-1 leading-tight">{course.name}</h3>
                <p className="text-[10px] sm:text-sm opacity-90 mb-1.5 sm:mb-3 leading-tight">{course.fullName}</p>
                <p className="text-[9px] sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">{course.description}</p>

                <div className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-3">
                    <p className="text-[8px] sm:text-xs font-bold">📅 {course.examDates}</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-1.5 sm:p-3">
                    <p className="text-[8px] sm:text-xs font-bold">🏆 {course.ourResults}</p>
                  </div>
                </div>

                <div className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-[9px] sm:text-sm font-semibold group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#B30027] text-white hover:bg-[#8a001e] px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Courses & Batches
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-news {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-news {
          animation: scroll-news 15s linear infinite;
        }
        .animate-scroll-news:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Our Vision Section Component
function VisionSection() {
  const branches = [
    {
      name: 'Nigdi',
      director: 'Mr. Nishant Patwardhan',
      directorImage: 'v1764218938/abhi_mehta_f6h4om',
    },
    {
      name: 'Shahunagar',
      director: 'Mr. Ravindra Yadav',
      directorImage: 'v1764990905/yadav_vv66wt',
    },
    {
      name: 'Chinchwad',
      director: 'Mr. Algesh Patrike',
      directorImage: 'v1765163829/algesh_hskjtk',
    },
    {
      name: 'Ravet',
      director: 'Mr. Abhishek Mehta',
      directorImage: 'v1764218937/nishant_tifi1f',
    },
    {
      name: 'Wakad',
      director: 'Mr. Manoj Kumar',
      directorImage: 'v1765163801/manoj_1_algvci',
    },
    {
      name: 'Moshi',
      director: 'Mr. Umesh Bharde',
      directorImage: 'v1765163805/umesh_1_aoyp2r',
    },
  ]

  return (
    <section className="container-page py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Vision Text */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1a67] mb-4 sm:mb-6">
            Our Vision
          </h2>
          <div className="space-y-4 text-[#0a1a67] text-sm sm:text-base leading-relaxed">
            <p>
              <strong>We are teachers by our choice and we passionately do our job.</strong> Our aim is not to run the classes conventionally, but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.
            </p>
            <p>
              Matrix Science Academy aims to provide <strong>quality and affordable education</strong> to all students via offline as well as online mode.
            </p>
          </div>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 mt-6 text-[#B30027] hover:text-[#8a001e] font-semibold transition-colors duration-300 text-sm sm:text-base"
          >
            Read Full Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <NewsSlider />
      <HeroSlider />

      {/* Combined Features & News Section */}
      <FeaturesAndNewsSection />


      {/* Results Section */}



      <ResultsSection topResults={topResults} />

      {/* Our Vision Section */}
      <VisionSection />

      {/* Features Section */}
      <FeaturesSection />



      {/* Testimonials Section with Slider */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#0a1a67' }}>

        {/* <div className="container-page relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold relative text-white">
              <span className="relative z-10">Student Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-white rounded-full"></span>
            </h2>
            <Link href="/testimonials" className="btn-outline bg-white hover:scale-105 transition-transform duration-300">View All</Link>
          </div>
          
          <TestimonialCard testimonials={topTestimonials} />
        </div> */}
        <TestimonialsShowcase />
      </section>


      {/* CTA Section */}
      <section className="container-page py-8">
        <div className="rounded-2xl bg-brand/30 border border-brand/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1a67]">Ready to start your journey?</h3>
            <p className="text-[#0a1a67] mt-1">Speak with our counsellors and get a personalized plan.</p>
          </div>
          <Link href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">Enquire Now</Link>
        </div>
      </section>
    </div>
  )
}
