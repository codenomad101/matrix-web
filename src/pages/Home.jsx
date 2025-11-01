import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'

// Results Slider Component
function ResultsSlider() {
  const [index, setIndex] = useState(0)
  const images = [
    { src: '/images/result11.png', alt: 'Matrix Science Academy Results 1' },
    { src: '/images/result22.png', alt: 'Matrix Science Academy Results 2' },
    { src: '/images/result33.png', alt: 'Matrix Science Academy Results 3' },
    { src: '/images/result44.png', alt: 'Matrix Science Academy Results 4' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (idx) => {
    setIndex(idx)
  }

  const goToPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="mt-6 relative">
      <div className="relative overflow-hidden rounded-xl p-2 shadow-lg max-w-[1320px] mx-auto">
        {/* Images Container */}
        <div className="relative min-h-[600px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-smooth"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="min-w-full flex items-center justify-center py-4">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto max-h-[600px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === idx 
                  ? 'w-10 bg-brand-dark' 
                  : 'w-4 bg-white/70 hover:bg-white/90'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const topTestimonials = [
  { 
    name: 'Dhruv Shinde', 
    college: 'IIT MANDI',
    text: 'Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi.',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Rahul Kavhale', 
    college: 'IIT KHARAGPUR',
    text: 'Thanks to Matrix Science Academy, I achieved my goal of getting into IIT. Their expert teaching and supportive environment were vital to my success.',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Dhruv Unde', 
    college: 'NIT TRICHY',
    text: 'Matrix Science Academy was instrumental in my journey to NIT Trichy. The exceptional teaching & comprehensive support helped me excel.',
    exam: 'MHT-CET' 
  },
]

const topResults = {
  mhtcet: { count: 123, percentile: '98+', highlight: '60 students scored 99+ percentile' },
  iit: { count: 12, colleges: 'IIT Guwahati, IIT Kharagpur, IIT Mandi' },
  neet: { score: '100/100', subject: 'Biology', students: 'Multiple students' },
}

// Overview Section Component
function OverviewSection() {
  const images = [
    { src: '/images/top11.png', alt: 'Top Achievement 1' },
    { src: '/images/top22.png', alt: 'Top Achievement 2' },
  ]

  return (
    <section className="container-page py-4">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-slate-700 py-2">Overview and Features</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto object-contain py-2"
            />
          </div>
        ))}
      </div>
    </section>
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
    {
      value: topResults.mhtcet.count,
      title: 'MHT-CET 2024',
      desc: `Students scored ${topResults.mhtcet.percentile} percentile`,
      highlight: topResults.mhtcet.highlight,
    },
    {
      value: `${topResults.iit.count}+`,
      title: 'IIT Admissions',
      desc: topResults.iit.colleges,
    },
    {
      value: topResults.neet.score,
      title: 'NEET Biology',
      desc: `${topResults.neet.students} achieved perfect score`,
    },
  ]

  const achievementCards = [
    { value: '12+', title: 'IIT Admissions', desc: 'IIT Guwahati, Kharagpur, Mandi' },
    { value: '100/100', title: 'NEET Biology', desc: 'Perfect scores achieved' },
    { value: '60', title: '99+ Percentile', desc: 'MHT-CET 2024' },
    { value: '60', title: 'Students Scored 99%+', desc: 'Percentile' },
  ]

  return (
    <section className="container-page py-6" ref={sectionRef}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-slate-700">
          One of the <span className="text-red-600">most sought after</span> and <span className="text-red-600">most successful</span> institution
        </h2>
        <Link to="/results" className="btn-outline hover:scale-105 transition-transform duration-300">View All Results</Link>
      </div>
      
      {/* Achievement Highlights - Moved to top */}
      <div className="mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCards.filter((_, idx) => idx !== 1).map((card, filteredIdx) => {
            const bgColors = ['bg-red-500', 'bg-gray-400', 'bg-brand-dark']
            return (
              <div
                key={filteredIdx}
                className={`${bgColors[filteredIdx]} rounded-2xl p-6 text-center text-white shadow-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group min-h-[180px] flex flex-col justify-center`}
              >
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
                </div>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Enhanced Results Display */}
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {topCards.filter((_, idx) => idx !== 1).map((card, filteredIdx) => {
          const bgColors = ['bg-red-500', 'bg-brand-dark']
          return (
            <div
              key={filteredIdx}
              className={`${bgColors[filteredIdx]} p-6 text-center text-white rounded-2xl shadow-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group min-h-[180px] flex flex-col justify-center`}
            >
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

        {/* Results Images Slider */}
        <ResultsSlider />
      </div>
    </section>
  )
}

// Testimonial Card Component with enhanced animations
function TestimonialCard({ testimonial: t, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 150)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white rounded-2xl shadow-soft overflow-hidden group cursor-pointer transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'
      } ${
        isHovered 
          ? 'shadow-2xl -translate-y-3 scale-[1.02] rotate-1' 
          : 'hover:shadow-xl hover:-translate-y-2'
      }`}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(90, 166, 196, 0.25)' 
          : undefined
      }}
    >
      {/* Quote Section with Brand Color */}
      <div className="relative bg-gradient-to-br from-brand via-brand/95 to-brand-dark/90 px-6 pt-8 pb-6 overflow-hidden transition-all duration-500 group-hover:from-brand-dark group-hover:to-brand-dark">
        {/* Animated Quote Icon */}
        <div className={`absolute top-4 left-6 transition-all duration-700 ${isHovered ? 'opacity-30 scale-110 rotate-12' : 'opacity-20 scale-100 rotate-0'}`}>
          <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.003z"/>
          </svg>
        </div>
        
        {/* Floating particles effect on hover */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Quote Text with fade-in animation */}
        <div className={`relative z-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          <p className="text-slate-900 text-base leading-relaxed font-medium italic transition-all duration-300 group-hover:text-white">
            "{t.text}"
          </p>
        </div>
        
        {/* Decorative corner with animation */}
        <div className={`absolute bottom-0 right-0 w-20 h-20 bg-white/20 rounded-tl-full transform transition-all duration-700 ${
          isHovered ? 'translate-x-4 translate-y-4 scale-125' : 'translate-x-8 translate-y-8'
        }`}></div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Person Details Section with slide-up animation */}
      <div className={`px-6 py-5 bg-white border-t border-slate-100 transition-all duration-500 group-hover:bg-slate-50 ${
        isHovered ? 'border-brand/30' : ''
      }`}>
        <div className="flex items-center gap-4">
          {/* Avatar with scale and glow effect */}
          <div className={`h-12 w-12 rounded-full bg-gradient-to-br from-brand/40 to-brand-dark/30 flex items-center justify-center text-slate-900 font-bold text-lg shrink-0 transition-all duration-500 ${
            isHovered 
              ? 'scale-110 ring-4 ring-brand/30 shadow-lg bg-gradient-to-br from-brand to-brand-dark' 
              : 'group-hover:bg-brand/50'
          }`}>
            <span className={`transition-all duration-300 ${isHovered ? 'scale-110 text-white' : ''}`}>
              {t.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          {/* Details with fade animation */}
          <div className={`flex-1 min-w-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className={`font-semibold text-slate-900 text-lg transition-colors duration-300 ${isHovered ? 'text-brand-dark' : ''}`}>
              {t.name}
            </div>
            <div className={`text-sm font-medium text-brand mt-0.5 transition-all duration-300 ${isHovered ? 'text-brand-dark font-semibold scale-105' : ''}`}>
              {t.college}
            </div>
            <div className="text-xs text-slate-500 mt-1 transition-colors duration-300 group-hover:text-slate-700">
              {t.exam}
            </div>
          </div>
          
          {/* Arrow icon on hover */}
          <div className={`transition-all duration-300 transform ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
            <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Results Section */}
      <ResultsSection topResults={topResults} />

      {/* Top Images Section */}
      <OverviewSection />

      <section className="container-page py-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">Why MSA?</h3>
            <p className="mt-2 text-slate-600 group-hover:text-white transition-colors duration-300">150+ teachers by choice, curated content, and disciplined guidance for competitive exams.</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">Programs</h3>
            <p className="mt-2 text-slate-600 group-hover:text-white transition-colors duration-300">IIT-JEE, MHT-CET, NEET, IISER Foundation, and 8th–12th board prep.</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-slate-600 hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors duration-300">Branches</h3>
            <p className="mt-2 text-slate-600 group-hover:text-white transition-colors duration-300">8 branches: Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi.</p>
          </div>
        </div>
      </section>

              {/* Testimonials Section */}
      <section className="bg-brand/10 py-6 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-dark/10 pointer-events-none"></div>
        
        <div className="container-page relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold relative text-slate-700">
              <span className="relative z-10">Student Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-brand-dark rounded-full"></span>
            </h2>
            <Link to="/testimonials" className="btn-outline bg-white hover:scale-105 transition-transform duration-300">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topTestimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} index={idx} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="container-page py-8">
        <div className="rounded-2xl bg-brand/30 border border-brand/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Ready to start your journey?</h3>
            <p className="text-slate-700 mt-1">Speak with our counsellors and get a personalized plan.</p>
          </div>
          <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">Enquire Now</Link>
        </div>
      </section>
    </div>
  )
}


