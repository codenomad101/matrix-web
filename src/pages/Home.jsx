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
        <h2 className="text-4xl font-semibold text-[#004c8f] py-2">Overview and Features</h2>
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
        <h2 className="text-4xl font-bold text-[#004c8f]">
          One of the <span className="text-red-600">Leading and most </span>  <span className="text-red-600"> successful</span> Institutions in Pune
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


export default function Home() {
  return (
    <div>
      <NewsSlider />
      <HeroSlider />
      <FeaturesSection />


      {/* Results Section */}
      <ResultsSection topResults={topResults} />

      {/* Top Images Section */}
      <OverviewSection />

      <section className="container-page py-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#004c8f] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#004c8f] group-hover:text-white transition-colors duration-300">Why MSA?</h3>
            <p className="mt-2 text-[#004c8f] group-hover:text-white transition-colors duration-300">150+ teachers by choice, curated content, and disciplined guidance for competitive exams.</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#004c8f] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#004c8f] group-hover:text-white transition-colors duration-300">Programs</h3>
            <p className="mt-2 text-[#004c8f] group-hover:text-white transition-colors duration-300">Leading trainers in Pune</p>
          </div>
          <div className="card bg-white rounded-2xl p-6 hover:-translate-y-1 hover:bg-[#004c8f] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-[#004c8f] group-hover:text-white transition-colors duration-300">Branches</h3>
            <p className="mt-2 text-[#004c8f] group-hover:text-white transition-colors duration-300">8 branches: Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi.</p>
          </div>
        </div>
      </section>

              {/* Testimonials Section with Slider */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#004c8f' }}>
        
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
            <h3 className="text-2xl font-bold text-[#004c8f]">Ready to start your journey?</h3>
            <p className="text-[#004c8f] mt-1">Speak with our counsellors and get a personalized plan.</p>
          </div>
          <Link href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">Enquire Now</Link>
        </div>
      </section>
    </div>
  )
}


