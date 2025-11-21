'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    text: '60 students scored 99+ percentile in MHT-CET 2024',
    link: '/results',
  },
  {
    id: 2,
    text: '12+ IIT Admissions - IIT Guwahati, Kharagpur, Mandi',
    link: '/results',
  },
  {
    id: 3,
    text: 'Multiple students achieved perfect 100/100 in NEET Biology',
    link: '/results',
  },
  {
    id: 4,
    text: 'Impulse Batch: 5,000+ students registered in 2024',
    link: '/activities/on-demand-courses',
  },
  {
    id: 5,
    text: '150+ Expert Teachers by Choice - Comprehensive Guidance for Competitive Exams',
    link: '/faculty',
  },
]

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000) // Change news every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-brand-dark via-brand-dark to-slate-800 text-white border-b border-brand/30 shadow-md">
      <div className="container-content">
        <div className="flex items-center gap-3 sm:gap-4 py-3 px-4 sm:px-6">
          {/* News Icon/Label */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 whitespace-nowrap hidden sm:inline">Latest News</span>
          </div>

          {/* Separator */}
          <div className="h-5 sm:h-6 w-px bg-white/30 flex-shrink-0"></div>

          {/* News Text Slider */}
          <div className="flex-1 overflow-hidden relative min-w-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="min-w-full flex items-center px-2 sm:px-3"
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 group hover:text-red-400 transition-colors duration-300 w-full"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium truncate group-hover:underline">
                      {item.text}
                    </span>
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 ml-2">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-6 bg-red-500' 
                    : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to news ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

