'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const testimonials = [
  {
    text: "Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi.",
    name: 'Dhruv Shinde',
    college: 'IIT Mandi',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763883041/rahulshinde-Picsart-AiImageEnhancer_wusaln.png',
  },
  {
    text: "I never thought I could crack NEET on my first attempt. The structured approach and constant guidance made all the difference.",
    name: 'Rahul Kavhale',
    college: 'IIT Kharagpur',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763882954/rahul-Picsart-AiImageEnhancer_y8emgu.png',
  },
  {
    text: "The doubt-clearing sessions and mock tests were instrumental in building my confidence. I'm grateful for the support that helped me achieve my goal.",
    name: 'Maithili Sagare',
    college: 'IIT Guwahati',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763883051/maithili-Picsart-AiImageEnhancer_apk2th.png',
  },
  {
    text: "The faculty here transformed my understanding of engineering. Their innovative teaching methods and personal attention helped me secure admission to my dream college.",
    name: 'Dhruv Unde',
    college: 'NIT Trichy',
    exam: 'MHT-CET',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763882946/soham1_s7aa4m.png',
  },
]

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

function itemVariants(reduceMotion) {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    }
  }
  return {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export default function TestimonialsShowcase() {
  const gridRef = useRef(null)
  const inView = useInView(gridRef, { once: true, margin: '-48px' })
  const reduceMotion = useReducedMotion()

  return (
    <section className="home-section relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-20%,rgba(51,119,245,0.07),transparent_55%)]"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3377F5] sm:text-xs">Voices of success</p>
          <h2 className="home-section-title mt-2 !mb-2">Student Success Stories</h2>
          <div
            className="mx-auto mb-4 h-1 max-w-[4.5rem] rounded-full bg-gradient-to-r from-transparent via-[#548FF7]/80 to-transparent sm:mb-5"
            aria-hidden
          />
          <p className="home-section-body mx-auto mt-2 max-w-2xl text-center">
            Hear from students who achieved their dreams with our guidance.
          </p>
        </div>

        <motion.div
          ref={gridRef}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={listVariants}
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              variants={itemVariants(!!reduceMotion)}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#3377F5]/35 hover:shadow-[0_24px_44px_-16px_rgba(51,119,245,0.28)] motion-reduce:transform-none xl:odd:translate-y-3 motion-reduce:xl:odd:translate-y-0`}
            >
              <span
                className="pointer-events-none absolute -right-1 -top-2 font-black tabular-nums text-[3.5rem] leading-none text-[#3377F5]/[0.07] transition-colors duration-300 group-hover:text-[#3377F5]/[0.11]"
                aria-hidden
              >
                &ldquo;
              </span>
              <span className="absolute right-4 top-3 text-[10px] font-bold tabular-nums text-[#3377F5]/70 sm:text-[11px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div
                className="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-[#3377F5] via-[#548FF7] to-[#3377F5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <p className="relative z-[1] flex-1 text-sm leading-relaxed text-neutral-700">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="relative z-[1] mt-5 flex items-end justify-between gap-3 border-t border-neutral-100 pt-4">
                <div className="min-w-0">
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {t.college} · {t.exam}
                  </p>
                </div>
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-md ring-1 ring-neutral-200/80 transition-transform duration-500 group-hover:scale-[1.08] group-hover:ring-[#3377F5]/35">
                  {t.photo ? (
                    <img src={t.photo} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <svg className="mx-auto mt-5 h-9 w-9 text-neutral-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:mt-12">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-red)] shadow-sm transition-all duration-300 hover:border-[var(--brand-red)]/25 hover:bg-neutral-50 hover:shadow-md"
          >
            View all success stories
            <span
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
