'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const CLOUD_IMG = 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1600,h_1200,c_limit,q_auto,f_auto'

const HERO_CAROUSEL_IMAGES = [
  {
    src: `${CLOUD_IMG}/v1774798352/Hero_Image_02_-_For_Scholarship_-_Matrix_hchnro.jpg`,
    alt: 'Matrix Science Academy — scholarship opportunities',
    title: 'Scholarships at Matrix',
  },
  {
    src: `${CLOUD_IMG}/v1774798351/Hero_Image_09_-Talent_Edge_Scholarship_dw68zu.jpg`,
    alt: 'Talent Edge Scholarship at Matrix Science Academy',
    title: 'Talent Edge Scholarship',
  },
  {
    src: `${CLOUD_IMG}/v1774798351/Hero_Image_01-_Everything_Under_One_Roof_-_JEE_-_MHT-CET_-_NEET_ol2wzg.jpg`,
    alt: 'JEE, MHT-CET and NEET preparation under one roof at Matrix',
    title: 'JEE · MHT-CET · NEET — one roof',
  },
  {
    src: `${CLOUD_IMG}/v1774798348/Hero_Image_10_-The_Champion_Story_01_m3xefg.jpg`,
    alt: 'Student champion success story at Matrix Science Academy',
    title: 'The champion story',
  },
  {
    src: `${CLOUD_IMG}/v1774798344/Hero_Image_-_04_Matrix_-_Physcis_Maths_Science_Teachers_sjwxb6.jpg`,
    alt: 'Matrix faculty — Physics, Maths and Science teachers',
    title: 'Expert Physics, Maths & Science faculty',
  },
  {
    src: `${CLOUD_IMG}/v1774798340/Hero_Image_11_-_Vriksha_-_School_Topper_-_AIR_-_Combined_l5chqn.jpg`,
    alt: 'Vriksha programme — school toppers and competitive exam success',
    title: 'Vriksha — school toppers & beyond',
  },
]

const MAIN_CAROUSEL_MS = 3000

/** JEE → MHT-CET → NEET → Vriksha (loops), typing effect */
const EXAM_TICKER_WORDS = ['JEE', 'MHT-CET', 'NEET', 'Vriksha']

function HeroExamTicker() {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'deleting'

  useEffect(() => {
    if (reduceMotion) return
    const word = EXAM_TICKER_WORDS[wordIndex]
    let t

    if (phase === 'typing') {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 72)
      } else {
        t = setTimeout(() => setPhase('deleting'), 2000)
      }
    } else if (text.length > 0) {
      t = setTimeout(() => setText((s) => s.slice(0, -1)), 38)
    } else {
      setWordIndex((i) => (i + 1) % EXAM_TICKER_WORDS.length)
      setPhase('typing')
    }

    return () => clearTimeout(t)
  }, [text, phase, wordIndex, reduceMotion])

  if (reduceMotion) {
    return (
      <span className="inline-block font-black leading-none tracking-[-0.04em] text-[#005FB8]">
        JEE, MHT-CET, NEET & Vriksha
      </span>
    )
  }

  const word = EXAM_TICKER_WORDS[wordIndex]

  return (
    <span
      className="inline-block min-h-[1.15em] font-black leading-none tracking-[-0.04em]"
      style={{ minWidth: '9ch' }}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Exam focus: ${text || word}`}
    >
      <span className="inline text-[#005FB8]">{text}</span>
      <span
        className="ml-0.5 inline-block w-[0.07em] animate-pulse font-light text-[#005FB8]"
        aria-hidden
      >
        |
      </span>
    </span>
  )
}

function IconMail({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page relative z-[1] px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:py-16">
        <div className="relative mx-auto grid w-full min-w-0 grid-cols-1 items-center gap-10 overflow-x-clip lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Bluish circle — centered on column split (half left / half right) */}
          <div
            className="pointer-events-none absolute left-[48%] top-1/2 z-0 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005FB8]/20 sm:h-64 sm:w-64 lg:block lg:h-72 lg:w-72 xl:left-[47%] xl:bg-[#005FB8]/18"
            aria-hidden
          />

          {/* Left — copy (background is full hero section) */}
          <div className="relative z-[1] min-h-0 min-w-0 w-full lg:col-span-5 lg:max-w-none">
            <div className="flex flex-col text-left">
              <div className="mb-5 md:mb-6">
                <span className="inline-flex rounded-full bg-[#ED1C24] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm sm:text-sm">
                  Matrix Science Academy
                </span>
              </div>

              <h1 className="hero-main-headline mb-2 text-[1.875rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#0f172a] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem]">
                Believe. Build. Become —
              </h1>

              <p className="mb-1 text-base font-medium text-neutral-600 sm:text-lg">Through</p>

              <div className="mb-5 text-[2.25rem] sm:mb-6 sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
                <HeroExamTicker />
              </div>

              <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-neutral-600 sm:mb-9 sm:text-lg">
                Strong concepts. Disciplined learning. Proven results for JEE, MHT-CET, NEET and holistic growth through
                VRIKSHA.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <Link
                  href="/counseling"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#005FB8] px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#005FB8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004494] hover:shadow-xl hover:shadow-[#004494]/35 sm:px-9 sm:text-base"
                >
                  Get Started
                </Link>
                <div className="relative inline-flex items-center">
                  <a
                    href="mailto:msapcmc@gmail.com"
                    className="relative z-[1] inline-flex items-center gap-2.5 text-sm font-semibold text-[#0f172a] transition-colors hover:text-[#005FB8] sm:text-base"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-pink-600 shadow-sm ring-1 ring-pink-100">
                      <IconMail className="h-4 w-4" />
                    </span>
                    msapcmc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — card + carousel (wider column on large screens) */}
          <div className="relative z-[1] mx-auto w-full min-w-0 max-w-[540px] justify-self-start sm:max-w-[600px] lg:col-span-7 lg:mx-0 lg:max-w-full lg:justify-self-start lg:pl-3 xl:pl-5">
            <div
              className="hero-image-card group relative max-w-full rounded-[1.35rem] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] ring-1 ring-neutral-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_60px_-12px_rgba(51,119,245,0.22)] sm:rounded-3xl sm:p-3.5 md:p-4"
            >
              <div className="relative mb-3 min-h-[2.75rem] sm:min-h-[3rem] sm:mb-3.5" aria-live="polite">
                {HERO_CAROUSEL_IMAGES.map((img, i) => (
                  <p
                    key={i}
                    className="absolute left-0 top-0 right-0 text-left text-sm font-bold leading-snug tracking-tight text-neutral-900 transition-opacity duration-700 ease-out sm:text-base"
                    style={{ opacity: i === carouselIndex ? 1 : 0 }}
                  >
                    {img.title}
                  </p>
                ))}
              </div>

              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-white sm:h-[440px] sm:rounded-[1.25rem] md:h-[480px] lg:h-[520px] xl:h-[560px]">
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
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
