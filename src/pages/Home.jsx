'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
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
    <section className="container-page py-5">
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
  const [offset, setOffset] = useState(0)
  const images = [
    { cloudinaryId: 'v1764181799/JEE_MAIN_o7kayq', alt: 'JEE Main Results' },
    { cloudinaryId: 'v1764181794/JEE_MAIN_2025_aoxekj', alt: 'JEE Main 2025 Results' },
    { cloudinaryId: 'v1764181786/IIT_knkkka', alt: 'IIT Results' },
    { cloudinaryId: 'v1764181835/NEET_riozts', alt: 'NEET Results' },
  ]
  const visibleCount = 2
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
      <div className="relative h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden">
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
              className="flex-shrink-0 p-2 md:p-3 h-full flex items-center justify-center"
              style={{ width: `${100 / images.length}%` }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center shadow-md border border-gray-200/60 bg-page-bg">
                <img
                  src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
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
      </div>

      {/* Dots - no white bg, site background */}
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
    <section className="py-3 md:py-5" ref={sectionRef}>
      <div className="container-page">
        <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-3 sm:gap-0">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-heading mb-0">
            One of the <span className="text-body/90">Leading and most successful</span> Institutions in Pune
          </h2>
          <Link href="/results" className="inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-all duration-300 text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5 font-semibold">View All Results</Link>
        </div>

        {/* Results Image Slider - site background only, no white block */}
        <div className="mb-0">
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
      <h2 className="section-heading mb-4 text-center">
        <span className="text-[#ed1c24]">What&apos;s Trending</span>
      </h2>
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#B30027]/20 min-h-[220px] sm:min-h-[260px] bg-[#FFF5F5]">
        {/* Red hue / accent orbs */}
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#B30027]/12 blur-2xl pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-[#B30027]/10 blur-xl pointer-events-none" aria-hidden />
        <div className="flex overflow-hidden transition-transform duration-500 ease-out" style={{ width: `${TRENDING_SLIDES.length * 100}%`, transform: `translateX(-${index * (100 / TRENDING_SLIDES.length)}%)` }}>
          {TRENDING_SLIDES.map((slide, i) => (
            <div key={i} className="flex-shrink-0 flex flex-row p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 md:gap-6 items-center" style={{ width: `${100 / TRENDING_SLIDES.length}%` }}>
              {/* Left: label, headline, description, CTA */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <span className="inline-block w-fit rounded-full bg-[#B30027] text-white text-xs sm:text-sm font-semibold px-3 py-1 mb-2">
                  {slide.label}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0a1a67] leading-tight mb-1.5 sm:mb-2">
                  {slide.headline}
                </h3>
                <p className="text-body text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none max-w-md">
                  {slide.description}
                </p>
                <Link
                  href={slide.href}
                  className="inline-flex items-center justify-center w-fit bg-[#B30027] hover:bg-[#8a001e] text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-md transition-all duration-200 text-sm"
                >
                  {slide.cta}
                </Link>
              </div>
              {/* Right: image + badge */}
              <div className="flex-shrink-0 relative w-28 sm:w-36 md:w-40 lg:w-44">
                <div className="relative flex items-end justify-end min-h-[140px] sm:min-h-[180px] md:min-h-[200px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none" aria-hidden>
                    <div className="w-4/5 max-w-[160px] rounded-xl border-2 border-[#B30027]/30 bg-white/40" />
                  </div>
                  <div className="relative z-10 w-24 sm:w-32 md:w-36 h-28 sm:h-36 md:h-40 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <img src={slide.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 z-20 w-[120px] sm:w-[130px] text-white shadow-lg rounded-b-lg overflow-hidden"
                    style={{ clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)' }}
                  >
                    <div className="bg-[#B30027]/95 px-2 pt-2.5 pb-0.5">
                      <span className="text-base sm:text-lg font-extrabold text-white">{slide.percentile}</span>
                    </div>
                    <div className="bg-[#0a1a67] px-2 py-1.5">
                      <p className="font-semibold text-[10px] sm:text-xs leading-tight">{slide.name}</p>
                      <p className="text-white/80 text-[9px] sm:text-[10px] mt-0.5">{slide.subtext}</p>
                      <p className="text-white/70 text-[8px] mt-0.5">• {slide.location}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 right-0 flex gap-0.5 opacity-70" aria-hidden>
                  {[0, 1, 2].map((j) => (
                    <span key={j} className="w-1.5 h-2 bg-[#B30027]/80 rounded-full" style={{ transform: `rotate(${j * 20}deg)` }} />
                  ))}
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
            className={`h-2 rounded-full transition-all duration-300 ${index === i ? 'w-6 bg-[#B30027]' : 'w-2 bg-gray-400 hover:bg-gray-500'}`}
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
    <div className="mt-10 md:mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">
        <span className="text-[#ed1c24]">Blogs</span>
      </h2>
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous blogs"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#B30027] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next blogs"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#B30027] transition-colors"
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
              className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl overflow-hidden bg-white border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="inline-block px-2 py-0.5 rounded bg-white/95 text-[10px] font-bold uppercase text-[#0a1a67] shadow-sm">
                    {blog.label}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-heading text-sm sm:text-base leading-snug line-clamp-2 mb-1">
                  {blog.title}
                </h3>
                <p className="text-body/70 text-xs sm:text-sm line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
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
    </div>
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
    <section className="page-section-tight bg-[var(--bg-page)]">
      <div className="container-page">
      <div className="grid grid-cols-[65%_35%] gap-4 md:gap-6">
        {/* Left – What's Trending (65%) */}
        <div className="min-w-0">
          <WhatsTrendingCarousel />
        </div>

        {/* Right - Latest News (35%) */}
        <div className="min-w-0">
          <h2 className="section-heading mb-3">
            <span className="text-[#ed1c24]">Latest News</span>
          </h2>
          <div className="page-card overflow-hidden border border-gray-200/80 rounded-xl sm:rounded-2xl relative">
            <div className="p-3 sm:p-4 h-[240px] overflow-hidden relative">
              <div className="animate-scroll-news">
                {[...newsItems, ...newsItems].map((news, idx) => (
                  <div
                    key={idx}
                    className="py-1.5 sm:py-2 border-b border-gray-200/70 last:border-0 flex items-start gap-2 group cursor-pointer hover:bg-gray-100/80 px-1.5 sm:px-2 rounded-md transition-colors duration-300"
                  >
                    <span className="text-[#B30027] font-bold text-base flex-shrink-0">›</span>
                    <span className="text-[#0a1a67] font-medium group-hover:text-[#B30027] transition-colors duration-300 text-xs sm:text-sm">
                      {news}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--bg-box)] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section - horizontal slider (left to right) */}
      <div className="mt-4">
        <div className="text-left mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="text-[#ed1c24]">Our Courses</span>
          </h2>
          <p className="text-body/80 text-lg">Comprehensive preparation for competitive examinations</p>
        </div>

        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="animate-scroll-courses flex gap-4 sm:gap-6 pb-2" style={{ width: 'max-content' }}>
            {[...courses, ...courses].map((course, idx) => (
              <Link
                key={`${course.id}-${idx}`}
                href={course.href || `/courses/${course.id}`}
                className="bg-white border border-gray-200/80 rounded-2xl p-3 sm:p-5 text-black shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden block flex-shrink-0 w-[280px] sm:w-[320px]"
              >
                {/* Layout: Left text content, right accent + image */}
                <div className="relative z-10 flex items-stretch h-full">
                  {/* Left content */}
                  <div className="flex-1 pr-2 sm:pr-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#B30027] leading-tight mb-0.5">
                        {course.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#0a1a67] uppercase tracking-wide">
                        Batch
                      </p>
                      <p className="text-[10px] sm:text-xs text-body/90 mt-0.5 mb-1">
                        {course.fullName}
                      </p>
                      <p className="text-[10px] sm:text-xs text-body/80 mb-1.5 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="mt-1.5 space-y-1">
                        <p className="text-[10px] sm:text-xs font-semibold text-[#0a1a67]">
                          📅 {course.examDates}
                        </p>
                        <p className="text-[9px] sm:text-[10px] font-medium text-body/80">
                          🏆 {course.ourResults}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center mt-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-full bg-[#B30027] text-white shadow-sm group-hover:bg-[#8a001e] transition-colors"
                    >
                      Explore More
                    </button>
                  </div>

                  {/* Right image inside the tilted box */}
                  <div className="relative w-24 sm:w-28 md:w-32 flex items-end justify-center">
                    {/* Subtle red accent background similar to Why Choose Us cards */}
                    <div className="absolute -bottom-1 -left-1 w-10 h-10 rounded-full bg-[#B30027]/15 blur-sm" aria-hidden />
                    <div className="absolute -top-2 right-0 w-8 h-8 rounded-full bg-[#B30027]/10 blur-[2px]" aria-hidden />
                    <div className="relative z-10 w-20 sm:w-24 md:w-28 h-32 sm:h-36 md:h-40 rounded-[2rem] bg-gradient-to-tr from-[#ffe6ea] via-[#ffe6ea] to-[#ffd0da] translate-x-3 -translate-y-2 rotate-[-8deg] group-hover:translate-y-0 group-hover:rotate-[-4deg] transition-transform duration-300 shadow-md overflow-hidden">
                      <img
                        src={
                          course.id === 'iit-jee'
                            ? 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763786335/output_faqujd'
                            : course.id === 'mht-cet'
                              ? 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1763783015/5_c2lqwx.jpg'
                              : 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_400,h_500,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg'
                        }
                        alt={`${course.name} student`}
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

// VRIKSHA highlight – featured block with animated tree and icons
function VrikshaHighlight() {
  const floatIcons = [
    { emoji: '🌱', className: 'top-2 left-2 text-lg sm:text-xl vriksha-float', style: { animationDelay: '0s' } },
    { emoji: '📚', className: 'top-4 right-2 text-base sm:text-lg vriksha-float', style: { animationDelay: '0.4s' } },
    { emoji: '✨', className: 'bottom-8 left-0 text-sm sm:text-base vriksha-float', style: { animationDelay: '0.8s' } },
    { emoji: '🎯', className: 'bottom-6 right-1 text-base sm:text-lg vriksha-float', style: { animationDelay: '0.2s' } },
    { emoji: '🌿', className: 'top-1/2 -left-1 text-sm vriksha-float', style: { animationDelay: '0.6s' } },
    { emoji: '📖', className: 'top-1/2 -right-1 text-sm vriksha-float', style: { animationDelay: '1s' } },
  ]
  return (
    <section className="page-section-tight bg-[var(--bg-page)]">
      <div className="container-page max-w-4xl mx-auto">
        <Link href="/vriksha" className="group block bg-white border-2 border-[#B30027]/25 rounded-2xl sm:rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl hover:border-[#B30027]/50 transition-all duration-300 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Left: icon, badge, heading, copy, CTA */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#B30027]/15 flex items-center justify-center text-3xl md:text-4xl group-hover:scale-105 transition-transform ring-2 ring-[#B30027]/20">
                  🌱
                </div>
                <span className="inline-block px-3 py-1.5 rounded-full bg-[#B30027] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">New Program</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-heading mb-2">VRIKSHA</h2>
              <p className="text-body/80 text-base md:text-lg mb-5 max-w-xl leading-relaxed">
                Our newest offering designed to nurture growth and excellence. Explore a structured curriculum and dedicated support to help you reach your goals.
              </p>
              <span className="inline-flex items-center gap-2 text-[#B30027] font-semibold group-hover:gap-3 transition-all">
                Learn about VRIKSHA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>

            {/* Right: animated tree + floating icons */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-end min-h-[160px] sm:min-h-[200px]">
              <div className="relative w-[160px] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[200px] md:h-[240px]">
                {/* Green accent orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-emerald-500/20 blur-xl vriksha-pulse" aria-hidden />
                </div>
                {/* Floating icons around the tree */}
                {floatIcons.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute ${item.className} w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 border-2 border-emerald-600/30 flex items-center justify-center shadow-md`}
                    style={item.style}
                  >
                    {item.emoji}
                  </div>
                ))}
                {/* Green tree – SVG */}
                <div className="absolute inset-0 flex items-center justify-center vriksha-tree">
                  <svg viewBox="0 0 80 100" className="w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 text-emerald-600" fill="currentColor" aria-hidden>
                    {/* Foliage (layered triangles) */}
                    <path d="M40 8 L72 48 L40 42 L8 48 Z" fill="currentColor" opacity="0.95" />
                    <path d="M40 22 L66 58 L40 52 L14 58 Z" fill="currentColor" opacity="0.9" />
                    <path d="M40 36 L60 68 L40 62 L20 68 Z" className="text-emerald-700" fill="currentColor" opacity="0.95" />
                    <path d="M40 50 L54 78 L40 72 L26 78 Z" className="text-emerald-700" fill="currentColor" />
                    {/* Trunk */}
                    <path d="M34 72 L46 72 L44 98 L36 98 Z" className="text-amber-800" fill="currentColor" opacity="0.95" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <style jsx>{`
        @keyframes vriksha-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes vriksha-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes vriksha-tree {
          0%, 100% { transform: scale(1) rotate(-1deg); }
          50% { transform: scale(1.03) rotate(1deg); }
        }
        .vriksha-float { animation: vriksha-float 2.5s ease-in-out infinite; }
        .vriksha-pulse { animation: vriksha-pulse 3s ease-in-out infinite; }
        .vriksha-tree { animation: vriksha-tree 4s ease-in-out infinite; }
      `}</style>
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
    <section className="page-section-tight bg-white">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          <span className="text-[#ed1c24]">Results Over the Years</span>
        </h2>
        <p className="text-body/80 text-sm md:text-base mb-6 max-w-2xl">Our consistent improvement in student outcomes across competitive exams.</p>
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
          <p className="text-center text-xs text-body/60 mt-4">Indexed performance (2025 = 100). Actual data to be updated by content team.</p>
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
    <section className="page-section-tight bg-gray-50">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/enquiry" className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#B30027]/20 transition-all">
            <span className="text-2xl mb-3 block">🎓</span>
            <h3 className="text-xl font-bold text-heading mb-2">Try a Free Demo Class</h3>
            <p className="text-body/80 text-sm mb-4">Experience our teaching style and infrastructure. Register for a demo class at your preferred branch.</p>
            <span className="inline-flex items-center gap-1 text-[#B30027] font-semibold group-hover:gap-2 transition-all">Register for demo →</span>
          </Link>
          <Link href="/scholarships" className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#B30027]/20 transition-all">
            <span className="text-2xl mb-3 block">🏅</span>
            <h3 className="text-xl font-bold text-heading mb-2">Scholarships Available</h3>
            <p className="text-body/80 text-sm mb-4">Merit-based scholarships for deserving students. Criteria and application process on our scholarships page.</p>
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
    <section className="page-section-tight bg-white">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          <span className="text-[#ed1c24]">See Matrix Science Academy</span>
        </h2>
        <p className="text-body/80 text-sm md:text-base mb-6 max-w-2xl">Campus, teaching, infrastructure, and achievements in a short video.</p>
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
    <div>
      <HeroSlider />

      {/* <AboutIntro /> */}
      <VrikshaHighlight />

      {/* Combined Features & News Section */}
      <FeaturesAndNewsSection />

      <ResultsSection topResults={topResults} />

      <PerformanceGraph /> 
      <CounselingCTA />
      <DemoScholarships />
      <PromotionalVideo />
    </div>
  )
}
