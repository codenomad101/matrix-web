'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import OptimizedImage from '@/components/OptimizedImage'

export default function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Results', href: '/results' },
        { label: 'Faculty', href: '/faculty' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About Us', href: '/about' },
    ]

    return (
        <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
            ? 'backdrop-blur-md bg-white/95 border-b-2 border-brand/20 shadow-lg'
            : 'backdrop-blur-sm bg-white/80 border-b'
            }`}>
            <div className="container-content flex items-center justify-between h-20 md:h-24">
                <Link href="/" className="flex items-center gap-3 group relative flex-shrink-0">
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
                </Link>

                {/* Academy Name - Visible on mobile in center */}
                <div className="flex-1 flex justify-center md:hidden px-2">
                    <span className="text-sm font-bold whitespace-nowrap">
                        <span className="text-[#B30027]">Matrix</span>{' '}
                        <span className="text-[#0a1a67]">Science</span>{' '}
                        <span className="text-[#7a7a7a]">Academy</span>
                    </span>
                </div>

                {/* Academy Name - Desktop version next to logo */}
                <div className="hidden md:block absolute left-28 lg:left-32">
                    <span className="text-sm font-bold whitespace-nowrap">
                        <span className="text-[#B30027]">Matrix</span>{' '}
                        <span className="text-[#0a1a67]">Science</span>{' '}
                        <span className="text-[#7a7a7a]">Academy</span>
                    </span>
                    <p className="text-xs text-[#0a1a67] mt-0.5">Believe - Build - Become</p>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative px-3 py-2 rounded-lg overflow-hidden group transition-all duration-300 font-bold ${pathname === item.href
                                ? 'bg-[#0a1a67] text-white shadow-md scale-105'
                                : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white hover:shadow-lg hover:scale-105'
                                }`}
                        >
                            <span className={`relative z-10 ${pathname === item.href ? 'text-white' : 'group-hover:text-white'}`}>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link
                        href="/enquiry"
                        className="hidden md:inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 ease-smooth px-5 py-2.5 font-medium shadow-soft relative overflow-hidden group transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Enquire Now</span>
                        <span className="absolute inset-0 bg-[#8a001e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    <button
                        className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border transition-all duration-300 ${mobileOpen
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
                        <div>
                            <div className="font-extrabold">
                                <span className="text-[#B30027]">Matrix</span>{' '}
                                <span className="text-[#0a1a67]">Science</span>{' '}
                                <span className="text-[#7a7a7a]">Academy</span>
                            </div>
                            <p className="text-xs text-[#0a1a67] mt-1 font-semibold">Believe - Build - Become</p>
                        </div>
                        <button className="h-9 w-9 rounded-lg hover:bg-[#0a1a67]/10 grid place-content-center" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>
                    </div>
                    <div className="p-4 flex flex-col gap-2 bg-white">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-2 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === item.href
                                    ? 'bg-[#0a1a67] text-white'
                                    : 'text-[#0a1a67] hover:bg-[#0a1a67] hover:text-white'
                                    }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="pt-3 flex flex-col gap-2">
                            <Link href="/enquiry" className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft" onClick={() => setMobileOpen(false)}>Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
