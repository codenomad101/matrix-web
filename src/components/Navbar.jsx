'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function formatDateTime() {
    const d = new Date()
    const dateStr = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
    const timeStr = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
    return { dateStr, timeStr }
}

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [coursesOpen, setCoursesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [dateTime, setDateTime] = useState({ dateStr: '', timeStr: '' })

    // Live date and time
    useEffect(() => {
        setDateTime(formatDateTime())
        const t = setInterval(() => setDateTime(formatDateTime()), 1000)
        return () => clearInterval(t)
    }, [])

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
        { id: 'vriksha', name: 'VRIKSHA', href: '/vriksha', icon: '🌱', shortDesc: 'New program' },
    ]

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Courses', hasSubmenu: true, submenuKey: 'courses' },
        { label: 'VRIKSHA', href: '/vriksha' },
        { label: 'Results', href: '/results' },
        { label: 'Faculty', href: '/faculty' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Counseling', href: '/counseling' },
    ]

    return (
        <>
            {/* Top header: date/time (left) + branches (right) */}
            <div className="bg-[var(--brand-red)] text-white">
                <div className="container-header py-1.5 flex flex-wrap items-center justify-between gap-y-1 text-xs font-medium">
                    <span className="whitespace-nowrap tabular-nums" suppressHydrationWarning>
                        {dateTime.dateStr} | {dateTime.timeStr}
                    </span>
                    <div className="flex flex-wrap items-center justify-end gap-y-1 ml-4">
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
            </div>

            <header className={`sticky top-0 !z-[10001] transition-all duration-300 ease-out ${scrolled
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
                    <span className="text-sm font-medium leading-tight">
                        <span className="text-[#ed1c24]">Matrix</span>{' '}
                        <span className="text-[#646262]">Science</span>
                        <span className="block text-[#214295]">Academy</span>
                    </span>
                </div>

                {/* Right: nav text + CTA - compact so all items fit on one row */}
                <div className="ml-auto relative flex items-center gap-1.5 md:gap-2 nav-bar-items" onMouseLeave={() => setCoursesOpen(false)}>
                    <nav className="hidden md:flex items-center gap-1.5 flex-wrap justify-end">
                        {navItems.map((item) => (
                            item.hasSubmenu && item.submenuKey === 'courses' ? (
                                <div
                                    key="courses"
                                    className="relative"
                                    onMouseEnter={() => setCoursesOpen(true)}
                                >
                                    <button
                                        type="button"
                                        className={`nav-item py-1 uppercase flex items-center gap-0.5 transition-colors duration-200 ${coursesOpen
                                            ? 'text-[var(--brand-red)]'
                                            : 'text-black hover:text-[var(--brand-red)]'
                                            }`}
                                        aria-expanded={coursesOpen}
                                        aria-haspopup="true"
                                    >
                                        {item.label}
                                        <svg className={`w-3 h-3 transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    {/* Small dropdown (replaces mega menu) */}
                                    {coursesOpen && (
                                        <div
                                            className="absolute top-full left-0 mt-1 min-w-[200px] py-1.5 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdownIn"
                                            role="menu"
                                        >
                                            {COURSES.map((course) => (
                                                <Link
                                                    key={course.id}
                                                    href={course.href}
                                                    role="menuitem"
                                                    className="flex items-center gap-2 px-3 py-2 text-sm text-black hover:bg-[var(--brand-red)]/10 hover:text-[var(--brand-red)] transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                                                >
                                                    <span className="text-base">{course.icon}</span>
                                                    <span>{course.name}</span>
                                                </Link>
                                            ))}
                                            <div className="border-t border-gray-100 my-1" />
                                            <Link
                                                href="/courses"
                                                role="menuitem"
                                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--brand-red)] hover:bg-[var(--brand-red)]/10 transition-colors duration-150 rounded-b-md"
                                            >
                                                View all courses →
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                item.href === '/counseling' ? (
                                    <span key={item.href} className="relative inline-flex items-center">
                                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-0.5 -rotate-6 text-[10px] font-bold text-[var(--brand-red)] animate-blink leading-none whitespace-nowrap">NEW</span>
                                        <Link
                                            href={item.href}
                                            className={`nav-item py-1 uppercase transition-colors duration-200 ${pathname === item.href
                                                ? 'text-[var(--brand-red)] border-b-2 border-[var(--brand-red)] pb-0.5'
                                                : 'text-black hover:text-[var(--brand-red)]'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </span>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`nav-item py-1 uppercase transition-colors duration-200 ${pathname === item.href
                                            ? 'text-[var(--brand-red)] border-b-2 border-[var(--brand-red)] pb-0.5'
                                            : 'text-black hover:text-[var(--brand-red)]'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                        href="/enquiry"
                        className="hidden md:inline-flex items-center rounded bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] uppercase px-2.5 py-1 transition-all duration-200 hover:shadow-md"
                    >
                        Enquire Now
                    </Link>

                    <button
                        className={`md:hidden inline-flex items-center justify-center h-9 w-9 rounded border transition-all duration-200 ${mobileOpen
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

                </div>
            </div>

            {/* Mobile sidebar (drawer) - rendered via portal */}
            {mounted && mobileOpen && typeof window !== 'undefined' && createPortal(
                <div className="md:hidden fixed inset-0 z-[10002] animate-fadeIn" aria-hidden="false">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/80" onClick={() => setMobileOpen(false)}></div>
                    {/* Panel */}
                    <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white text-black shadow-2xl animate-slideInRight flex flex-col">
                        <div className="p-4 border-b flex items-center justify-between bg-white flex-shrink-0 z-10">
                            <div>
                                <div className="font-medium">
                                    <span className="text-[var(--brand-red)]">Matrix</span>{' '}
                                    <span className="text-[var(--brand-blue)]">Science</span>{' '}
                                    <span className="text-gray-500">Academy</span>
                                </div>
                            </div>
                            <button className="h-9 w-9 rounded-lg hover:bg-[var(--brand-blue)]/10 grid place-content-center" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                        <div className="p-4 flex flex-col gap-1 bg-white overflow-y-auto flex-1 min-h-0">
                            {navItems.map((item) => (
                                item.hasSubmenu && item.submenuKey === 'courses' ? (
                                    <div key="courses-mobile">
                                        <p className="px-2 py-1.5 text-[10px] font-medium text-[var(--brand-blue)]/80 uppercase tracking-wide">Courses</p>
                                        <div className="flex flex-col gap-0.5 pl-2">
                                            {COURSES.map((course) => (
                                                <Link
                                                    key={course.id}
                                                    href={course.href}
                                                    className="block px-2 py-1.5 rounded-lg text-xs font-medium text-black hover:bg-[var(--brand-blue)] hover:text-white transition-all duration-300"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {course.icon} {course.name}
                                                </Link>
                                            ))}
                                            <Link href="/courses" className="block px-2 py-1.5 rounded-lg text-xs font-medium text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white transition-all duration-300" onClick={() => setMobileOpen(false)}>View all courses →</Link>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${pathname === item.href
                                            ? 'bg-[var(--brand-blue)] text-white'
                                            : 'text-black hover:bg-[var(--brand-blue)] hover:text-white'
                                            }`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.href === '/counseling' ? (
                                            <span className="flex items-center gap-1.5">
                                                <span className="text-[10px] font-bold text-[var(--brand-red)] animate-blink">NEW</span>
                                                {item.label}
                                            </span>
                                        ) : (
                                            item.label
                                        )}
                                    </Link>
                                )
                            ))}

                            <div className="pt-4 mt-2 border-t border-gray-200 flex flex-col gap-2 flex-shrink-0">
                                <Link href="/enquiry" className="inline-flex justify-center items-center gap-2 rounded-lg bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft" onClick={() => setMobileOpen(false)}>Enquire Now</Link>
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
