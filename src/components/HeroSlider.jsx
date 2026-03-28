'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const HERO_CAROUSEL_IMAGES = [
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg', alt: 'Matrix Science Academy — campus and learning' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181786/IIT_knkkka.jpg', alt: 'IIT and top engineering results' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1763783028/4_nl1ejs', alt: 'Student success stories' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181864/A_dbzo2c.jpg', alt: 'Matrix Science Academy' },
]

const MAIN_CAROUSEL_MS = 4500

const TYPING_WORDS = ['Physics', 'Chemistry', 'Mathematics']

function HeroTypingSubjects({ className }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'deleting'

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex]
    let t

    if (phase === 'typing') {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 95)
      } else {
        t = setTimeout(() => setPhase('deleting'), 2400)
      }
    } else if (text.length > 0) {
      t = setTimeout(() => setText((s) => s.slice(0, -1)), 42)
    } else {
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length)
      setPhase('typing')
    }

    return () => clearTimeout(t)
  }, [text, phase, wordIndex])

  return (
    <span className={className}>
      <span className="font-black">in </span>
      <span
        className="inline-block text-left font-black text-[#548FF7]"
        style={{ minWidth: '11.5ch' }}
        aria-live="polite"
        aria-label={`Subject focus: ${text || TYPING_WORDS[wordIndex]}`}
      >
        {text}
        <span className="ml-0.5 inline-block w-[0.08em] animate-pulse font-light text-[#3377F5]" aria-hidden>
          |
        </span>
      </span>
    </span>
  )
}

function IconSpark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  )
}

function IconCheckCircle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#548FF7" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        fill="none"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMiniChart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="14" width="4" height="6" rx="1" fill="#10b981" />
      <rect x="10" y="10" width="4" height="10" rx="1" fill="#059669" />
      <rect x="16" y="6" width="4" height="14" rx="1" fill="#10b981" />
    </svg>
  )
}

export default function HeroSlider() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % HERO_CAROUSEL_IMAGES.length)
    }, MAIN_CAROUSEL_MS)
    return () => clearInterval(t)
  }, [])

  const bullets = [
    'Small batch sizes for individual attention',
    'Concept-based learning over rote memorization',
    'Regular tests and rigorous performance tracking',
    'Personalized student guidance and mentoring',
  ]

  return (
    <section className="bg-white">
      <div className="container-page px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-5 xl:gap-6">
          {/* Left — copy & CTAs (wider column vs image, per reference layout) */}
          <div className="flex min-h-0 w-full flex-col justify-center text-left lg:col-span-7 lg:max-w-none xl:col-span-7">
            {/* Pill badge — light blue field, vibrant blue label (reference) */}
            <div className="mb-6 md:mb-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3377F5]/10 px-3.5 py-2 text-sm font-medium text-[#3377F5] md:gap-2.5 md:px-4 md:py-2.5 md:text-[0.9375rem]">
                <IconSpark className="h-4 w-4 shrink-0 md:h-[1.125rem] md:w-[1.125rem]" aria-hidden />
                Believe — Build — Become
              </span>
            </div>

            {/* Five-line headline — wide block, max weight + size (reference); global h1 clamp excluded via .hero-main-headline */}
            <h1 className="hero-main-headline mb-7 w-full max-w-full text-left text-[2.125rem] font-black leading-[0.98] tracking-[-0.03em] text-neutral-900 sm:mb-8 sm:text-[2.625rem] sm:leading-[0.98] md:mb-9 md:text-[3.25rem] md:leading-[0.97] lg:text-[3.75rem] lg:leading-[0.96] xl:max-w-[42rem] xl:text-[4.125rem] xl:leading-[0.95] 2xl:max-w-[46rem] 2xl:text-[4.5rem]">
              <span className="block font-black">Build Strong</span>
              <span className="block font-black text-[#3377F5]">Academic</span>
              <span className="block font-black text-[#548FF7]">Foundations</span>
              <span className="block">
                <HeroTypingSubjects />
              </span>
            </h1>

            <p className="mb-7 max-w-xl text-base font-normal leading-[1.7] text-neutral-600 sm:text-lg sm:leading-[1.75] md:mb-9">
              Concept-based coaching and personalized academic guidance to help students excel in school and competitive
              examinations.
            </p>

            <ul className="mb-9 max-w-xl space-y-4 md:mb-11 md:space-y-[1.125rem]">
              {bullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 text-sm font-normal leading-relaxed text-neutral-600 sm:text-base sm:leading-relaxed"
                >
                  <IconCheckCircle className="mt-0.5 h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
                  <span className="pt-px">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/counseling"
                className="inline-flex items-center justify-center rounded-full bg-[#3377F5] px-7 py-3.5 text-sm font-semibold tracking-normal text-white shadow-lg shadow-[#3377F5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563d4] hover:shadow-xl hover:shadow-[#3377F5]/35 sm:px-8 sm:text-base"
              >
                Book Free Counselling
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold tracking-normal text-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md sm:px-8 sm:text-base"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Right — card + carousel */}
          <div className="mx-auto w-full max-w-[480px] lg:col-span-5 lg:mx-0 lg:max-w-none lg:justify-self-start lg:pl-0 xl:col-span-5 xl:-translate-x-1 2xl:-translate-x-2">
            <div
              className="hero-image-card group relative rounded-[1.35rem] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] ring-1 ring-neutral-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_-12px_rgba(51,119,245,0.22)] sm:rounded-3xl sm:p-3.5 md:p-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 sm:rounded-[1.25rem]">
                {HERO_CAROUSEL_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700 ease-out"
                    style={{ opacity: i === carouselIndex ? 1 : 0, zIndex: i === carouselIndex ? 1 : 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                ))}

                {/* Bottom-left stat overlay */}
                <div
                  className="absolute bottom-4 left-4 z-10 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-xl border border-neutral-100/90 bg-white/95 px-3.5 py-3 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 sm:bottom-5 sm:left-5 sm:px-4 sm:py-3.5"
                  role="status"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                    <IconMiniChart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 sm:text-sm">Average score</p>
                    <p className="text-sm font-bold text-neutral-900 sm:text-base">95%+</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-1.5 pb-1">
                {HERO_CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show slide ${i + 1}`}
                    aria-current={i === carouselIndex}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === carouselIndex
                        ? 'w-6 bg-[#3377F5]'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
