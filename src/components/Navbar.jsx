'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MsaLogo from '@/components/MsaLogo'

const BRANCHES = ['Nigdi', 'Shahunagar', 'Chinchwad', 'Ravet', 'Wakad', 'Moshi', 'Kolhapur', 'Rahatani']

const COURSES = [
  { id: 'iit-jee', name: 'IIT-JEE', href: '/courses/iit-jee', icon: '🎯', shortDesc: 'JEE Main & Advanced' },
  { id: 'mht-cet', name: 'MHT-CET', href: '/courses/mht-cet', icon: '📚', shortDesc: 'State engineering & pharmacy' },
  { id: 'neet', name: 'NEET', href: '/courses/neet', icon: '⚕️', shortDesc: 'Medical entrance' },
  { id: 'iiser', name: 'IISER', href: '/courses/iiser', icon: '🔬', shortDesc: 'Science research institutes' },
  { id: 'vriksha', name: 'VRIKSHA', href: '/vriksha', icon: '🌱', shortDesc: 'New program' },
]

/** Orange pill at top-right of nav label (anchor: parent `relative inline-block`) */
const navBadgeClass =
  'pointer-events-none absolute right-0 top-0 z-10 inline-flex -translate-y-[62%] translate-x-[40%] items-center whitespace-nowrap rounded-full bg-[#f97316] px-1.5 py-px text-[7px] font-bold uppercase leading-none text-white sm:text-[8px] sm:-translate-y-[58%] sm:translate-x-[44%]'

const TICKER_ITEMS = [
  'Batch - IIT-JEE, NEET, MHT-CET',
  '86 Students scored 99+ Percentile in MHT-CET 2025',
  '12+ Students selected for IIT in 2025',
  '5 selections in AIIMS and MBBS out of 53 students',
  'Free Career Counselling Sessions Every Saturday',
]

function IconMapPin({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconPhone({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

/** Default nav link: dark gray, sentence case (reference header) */
function navLinkNeutral(pathname, href, extra = '') {
  const active = pathname === href
  return `py-2 text-sm font-semibold tracking-normal transition-colors duration-200 ${
    active ? 'text-[#ED1C24]' : 'text-neutral-600 hover:text-neutral-900'
  } ${extra}`
}

function coursesNavActive(pathname) {
  return pathname.startsWith('/courses') || pathname.startsWith('/courses/')
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /** Reference: white circular dots only between items (not typographic bullets) */
  const renderTickerRow = (rowId) =>
    TICKER_ITEMS.map((item, i) => (
      <span key={`${rowId}-${i}`} className="inline-flex items-center">
        {i > 0 && (
          <span className="mx-2.5 inline-flex shrink-0 items-center justify-center sm:mx-3 md:mx-4" aria-hidden>
            <span className="h-1 w-1 rounded-full bg-white sm:h-1.5 sm:w-1.5 md:h-1.5 md:w-1.5" />
          </span>
        )}
        <span className="whitespace-nowrap text-xs font-medium leading-none text-white sm:text-sm md:text-[0.9375rem]">
          {item}
        </span>
      </span>
    ))

  return (
    <>
      <div className={`sticky top-0 !z-[10001] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        {/* 1) Utility bar — white, hairline border, branches left / blue enquire right */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="container-header flex items-center justify-between gap-3 py-2 text-[13px] leading-tight sm:text-sm sm:leading-snug">
            <div className="relative min-w-0 group/branches">
              <Link
                href="/about#branches-strip"
                className="inline-flex items-center gap-1.5 font-medium text-[#5c6d86] transition-colors hover:text-[#4a5a72]"
              >
                <IconMapPin className="h-3.5 w-3.5 shrink-0 sm:h-[0.95rem] sm:w-[0.95rem]" />
                <span className="whitespace-nowrap">8 Branches in Pune</span>
              </Link>
              <div
                className="pointer-events-none invisible absolute left-0 top-full z-[10050] pt-1 opacity-0 transition-opacity duration-150 group-hover/branches:pointer-events-auto group-hover/branches:visible group-hover/branches:opacity-100"
                role="region"
                aria-label="Branch list"
              >
                <div className="min-w-[220px] rounded-lg border border-neutral-200 bg-white py-2 shadow-lg">
                  {BRANCHES.map((branch) => (
                    <Link
                      key={branch}
                      href={`/enquiry?branch=${encodeURIComponent(branch)}`}
                      className="block px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                      {branch}
                    </Link>
                  ))}
                  <div className="mx-2 my-1 border-t border-neutral-100" />
                  <Link
                    href="/about#branches-strip"
                    className="block px-4 py-2 text-xs font-semibold text-[#ED1C24] hover:bg-neutral-50"
                  >
                    View on About page →
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/enquiry"
              className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-[#005FB8] transition-colors hover:text-[#004494]"
            >
              <IconPhone className="h-4 w-4 shrink-0 text-[#005FB8] sm:h-[1.05rem] sm:w-[1.05rem]" />
              <span className="hidden min-[380px]:inline">Enquire Now</span>
              <span className="min-[380px]:hidden">Enquire</span>
            </Link>
          </div>
        </div>

        {/* 2) Main bar — logo left; nav + Admissions grouped right with tight gap */}
        <header className={`border-b border-neutral-200 bg-white ${scrolled ? 'backdrop-blur-md' : ''}`}>
          <div className="container-header flex h-[4.25rem] items-center gap-3 md:h-[4.5rem] md:gap-4">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Matrix Science Academy home"
              title="Matrix Science Academy"
            >
              <MsaLogo
                priority
                className="h-8 w-auto sm:h-9 md:h-10"
              />
            </Link>

            <div
              className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-2.5 lg:gap-2.5"
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <nav
                className="nav-bar-items hidden items-center gap-2 lg:flex lg:gap-3 xl:gap-3.5"
                aria-label="Primary"
              >
                <Link href="/" className={navLinkNeutral(pathname, '/')}>
                  Home
                </Link>
                <Link href="/about" className={navLinkNeutral(pathname, '/about')}>
                  About
                </Link>

                <div className="relative" onMouseEnter={() => setCoursesOpen(true)}>
                  <button
                    type="button"
                    className={`flex items-center gap-0.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                      coursesOpen || coursesNavActive(pathname)
                        ? 'text-[#ED1C24]'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    aria-expanded={coursesOpen}
                    aria-haspopup="true"
                  >
                    Courses
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {coursesOpen && (
                    <div
                      className="animate-dropdownIn absolute right-0 top-full z-50 mt-0 min-w-[240px] rounded-xl border border-neutral-200 bg-white py-2 shadow-lg"
                      role="menu"
                    >
                      {COURSES.map((course) => (
                        <Link
                          key={course.id}
                          href={course.href}
                          role="menuitem"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-800 first:rounded-t-lg hover:bg-neutral-50"
                        >
                          <span>{course.icon}</span>
                          <span>{course.name}</span>
                        </Link>
                      ))}
                      <div className="my-1 border-t border-neutral-100" />
                      <Link
                        href="/courses"
                        role="menuitem"
                        className="block rounded-b-lg px-4 py-2 text-sm font-bold text-[#ED1C24] hover:bg-neutral-50"
                      >
                        View all courses →
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/faculty" className={navLinkNeutral(pathname, '/faculty')}>
                  Faculty
                </Link>
                <Link href="/results" className={navLinkNeutral(pathname, '/results')}>
                  Results
                </Link>
                <Link
                  href="/vriksha"
                  className={`inline-flex items-center py-2 pr-0.5 text-sm font-semibold tracking-normal transition-colors duration-200 lg:pr-1 ${
                    pathname === '/vriksha' ? 'text-[#ED1C24]' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <span className="relative inline-block whitespace-nowrap">
                    Vriksha
                    <span className={navBadgeClass} aria-hidden>
                      New
                    </span>
                  </span>
                </Link>
                <Link
                  href="/counseling"
                  className={`inline-flex items-center py-2 pl-0.5 text-sm font-semibold tracking-normal transition-colors duration-200 lg:pl-1 ${
                    pathname === '/counseling' ? 'text-[#ED1C24]' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <span className="relative inline-block whitespace-nowrap">
                    Counselling
                    <span className={navBadgeClass} aria-hidden>
                      Free
                    </span>
                  </span>
                </Link>
              </nav>

              <Link
                href="/enquiry"
                className="hidden shrink-0 rounded-full bg-[#ED1C24] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#c9151d] sm:inline-flex lg:ml-1 lg:px-5 lg:text-[12px]"
              >
                Admissions Open
              </Link>
              <button
                type="button"
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-[#5c6d86] transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-[#4a5a72] lg:hidden ${
                  mobileOpen ? 'border-neutral-300 bg-neutral-50' : ''
                }`}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${mobileOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
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
        </header>

        {/* 3) Red ticker + navy band — same width as page content (container), not full-bleed */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="container-header overflow-hidden">
            <div className="bg-[#ED1C24] text-white">
              <div className="flex w-max animate-headerTicker">
                <div className="flex items-center px-4 py-1 sm:px-6 sm:py-1.5 md:py-1.5">
                  {renderTickerRow('a')}
                </div>
                <div className="flex items-center px-4 py-1 sm:px-6 sm:py-1.5 md:py-1.5" aria-hidden>
                  {renderTickerRow('b')}
                </div>
              </div>
            </div>
            <div className="bg-[#005FB8]" aria-hidden>
              <div className="h-[3px] sm:h-[3.5px] md:h-1 lg:h-[5px]" />
            </div>
          </div>
        </div>
      </div>

      {mounted &&
        mobileOpen &&
        typeof window !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[10002] animate-fadeIn lg:hidden" aria-hidden="false">
            <div className="absolute inset-0 bg-black/80" onClick={() => setMobileOpen(false)} />
            <div className="animate-slideInRight absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col bg-white text-black shadow-2xl">
              <div className="z-10 flex flex-shrink-0 items-center justify-between border-b border-neutral-200 bg-white p-4">
                <Link
                  href="/"
                  className="flex shrink-0"
                  title="Matrix Science Academy"
                  onClick={() => setMobileOpen(false)}
                >
                  <MsaLogo className="h-7 w-auto min-w-[3.25rem]" />
                </Link>
                <button
                  type="button"
                  className="grid h-8 w-8 place-content-center rounded-lg text-[#5c6d86] hover:bg-neutral-100 hover:text-[#4a5a72]"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${pathname === '/' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${pathname === '/about' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/faculty"
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${pathname === '/faculty' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Faculty
                  </Link>
                  <Link
                    href="/results"
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${pathname === '/results' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Results
                  </Link>
                  <Link
                    href="/vriksha"
                    className={`block rounded-lg px-3 py-2.5 ${pathname === '/vriksha' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="relative inline-block">
                      <span className="text-sm font-semibold whitespace-nowrap">Vriksha</span>
                      <span className={navBadgeClass} aria-hidden>
                        New
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="/counseling"
                    className={`block rounded-lg px-3 py-2.5 ${pathname === '/counseling' ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="relative inline-block">
                      <span className="text-sm font-semibold whitespace-nowrap">Counselling</span>
                      <span className={navBadgeClass} aria-hidden>
                        Free
                      </span>
                    </span>
                  </Link>
                  <p className="px-3 pt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-400">Courses</p>
                  <div className="flex flex-col gap-0.5 pl-1">
                    {COURSES.map((course) => (
                      <Link
                        key={course.id}
                        href={course.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {course.icon} {course.name}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      className="block rounded-lg px-3 py-2 text-sm font-bold text-[#ED1C24] hover:bg-neutral-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      View all courses →
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-4">
                  <Link
                    href="/enquiry"
                    className="inline-flex justify-center rounded-full bg-[#ED1C24] px-5 py-3 text-sm font-bold text-white hover:bg-[#c9151d]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Admissions Open
                  </Link>
                  <Link
                    href="/enquiry"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-neutral-200 py-2.5 text-sm font-semibold text-[#005FB8] hover:bg-neutral-50 hover:text-[#004494]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <IconPhone className="h-[1.05rem] w-[1.05rem] shrink-0" />
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
