'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [branchesOpen, setBranchesOpen] = useState(false)
    const [coursesOpen, setCoursesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Ensure component is mounted on client
    useEffect(() => {
        setMounted(true)
    }, [])

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const BRANCHES = ['Nigdi', 'Shahunagar', 'Chinchwad', 'Ravet', 'Wakad', 'Moshi', 'Kolhapur', 'Rahatani']

    const COURSES = [
        { id: 'iit-jee', name: 'IIT-JEE', href: '/courses/iit-jee', icon: '🎯', shortDesc: 'JEE Main & Advanced' },
        { id: 'mht-cet', name: 'MHT-CET', href: '/courses/mht-cet', icon: '📚', shortDesc: 'State engineering & pharmacy' },
        { id: 'neet', name: 'NEET', href: '/courses/neet', icon: '⚕️', shortDesc: 'Medical entrance' },
        { id: 'iiser', name: 'IISER', href: '/courses/iiser', icon: '🔬', shortDesc: 'Science research institutes' },
    ]

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Courses', hasSubmenu: true, submenuKey: 'courses' },
        { label: 'Results', href: '/results' },
        { label: 'Faculty', href: '/faculty' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Branches', hasSubmenu: true, submenuKey: 'branches' },
        { label: 'About Us', href: '/about' },
    ]

    return (
        <>
            {/* Top header: branch names with white lines between */}
            <div className="bg-[#B30027] text-white">
                <div className="container-header py-1.5 flex flex-wrap items-center justify-center gap-y-1 text-xs font-semibold">
                    <span className="whitespace-nowrap pr-2">Branches:</span>
                    {BRANCHES.map((branch, idx) => (
                        <span key={branch} className="inline-flex items-center">
                            {idx > 0 && <span className="w-px h-4 bg-white flex-shrink-0 mx-1.5" aria-hidden />}
                            <Link
                                href={`/enquiry?branch=${encodeURIComponent(branch)}`}
                                className="hover:underline underline-offset-2 whitespace-nowrap px-0.5"
                            >
                                {branch}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>

            <header className={`sticky top-0 !z-[10001] transition-all duration-500 ${scrolled
                ? 'backdrop-blur-md bg-white border-b-2 border-brand/20 shadow-lg'
                : 'backdrop-blur-sm bg-white border-b-2 border-gray-200'
                }`}>
                <div className="container-header flex items-center justify-between h-20">
                {/* Logo - 50% larger than before: 84px mobile, 108px desktop */}
                <Link href="/" className="flex items-center flex-shrink-0">
                    <div className="h-[74px] w-[74px] md:h-[98px] md:w-[98px] grid place-content-center overflow-hidden flex-shrink-0">
                        <img
                            src="https://res.cloudinary.com/ddqgxrgnc/image/upload/v1773460255/matrixlogo_dlhtag.png"
                            alt="Matrix Science Academy"
                            width={98}
                            height={98}
                            className="h-[74px] w-[74px] md:h-[98px] md:w-[98px] object-contain"
                            loading="eager"
                        />
                    </div>
                </Link>

                {/* Academy Name - mobile only */}
                <div className="flex-1 flex justify-start md:hidden px-2">
                    <span className="text-sm font-bold whitespace-nowrap">
                        <span className="text-heading">Matrix</span>{' '}
                        <span className="text-body">Science Academy</span>
                    </span>
                </div>

                {/* Right: nav text + CTA - menu section only; mega menu spans this width */}
                <div className="ml-auto relative flex items-center gap-2 md:gap-3 nav-bar-items" style={{ fontSize: '14px' }} onMouseLeave={() => { setBranchesOpen(false); setCoursesOpen(false) }}>
                    <nav className="hidden md:flex items-center gap-2 md:gap-3">
                        {navItems.map((item) => (
                            item.hasSubmenu && item.submenuKey === 'courses' ? (
                                <div
                                    key="courses"
                                    className="relative"
                                    onMouseEnter={() => setCoursesOpen(true)}
                                >
                                    <button
                                        type="button"
                                        className={`nav-item py-1 font-black uppercase flex items-center gap-0.5 ${coursesOpen
                                            ? 'text-heading'
                                            : 'text-body hover:text-heading'
                                            }`}
                                        aria-expanded={coursesOpen}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                        <svg className={`w-3 h-3 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>
                            ) : item.hasSubmenu && item.submenuKey === 'branches' ? (
                                <div
                                    key="branches"
                                    className="relative"
                                    onMouseEnter={() => setBranchesOpen(true)}
                                >
                                    <button
                                        type="button"
                                        className={`nav-item py-1 font-black uppercase flex items-center gap-0.5 ${branchesOpen
                                            ? 'text-heading'
                                            : 'text-body hover:text-heading'
                                            }`}
                                        aria-expanded={branchesOpen}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                        <svg className={`w-3 h-3 transition-transform ${branchesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`nav-item py-1 font-black uppercase ${pathname === item.href
                                        ? 'text-heading border-b-2 border-heading pb-0.5'
                                        : 'text-body hover:text-heading'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                        href="/enquiry"
                        className="hidden md:inline-flex items-center rounded bg-[#B30027] text-white hover:bg-[#8a001e] font-black uppercase px-2.5 py-1 transition-colors"
                    >
                        Enquire Now
                    </Link>

                    <button
                        className={`md:hidden inline-flex items-center justify-center h-9 w-9 rounded border transition-colors ${mobileOpen
                            ? 'bg-box-bg border-gray-300'
                            : 'border-gray-300 hover:bg-box-bg'
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

                    {/* Branches mega menu - spans only menu section (left-0 right-0 of ml-auto) */}
                    {branchesOpen && (
                        <div className="absolute top-full left-0 right-0 mt-0 pt-1 z-50">
                            <div className="bg-white border-t border-b-2 border-gray-200 shadow-xl rounded-b-xl overflow-hidden pb-4">
                                <div className="py-5 px-4">
                                    <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wide mb-4">Our Branches — Find your nearest centre</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {BRANCHES.map((branch) => (
                                            <Link
                                                key={branch}
                                                href={`/enquiry?branch=${encodeURIComponent(branch)}`}
                                                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-[#B30027]/10 hover:border-[#B30027]/30 text-[#0a1a67] font-semibold text-sm transition-all duration-200 group"
                                            >
                                                <span className="w-8 h-8 rounded-full bg-[#B30027]/10 flex items-center justify-center text-[#B30027] group-hover:bg-[#B30027] group-hover:text-white transition-colors shrink-0">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </span>
                                                {branch}
                                            </Link>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs text-gray-500">Select a branch to enquire or visit. All centres offer JEE, NEET & MHT-CET coaching.</p>
                                    <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-gray-500">
                                        <span className="font-medium text-[#0a1a67]/80">Available at multiple locations</span>
                                        <span>·</span>
                                        <span>Quality education near you</span>
                                        <span>·</span>
                                        <span>Pune & Kolhapur regions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Courses mega menu - spans only menu section */}
                    {coursesOpen && (
                        <div className="absolute top-full left-0 right-0 mt-0 pt-1 z-50">
                            <div className="bg-white border-t border-b-2 border-gray-200 shadow-xl rounded-b-xl overflow-hidden pb-4">
                                <div className="py-5 px-4">
                                    <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wide mb-4">Our Courses — JEE, NEET, MHT-CET & more</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {COURSES.map((course) => (
                                            <Link
                                                key={course.id}
                                                href={course.href}
                                                className="flex items-start gap-2 px-4 py-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-[#B30027]/10 hover:border-[#B30027]/30 text-[#0a1a67] font-semibold text-sm transition-all duration-200 group"
                                            >
                                                <span className="w-8 h-8 rounded-full bg-[#B30027]/10 flex items-center justify-center text-base group-hover:bg-[#B30027] group-hover:text-white transition-colors shrink-0">
                                                    {course.icon}
                                                </span>
                                                <div>
                                                    <span className="block font-bold">{course.name}</span>
                                                    <span className="block text-xs font-normal text-gray-500 mt-0.5">{course.shortDesc}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs text-gray-500">Comprehensive preparation for competitive examinations. Expert faculty and proven results.</p>
                                    <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-gray-500">
                                        <span className="font-medium text-[#0a1a67]/80">Structured curriculum</span>
                                        <span>·</span>
                                        <span>Doubt sessions & test series</span>
                                        <span>·</span>
                                        <Link href="/courses" className="hover:text-[#B30027] font-semibold">View all courses →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile sidebar (drawer) - rendered via portal */}
            {mounted && mobileOpen && typeof window !== 'undefined' && createPortal(
                <div className="md:hidden fixed inset-0 z-[10002] animate-fadeIn" aria-hidden="false">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80" onClick={() => setMobileOpen(false)}></div>
                    {/* Panel */}
                    <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white text-[#0a1a67] shadow-2xl animate-slideInRight overflow-y-auto">
                        <div className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10">
                            <div>
                                <div className="font-extrabold">
                                    <span className="text-[#B30027]">Matrix</span>{' '}
                                    <span className="text-[#0a1a67]">Science</span>{' '}
                                    <span className="text-[#7a7a7a]">Academy</span>
                                </div>
                            </div>
                            <button className="h-9 w-9 rounded-lg hover:bg-[#0a1a67]/10 grid place-content-center" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                        <div className="p-4 flex flex-col gap-2 bg-white">
                            {navItems.map((item) => (
                                item.hasSubmenu && item.submenuKey === 'courses' ? (
                                    <div key="courses-mobile">
                                        <p className="px-2 py-1.5 text-[10px] font-bold text-[#0a1a67]/80 uppercase tracking-wide">Courses</p>
                                        <div className="flex flex-col gap-0.5 pl-2">
                                            {COURSES.map((course) => (
                                                <Link
                                                    key={course.id}
                                                    href={course.href}
                                                    className="block px-2 py-1.5 rounded-lg text-xs font-bold text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {course.icon} {course.name}
                                                </Link>
                                            ))}
                                            <Link href="/courses" className="block px-2 py-1.5 rounded-lg text-xs font-bold text-[#B30027] hover:bg-[#B30027] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>View all courses →</Link>
                                        </div>
                                    </div>
                                ) : item.hasSubmenu && item.submenuKey === 'branches' ? (
                                    <div key="branches-mobile">
                                        <p className="px-2 py-1.5 text-[10px] font-bold text-[#0a1a67]/80 uppercase tracking-wide">Branches</p>
                                        <div className="flex flex-col gap-0.5 pl-2">
                                            {BRANCHES.map((branch) => (
                                                <Link
                                                    key={branch}
                                                    href={`/enquiry?branch=${encodeURIComponent(branch)}`}
                                                    className="block px-2 py-1.5 rounded-lg text-xs font-bold text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white transition-all duration-300"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {branch}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${pathname === item.href
                                            ? 'bg-[#0a1a67] text-white'
                                            : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'
                                            }`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}

                            <div className="pt-3 flex flex-col gap-2">
                                <Link href="/enquiry" className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft" onClick={() => setMobileOpen(false)}>Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            </header>
        </>
    )
}
