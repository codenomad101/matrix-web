import { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const closeTimeoutRef = useRef(null)
  
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpen(true)
  }
  
  const handleMouseLeave = () => {
    // Small delay before closing to allow smooth cursor movement
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 200)
  }
  
  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button className="nav-link inline-flex items-center gap-1">
        {label}
        <svg className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
      </button>
      {open && (
        <div 
          className="absolute left-0 top-full pt-1 w-56 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible bridge to prevent gap issues */}
          <div className="absolute left-0 -top-1 w-full h-1" />
          <div className="rounded-xl bg-white border shadow-soft p-2">
            {items.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className="block px-3 py-2 rounded-lg hover:bg-brand/10 text-slate-700 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)
  const [activitiesOpen, setActivitiesOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="h-14 w-14 md:h-16 md:w-16 grid place-content-center overflow-hidden">
            <img src="/images/matrix_logo1.png" alt="MSA logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-1 font-extrabold text-lg sm:text-2xl">
              <span className="text-red-600">Matrix</span>
              <span className="text-slate-600">Science</span>
              <span className="text-brand">Academy</span>
            </div>
            <span className="text-xs text-slate-500">सा विद्या या विमुक्तये</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'text-slate-900' : ''}`}>Home</NavLink>
          <Dropdown label="Academics" items={[
            { label: 'Courses', to: '/courses' },
            { label: 'Our Faculty', to: '/faculty' },
            { label: 'Results', to: '/results' },
            { label: 'Testimonials', to: '/testimonials' },
            { label: 'Directors Message', to: '/directors-message' },
          ]} />
          <Dropdown label="Activities" items={[
            { label: 'Performance', to: '/activities/performance' },
            { label: 'Course Selection', to: '/activities/course-selection' },
            { label: 'IIT-JEE/NEET Timeline', to: '/activities/iit-neet-timeline' },
            { label: 'MHT-CET Timeline', to: '/activities/mht-cet-timeline' },
            { label: 'On Demand Courses', to: '/activities/on-demand-courses' },
            { label: 'Felicitation', to: '/activities/felicitation' },
          ]} />
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'text-slate-900' : ''}`}>About Us</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/enquiry" className="btn-primary hidden md:inline-flex">Enquire Now</Link>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border hover:bg-brand/10 transition-colors" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sidebar (drawer) */}
      <div className={`md:hidden fixed inset-0 z-50 ${mobileOpen ? '' : 'pointer-events-none'}`} aria-hidden={mobileOpen ? 'false' : 'true'}>
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/80 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)}></div>
        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.25)] border-l transition-transform duration-300 ease-smooth ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 border-b flex items-center justify-between bg-white sticky top-0">
            <div className="font-extrabold">
              <span className="text-red-600">Matrix</span>{' '}
              <span className="text-slate-600">Science</span>{' '}
              <span className="text-brand">Academy</span>
            </div>
            <button className="h-9 w-9 rounded-lg hover:bg-brand/10 grid place-content-center" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div className="p-4 flex flex-col gap-2 bg-white">
            <NavLink to="/" className={({isActive}) => `block px-2 py-2 rounded-lg ${isActive ? 'bg-brand/20 text-slate-900' : 'hover:bg-brand/10'}`} onClick={() => setMobileOpen(false)}>Home</NavLink>

            <button className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-brand/10" onClick={() => setAcademicsOpen((v) => !v)}>
              <span>Academics</span>
              <span>{academicsOpen ? '−' : '+'}</span>
            </button>
            {academicsOpen && (
              <div className="ml-3 flex flex-col gap-1">
                <Link to="/courses" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Courses</Link>
                <Link to="/faculty" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Our Faculty</Link>
                <Link to="/results" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Results</Link>
                <Link to="/testimonials" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Testimonials</Link>
                <Link to="/directors-message" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Directors Message</Link>
              </div>
            )}

            <button className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-brand/10" onClick={() => setActivitiesOpen((v) => !v)}>
              <span>Activities</span>
              <span>{activitiesOpen ? '−' : '+'}</span>
            </button>
            {activitiesOpen && (
              <div className="ml-3 flex flex-col gap-1">
                <Link to="/activities/performance" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Performance</Link>
                <Link to="/activities/course-selection" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Course Selection</Link>
                <Link to="/activities/iit-neet-timeline" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>IIT-JEE/NEET Timeline</Link>
                <Link to="/activities/mht-cet-timeline" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>MHT-CET Timeline</Link>
                <Link to="/activities/on-demand-courses" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>On Demand Courses</Link>
                <Link to="/activities/felicitation" className="px-2 py-1 rounded hover:bg-brand/10" onClick={() => setMobileOpen(false)}>Felicitation</Link>
              </div>
            )}

            <NavLink to="/about" className={({isActive}) => `block px-2 py-2 rounded-lg ${isActive ? 'bg-brand/20 text-slate-900' : 'hover:bg-brand/10'}`} onClick={() => setMobileOpen(false)}>About Us</NavLink>

            <div className="pt-3 flex flex-col gap-2">
              <Link to="/enquiry" className="btn-primary inline-flex justify-center" onClick={() => setMobileOpen(false)}>Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


