'use client'
import { useEffect, useMemo, useState } from 'react'

const SLIDE_INTERVAL_MS = 6000

// Mock OptimizedImage component for demo
const OptimizedImage = ({ cloudinaryId, alt, width, height, className, crop, loading }) => (
  <img
    src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_${width},h_${height},c_${crop},q_auto,f_auto/${cloudinaryId}`}
    alt={alt}
    className={className}
    loading={loading}
  />
)

// Mock Link component for demo
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
)

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
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId="v1764181864/A_dbzo2c"
                        alt="Matrix Science Academy Background"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="eager"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 w-full h-full grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 min-w-0 py-4 sm:py-0">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/90 text-[#0a1a67] w-fit px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full shadow-lg">
                          <span className="text-brand-dark font-bold">🎓 Premium Education</span>
                        </div>

                        <div>
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-lg">
                            <span className="text-[#B30027]">Matrix</span>{' '}
                            <span className="text-gray-300 drop-shadow-lg">Science</span>
                            <span className="block text-brand-dark drop-shadow-2xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 6px 12px rgba(0,0,0,0.6)' }}>Academy</span>
                          </h1>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0a1a67] mt-2 sm:mt-3 drop-shadow-md">
                            + IMPULSE Batch
                          </p>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-[#0a1a67] leading-relaxed max-w-xl">
                          Top trainers in Maharashtra
                        </p>
                        <p className="text-md sm:text-base md:text-lg text-[#0a1a67] leading-relaxed max-w-xl">
                          IIT-JEE, MHT-CET, NEET, IISER Foundation.
                        </p>

                        {/* Stats Grid */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-3 sm:mt-4">
                          <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">150+</div>
                            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] mt-0.5 sm:mt-1">Teachers</div>
                          </div>
                          <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">1L+</div>
                            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] mt-0.5 sm:mt-1">Students</div>
                          </div>
                          <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">8</div>
                            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] mt-0.5 sm:mt-1">Branches</div>
                          </div>
                          <div className="bg-white/90 backdrop-blur rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2.5 md:p-3 lg:p-4 text-center shadow-md sm:shadow-lg min-w-[70px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] flex-shrink-0">
                            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-brand-dark leading-tight">12+</div>
                            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] mt-0.5 sm:mt-1">Years</div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-4 relative z-20">
                          <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-[#B30027] text-white hover:bg-[#8a001e] text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[#B30027]/50">
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
                              <div className="text-xs lg:text-sm text-[#0a1a67]">Percentile</div>
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
                                  <div className="text-sm lg:text-base font-bold text-[#0a1a67]">IIT-JEE</div>
                                  <div className="text-xs lg:text-sm text-[#0a1a67]">12+ Admissions</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-brand/30 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">🏆</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-[#0a1a67]">MHT-CET</div>
                                  <div className="text-xs lg:text-sm text-[#0a1a67]">123 Students 98+</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-brand/30 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">⚕️</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-[#0a1a67]">NEET</div>
                                  <div className="text-xs lg:text-sm text-[#0a1a67]">Perfect Scores</div>
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
                  </div>
                ) : s.type === 'activities' ? (
                  <div className="w-full h-full flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-hidden items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 min-w-0 py-4 sm:py-0 md:w-[45%] lg:w-[40%] flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/70 text-[#B30027] w-fit px-2.5 sm:px-3 py-1 rounded-full shadow-soft">
                        <span>Discover More</span>
                      </div>
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-[#0a1a67]">
                        {s.title}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#0a1a67] drop-shadow-md">
                        {s.highlight}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-[#0a1a67]/90">
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
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0a1a67] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
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
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0a1a67] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
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
                              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur rounded-md sm:rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0a1a67] hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
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
                        <Link href="/activities" className="btn-primary inline-flex justify-center items-center w-full sm:w-auto bg-white text-[#0a1a67] hover:bg-white/95 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300">
                          View All Activities
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Image - FIXED */}
                    <div className="hidden md:flex items-stretch flex-1 relative overflow-hidden">
                      <div className="relative w-full h-full">
                        {/* Subtle edge fade overlays */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-200/70 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-200/60 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-200/60 to-transparent z-10 pointer-events-none"></div>
                        
                        <img
                          src="https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1000,h_800,c_fit,q_auto,f_auto/v1763783028/8_ubkbjt"
                          alt="Matrix Science Academy Activities"
                          className="w-full h-full object-cover object-center rounded-lg"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-hidden items-center">
                    <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 min-w-0 py-4 sm:py-0 md:w-[45%] lg:w-[40%] flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-medium bg-white/70 text-[#0a1a67] w-fit px-2.5 sm:px-3 py-1 rounded-full shadow-soft">
                        <span>Trusted by achievers</span>
                      </div>
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-[#0a1a67] max-w-full">
                        {s.title}
                      </h1>
                      <p className="text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-[#0a1a67] max-w-full">
                        {s.highlight}
                      </p>
                      <p className="text-[#0a1a67]/90 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-full">
                        {s.subtitle}
                      </p>
                      {s.branches && s.branches.length > 0 && (
                        <div className="mt-1 sm:mt-3 max-w-full overflow-hidden">
                          <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide text-[#0a1a67] block mb-1 sm:mb-2">Branches:</span>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 overflow-hidden">
                            {s.branches.map((b) => (
                              <span key={b} className="px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full bg-white/70 text-[#0a1a67] text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap flex-shrink-0">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-2 sm:mt-3 md:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-full">
                        <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-[#B30027] text-white hover:bg-[#8a001e] text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[#B30027]/50">Join Now</Link>
                      </div>
                    </div>

                    {/* Right Side - Image - FIXED */}
                    <div className="hidden md:flex items-center justify-center flex-1 relative overflow-hidden">
                      <div className="relative overflow-hidden" style={{ width: '650px', height: '700px' }}>
                        {/* Subtle edge fade overlays */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-gray-200/70 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-gray-200/60 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-gray-200/60 to-transparent z-10 pointer-events-none"></div>
                        
                        <img
                          src="https://res.cloudinary.com/ddqgxrgnc/image/upload/w_650,h_700,c_fill,q_auto,f_auto/v1763783028/4_nl1ejs"
                          alt="Matrix Science Academy"
                          className="w-full h-full object-cover rounded-lg"
                          style={{ objectPosition: 'center 15%' }}
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === i ? 'w-8 sm:w-10 bg-[#0a1a67]' : 'w-3 sm:w-4 bg-gray-400 hover:bg-gray-500'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}