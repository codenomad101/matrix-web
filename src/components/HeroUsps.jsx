'use client'

import { useEffect, useRef, useState } from 'react'

function IconFaculty({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function IconBook({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  )
}

function IconTarget({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" strokeWidth={1.75} />
      <circle cx="12" cy="12" r="6" strokeWidth={1.75} />
      <circle cx="12" cy="12" r="2" strokeWidth={1.75} fill="currentColor" />
    </svg>
  )
}

function IconChart({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

const USPS = [
  { n: '01', Icon: IconFaculty, title: 'Experienced Faculty', subtitle: 'Top educators' },
  { n: '02', Icon: IconBook, title: 'Structured Learning', subtitle: 'Proven methodology' },
  { n: '03', Icon: IconTarget, title: 'Personalized Attention', subtitle: 'Small batches' },
  { n: '04', Icon: IconChart, title: 'Performance Tracking', subtitle: 'Regular assessments' },
]

/** Same visual language as counselling “Our Proven Methodology” timeline */
function HeroUspTimeline() {
  const rootRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="relative mx-auto mt-8 max-w-5xl px-1 sm:mt-10 md:max-w-6xl">
      <div
        className="pointer-events-none absolute left-[6%] right-[6%] top-[23px] z-0 hidden h-0.5 overflow-hidden rounded-full bg-sky-100 md:block lg:left-[5%] lg:right-[5%] lg:top-[26px]"
        aria-hidden
      >
        <div
          className={`h-full w-full origin-left rounded-full bg-sky-400 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            active ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </div>

      <ol className="relative z-[1] grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-4 md:gap-3 md:gap-y-10">
        {USPS.map((item, i) => {
          const { Icon, n, title, subtitle } = item
          const stepDelay = active ? `${300 + i * 200}ms` : '0ms'
          const labelDelay = active ? `${400 + i * 200}ms` : '0ms'
          return (
            <li key={n} className="relative flex flex-col items-center text-center">
              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                  active ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-5 scale-90 opacity-0'
                }`}
                style={{ transitionDelay: stepDelay }}
              >
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-sky-200 bg-white text-[#3377F5] shadow-md sm:h-12 sm:w-12 md:h-[3.25rem] md:w-[3.25rem]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="absolute -right-0.5 -top-0.5 flex h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-[#0c1e3a] px-1 text-[8px] font-bold tabular-nums leading-none text-white shadow-sm sm:h-5 sm:min-w-[1.25rem] sm:text-[9px]">
                    {n}
                  </span>
                </div>
              </div>
              <div
                className={`mt-3 max-w-[11rem] transition-all duration-500 ease-out sm:max-w-none ${
                  active ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: labelDelay }}
              >
                <p className="text-xs font-semibold leading-snug text-neutral-900 sm:text-sm md:text-base">{title}</p>
                <p className="mt-1 text-[10px] leading-snug text-neutral-600 sm:text-xs">{subtitle}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function HeroUsps() {
  return (
    <section className="relative bg-white" aria-labelledby="hero-usps-heading">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" aria-hidden />
      <div className="container-page px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3377F5] sm:text-xs">Why Matrix</p>
          <h2 id="hero-usps-heading" className="mt-2 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl">
            How we support every student
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
            The same clarity as our classroom methodology—four pillars you can see at a glance.
          </p>
        </div>

        <HeroUspTimeline />
      </div>
    </section>
  )
}
