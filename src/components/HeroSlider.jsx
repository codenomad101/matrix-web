import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const SLIDE_INTERVAL_MS = 6000

export default function HeroSlider() {
  const slides = useMemo(() => [
    {
      id: 'hero-main',
      type: 'hero',
    },
    {
      id: 'matrix-impulse',
      title: 'Top trainers in Maharashtra',
      highlight: 'Matrix Science Academy + IMPULSE Batch',
      subtitle: 'For IIT-JEE, MHT-CET, NEET, IISER Foundation, and 8th–12th Boards',
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
      <div className="container-content pt-4 pb-6 sm:pt-6 sm:pb-8">
        <div className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-700 text-slate-900 grid">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="absolute inset-0 flex transition-transform duration-700 ease-smooth will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className={`min-w-full shrink-0 ${s.type === 'hero' ? 'relative flex items-center' : s.type === 'activities' ? 'relative flex items-center' : 'flex items-center'}`}>
                {s.type === 'hero' ? (
                  <div className="w-full h-full grid lg:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-12 relative z-10">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-6">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/90 text-slate-800 w-fit px-4 py-2 rounded-full shadow-lg">
                        <span className="text-brand-dark font-bold">🎓 Premium Education</span>
                      </div>
                      
                      <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                          Matrix Science
                          <span className="block text-brand-dark">Academy</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/95 mt-3 drop-shadow-md">
                          + IMPULSE Batch
                        </p>
                      </div>

                      <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                        Top trainers in Maharashtra for <span className="font-semibold text-white">IIT-JEE, MHT-CET, NEET, IISER Foundation</span>, and 8th–12th Board preparation.
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">150+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Teachers</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">1L+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Students</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">8</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Branches</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">12+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Years</div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Link to="/enquiry" className="btn-primary inline-flex justify-center w-full sm:w-auto bg-white text-brand-dark hover:bg-white/95 text-lg px-6 py-3 font-bold shadow-xl">
                          Enquire Now
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Decorative Elements */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="relative w-full max-w-md">
                        {/* Circular Stats */}
                        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur rounded-full p-6 shadow-xl z-20">
                          <div className="text-center">
                            <div className="text-3xl font-extrabold text-brand-dark">99+</div>
                            <div className="text-sm text-slate-700">Percentile</div>
                          </div>
                        </div>
                        
                        {/* Main Card */}
                        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">IIT-JEE</div>
                                <div className="text-sm text-slate-600">12+ Admissions</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">🏆</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">MHT-CET</div>
                                <div className="text-sm text-slate-600">123 Students 98+</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">⚕️</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">NEET</div>
                                <div className="text-sm text-slate-600">Perfect Scores</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Badge */}
                        <div className="absolute -bottom-4 -left-4 bg-brand-dark rounded-xl p-4 shadow-xl z-20">
                          <div className="text-white text-center">
                            <div className="text-2xl font-extrabold">20K+</div>
                            <div className="text-xs">Alumni</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'activities' ? (
                  <div className="w-full h-full flex flex-col justify-center p-6 sm:p-10 lg:p-12 relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/70 text-slate-800 w-fit px-3 py-1 rounded-full shadow-soft mx-auto mb-4">
                        <span>Discover More</span>
                      </div>
                      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg mb-3">
                        {s.title}
                      </h1>
                      <p className="text-base sm:text-xl font-semibold text-white/95 drop-shadow-md mb-2">
                        {s.highlight}
                      </p>
                      <p className="text-sm sm:text-base text-white/90">
                        {s.subtitle}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                      {s.activities.map((activity, idx) => (
                        <Link
                          key={idx}
                          to={activity.to}
                          className="bg-white/90 backdrop-blur rounded-xl p-4 sm:p-5 text-center shadow-lg hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="text-2xl sm:text-3xl mb-2">{activity.icon}</div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-brand-dark transition-colors duration-300">
                            {activity.label}
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                      <Link to="/activities" className="btn-primary inline-flex justify-center w-full sm:w-auto bg-white text-brand-dark hover:bg-white/95">
                        View All Activities
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="w-full grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12">
                    <div className="flex flex-col gap-4">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/70 text-slate-800 w-fit px-3 py-1 rounded-full shadow-soft">
                        <span>Trusted by achievers</span>
                      </div>
                      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        {s.title}
                      </h1>
                      <p className="text-base sm:text-2xl font-semibold text-slate-800">
                        {s.highlight}
                      </p>
                      <p className="text-slate-800/90 text-sm sm:text-lg">
                        {s.subtitle}
                      </p>
                      {s.branches && s.branches.length > 0 && (
                        <div className="mt-2">
                          <span className="text-sm font-semibold uppercase tracking-wide">Branches:</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {s.branches.map((b) => (
                              <span key={b} className="px-3 py-1 rounded-full bg-white/70 text-slate-800 text-xs sm:text-sm">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Link to="/enquiry" className="btn-primary inline-flex justify-center w-full sm:w-auto">Join Now</Link>
                        <Link to="/courses" className="btn-outline inline-flex justify-center w-full sm:w-auto">Explore</Link>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                      <div className="relative">
                        <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-2xl bg-white/70 backdrop-blur shadow-soft rotate-3"></div>
                        <div className="absolute -top-6 -left-6 h-32 w-32 rounded-xl bg-white/70 shadow-soft -rotate-6"></div>
                        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-white/70 shadow-soft rotate-12"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-3 rounded-full transition-all duration-300 ${index === i ? 'w-10 bg-slate-900' : 'w-4 bg-slate-900/50 hover:bg-slate-900/70'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


