'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import OptimizedImage from '@/components/OptimizedImage'

function MegaMenu({ label, items, images, description }) {
  const [open, setOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const closeTimeoutRef = useRef(null)
  
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpen(true)
  }
  
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false)
      setHoveredIndex(null)
    }, 300)
  }
  
  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
              <button className={`relative px-3 py-2 rounded-lg overflow-hidden inline-flex items-center gap-1 group transition-all duration-300 font-bold ${
                open 
                  ? 'bg-[#0a1a67] text-white shadow-lg scale-105' 
                  : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white hover:shadow-lg hover:scale-105'
              }`}>
                <span className={`relative z-10 ${open ? 'text-white' : 'group-hover:text-white'}`}>
                  {label}
                </span>
        <svg className={`h-4 w-4 transition-transform duration-300 relative z-10 ${open ? 'rotate-180 text-white' : 'group-hover:text-white'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/>
        </svg>
      </button>
      {open && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px] z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible bridge */}
          <div className="absolute left-0 -top-2 w-full h-2" />
          
          {/* Mega Menu Container */}
          <div className={`rounded-2xl bg-white border shadow-2xl overflow-hidden transition-all duration-500 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            {/* Header Section */}
            <div className="bg-gradient-to-r from-brand/20 to-brand-dark/10 px-6 py-4 border-b">
              <h3 className="font-bold text-lg text-[#0a1a67]">{label}</h3>
              {description && <p className="text-sm text-[#0a1a67] mt-1">{description}</p>}
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-0 p-2">
              {items.map((item, idx) => (
                  <Link
                  key={item.to}
                  href={item.to}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    hoveredIndex === idx 
                      ? 'bg-[#0a1a67]/10 scale-[1.02] shadow-md' 
                      : 'hover:bg-[#0a1a67]/5'
                  }`}
                >
                  {/* Image/Icon */}
                  <div className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    hoveredIndex === idx ? 'ring-2 ring-brand-dark scale-110' : ''
                  }`}>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.label}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          hoveredIndex === idx ? 'scale-110' : 'scale-100'
                        }`}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextElementSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-gradient-to-br from-brand/30 to-brand-dark/20 flex items-center justify-center ${item.image ? 'hidden' : 'flex'}`}>
                      <span className="text-xl">{item.icon || '📚'}</span>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-[#0a1a67] transition-colors duration-300 ${
                      hoveredIndex === idx ? 'text-brand-dark' : ''
                    }`}>
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-xs text-[#0a1a67] mt-0.5 line-clamp-2">
                        {item.description}
                      </div>
                    )}
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`transition-all duration-300 ${
                    hoveredIndex === idx 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-2'
                  }`}>
                    <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)
  const [activitiesOpen, setActivitiesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const academicsItems = [
    { 
      label: 'Courses', 
      to: '/courses',
      icon: '📖',
      description: 'IIT-JEE, MHT-CET, NEET & more',
      image: '/images/top1.png'
    },
    { 
      label: 'Our Faculty', 
      to: '/faculty',
      icon: '👨‍🏫',
      description: '150+ Expert Teachers',
      image: '/images/faculties.png'
    },
    { 
      label: 'Results', 
      to: '/results',
      icon: '🏆',
      description: 'Track Record of Excellence',
      image: '/images/results1.png'
    },
    { 
      label: 'Testimonials', 
      to: '/testimonials',
      icon: '💬',
      description: 'Success Stories',
      image: '/images/features/Dhruv-Shinde.jpg'
    },
  ]

  const activitiesItems = [
    { 
      label: 'Performance', 
      to: '/activities/performance',
      icon: '📈',
      description: 'Student Growth Metrics',
      image: '/images/results.png'
    },
    { 
      label: 'Course Selection', 
      to: '/activities/course-selection',
      icon: '📚',
      description: 'Choose Your Path',
      image: '/images/top2.png'
    },
    { 
      label: 'IIT-JEE/NEET Timeline', 
      to: '/activities/iit-neet-timeline',
      icon: '⏱️',
      description: 'Preparation Roadmap',
      image: '/images/IITJEENEET.png'
    },
    { 
      label: 'MHT-CET Timeline', 
      to: '/activities/mht-cet-timeline',
      icon: '📅',
      description: 'CET Exam Schedule',
      image: '/images/MHTCET.png'
    },
    { 
      label: 'On Demand Courses', 
      to: '/activities/on-demand-courses',
      icon: '🎯',
      description: 'Flexible Learning',
      image: '/images/on-demand-courses.png'
    },
    { 
      label: 'Felicitation', 
      to: '/activities/felicitation',
      icon: '🏆',
      description: 'Celebrating Achievements',
      image: '/images/felicitation.png'
    },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-md bg-white/95 border-b-2 border-brand/20 shadow-lg' 
        : 'backdrop-blur-sm bg-white/80 border-b'
    }`}>
      <div className="container-content flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-3 group relative">
          <div className="h-20 w-20 md:h-24 md:w-24 grid place-content-center overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
            <OptimizedImage
              cloudinaryId="v1763788005/matrix_logo_cra98w"
              alt="MSA logo"
              width={96}
              height={96}
              className="h-20 w-20 md:h-24 md:w-24 object-contain transition-all duration-300"
              crop="fit"
              loading="eager"
            />
          </div>
          <span className="text-xs sm:text-sm text-[#0a1a67] transition-colors duration-300 group-hover:text-[#0a1a67] whitespace-nowrap hidden sm:block">सा विद्या या विमुक्तये</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`relative px-3 py-2 rounded-lg overflow-hidden group transition-all duration-300 font-bold ${
              pathname === '/' 
                ? 'bg-[#0a1a67] text-white shadow-md scale-105' 
                : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            <span className={`relative z-10 ${pathname === '/' ? 'text-white' : 'group-hover:text-white'}`}>Home</span>
          </Link>
          
          <MegaMenu 
            label="Academics" 
            items={academicsItems}
            description="Explore our academic programs and resources"
            images={{ featured: '/images/results2.png' }}
          />
          
          <MegaMenu 
            label="Activities" 
            items={activitiesItems}
            description="Programs, timelines, and student achievements"
            images={{ featured: '/images/audi1.png' }}
          />
          
          <Link 
            href="/directors-message" 
            className={`relative px-3 py-2 rounded-lg overflow-hidden group transition-all duration-300 font-bold ${
              pathname === '/directors-message' 
                ? 'bg-[#0a1a67] text-white shadow-md scale-105' 
                : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            <span className={`relative z-10 ${pathname === '/directors-message' ? 'text-white' : 'group-hover:text-white'}`}>Directors Message</span>
          </Link>
          
          <Link 
            href="/about" 
            className={`relative px-3 py-2 rounded-lg overflow-hidden group transition-all duration-300 font-bold ${
              pathname === '/about' 
                ? 'bg-[#0a1a67] text-white shadow-md scale-105' 
                : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            <span className={`relative z-10 ${pathname === '/about' ? 'text-white' : 'group-hover:text-white'}`}>About Us</span>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href="/enquiry" 
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 ease-smooth px-5 py-2.5 font-medium shadow-soft relative overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Enquire Now</span>
            <span className="absolute inset-0 bg-[#8a001e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <button 
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border transition-all duration-300 ${
              mobileOpen 
                ? 'bg-brand/20 border-brand rotate-90' 
                : 'hover:bg-[#0a1a67]/10'
            }`} 
            onClick={() => setMobileOpen((v) => !v)} 
            aria-label="Toggle menu"
          >
            <svg 
              className={`h-5 w-5 transition-transform duration-300 ${mobileOpen ? 'rotate-180' : ''}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sidebar (drawer) */}
      <div className={`md:hidden fixed inset-0 z-50 ${mobileOpen ? '' : 'pointer-events-none'}`} aria-hidden={mobileOpen ? 'false' : 'true'}>
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/80 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)}></div>
        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white text-[#0a1a67] shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-l transition-transform duration-300 ease-smooth ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 border-b flex items-center justify-between bg-white sticky top-0">
            <div className="font-extrabold">
              <span className="text-[#B30027]">Matrix</span>{' '}
              <span className="text-[#0a1a67]">Science</span>{' '}
              <span className="text-brand">Academy</span>
            </div>
            <button className="h-9 w-9 rounded-lg hover:bg-[#0a1a67]/10 grid place-content-center" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div className="p-4 flex flex-col gap-2 bg-white">
            <Link href="/" className={`block px-2 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === '/' ? 'bg-[#0a1a67] text-white' : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'}`} onClick={() => setMobileOpen(false)}>Home</Link>

            <button className={`flex items-center justify-between px-2 py-2 rounded-lg font-medium transition-all duration-300 ${academicsOpen ? 'bg-[#0a1a67] text-white' : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'}`} onClick={() => setAcademicsOpen((v) => !v)}>
              <span>Academics</span>
              <span>{academicsOpen ? '−' : '+'}</span>
            </button>
            {academicsOpen && (
              <div className="ml-3 flex flex-col gap-1">
                <Link href="/courses" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Courses</Link>
                <Link href="/faculty" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Our Faculty</Link>
                <Link href="/results" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Results</Link>
                <Link href="/testimonials" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Testimonials</Link>
              </div>
            )}

            <button className={`flex items-center justify-between px-2 py-2 rounded-lg font-medium transition-all duration-300 ${activitiesOpen ? 'bg-[#0a1a67] text-white' : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'}`} onClick={() => setActivitiesOpen((v) => !v)}>
              <span>Activities</span>
              <span>{activitiesOpen ? '−' : '+'}</span>
            </button>
            {activitiesOpen && (
              <div className="ml-3 flex flex-col gap-1">
                <Link href="/activities/performance" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Performance</Link>
                <Link href="/activities/course-selection" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Course Selection</Link>
                <Link href="/activities/iit-neet-timeline" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>IIT-JEE/NEET Timeline</Link>
                <Link href="/activities/mht-cet-timeline" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>MHT-CET Timeline</Link>
                <Link href="/activities/on-demand-courses" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>On Demand Courses</Link>
                <Link href="/activities/felicitation" className="px-2 py-1 rounded text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>Felicitation</Link>
              </div>
            )}

            <Link href="/directors-message" className={`block px-2 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === '/directors-message' ? 'bg-[#0a1a67] text-white' : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'}`} onClick={() => setMobileOpen(false)}>Directors Message</Link>
            <Link href="/about" className={`block px-2 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === '/about' ? 'bg-[#0a1a67] text-white' : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'}`} onClick={() => setMobileOpen(false)}>About Us</Link>

                    <div className="pt-3 flex flex-col gap-2">
                      <Link href="/enquiry" className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft" onClick={() => setMobileOpen(false)}>Enquire Now</Link>
                    </div>
          </div>
        </div>
      </div>
    </header>
  )
}


