'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import NewsSlider from '../components/NewsSlider.jsx'
import OptimizedImage from '@/components/OptimizedImage'

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

// Overview Section Component
function OverviewSection() {
  const images = [
    { cloudinaryId: 'v1763786029/output_mdyqhp', alt: 'Top Achievement 1' },
    { cloudinaryId: 'v1763785958/output_cbx5g1', alt: 'Top Achievement 2' },
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
    { value: '12+', title: 'IIT Admissions', desc: 'IIT Guwahati, Kharagpur, Mandi' },
    { value: '100/100', title: 'NEET Biology', desc: 'Perfect scores achieved' },

    { value: '86', title: 'Students with 99+', desc: 'MHT-CET 2025' },
    { value: '32', title: 'Students Scored 95%+', desc: 'JEE Advanced 2025' },
    { value: '80+', title: 'Students Qualified', desc: 'JEE Advanced 2025' },
  ]

  return (
    <section className="container-page py-6" ref={sectionRef}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-slate-700">
          One of the <span className="text-red-600">most sought after</span> and <span className="text-red-600"> successful</span> Institutions
        </h2>
        <Link href="/results" className="btn-outline hover:scale-105 transition-transform duration-300">View All Results</Link>
      </div>
      
      {/* Achievement Highlights - Moved to top */}
      <div className="mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCards.map((card, idx) => {
            // Colors for all 5 cards: red, gray (NEET), red, gray, red
            const bgColors = ['bg-red-500', 'bg-gray-400', 'bg-red-600', 'bg-gray-400', 'bg-brand-dark']
            return (
              <div
                key={idx}
                className={`${bgColors[idx]} rounded-2xl p-6 text-center text-white shadow-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group min-h-[180px] flex flex-col justify-center`}
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
function TestimonialsSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length, isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const slideWidth = 100 / testimonials.length

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-2xl w-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ 
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            width: `${testimonials.length * 100}%`
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0"
              style={{ 
                width: `${slideWidth}%`,
                minWidth: `${slideWidth}%`
              }}
            >
              <div className="px-1 sm:px-2 h-full">
                <TestimonialCard testimonial={testimonial} index={idx} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-10 bg-brand-dark' 
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
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
      className={`bg-white rounded-3xl shadow-soft overflow-hidden group cursor-pointer transform transition-all duration-700 ease-out min-h-[500px] flex flex-col ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'
      } ${
        isHovered 
          ? 'shadow-2xl -translate-y-3 scale-[1.02]' 
          : 'hover:shadow-xl hover:-translate-y-2'
      }`}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(90, 166, 196, 0.25)' 
          : undefined
      }}
    >
      {/* Quote and Institute Image Side by Side */}
      <div className="grid md:grid-cols-2 gap-0 h-64">
        {/* Quote Section with Red Background */}
        <div className="relative bg-gradient-to-br from-red-600 via-red-600/95 to-red-700 px-6 pt-8 pb-6 overflow-hidden transition-all duration-500 group-hover:from-red-700 group-hover:to-red-800 flex flex-col justify-between">
          {/* Animated Quote Icon */}
          <div className={`absolute top-4 right-6 transition-all duration-700 ${isHovered ? 'opacity-30 scale-110 rotate-12' : 'opacity-20 scale-100 rotate-0'}`}>
            <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.003z"/>
            </svg>
          </div>
          
          {/* Quote Text with fade-in animation */}
          <div className={`relative z-10 transition-all duration-500 flex-1 flex items-center ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <p className="text-white text-base leading-relaxed font-medium italic transition-all duration-300">
              "{t.text}"
            </p>
          </div>
          
          {/* Decorative corner with animation */}
          <div className={`absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-full transform transition-all duration-700 ${
            isHovered ? 'translate-x-4 translate-y-4 scale-125' : 'translate-x-8 translate-y-8'
          }`}></div>
        </div>

        {/* Institute Image Section - Contained Image */}
        <div className="relative h-full overflow-hidden bg-white flex flex-col justify-center items-center p-4">
          {t.instituteImage ? (
            <>
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={t.instituteImage} 
                  alt={t.college}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              {/* College Name Below Image */}
              <div className={`mt-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {t.college}
                </h3>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  {t.exam}
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-xl flex flex-col items-center justify-center">
              <span className="text-slate-600 font-semibold text-lg">{t.college}</span>
              <span className="text-slate-500 text-sm mt-2">{t.exam}</span>
            </div>
          )}
        </div>
      </div>

      {/* Person Details Section with photo */}
      <div className={`px-6 py-3 bg-white border-t border-slate-200 transition-all duration-500 group-hover:bg-slate-50 ${
        isHovered ? 'border-brand/30' : ''
      }`}>
        <div className="flex items-center gap-4">
          {/* Student Photo */}
          <div className={`relative h-16 w-16 rounded-full overflow-hidden ring-2 transition-all duration-500 shrink-0 ${
            isHovered 
              ? 'ring-4 ring-brand-dark shadow-xl scale-110' 
              : 'ring-brand/30 group-hover:ring-brand/50'
          }`}>
            {t.image ? (
              <img 
                src={t.image} 
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to initials if image fails
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  parent.classList.add('bg-gradient-to-br', 'from-brand/40', 'to-brand-dark/30', 'flex', 'items-center', 'justify-center')
                  parent.innerHTML = `<span class="text-slate-900 font-bold text-lg">${t.name.split(' ').map(n => n[0]).join('')}</span>`
                }}
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-brand/40 to-brand-dark/30 flex items-center justify-center">
                <span className={`text-slate-900 font-bold text-lg transition-all duration-300 ${isHovered ? 'scale-110 text-white' : ''}`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          
          {/* Details with fade animation - Dark Text */}
          <div className={`flex-1 min-w-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className={`font-bold text-slate-900 text-lg transition-colors duration-300 ${isHovered ? 'text-brand-dark' : ''}`}>
              {t.name}
            </div>
            <div className={`text-sm font-semibold text-slate-700 transition-all duration-300 ${isHovered ? 'text-brand-dark font-bold' : ''}`}>
              Student
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
      <NewsSlider />
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

              {/* Testimonials Section with Slider */}
      <section className="bg-brand/10 py-12 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-dark/10 pointer-events-none"></div>
        
        <div className="container-page relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold relative text-slate-700">
              <span className="relative z-10">Student Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-brand-dark rounded-full"></span>
            </h2>
            <Link href="/testimonials" className="btn-outline bg-white hover:scale-105 transition-transform duration-300">View All</Link>
          </div>
          
          {/* Testimonials Slider */}
          <TestimonialsSlider testimonials={topTestimonials} />
        </div>
      </section>


      {/* CTA Section */}
      <section className="container-page py-8">
        <div className="rounded-2xl bg-brand/30 border border-brand/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Ready to start your journey?</h3>
            <p className="text-slate-700 mt-1">Speak with our counsellors and get a personalized plan.</p>
          </div>
          <Link href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">Enquire Now</Link>
        </div>
      </section>
    </div>
  )
}


