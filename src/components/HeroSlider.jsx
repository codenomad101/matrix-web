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
      id: 'msa-branding',
      title: 'Matrix Science Academy',
      tagline: 'Believe - Build - Become',
      sanskritTagline: 'सा विद्या या विमुक्तये',
      type: 'branding',
    },
    {
      id: 'vision',
      title: 'Our Vision',
      subtitle: 'Directors Message',
      description: 'Empowering students to achieve excellence in competitive examinations through dedicated teaching, innovative methods, and personalized attention.',
      cloudinaryId: 'v1764181800/7_rhfwuq',
      type: 'vision',
    },
    {
      id: 'courses-offered',
      title: 'Courses We Offer',
      subtitle: 'Comprehensive Training Programs',
      courses: [
        { name: 'IIT-JEE', icon: '🎯', description: 'Advanced Engineering Entrance' },
        { name: 'MHT-CET', icon: '📚', description: 'Maharashtra State Entrance' },
        { name: 'NEET', icon: '⚕️', description: 'Medical Entrance Exam' },
        { name: 'IISER', icon: '🔬', description: 'Science Research Institute' },
      ],
      cloudinaryId: 'v1763852019/booksweoffer_bciiam',
      type: 'courses',
    },
    {
      id: 'results-stats',
      title: 'Results in Statistics',
      subtitle: 'Our Success Story',
      stats: [
        { value: '86', label: 'Students 99+ Percentile', exam: 'MHT-CET 2025' },
        { value: '30%', label: 'increase in IIT admissions', exam: '2025' },
        { value: 'Multiple', label: 'admissions into MBBS', exam: '2025' },
        { value: '150+', label: 'Expert Faculty', exam: 'Teachers by Choice' },
      ],
      cloudinaryId: 'v1763783028/4_nl1ejs',
      type: 'results',
    },
  ], [])


  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-1 pb-2 sm:pt-6 sm:pb-8 px-2 sm:px-6">
        {/* Compact height for mobile */}
        <div
          className="relative min-h-[350px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] rounded-lg sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 text-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="absolute inset-0 flex transition-transform duration-700 ease-smooth will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className="w-full flex-[0_0_100%] h-full shrink-0 relative flex items-center">
                {s.type === 'branding' ? (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
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
                      {/* Stronger overlay for better mobile readability */}
                      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 w-full h-full grid lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-8 p-2 sm:p-6 md:p-8 lg:p-10 overflow-y-auto lg:overflow-visible">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center gap-1 sm:gap-4 md:gap-5 min-w-0 py-1 sm:py-0">
                        <div className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm font-medium bg-white/10 text-white border border-white/20 w-fit px-2 sm:px-3 md:px-4 py-0.5 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm">
                          <span className="font-bold">🎓 Premium Education</span>
                        </div>

                        <div className="bg-white shadow-2xl border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-6 max-w-fit">
                          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-[#0a1a67]" style={{ textShadow: 'none' }}>
                            <span className="text-[#B30027] font-black">Matrix</span>{' '}
                            <span className="text-[#7a7a7a] font-black">Science</span>
                            <span className="block text-[#0a1a67] font-black">Academy</span>
                          </h1>

                          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl font-black text-[#0a1a67] mt-0.5 sm:mt-2" style={{ textShadow: 'none' }}>
                            {s.tagline}
                          </p>
                        </div>



                        {/* Branches Grid */}
                        <div className="bg-white shadow-xl border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-4 mt-1 sm:mt-4 max-w-fit">
                          <h3 className="text-[10px] sm:text-sm font-bold text-[#B30027] mb-1.5 border-b border-gray-200 pb-0.5">Our Branches</h3>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {['Pradhikaran', 'Nigdi', 'Ravet', 'Shahunagar', 'Chinchwad', 'Wakad', 'Moshi'].map((branch) => (
                              <div key={branch} className="bg-[#0a1a67]/10 border border-[#0a1a67]/20 rounded-full px-1.5 sm:px-3 py-0.5 sm:py-1 text-center hover:bg-[#0a1a67]/20 transition-colors">
                                <div className="text-[8px] sm:text-xs md:text-sm font-medium text-[#0a1a67]">{branch}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 mt-1.5 sm:mt-4 relative z-20">
                          <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[100px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-[#B30027] text-white hover:bg-[#8a001e] text-[9px] sm:text-sm md:text-base lg:text-lg px-2.5 sm:px-5 md:px-6 lg:px-8 py-1 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[#B30027]/50">
                            Enquire Now
                          </Link>
                        </div>
                      </div>

                      {/* Right Side - Decorative Elements */}
                      <div className="hidden lg:flex items-center justify-center relative min-w-0 overflow-hidden">
                        <div className="relative w-full max-w-md">
                          {/* Circular Stats */}
                          <div className="absolute top-0 right-0 bg-white/95 md:bg-white/10 md:backdrop-blur-md border border-white/30 md:border-white/20 rounded-full p-4 lg:p-5 xl:p-6 shadow-xl z-20">
                            <div className="text-center">
                              <div className="text-2xl lg:text-3xl xl:text-3xl font-extrabold text-[#B30027]">99+</div>
                              <div className="text-xs lg:text-sm text-gray-200">Percentile</div>
                            </div>
                          </div>

                          {/* Main Card */}
                          <div className="bg-white/95 md:bg-white/10 md:backdrop-blur-md border border-white/30 md:border-white/20 rounded-2xl lg:rounded-3xl p-6 lg:p-7 xl:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="space-y-3 lg:space-y-4">
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/20 md:bg-white/10 border border-white/30 md:border-white/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">🎯</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-white">IIT-JEE</div>
                                  <div className="text-xs lg:text-sm text-gray-200">30% increase in admissions</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">🏆</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-white">MHT-CET</div>
                                  <div className="text-xs lg:text-sm text-gray-200">123 Students 98+</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">⚕️</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-white">NEET</div>
                                  <div className="text-xs lg:text-sm text-gray-200">Perfect Scores</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Badge */}
                          <div className="absolute -bottom-3 lg:-bottom-4 -left-3 lg:-left-4 bg-[#B30027] rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-xl z-20">
                            <div className="text-white text-center">
                              <div className="text-xl lg:text-2xl font-extrabold">30K+</div>
                              <div className="text-xs">Alumni</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'vision' ? (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId={s.cloudinaryId}
                        alt={s.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="w-full max-w-6xl">
                        {/* Directors Images */}
                        <div className="bg-white md:bg-white/10 md:backdrop-blur-md shadow-2xl border border-gray-200 md:border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 border-b border-gray-200 md:border-white/20 pb-3 md:pb-4 text-[#0a1a67] md:text-white text-center">
                            👥 Our Directors
                          </h3>
                          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            <div className="flex flex-col items-center">
                              <OptimizedImage
                                cloudinaryId="v1764218937/nishant_tifi1f"
                                alt="Nishant Patwardhan"
                                width={200}
                                height={200}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg border-2 border-gray-200"
                                crop="fill"
                                loading="lazy"
                              />
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Nishant Patwardhan</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">Matrix Science Academy</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <OptimizedImage
                                cloudinaryId="v1764990905/yadav_vv66wt"
                                alt="Ravindra Yadav"
                                width={200}
                                height={200}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg border-2 border-gray-200"
                                crop="fill"
                                loading="lazy"
                              />
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Ravindra Yadav</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">Matrix Science Academy</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <OptimizedImage
                                cloudinaryId="v1764218938/abhi_mehta_f6h4om"
                                alt="Abhishek Mehta"
                                width={200}
                                height={200}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-lg border-2 border-gray-200"
                                crop="fill"
                                loading="lazy"
                              />
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Abhishek Mehta</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">MSA Ravet</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg border-2 border-gray-200 bg-gradient-to-br from-[#0a1a67] to-[#1a2a87] flex items-center justify-center">
                                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">AP</span>
                              </div>
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Algesh Patrike</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">Matrix Science Academy</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg border-2 border-gray-200 bg-gradient-to-br from-[#0a1a67] to-[#1a2a87] flex items-center justify-center">
                                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">MK</span>
                              </div>
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Manoj Kumar</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">MSA Wakad</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg border-2 border-gray-200 bg-gradient-to-br from-[#0a1a67] to-[#1a2a87] flex items-center justify-center">
                                <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">UB</span>
                              </div>
                              <p className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#0a1a67] md:text-white text-center font-semibold leading-tight">Umesh Bharde</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80 text-center leading-tight mt-0.5">Director</p>
                              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#B30027] md:text-white text-center leading-tight">MSA Moshi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'courses' ? (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId={s.cloudinaryId}
                        alt={s.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-0.5 p-1.5 sm:p-2 md:p-3 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-0.5 sm:mb-1">
                        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold leading-tight text-white">
                          Our Courses
                        </h1>
                      </div>
                      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 items-center">
                        {/* Left Column: Compact Courses Grid */}
                        <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
                          {s.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="bg-white md:bg-white/10 md:backdrop-blur-md border border-gray-200 md:border-white/20 rounded sm:rounded-lg md:rounded-xl p-1 sm:p-2 md:p-4 lg:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                              <div className="text-sm sm:text-base md:text-2xl lg:text-3xl mb-0.5 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                                {course.icon}
                              </div>
                              <h3 className="text-[9px] sm:text-[10px] md:text-sm lg:text-base font-bold text-[#0a1a67] md:text-white leading-tight">
                                {course.name}
                              </h3>
                              <p className="hidden sm:block text-[7px] sm:text-[8px] md:text-xs lg:text-sm text-[#0a1a67]/70 md:text-white/80">
                                {course.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white md:bg-white/10 md:backdrop-blur-md border border-gray-200 md:border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 lg:p-6">
                          <h3 className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 md:mb-4 border-b border-gray-200 md:border-white/20 pb-1 md:pb-2 text-[#0a1a67] md:text-white">
                            ⚡ Specialized Batches
                          </h3>
                          <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3">
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                              <span className="text-xs sm:text-sm md:text-lg lg:text-xl">🚀</span>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">IMPULSE</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                              <span className="text-xs sm:text-sm md:text-lg lg:text-xl">🏃</span>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">SPRINT</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                              <span className="text-xs sm:text-sm md:text-lg lg:text-xl">📈</span>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">PACE</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                              <span className="text-xs sm:text-sm md:text-lg lg:text-xl">🎓</span>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">DRIFT</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                              <span className="text-xs sm:text-sm md:text-lg lg:text-xl">🏆</span>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">RACE</div>
                              </div>
                            </div>
                          </div>

                          <Link href="/courses" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[8px] sm:text-[9px] md:text-sm lg:text-base px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg font-bold shadow-md transition-all duration-300 hover:scale-105 mt-2 md:mt-4">
                            View All Batches
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'results' ? (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId={s.cloudinaryId}
                        alt={s.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-0.5 p-1.5 sm:p-2 md:p-3 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-0.5 sm:mb-1">
                        <div className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] md:text-xs font-medium bg-white/10 text-white border border-white/20 w-fit px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-sm mb-0.5">
                          <span>Our Achievements</span>
                        </div>
                        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold leading-tight text-white">
                          {s.title}
                        </h1>
                      </div>

                      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 items-center">
                        {/* Left Column: Compact Stats Grid */}
                        <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
                          {s.stats.map((stat, idx) => {
                            return (
                              <div
                                key={idx}
                                className="bg-white md:bg-white/10 md:backdrop-blur-md border border-gray-200 md:border-white/20 rounded-lg sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-4 lg:p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                              >
                                <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold mb-0.5 md:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#0a1a67] md:text-white">
                                  {stat.value}
                                </div>
                                <h3 className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-bold leading-tight text-[#0a1a67] md:text-white">
                                  {stat.label}
                                </h3>
                                <p className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs text-[#0a1a67]/70 md:text-white/80">
                                  {stat.exam}
                                </p>
                              </div>
                            )
                          })}
                        </div>

                        <div className="bg-white md:bg-white/10 md:backdrop-blur-md border border-gray-200 md:border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 lg:p-6">
                          <h3 className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 md:mb-4 border-b border-gray-200 md:border-white/20 pb-1 md:pb-2 text-[#0a1a67] md:text-white">
                            🏆 Outstanding Performance
                          </h3>
                          <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3">
                            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B30027] md:text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">80+ Students</div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-[#0a1a67]/70 md:text-white/80">Qualified for JEE Advanced</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B30027] md:text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">32 Students</div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-[#0a1a67]/70 md:text-white/80">Scored more than 95%ile</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B30027] md:text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">86 Students</div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-[#0a1a67]/70 md:text-white/80">Scored 99%ile in MHT-CET</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#B30027] md:text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <div>
                                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg font-bold text-[#0a1a67] md:text-white">162 Students</div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-[#0a1a67]/70 md:text-white/80">Scored 98%ile in MHT-CET</div>
                              </div>
                            </div>
                          </div>

                          <Link href="/results" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[8px] sm:text-[9px] md:text-sm lg:text-base px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg font-bold shadow-md transition-all duration-300 hover:scale-105 mt-2 md:mt-4">
                            View Detailed Results
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-1.5 sm:h-3 rounded-full transition-all duration-300 ${index === i ? 'w-6 sm:w-10 bg-[#0a1a67]' : 'w-2 sm:w-4 bg-gray-400 hover:bg-gray-500'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}