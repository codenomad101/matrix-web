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
      tagline: '',
      sanskritTagline: 'सा विद्या या विमुक्तये',
      subtitle: 'Top trainers in Maharashtra',
      courses: 'IIT-JEE, MHT-CET, NEET, IISER Foundation',
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
        { value: '12+', label: 'IIT Admissions', exam: '2025' },
        { value: '100/100', label: 'Perfect Score', exam: 'NEET Biology' },
        { value: '150+', label: 'Expert Faculty', exam: 'Teachers by Choice' },
      ],
      cloudinaryId: 'v1763783028/4_nl1ejs',
      type: 'results',
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
      <div className="container-page pt-2 pb-4 sm:pt-6 sm:pb-8 px-2 sm:px-6">
        {/* Compact height for mobile */}
        <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] rounded-xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 text-white">
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
                      {/* Black overlay for text readability */}
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 w-full h-full grid lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-8 p-3 sm:p-6 md:p-8 lg:p-10 overflow-y-auto lg:overflow-visible">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center gap-1.5 sm:gap-4 md:gap-5 min-w-0 py-2 sm:py-0">
                        <div className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm font-medium bg-white/10 text-white border border-white/20 w-fit px-2 sm:px-3 md:px-4 py-0.5 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm">
                          <span className="font-bold">🎓 Premium Education</span>
                        </div>

                        <div>
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-2xl text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 8px 16px rgba(0,0,0,0.6)' }}>
                            <span className="text-[#B30027]">Matrix</span>{' '}
                            <span className="text-[#7a7a7a]">Science</span>
                            <span className="block text-[#0a1a67]">Academy</span>
                          </h1>

                          {/* Sanskrit Tagline */}
                          <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0a1a67] mt-1 sm:mt-2 drop-shadow-md italic">
                            {s.sanskritTagline}
                          </p>

                          <p className="text-xs sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0a1a67] mt-0.5 sm:mt-2 drop-shadow-md">
                            {s.tagline}
                          </p>
                        </div>

                        <p className="text-[10px] sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                          {s.subtitle}
                        </p>
                        <p className="text-[10px] sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl font-medium">
                          {s.courses}
                        </p>

                        {/* Branches Grid */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 mt-1.5 sm:mt-4 max-w-fit">
                          <h3 className="text-xs sm:text-sm font-bold text-[#B30027] mb-2 border-b border-white/20 pb-1">Our Branches</h3>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {['Pradhikaran', 'Nigdi', 'Ravet', 'Shahunagar', 'Chinchwad', 'Wakad', 'Moshi'].map((branch) => (
                              <div key={branch} className="bg-white/10 border border-white/20 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-center hover:bg-white/20 transition-colors">
                                <div className="text-[9px] sm:text-xs md:text-sm font-medium text-white">{branch}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-4 relative z-20">
                          <Link href="/enquiry" className="inline-flex justify-center items-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] bg-[#B30027] text-white hover:bg-[#8a001e] text-[10px] sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2.5 md:py-3 lg:py-4 font-bold shadow-lg sm:shadow-2xl rounded sm:rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[#B30027]/50">
                            Enquire Now
                          </Link>
                        </div>
                      </div>

                      {/* Right Side - Decorative Elements */}
                      <div className="hidden lg:flex items-center justify-center relative min-w-0 overflow-hidden">
                        <div className="relative w-full max-w-md">
                          {/* Circular Stats */}
                          <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 lg:p-5 xl:p-6 shadow-xl z-20">
                            <div className="text-center">
                              <div className="text-2xl lg:text-3xl xl:text-3xl font-extrabold text-[#B30027]">99+</div>
                              <div className="text-xs lg:text-sm text-gray-200">Percentile</div>
                            </div>
                          </div>

                          {/* Main Card */}
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl lg:rounded-3xl p-6 lg:p-7 xl:p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="space-y-3 lg:space-y-4">
                              <div className="flex items-center gap-2.5 lg:gap-3">
                                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xl lg:text-2xl">🎯</span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm lg:text-base font-bold text-white">IIT-JEE</div>
                                  <div className="text-xs lg:text-sm text-gray-200">12+ Admissions</div>
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
                              <div className="text-xl lg:text-2xl font-extrabold">20K+</div>
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
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-y-auto items-center">
                      {/* Title at top */}
                      <div className="text-center max-w-3xl mx-auto shrink-0">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white">{s.title}</h1>
                      </div>

                      {/* Directors images with names */}
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 w-full max-w-4xl mt-2 sm:mt-4 shrink-0">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                          <div className="flex flex-col items-center">
                            <OptimizedImage
                              cloudinaryId="v1764218937/nishant_tifi1f"
                              alt="Nishant Patwardhan"
                              width={200}
                              height={200}
                              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg border-2 border-white/20"
                              crop="fill"
                              loading="lazy"
                            />
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white text-center font-medium">Nishant Patwardhan</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <OptimizedImage
                              cloudinaryId="v1764218938/abhi_mehta_f6h4om"
                              alt="Abhishek Mehta"
                              width={200}
                              height={200}
                              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg border-2 border-white/20"
                              crop="fill"
                              loading="lazy"
                            />
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white text-center font-medium">Abhishek Mehta</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <OptimizedImage
                              cloudinaryId="v1764990905/yadav_vv66wt"
                              alt="Ravindra Yadav"
                              width={200}
                              height={200}
                              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg border-2 border-white/20"
                              crop="fill"
                              loading="lazy"
                            />
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white text-center font-medium">Ravindra Yadav</p>
                          </div>
                        </div>
                      </div>

                      {/* Description text - Hidden on mobile */}
                      <div className="hidden sm:block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 mt-2 sm:mt-4 max-w-3xl mx-auto shrink-0">
                        <blockquote className="text-[10px] sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed text-center px-2">
                          <strong>
                            <p className="mb-1">We are teachers by our choice and we passionately do our job.</p>
                            <p className="mb-1 hidden sm:block">Our aim is not to run the classes conventionally, but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.</p>
                            <p>Matrix Science Academy aims to provide quality and affordable education to all students via offline as well as online mode.</p>
                          </strong>
                        </blockquote>
                      </div>

                      {/* CTA Button */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-4 shrink-0">
                        <Link
                          href="/directors-message"
                          className="inline-flex justify-center items-center w-fit bg-[#B30007] text-white hover:bg-[#8a001e] text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-bold shadow-lg rounded sm:rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          Read Full Message
                        </Link>
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
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-2 sm:mb-4">
                        <div className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm font-medium bg-white/10 text-white border border-white/20 w-fit px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm mb-1 sm:mb-2">
                          <span>Our Programs</span>
                        </div>
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
                          {s.title}
                        </h1>
                      </div>

                      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
                        {/* Left Column: Compact Courses Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                          {s.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="bg-white/10 backdrop-blur-md border border-white/20 rounded sm:rounded-xl p-1 sm:p-4 text-center shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                              <div className="text-lg sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300">
                                {course.icon}
                              </div>
                              <h3 className="text-[9px] sm:text-xs font-bold text-white mb-0.5 leading-tight">
                                {course.name}
                              </h3>
                              <p className="hidden sm:block text-[7px] sm:text-[10px] text-gray-200 mb-0.5">
                                {course.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-2xl">
                          <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 border-b border-white/20 pb-2 text-[#B30027]">
                            ⚡ Specialized Batches
                          </h3>
                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="text-base sm:text-lg">🚀</span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold">IMPULSE</div>
                                <div className="text-[9px] sm:text-xs text-gray-200">Intensive Program</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="text-base sm:text-lg">🏃</span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold">SPRINT</div>
                                <div className="text-[9px] sm:text-xs text-gray-200">Crash Course</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="text-base sm:text-lg">📈</span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold">PACE</div>
                                <div className="text-[9px] sm:text-xs text-gray-200">Long-term Program</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="text-base sm:text-lg">🎓</span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold">DRIFT</div>
                                <div className="text-[9px] sm:text-xs text-gray-200">Revision Batch</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="text-base sm:text-lg">🏆</span>
                              <div>
                                <div className="text-xs sm:text-sm font-bold">RACE</div>
                                <div className="text-[9px] sm:text-xs text-gray-200">Competitive Batch</div>
                              </div>
                            </div>
                          </div>

                          <Link href="/courses" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[10px] sm:text-sm px-3 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 mt-4">
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
                      <div className="absolute inset-0 bg-black/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 md:p-8 lg:p-10 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-2 sm:mb-4">
                        <div className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm font-medium bg-white/10 text-white border border-white/20 w-fit px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm mb-1 sm:mb-2">
                          <span>Our Achievements</span>
                        </div>
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
                          {s.title}
                        </h1>
                      </div>

                      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
                        {/* Left Column: Compact Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                          {s.stats.map((stat, idx) => {
                            return (
                              <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center text-white shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                              >
                                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300 text-[#B30027]">
                                  {stat.value}
                                </div>
                                <h3 className="text-[9px] sm:text-xs font-bold mb-0.5 leading-tight">
                                  {stat.label}
                                </h3>
                                <p className="text-[7px] sm:text-[10px] text-gray-200">
                                  {stat.exam}
                                </p>
                              </div>
                            )
                          })}
                        </div>

                        <div className="bg-transparent backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-2xl">
                          <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 border-b border-white/20 pb-2 text-[#B30027]">
                            🏆 Outstanding Performance
                          </h3>
                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30027] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                              <div>
                                <div className="text-xs sm:text-base font-bold">80+ Students</div>
                                <div className="text-[10px] sm:text-sm text-white/90">Qualified for JEE Advanced</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30027] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              <div>
                                <div className="text-xs sm:text-base font-bold">32 Students</div>
                                <div className="text-[10px] sm:text-sm text-white/90">Scored more than 95%ile</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30027] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              <div>
                                <div className="text-xs sm:text-base font-bold">86 Students</div>
                                <div className="text-[10px] sm:text-sm text-white/90">Scored 99%ile in MHT-CET</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B30027] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <div>
                                <div className="text-xs sm:text-base font-bold">162 Students</div>
                                <div className="text-[10px] sm:text-sm text-white/90">Scored 98%ile in MHT-CET</div>
                              </div>
                            </div>
                          </div>

                          <Link href="/results" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[10px] sm:text-sm px-3 py-2 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 mt-4">
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