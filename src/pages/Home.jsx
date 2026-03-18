'use client'
import Link from 'next/link'
import { Suspense, useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import OptimizedImage from '@/components/OptimizedImage'
import FeaturesSection from '@/components/featuresSection.jsx'
import TestimonialsShowcase from '@/components/Testimonials.jsx'
import EnquiryForm from '@/components/EnquiryForm.jsx'

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
    <section className="container-page py-6 md:py-8">
      <div className="bg-box-bg rounded-2xl shadow-lg overflow-hidden border border-gray-200/60">
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
    <section className="container-page py-6 md:py-8">
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
function ResultsImageSlider({ visibleCount = 2, showControls = true, showDots = true, heightClassName = 'h-[280px] md:h-[350px] lg:h-[400px]', framed = true } = {}) {
  const [offset, setOffset] = useState(0)
  const images = [
    { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763783015/5_c2lqwx.jpg', alt: 'Results image 1' },
    { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763783028/7_cgvboz.jpg', alt: 'Results image 2' },
  ]
  const step = 1
  const maxOffset = Math.max(0, images.length - visibleCount)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev >= maxOffset ? 0 : prev + step))
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length, maxOffset])

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Row of images - multiple visible, sliding as a group to the right; no white bg */}
      <div className={`relative ${heightClassName} overflow-hidden`}>
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * (100 / visibleCount)}%`,
            transform: `translateX(-${offset * (100 / images.length)}%)`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 ${framed ? 'p-2 md:p-3' : 'p-0'} h-full flex items-center justify-center`}
              style={{ width: `${100 / images.length}%` }}
            >
              {framed ? (
                <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center shadow-md border border-gray-200/60 bg-page-bg">
                  <img
                    src={img.src ?? `https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                    loading={idx < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              ) : (
                <img
                  src={img.src ?? `https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_1200,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showControls && (
          <>
            <button
              onClick={() => setOffset((prev) => (prev === 0 ? maxOffset : prev - step))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-[#0a1a67] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border border-gray-200/80 hover:border-[#0a1a67]"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0a1a67] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setOffset((prev) => (prev >= maxOffset ? 0 : prev + step))}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-[#0a1a67] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border border-gray-200/80 hover:border-[#0a1a67]"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0a1a67] hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots - no white bg, site background */}
      {showDots && (
        <div className="flex justify-center gap-2 py-3">
          {Array.from({ length: maxOffset + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setOffset(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${offset === idx
                ? 'w-6 bg-[#0a1a67]'
                : 'w-2 bg-gray-300 hover:bg-[#0a1a67]/50'
                }`}
            />
          ))}
        </div>
      )}
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
    <section className="py-6 md:py-8" ref={sectionRef}>
      <div className="container-page">
        <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-3 sm:gap-0">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-heading mb-0">
            One of the <span className="text-body/90">Leading and most successful</span> Institutions in Pune
          </h2>
          <Link href="/results" className="inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-all duration-300 text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 font-semibold">View All Results</Link>
        </div>

        {/* Results Image Slider - site background only, no white block */}
        <div className="mb-0">
          <h3 className="text-lg md:text-xl font-bold text-[#0a1a67] mb-3">Results &amp; Achievements Gallery</h3>
          <ResultsImageSlider />
        </div>
      </div>
    </section>
  )
}

// Testimonials Slider Component


// What's Trending – carousel slides (replaces Why Choose Us)
const TRENDING_SLIDES = [
  {
    label: 'JEE Main & Advanced 2026',
    headline: 'IIT dream? Expert faculty & structured batches.',
    description: 'Recorded lectures, test series & study material, all in one place across 8 branches.',
    cta: 'Explore JEE Batches',
    href: '/courses/iit-jee',
    percentile: '99+',
    name: 'Top Rankers',
    subtext: 'JEE · MHT-CET · NEET',
    location: 'Pune',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763786335/output_faqujd',
  },
  {
    label: 'MHT-CET 2025',
    headline: '86 students scored 99+ percentile!',
    description: 'Join the ranks. Structured curriculum, regular tests and doubt sessions.',
    cta: 'Explore MHT-CET',
    href: '/courses/mht-cet',
    percentile: '99%ile',
    name: 'MHT-CET Toppers',
    subtext: 'State Rankers · Pharmacy · Engineering',
    location: 'Pune',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763783015/5_c2lqwx.jpg',
  },
  {
    label: 'NEET 2025',
    headline: 'AIIMS & MBBS – 5 selections from 53 students.',
    description: 'Medical entrance prep with expert faculty and proven results.',
    cta: 'Explore NEET',
    href: '/courses/neet',
    percentile: 'MBBS',
    name: 'NEET Success',
    subtext: 'AIIMS · MBBS · BDS',
    location: 'Pune',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg',
  },
  {
    label: 'IIT Selections 2025',
    headline: '30% increase in IIT admissions this year.',
    description: 'Believe, Build, Become – join Matrix Science Academy.',
    cta: 'View Results',
    href: '/results',
    percentile: 'IIT',
    name: 'IIT Achievers',
    subtext: 'IIT Guwahati · Kharagpur · Mandi',
    location: 'Pune',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1764181786/IIT_knkkka.jpg',
  },
]

function WhatsTrendingCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TRENDING_SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-full">
      <h2 className="home-section-title mb-4 text-center">What&apos;s Trending</h2>
      <div className="relative rounded-xl overflow-hidden border border-gray-300 bg-white min-h-[220px] sm:min-h-[260px] shadow-sm">
        <div className="flex overflow-hidden transition-transform duration-500 ease-out" style={{ width: `${TRENDING_SLIDES.length * 100}%`, transform: `translateX(-${index * (100 / TRENDING_SLIDES.length)}%)` }}>
          {TRENDING_SLIDES.map((slide, i) => (
            <div key={i} className="flex-shrink-0 flex flex-row p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 md:gap-6 items-center" style={{ width: `${100 / TRENDING_SLIDES.length}%` }}>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <span className="inline-block w-fit rounded-full bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold px-3 py-1 mb-2">
                  {slide.label}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-1.5 sm:mb-2">
                  {slide.headline}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none max-w-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.href}
                  className="inline-flex items-center justify-center w-fit bg-[#B30027] hover:bg-[#8a001e] text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded transition-colors text-sm"
                >
                  {slide.cta}
                </Link>
              </div>
              <div className="flex-shrink-0 relative w-28 sm:w-36 md:w-40 lg:w-44">
                <div className="relative flex items-end justify-end min-h-[140px] sm:min-h-[180px] md:min-h-[200px]">
                  <div className="relative z-10 w-24 sm:w-32 md:w-36 h-28 sm:h-36 md:h-40 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                    <img src={slide.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 z-20 w-[120px] sm:w-[130px] text-white rounded-b-lg overflow-hidden shadow" style={{ clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)' }}>
                    <div className="bg-gray-800 px-2 pt-2.5 pb-0.5">
                      <span className="text-base sm:text-lg font-bold text-white">{slide.percentile}</span>
                    </div>
                    <div className="bg-gray-700 px-2 py-1.5">
                      <p className="font-semibold text-[10px] sm:text-xs leading-tight text-white">{slide.name}</p>
                      <p className="text-white/80 text-[9px] sm:text-[10px] mt-0.5">{slide.subtext}</p>
                      <p className="text-white/70 text-[8px] mt-0.5">• {slide.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {TRENDING_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Trending slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-6 bg-gray-700' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Blogs section – horizontal card carousel below courses
const BLOG_CARDS = [
  {
    title: 'JEE Advanced 2026: Exam pattern and key dates',
    description: 'What you need to know about eligibility, registration and exam dates for JEE Advanced 2026.',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_280,c_fill,q_auto,f_auto/v1764181786/IIT_knkkka.jpg',
    label: 'JEE Advanced 2026',
    href: '#',
  },
  {
    title: 'MHT-CET 2025: 86 students scored 99+ percentile',
    description: 'Matrix Science Academy students shine in MHT-CET. Here’s how we prepare our batches.',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_280,c_fill,q_auto,f_auto/v1763783015/5_c2lqwx.jpg',
    label: 'MHT-CET 2025',
    href: '#',
  },
  {
    title: 'NEET 2026: Application and preparation tips',
    description: 'Eligibility, important dates and how to plan your NEET preparation effectively.',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_280,c_fill,q_auto,f_auto/v1764181879/B_r8gw6s.jpg',
    label: 'NEET 2026',
    href: '#',
  },
  {
    title: 'IIT admissions 2025: 30% increase in selections',
    description: 'Our students’ success in IIT JEE Advanced and what makes our batches different.',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_280,c_fill,q_auto,f_auto/v1763786335/output_faqujd',
    label: 'IIT Selections',
    href: '#',
  },
  {
    title: 'Free career counselling and demo classes',
    description: 'Not sure which course to choose? Book a free counselling session at Matrix Science Academy.',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_280,c_fill,q_auto,f_auto/v1764181864/A_dbzo2c.jpg',
    label: 'Counselling',
    href: '/counseling',
  },
]

function BlogsSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const cardWidth = 320
    const gap = 16
    const step = cardWidth + gap
    scrollRef.current.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="home-section bg-white">
      <div className="container-page">
        <h2 className="home-section-title mb-4">Blogs</h2>
        <p className="home-section-body max-w-2xl mb-6">Latest updates, exam tips, and success stories.</p>
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous blogs"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next blogs"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div
            ref={scrollRef}
            className="blogs-scroll flex gap-4 overflow-x-auto scroll-smooth pb-2 px-4 sm:px-6 lg:px-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {BLOG_CARDS.map((blog, i) => (
              <Link
                key={i}
                href={blog.href}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl overflow-hidden bg-white border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block px-2 py-0.5 rounded bg-white/95 text-[10px] font-semibold uppercase text-gray-800 shadow-sm">
                      {blog.label}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .blogs-scroll {
          -webkit-overflow-scrolling: touch;
        }
        .blogs-scroll::-webkit-scrollbar {
          display: none;
        }
        .blogs-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  )
}

// Tabbed Courses Section – NEET first, active tab red
const COURSES_TAB_DATA = [
  {
    id: 'neet',
    name: 'NEET',
    href: '/courses/neet',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_600,h_400,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg',
    heading: 'NEET – Medical Entrance',
    description: 'Targeted preparation for the National Eligibility cum Entrance Test for MBBS, BDS, and AYUSH courses. We emphasize conceptual clarity in Biology, Chemistry, and Physics, along with extensive practice and revision cycles. Our results speak for the quality of coaching and mentorship we provide.',
  },
  {
    id: 'iit-jee',
    name: 'IIT-JEE',
    href: '/courses/iit-jee',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1763786335/output_faqujd',
    heading: 'IIT-JEE (Main & Advanced)',
    description: 'Comprehensive preparation for India\'s premier engineering entrance. Our structured program covers JEE Main and Advanced with concept clarity, rigorous test series, and personalized doubt-solving. We focus on building strong fundamentals in Physics, Chemistry, and Mathematics to help students secure top ranks and admissions to IITs, NITs, and IIITs.',
  },
  {
    id: 'mht-cet',
    name: 'MHT-CET',
    href: '/courses/mht-cet',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_500,c_fill,q_auto,f_auto/v1763783015/5_c2lqwx.jpg',
    heading: 'MHT-CET Preparation',
    description: 'Maharashtra\'s premier entrance exam for engineering and pharmacy admissions. Our MHT-CET program combines in-depth syllabus coverage with state-specific strategy, regular full-length mocks, and performance analytics. Students benefit from small batches and expert faculty to achieve top percentiles.',
  },
  {
    id: 'iiser',
    name: 'IISER',
    href: '/courses/iiser',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_600,h_400,c_fit,q_auto,f_auto/v1764181786/IIT_knkkka.jpg',
    heading: 'IISER Foundation',
    description: 'For students aiming at the Indian Institutes of Science Education and Research and other research-oriented programs. Our IISER track builds strong foundations in science and mathematics, aligned with JEE Advanced and KVPY preparation, to help students excel in competitive and research pathways.',
  },
  {
    id: 'vriksha',
    name: 'VRIKSHA',
    href: '/vriksha',
    image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_600,h_400,c_fit,q_auto,f_auto/v1764181864/A_dbzo2c.jpg',
    heading: 'VRIKSHA – Holistic Growth',
    description: 'Our newest program designed to nurture overall development—strong academics, mental strength, sports, and competitive focus. VRIKSHA combines structured learning with holistic activities to build confident, well-rounded students ready for future success.',
  },
]

function CoursesTabSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const course = COURSES_TAB_DATA[activeIndex]

  return (
    <section className="home-section">
      <div className="container-page max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="home-section-title">Our Courses</h2>

        {/* Tabs: active = red bg + white text, inactive = dark text only */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
          {COURSES_TAB_DATA.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                i === activeIndex
                  ? 'bg-[#B30027] text-white rounded border-b-2 border-[#B30027]'
                  : 'text-gray-800 bg-transparent hover:text-gray-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content: image LEFT, text RIGHT – two columns, clean alignment */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Left column – large rectangular image, grayscale, label overlay bottom-right */}
          <Link href={course.href} className="relative block min-h-[260px] md:min-h-[320px] bg-gray-200">
            <img
              src={course.image}
              alt={course.heading}
              className="w-full h-full object-cover grayscale"
            />
            <span className="absolute bottom-4 right-4 text-white text-lg font-bold drop-shadow-md">
              {course.name}
            </span>
          </Link>

          {/* Right column – heading (bold) + paragraph (lighter, smaller) */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            <h3 className="home-section-subtitle">{course.heading}</h3>
            <p className="home-section-body mb-5">{course.description}</p>
            <Link
              href={course.href}
              className="inline-flex items-center gap-2 text-gray-800 font-semibold hover:underline text-sm"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Combined Features & News Section (What's Trending + Latest News + Our Courses)
function FeaturesAndNewsSection() {

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
    },
    {
      id: 'vriksha',
      href: '/vriksha',
      icon: '🌱',
      name: 'VRIKSHA',
      fullName: 'New Program',
      description: 'Our newest program designed to nurture growth and excellence with a structured curriculum.',
      examDates: 'Flexible batches',
      ourResults: 'Dedicated support & proven approach',
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
    <section className="home-section bg-white">
      <div className="container-page">
      <div className="grid grid-cols-[65%_35%] gap-4 md:gap-6">
        {/* Left – What's Trending (65%) */}
        <div className="min-w-0">
          <WhatsTrendingCarousel />
        </div>

        {/* Right - Latest News (35%): no card background, plain list */}
        <div className="min-w-0">
          <h2 className="home-section-title mb-3">Latest News</h2>
          <p className="home-section-body mb-4">Announcements and achievements.</p>
          <div className="h-[240px] overflow-hidden relative">
            <div className="animate-scroll-news">
              {[...newsItems, ...newsItems].map((news, idx) => (
                <div
                  key={idx}
                  className="py-2 border-b border-gray-200 last:border-0 flex items-start gap-2"
                >
                  <span className="text-gray-400 font-medium text-sm flex-shrink-0">›</span>
                  <span className="text-gray-700 text-sm leading-snug">
                    {news}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Courses Section - horizontal slider (left to right) */}
      <div className="mt-8">
        <h2 className="home-section-title mb-2">Our Courses – All Programs</h2>
        <p className="home-section-body max-w-2xl mb-6">Comprehensive preparation for competitive examinations.</p>

        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="animate-scroll-courses flex gap-4 sm:gap-6 pb-2" style={{ width: 'max-content' }}>
            {[...courses, ...courses].map((course, idx) => (
              <Link
                key={`${course.id}-${idx}`}
                href={course.href || `/courses/${course.id}`}
                className="rounded-2xl border border-gray-200/80 bg-white p-3 sm:p-5 shadow-sm hover:border-[#B30027]/30 hover:shadow-md hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden block flex-shrink-0 w-[280px] sm:w-[320px]"
              >
                {/* Layout: Left text content, right image (tilted box) */}
                <div className="relative z-10 flex items-stretch h-full">
                  {/* Left content */}
                  <div className="flex-1 pr-2 sm:pr-4 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#B30027] leading-tight mb-0.5">
                        {course.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Batch
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 mb-1">
                        {course.fullName}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-600 mb-1.5 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="mt-1.5 space-y-1">
                        <p className="text-[10px] sm:text-xs font-semibold text-gray-700">
                          📅 {course.examDates}
                        </p>
                        <p className="text-[9px] sm:text-[10px] font-medium text-gray-500">
                          🏆 {course.ourResults}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center mt-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-full bg-[#B30027] text-white group-hover:bg-[#8a001e] transition-colors">
                      Explore More
                    </span>
                  </div>

                  {/* Right: image inside tilted box */}
                  <div className="relative w-24 sm:w-28 md:w-32 flex items-end justify-center flex-shrink-0">
                    <div className="relative z-10 w-20 sm:w-24 md:w-28 h-32 sm:h-36 md:h-40 rounded-[2rem] bg-gray-100 translate-x-3 -translate-y-2 rotate-[-8deg] group-hover:translate-y-0 group-hover:rotate-[-4deg] transition-transform duration-300 shadow-md overflow-hidden">
                      <img
                        src={
                          course.id === 'iit-jee'
                            ? 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763786335/output_faqujd'
                            : course.id === 'mht-cet'
                              ? 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763783015/5_c2lqwx.jpg'
                              : 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg'
                        }
                        alt={`${course.name}`}
                        className="w-full h-full object-cover -translate-y-2 sm:-translate-y-3 md:-translate-y-4"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
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

      <BlogsSection />
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
        @keyframes scroll-courses {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-courses {
          animation: scroll-courses 35s linear infinite;
        }
        .animate-scroll-courses:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Merged: Choose Right Support + Enter Matrix + Our Proven Methodology (one section)
const METHODOLOGY_STEPS = [
  { label: 'Concept Explanation', icon: '📖' },
  { label: 'Practice Sessions', icon: '✏️' },
  { label: 'Doubt Solving', icon: '💬' },
  { label: 'Periodic Tests', icon: '📋' },
  { label: 'Feedback', icon: '📊' },
]

function AcademicSupportMethodologySection() {
  return (
    <section className="home-section">
      <div className="container-page">
        {/* Redesigned intro + "How we do it" (single cohesive section card) */}
        <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
          <div className="h-1.5 bg-[#B30027]" aria-hidden />
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div className="min-w-0">
                <h2 className="home-section-title mb-2">Our Proven Methodology</h2>
                <p className="home-section-body max-w-2xl">
                  Choosing the right support matters. We combine a structured approach with a partner mindset to turn stress into success.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#B30027]" aria-hidden />
                  Parent-friendly guidance
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#0a1a67]" aria-hidden />
                  Student-first learning
                </span>
              </div>
            </div>

            {/* Two story cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl p-5 md:p-6 border border-gray-200/80 bg-gray-50/50">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-[#B30027]/10 text-[#B30027] flex items-center justify-center text-lg font-semibold flex-shrink-0" aria-hidden>1</span>
                  <h3 className="home-section-subtitle text-lg md:text-xl mb-0">
                    Choosing the Right Academic Support Can Be Challenging
                  </h3>
                </div>
                <p className="home-section-body max-w-xl">
                  As a parent, you want the best for your child, but navigating the education landscape is tough. Between choosing the right institute, ensuring concept clarity, managing exam pressure, and keeping motivation high—it can feel overwhelming.
                </p>
              </div>

              <div className="rounded-2xl p-5 md:p-6 border border-gray-200/80 bg-gray-50/50">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-[#0a1a67]/10 text-[#0a1a67] flex items-center justify-center text-lg font-semibold flex-shrink-0" aria-hidden>2</span>
                  <h3 className="home-section-subtitle text-lg md:text-xl mb-0">
                    Enter Matrix Science Academy
                  </h3>
                </div>
                <p className="home-section-body max-w-xl">
                  We&apos;ve built an ecosystem specifically designed to address these challenges. We partner with parents to provide transparent, structured, and highly effective academic coaching that turns stress into success.
                </p>
              </div>
            </div>

            {/* How we do it: 5 methodology steps (kept inside same card) */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="home-section-body font-semibold text-gray-800 mb-4">How we do it</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {METHODOLOGY_STEPS.map((s, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200/80 bg-white p-3 flex flex-col items-center text-center hover:border-[#B30027]/30 hover:shadow-md transition-all duration-200">
                    <span className="w-7 h-7 rounded-full bg-[#B30027]/10 text-[#B30027] flex items-center justify-center text-[11px] font-semibold mb-1.5">{i + 1}</span>
                    <span className="text-lg mb-1 block" aria-hidden>{s.icon}</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Counselling (left) + Book Your Session form (right)
function CounselingFormRow() {
  const steps = ['Coaching Session', 'Exam Planning', 'Performance Test', 'Study Roadmap', 'Personalized Guidance']
  return (
    <section className="home-section">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="rounded-2xl p-6 md:p-8 flex flex-col justify-center border border-gray-200/80 bg-white shadow-sm">
            <h2 className="home-section-subtitle text-xl md:text-2xl mb-2">
              Free Academic Counselling for Students and Parents
            </h2>
            <p className="home-section-body max-w-xl mb-6">
              Not sure which path to take? Our expert counsellors help you evaluate academic performance, plan for competitive exams, and create a personalized study roadmap for your child.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {steps.map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="w-10 h-10 rounded-full bg-[#B30027]/10 text-[#B30027] flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <span className="text-xs font-medium text-gray-600">{label}</span>
                </div>
              ))}
            </div>
            <Link href="/enquiry?counseling=1" className="inline-flex items-center gap-2 bg-[#B30027] text-white hover:bg-[#8a001e] font-semibold px-6 py-3 rounded-lg transition-colors">
              Book Your Free Session Now
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm overflow-hidden">
            <div className="h-1.5 bg-[#B30027]" aria-hidden />
            <div className="p-6 md:p-8">
              <h3 className="home-section-subtitle text-lg md:text-xl mb-1">Book Your Session</h3>
              <p className="home-section-body text-sm mb-4">Fill out the form below and our academic counsellor will call you.</p>
              <Suspense
                fallback={
                  <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                    <p className="text-body text-sm">Loading form…</p>
                  </div>
                }
              >
                <EnquiryForm initialMessage="I am interested in free career counseling session." minimal />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Achievement cards data (first 5 for Our Achievements)
const ACHIEVEMENT_CARDS = [
  { value: '30%', title: 'Increase in IIT admissions', desc: 'Elite Engineering Dreams Realized', icon: '📈' },
  { value: '5', title: 'Selections in AIIMS & MBBS', desc: 'out of 53 students', icon: '❤️' },
  { value: '86', title: 'Students 99+ Percentile', desc: 'MHT-CET 2025', icon: '🎓' },
  { value: '32', title: 'Students Scored 95%+', desc: 'JEE Advanced 2025', icon: '⭐' },
  { value: '80+', title: 'Qualified for JEE Adv 2025', desc: 'Breaking Barriers', icon: '🚀' },
]

// Our Achievements (left) + JEE Results gallery (right)
function AchievementsAndResultsRow() {
  return (
    <section className="home-section py-4 md:py-5">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* Left: Achievements in a card */}
          <div className="rounded-2xl border border-gray-200/80 bg-white p-4 md:p-5 shadow-sm flex flex-col">
            <h2 className="home-section-title mb-1">Our Achievements</h2>
            <p className="home-section-body mb-4 text-sm">
              <span className="font-bold text-[#B30027]">One of the leading and most successful institutions in Pune.</span>{' '}
              Our results speak for the quality of education and dedication of our expert faculty.
            </p>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {ACHIEVEMENT_CARDS.map((card, i) => (
                <div key={i} className="rounded-xl border border-gray-200/80 bg-gray-50/50 p-3 flex flex-col justify-center hover:border-[#B30027]/30 transition-colors duration-200">
                  <span className="text-xl mb-1 block" aria-hidden>{card.icon}</span>
                  <span className="text-xl md:text-2xl font-bold text-[#B30027] leading-tight">{card.value}</span>
                  <p className="text-xs font-semibold text-gray-800 mt-0.5">{card.title}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{card.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/results" className="inline-flex items-center gap-2 mt-4 text-[#B30027] font-semibold hover:underline">
              View All Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          {/* Right: single image slider (one at a time), bordered like other sections */}
          <div className="rounded-2xl border border-gray-200/80 bg-transparent p-4 md:p-5 shadow-none flex flex-col min-h-0">
            <h3 className="home-section-subtitle text-lg md:text-xl mb-3">JEE Mains 2024 Results in percentile</h3>
            <ResultsImageSlider visibleCount={1} showControls={false} showDots={false} framed={false} heightClassName="h-[490px] md:h-[570px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Specialized Batches – card grid like Methodology / Achievements
function SpecializedBatchesSection() {
  const batches = [
    { name: 'IMPULSE', icon: '⚡' },
    { name: 'SPRINT', icon: '⏱️' },
    { name: 'PACE', icon: '✓' },
    { name: 'DRIFT', icon: '🌊' },
    { name: 'RACE', icon: '🏁' },
  ]
  return (
    <section className="home-section">
      <div className="container-page">
        <h2 className="home-section-title">Specialized Batches</h2>
        <p className="home-section-body max-w-2xl mb-6">
          Choose the batch that fits your pace and goals—from intensive prep to steady progress.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {batches.map((b, i) => (
            <Link
              key={i}
              href="/courses"
              className="rounded-2xl border border-gray-200/80 bg-white p-5 flex flex-col items-center text-center hover:border-[#B30027]/30 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform" aria-hidden>{b.icon}</span>
              <span className="text-sm font-semibold text-gray-800">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// About intro – short orientation for new visitors
function AboutIntro() {
  return (
    <section className="page-section-tight bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
              <span>About </span>
              <span className="text-[#ed1c24]">Matrix</span>{' '}
              <span className="text-[#646262] font-black">Science</span>{' '}
              <span className="text-[#214295] font-black">Academy</span>
            </h2>
            <p className="text-body/90 text-base md:text-lg max-w-3xl mb-4">
              Matrix Science Academy is one of the leading coaching institutions in Pune, helping students achieve their dreams in IIT-JEE, NEET, MHT-CET, and IISER through expert faculty, structured learning, and proven results.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-heading font-semibold hover:underline">
              Read more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Image on tilted card, similar to course card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-40 sm:h-48 md:h-56 lg:h-64">
              {/* Subtle red accent background similar to Why Choose Us cards */}
              <div className="absolute -bottom-1 -left-1 w-12 h-12 rounded-full bg-[#B30027]/15 blur-sm" aria-hidden />
              <div className="absolute -top-3 right-0 w-10 h-10 rounded-full bg-[#B30027]/10 blur-[2px]" aria-hidden />
              <div className="relative z-10 w-full h-full rounded-[2rem] bg-gradient-to-tr from-[#ffe6ea] via-[#ffe6ea] to-[#ffd0da] transition-transform duration-300 shadow-md overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddqgxrgnc/image/upload/v1764181864/A_dbzo2c.jpg"
                  alt="About Matrix Science Academy"
                  className="w-full h-full object-cover -translate-y-1 sm:-translate-y-1.5 md:-translate-y-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// VRIKSHA highlight – watering + tree grows + points moving toward tree
const VRIKSHA_POINTS = [
  { icon: '📚', label: 'Academics' },
  { icon: '🧠', label: 'Mindset' },
  { icon: '🏃', label: 'Sports' },
  { icon: '🎯', label: 'Exams' },
  { icon: '🌱', label: 'Growth' },
  { icon: '🚀', label: 'Success' },
]

function VrikshaHighlight({ embedded = false }) {
  const card = (
    <Link href="/vriksha" className="group block bg-white/95 border-2 border-[#0a1a67]/20 rounded-2xl sm:rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:border-[#0a1a67]/40 transition-all duration-300 overflow-hidden h-full relative">
          {/* Tree as background at end of card – below slider, same position */}
          <div className="absolute bottom-0 right-0 flex items-end justify-end pointer-events-none w-[45%] md:w-[40%] min-h-[160px] md:min-h-[180px]" aria-hidden>
            <div className="vriksha-tree-bg flex items-end justify-center w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] h-[140px] md:h-[180px] opacity-90">
              <svg viewBox="0 0 80 100" className="w-full h-full text-emerald-500/50 drop-shadow-sm" fill="currentColor">
                <path d="M40 8 L72 48 L40 42 L8 48 Z" fill="currentColor" opacity="0.9" />
                <path d="M40 22 L66 58 L40 52 L14 58 Z" fill="currentColor" opacity="0.85" />
                <path d="M40 36 L60 68 L40 62 L20 68 Z" className="text-emerald-600" fill="currentColor" opacity="0.9" />
                <path d="M40 50 L54 78 L40 72 L26 78 Z" className="text-emerald-600" fill="currentColor" />
                <path d="M34 72 L46 72 L44 98 L36 98 Z" className="text-amber-700" fill="currentColor" opacity="0.9" />
              </svg>
            </div>
          </div>

          {/* Content row: text | slider (slider sits above tree so it touches it) */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0a1a67]/10 flex items-center justify-center text-2xl md:text-3xl group-hover:scale-105 transition-transform ring-2 ring-[#0a1a67]/15">
                  🌱
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#0a1a67] text-white text-xs font-semibold uppercase tracking-widest">New</span>
              </div>
              <h2 className="home-section-subtitle text-[#0a1a67] mb-2">VRIKSHA</h2>
              <p className="home-section-body mb-4 max-w-xl">
                Holistic learning: academics, wellness, and competitive readiness in one program.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0a1a67] font-semibold text-sm md:text-base group-hover:gap-3 transition-all">
                Explore VRIKSHA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              {/* Mobile: flowing feature pills – reduced height, card style */}
              <div className="md:hidden overflow-hidden -mx-1 mt-3 relative z-10">
                <div className="vriksha-flow flex gap-3 w-max py-2 items-stretch">
                  {[...VRIKSHA_POINTS, ...VRIKSHA_POINTS].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-2xl border border-gray-200/80 bg-white text-sm font-semibold text-gray-800 whitespace-nowrap shadow-sm min-h-[52px]">
                      <span className="text-xl" aria-hidden>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: flowing feature pills – reduced height, card style */}
            <div className="hidden md:block flex-shrink-0 overflow-hidden min-h-[120px] w-[520px] lg:w-[680px] xl:w-[800px] relative z-10">
              <div className="vriksha-flow flex gap-4 w-max py-3 items-stretch">
                {[...VRIKSHA_POINTS, ...VRIKSHA_POINTS].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 shrink-0 px-5 py-4 rounded-2xl border border-gray-200/80 bg-white text-sm font-semibold text-gray-800 whitespace-nowrap shadow-sm min-h-[64px]"
                  >
                    <span className="text-2xl" aria-hidden>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
  )
  if (embedded) {
    return card
  }
  return (
    <section className="home-section">
      <div className="container-page max-w-5xl mx-auto">
        {card}
      </div>
    </section>
  )
}

// Performance graph – 3-year improvement (CSS-only, dummy data)
function PerformanceGraph() {
  const years = [
    { year: '2023', label: '2023', value: 72, color: 'bg-[#B30027]/30' },
    { year: '2024', label: '2024', value: 85, color: 'bg-[#B30027]/60' },
    { year: '2025', label: '2025', value: 100, color: 'bg-[#B30027]' },
  ]
  const maxValue = 100
  return (
    <section className="home-section-alt">
      <div className="container-page">
        <h2 className="home-section-title mb-2">Results Over the Years</h2>
        <p className="home-section-body mb-6 max-w-2xl">Our consistent improvement in student outcomes across competitive exams.</p>
        <div className="bg-gray-50 rounded-2xl border border-gray-200/80 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-end justify-center gap-6 sm:gap-10 h-48 md:h-56">
            {years.map(({ year, label, value, color }) => (
              <div key={year} className="flex flex-col items-center gap-1.5 flex-1 max-w-[120px]">
                <div className="w-full flex flex-col justify-end h-36 md:h-40 rounded-t-lg overflow-hidden relative">
                  <div
                    className={`w-full ${color} rounded-t transition-all duration-700 flex items-center justify-center min-h-[28px]`}
                    style={{ height: `${(value / maxValue) * 100}%`, minHeight: '28px' }}
                  >
                    <span className={`text-sm font-bold drop-shadow-sm ${value >= 95 ? 'text-white' : 'text-[#0a1a67]'}`}>{value}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-body">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">Indexed performance (2025 = 100). Actual data to be updated by content team.</p>
        </div>
      </div>
    </section>
  )
}

// Counseling CTA – free counseling + link
function CounselingCTA() {
  return (
    <section className="page-section-tight bg-[#0a1a67]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Free Career Counseling</h2>
            <p className="text-white/90 text-sm md:text-base max-w-xl">Not sure which course is right for you? Book a free counseling session with our experts and get a personalized plan.</p>
          </div>
          <Link href="/counseling" className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1a67] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors shrink-0">
            Book free session
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Demo classes & scholarships – brief mentions + links
function DemoScholarships() {
  return (
    <section className="home-section">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/enquiry" className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#B30027]/20 transition-all">
            <span className="text-2xl mb-3 block">🎓</span>
            <h3 className="home-section-subtitle text-lg mb-2">Try a Free Demo Class</h3>
            <p className="home-section-body mb-4">Experience our teaching style and infrastructure. Register for a demo class at your preferred branch.</p>
            <span className="inline-flex items-center gap-1 text-[#B30027] font-semibold group-hover:gap-2 transition-all">Register for demo →</span>
          </Link>
          <Link href="/scholarships" className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#B30027]/20 transition-all">
            <span className="text-2xl mb-3 block">🏅</span>
            <h3 className="home-section-subtitle text-lg mb-2">Scholarships Available</h3>
            <p className="home-section-body mb-4">Merit-based scholarships for deserving students. Criteria and application process on our scholarships page.</p>
            <span className="inline-flex items-center gap-1 text-[#B30027] font-semibold group-hover:gap-2 transition-all">Know more →</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Promotional video – placeholder for 1–2 min campus/teaching video
function PromotionalVideo() {
  const videoUrl = '' // Set to YouTube/Vimeo embed URL when available, e.g. 'https://www.youtube.com/embed/VIDEO_ID'
  return (
    <section className="home-section-alt">
      <div className="container-page">
        <h2 className="home-section-title mb-2">See Matrix Science Academy</h2>
        <p className="home-section-body mb-6 max-w-2xl">Campus, teaching, infrastructure, and achievements in a short video.</p>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100 aspect-video max-w-4xl mx-auto flex items-center justify-center">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="Matrix Science Academy - Promotional Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[#B30027]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#B30027]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="text-body font-medium">Promotional video coming soon</p>
              <p className="text-body/70 text-sm mt-1">Campus, teaching & results</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Choose Right Support + Enter Matrix + Our Proven Methodology (merged), then Vriksha */}
      <AcademicSupportMethodologySection />
      <VrikshaHighlight />

      {/* Counselling + Form, Achievements + Results */}
      <CounselingFormRow />
      <AchievementsAndResultsRow />

      {/* Our Courses (tabbed layout + existing slider), Specialized Batches, Student Voices */}
      <CoursesTabSection />
      <FeaturesAndNewsSection />
      <SpecializedBatchesSection />
      <TestimonialsShowcase />

      {/* Features (facilities), then optional extras */}
      <FeaturesSection />
      <PerformanceGraph />
      <DemoScholarships />
      <PromotionalVideo />
    </div>
  )
}
