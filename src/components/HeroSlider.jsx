'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

const SLIDE_INTERVAL_MS = 6000

export default function HeroSlider() {
  const slides = useMemo(() => [
    {
      id: 'hero-main',
      type: 'hero',
    },
    {
      id: 'matrix-impulse',
      title: 'Leading trainers in Pune',
      highlight: '',
      branches: ['Pradhikaran', 'Nigdi', 'Ravet', 'Shahunagar', 'Chinchwad', 'Wakad', 'Moshi'],
      type: 'content',
    },
    {
      id: 'activities',
      title: 'Explore Our Activities',
      highlight: 'Programs, Timelines & More',
      subtitle: 'Discover comprehensive resources for your academic journey',
      activities: [
        { label: 'Performance', to: '/activities/performance', icon: '📈' },
        { label: 'Course Selection', to: '/activities/course-selection', icon: '📚' },
        { label: 'IIT-JEE/NEET Timeline', to: '/activities/iit-neet-timeline', icon: '⏱️' },
        { label: 'MHT-CET Timeline', to: '/activities/mht-cet-timeline', icon: '📅' },
        { label: 'On Demand Courses', to: '/activities/on-demand-courses', icon: '🎯' },
        { label: 'Felicitation', to: '/activities/felicitation', icon: '🏆' },
      ],
      type: 'activities',
    },
  ], [])

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-4 pb-6 sm:pt-6 sm:pb-8 px-4 sm:px-6">
        <div className="relative min-h-[500px] sm:min-h-[580px] md:h-[580px] lg:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 text-white grid">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="absolute inset-0 flex transition-transform duration-700 ease-smooth will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className={`min-w-full shrink-0 ${s.type === 'hero' ? 'relative flex items-center' : s.type === 'activities' ? 'relative flex items-center' : 'flex items-center'}`}>
                {s.type === 'hero' ? (
                  <div className="w-full h-full grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-hidden">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 min-w-0 py-4 sm:py-0">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/90 text-[#004c8f] w-fit px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full shadow-lg">
                        <span className="text-brand-dark font-bold">🎓 Premium Education</span>
                      </div>
                      
                      <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg">
                          <span className="text-red-600">Matrix</span>{' '}
                          <span className="text-gray-300 drop-shadow-lg">Science</span>
                          <span className="block text-brand-dark drop-shadow-2xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 6px 12px rgba(0,0,0,0.6)' }}>Academy</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#004c8f] mt-2 sm:mt-3 drop-shadow-md">
                          + IMPULSE Batch
                        </p>
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-[#004c8f] leading-relaxed max-w-xl">
                        Top trainers in Maharashtra 
                      {/*   <span className="font-semibold text-white">IIT-JEE, MHT-CET, NEET, IISER Foundation</span>, and 8th–12th Board preparation.*/}
                      </p>
                      <p className="text-md sm:text-base md:text-lg text-[#004c8f] leading-relaxed max-w-xl">
                      IIT-JEE, MHT-CET, NEET, IISER Foundation.                   {/*   <span className="font-semibold text-white">IIT-JEE, MHT-CET, NEET, IISER Foundation</span>, and 8th–12th Board preparation.*/}
                      </p>
                      
                      {/* Stats Grid */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-3 sm:mt-4">
                        <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">150+</div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#004c8f] mt-0.5 sm:mt-1">Teachers</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">1L+</div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#004c8f] mt-0.5 sm:mt-1">Students</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">8</div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#004c8f] mt-0.5 sm:mt-1">Branches</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">12+</div>
                          <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#004c8f] mt-0.5 sm:mt-1">Years</div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-4 relative z-20">
                        <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-red-600 text-white hover:bg-red-700 text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/50">
                          Enquire Now
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Decorative Elements */}
                    <div className="hidden lg:flex items-center justify-center relative min-w-0 overflow-hidden">
                      <div className="relative w-full max-w-md">
                        {/* Circular Stats */}
                        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur rounded-full p-4 lg:p-5 xl:p-6 shadow-xl z-20">
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl xl:text-3xl font-extrabold text-brand-dark">99+</div>
                            <div className="text-xs lg:text-sm text-[#004c8f]">Percentile</div>
                          </div>
                        </div>
                        
                        {/* Main Card */}
                        <div className="bg-white/90 backdrop-blur rounded-2xl lg:rounded-3xl p-6 lg:p-7 xl:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="space-y-3 lg:space-y-4">
                            <div className="flex items-center gap-2.5 lg:gap-3">
                              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-brand/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-xl lg:text-2xl">🎯</span>
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm lg:text-base font-bold text-[#004c8f]">IIT-JEE</div>
                                <div className="text-xs lg:text-sm text-[#004c8f]">12+ Admissions</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5 lg:gap-3">
                              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-brand/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-xl lg:text-2xl">🏆</span>
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm lg:text-base font-bold text-[#004c8f]">MHT-CET</div>
                                <div className="text-xs lg:text-sm text-[#004c8f]">123 Students 98+</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5 lg:gap-3">
                              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-brand/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-xl lg:text-2xl">⚕️</span>
                              </div>
              <div className="min-w-0">
                                <div className="text-sm lg:text-base font-bold text-[#004c8f]">NEET</div>
                                <div className="text-xs lg:text-sm text-[#004c8f]">Perfect Scores</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Badge */}
                        <div className="absolute -bottom-3 lg:-bottom-4 -left-3 lg:-left-4 bg-brand-dark rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-xl z-20">
                          <div className="text-white text-center">
                            <div className="text-xl lg:text-2xl font-extrabold">20K+</div>
                            <div className="text-xs">Alumni</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'activities' ? (
                  <div className="w-full h-full grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-hidden">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 min-w-0 py-4 sm:py-0">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/70 text-red-600 w-fit px-2.5 sm:px-3 py-1 rounded-full shadow-soft">
                        <span>Discover More</span>
                      </div>
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[#004c8f]">
                        {s.title}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#004c8f] drop-shadow-md">
                        {s.highlight}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-[#004c8f]/90">
                        {s.subtitle}
                      </p>
                      
                      {/* Activity Buttons - Small, in 3 lines */}
                      <div className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
                        {/* First line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(0, 2).map((activity, idx) => (
                            <Link
                              key={idx}
                              href={activity.to}
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#004c8f] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-sm sm:text-base md:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300 whitespace-nowrap">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Second line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(2, 4).map((activity, idx) => (
                            <Link
                              key={idx + 2}
                              href={activity.to}
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#004c8f] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-sm sm:text-base md:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300 whitespace-nowrap">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Third line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(4, 6).map((activity, idx) => (
                            <Link
                              key={idx + 4}
                              href={activity.to}
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#004c8f] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-sm sm:text-base md:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300 whitespace-nowrap">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3">
                        <Link href="/activities" className="btn-primary inline-flex justify-center items-center w-full sm:w-auto bg-white text-[#004c8f] hover:bg-white/95 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300">
                          View All Activities
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:flex items-center justify-center min-w-0 overflow-hidden relative">
                      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-full flex items-center justify-center" style={{ borderRadius: '20%', overflow: 'hidden' }}>
                        <OptimizedImage
                          cloudinaryId="v1763783028/8_ubkbjt"
                          alt="Matrix Science Academy Activities"
                          width={600}
                          height={800}
                          className="w-full h-auto max-h-full object-contain"
                          crop="fit"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-5xl xl:max-w-6xl mx-auto grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 relative z-10 overflow-hidden">
                    <div className="flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-w-0 py-2 sm:py-4 md:py-0 max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px]">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/70 text-[#004c8f] w-fit px-2.5 sm:px-3 py-1 rounded-full shadow-soft">
                        <span>Trusted by achievers</span>
                      </div>
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-[#004c8f] max-w-full">
                        {s.title}
                      </h1>
                      <p className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-[#004c8f] max-w-full">
                        {s.highlight}
                      </p>
                      <p className="text-[#004c8f]/90 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-full">
                        {s.subtitle}
                      </p>
                      {s.branches && s.branches.length > 0 && (
                        <div className="mt-1 sm:mt-3 max-w-full overflow-hidden">
                          <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide text-[#004c8f] block mb-1 sm:mb-2">Branches:</span>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 overflow-hidden">
                            {s.branches.map((b) => (
                              <span key={b} className="px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full bg-white/70 text-[#004c8f] text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap flex-shrink-0">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-2 sm:mt-3 md:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-full">
                        <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-red-600 text-white hover:bg-red-700 text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/50">Join Now</Link>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:flex items-center justify-center min-w-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-full flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '20%', overflow: 'hidden' }}>
                            <OptimizedImage
                              cloudinaryId="v1763786335/output_faqujd"
                              alt="Matrix Science Academy Achievement"
                              width={600}
                              height={800}
                              className="w-full h-auto object-contain"
                              crop="fit"
                              loading="eager"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === i ? 'w-8 sm:w-10 bg-[#004c8f]' : 'w-3 sm:w-4 bg-gray-400 hover:bg-gray-500'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


