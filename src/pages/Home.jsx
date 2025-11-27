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
  neet: { score: '100/100', subject: 'Biology', students: 'Multiple students' },
}

// Latest News Section Component
function LatestNewsSection() {
  const newsItems = [
    "Admissions Open for 2025-26 Batch - IIT-JEE, NEET, MHT-CET",
    "86 Students scored 99+ Percentile in MHT-CET 2025",
    "12+ Students selected for IIT in 2025",
    "New Branch Opening in Hinjewadi - Coming Soon",
    "100/100 in Biology - NEET 2025 Toppers",
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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-white shadow-lg">
      {/* Main Slider */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              currentIndex === idx 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_800,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
              alt={img.alt}
              className="w-full h-full object-contain"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 py-4 bg-white/80">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-10 bg-[#0a1a67]' 
                : 'w-3 bg-gray-300 hover:bg-gray-400'
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
      value: '12+', 
      title: 'IIT Admissions', 
      desc: 'IIT Guwahati, Kharagpur, Mandi',
      subtext: 'Elite Engineering Dreams Realized',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      value: '100/100', 
      title: 'NEET Biology', 
      desc: 'Perfect scores achieved',
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
    <section className="container-page py-6" ref={sectionRef}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-[#0a1a67]">
          One of the <span className="text-[#B30027]">Leading and most </span>  <span className="text-[#B30027]"> successful</span> Institutions in Pune
        </h2>
        
        <Link href="/results" className="btn-outline hover:scale-105 transition-transform duration-300">View All Results</Link>
      </div>
      
      {/* Achievement Highlights - Moved to top */}
      <div className="mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCards.map((card, idx) => {
            // Colors for all 6 cards
            const bgColors = ['bg-gradient-to-br from-[#B30027] to-[#8a001e]', 'bg-gradient-to-br from-emerald-500 to-emerald-600', 'bg-gradient-to-br from-[#0a1a67] to-blue-700', 'bg-gradient-to-br from-amber-500 to-orange-500', 'bg-gradient-to-br from-purple-500 to-purple-600', 'bg-gradient-to-br from-gray-600 to-gray-700']
            return (
              <div
                key={idx}
                className={`${bgColors[idx]} rounded-3xl p-6 text-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] relative overflow-hidden group min-h-[280px] flex flex-col justify-between cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon section */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <div className="text-white group-hover:rotate-12 transition-transform duration-300">
                      {card.icon}
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {card.desc}
                  </div>
                </div>

                {/* Content section */}
                <div className="relative z-10 mt-4">
                  <div className="text-5xl sm:text-6xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                    {card.value}
                  </div>
                  <div className="text-xl font-bold text-white/95 mb-1">
                    {card.title}
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    {card.subtext}
                  </div>
                </div>

                {/* Interactive arrow indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/0 via-white to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            )
          })}
        </div>

        {/* Results Image Slider */}
        <div className="mt-8">
          <ResultsImageSlider />
        </div>

      </div>

      {/* Enhanced Results Display */}
      <div className="mt-10">
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

        {/* Results Images */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-full aspect-[3/4] overflow-hidden">
              <OptimizedImage
                cloudinaryId="v1763783028/4_nl1ejs"
                alt="Results Photo 1"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                crop="fill"
                quality="auto"
                loading="eager"
              />
            </div>
          </div>
          <div className="card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="w-full aspect-[3/4] overflow-hidden">
              <OptimizedImage
                cloudinaryId="v1763783015/5_c2lqwx"
                alt="Results Photo 2"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                crop="fill"
                quality="auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Slider Component


export default function Home() {
  return (
    <div>
      <NewsSlider />
      <HeroSlider />
      <FeaturesSection />


      {/* Results Section */}

      <ResultsSection topResults={topResults} />

      {/* Latest News Section */}
      <LatestNewsSection />

      {/* Top Images Section */}
      <OverviewSection />

      <section className="container-page py-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#0a1a67] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#0a1a67] group-hover:text-white transition-colors duration-300">Why MSA?</h3>
            <p className="mt-2 text-[#0a1a67] group-hover:text-white transition-colors duration-300">150+ teachers by choice, curated content, and disciplined guidance for competitive exams.</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#0a1a67] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#0a1a67] group-hover:text-white transition-colors duration-300">Programs</h3>
            <p className="mt-2 text-[#0a1a67] group-hover:text-white transition-colors duration-300">Leading trainers in Pune</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#0a1a67] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#0a1a67] group-hover:text-white transition-colors duration-300">Branches</h3>
            <p className="mt-2 text-[#0a1a67] group-hover:text-white transition-colors duration-300">8 branches: Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi.</p>
          </div>
        </div>
      </section>

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



