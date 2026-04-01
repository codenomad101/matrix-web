'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const ACHIEVEMENT_ICON = {
  trend: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  heart: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  trophy: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  medal: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
}

function useCountUp(endNum, durationMs, active) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - (1 - t) ** 3
      setV(Math.round(endNum * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [endNum, durationMs, active])
  return v
}

function AnimatedPercent({ className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const n = useCountUp(30, 1400, inView)
  return (
    <span ref={ref} className={className}>
      {n}%
    </span>
  )
}

function AnimatedInt({ value, suffix = '', className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const end = parseInt(String(value).replace(/\D/g, ''), 10) || 0
  const n = useCountUp(end, 1200, inView)
  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  )
}

function TrendArrowFooter({ children }) {
  return (
    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-medium text-neutral-500">
      <svg className="h-3.5 w-3.5 shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <span>{children}</span>
    </div>
  )
}

/** Bar chart with value labels above bars, year labels below — matches reference layout */
function TrendBarChart({ values, valueLabels, yearLabels, gradientFrom, gradientTo, barMaxHeight = 92 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const max = Math.max(...values, 1)
  return (
    <div ref={ref} className="mt-auto flex w-full flex-1 flex-col justify-end pt-2">
      <div className="flex min-h-[6.5rem] flex-1 items-end justify-between gap-1.5 px-0.5 sm:gap-2">
        {values.map((v, i) => (
          <div key={i} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1">
            <span className="text-[11px] font-bold tabular-nums leading-none text-neutral-800 sm:text-xs">
              {valueLabels[i]}
            </span>
            <motion.div
              className="w-full max-w-[3rem] rounded-t-lg shadow-sm sm:max-w-[3.25rem]"
              style={{
                background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
              }}
              initial={{ height: 0 }}
              animate={inView ? { height: `${Math.max(22, (v / max) * barMaxHeight)}px` } : { height: 0 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="text-[10px] font-semibold tracking-tight text-neutral-400">{yearLabels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GrowthLineChart() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const W = 320
  const H = 128
  const padL = 36
  const padR = 14
  const padT = 12
  const padB = 26
  const innerW = W - padL - padR
  const innerH = H - padT - padB
  const x = (i) => padL + (i * innerW) / 2
  const yBase = padT + innerH

  const series = [
    { id: 'mht', color: '#2563eb', fill: 'rgb(37 99 235 / 0.12)', ys: [0.72, 0.48, 0.22] },
    { id: 'iit', color: '#16a34a', fill: 'rgb(22 163 74 / 0.12)', ys: [0.68, 0.42, 0.18] },
    { id: 'neet', color: '#9333ea', fill: 'rgb(147 51 234 / 0.12)', ys: [0.75, 0.52, 0.28] },
  ]

  const gridYs = [0.15, 0.38, 0.62, 0.85].map((t) => padT + t * innerH * 0.92)

  const pointsForSeries = (ys) =>
    ys.map((normY, i) => [x(i), padT + normY * innerH])

  const areaPath = (pts) => {
    const [p0, p1, p2] = pts
    return `M ${p0[0]} ${yBase} L ${p0[0]} ${p0[1]} L ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} L ${p2[0]} ${yBase} Z`
  }

  const linePath = (pts) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')

  return (
    <div ref={ref} className="relative flex w-full flex-1 flex-col justify-center pt-2">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto h-40 w-full max-w-md sm:h-44"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Growth trend chart 2023 to 2025"
      >
        <defs>
          {series.map((s) => (
            <filter key={s.id} id={`glow-${s.id}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        {gridYs.map((gy, gi) => (
          <line
            key={gi}
            x1={padL}
            y1={gy}
            x2={W - padR}
            y2={gy}
            stroke="rgb(0 0 0 / 0.06)"
            strokeWidth="1"
          />
        ))}

        {series.map((s) => {
          const pts = pointsForSeries(s.ys)
          return (
            <motion.path
              key={`area-${s.id}`}
              d={areaPath(pts)}
              fill={s.fill}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          )
        })}

        {series.map((s, si) => {
          const pts = pointsForSeries(s.ys)
          return (
            <motion.path
              key={`line-${s.id}`}
              d={linePath(pts)}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#glow-${s.id})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.15 + si * 0.12, ease: 'easeOut' }}
            />
          )
        })}

        {series.map((s, si) => {
          const pts = pointsForSeries(s.ys)
          return pts.map((p, pi) => (
            <motion.circle
              key={`${s.id}-pt-${pi}`}
              cx={p[0]}
              cy={p[1]}
              r="5"
              fill="white"
              stroke={s.color}
              strokeWidth="2.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.85 + pi * 0.1 + si * 0.06, type: 'spring', stiffness: 280, damping: 20 }}
            />
          ))
        })}

        {[0, 1, 2].map((i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 6}
            textAnchor="middle"
            fill="#94a3b8"
            style={{ fontSize: '10px', fontWeight: 600 }}
          >
            {['2023', '2024', '2025'][i]}
          </text>
        ))}
      </svg>

      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-medium text-neutral-600 sm:gap-x-6">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.55)]" />
          MHT-CET 99+
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
          IIT Selections
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
          NEET
        </span>
      </div>
    </div>
  )
}

const interactiveCard =
  'cursor-pointer select-none rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg active:scale-[0.99]'

export default function AchievementsBentoSection() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <section className="bg-neutral-50/80 py-10 md:py-14 lg:py-16">
      <div ref={containerRef} className="container-page px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-red)] sm:text-xs"
          >
            Our Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mx-auto mt-2 max-w-4xl text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0066cc] sm:text-4xl md:text-[2.125rem] md:leading-[1.12] lg:text-5xl"
          >
            One of the Leading &amp; Most Successful Institutions in Pune
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base"
          >
            Our results speak for the quality of education and dedication of our expert faculty.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          {/* Left: bento achievements */}
          <div className="flex min-h-[30rem] flex-col lg:min-h-[34rem]">
            <h3 className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-neutral-500">
              Highlights
            </h3>
            <div className="grid flex-1 grid-cols-4 grid-rows-[auto_auto_auto] gap-2.5 sm:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.15 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${interactiveCard} relative col-span-2 row-span-2 flex min-h-[9.5rem] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-white p-4 text-center sm:min-h-[11rem] sm:p-5`}
              >
                <span className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-[var(--brand-red)] shadow-sm" aria-hidden>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <div className="px-1">
                  <AnimatedPercent className="text-4xl font-extrabold tabular-nums text-[#0066cc] sm:text-5xl" />
                  <p className="mt-1 text-xs font-semibold text-neutral-800 sm:text-sm">Increase in IIT admissions</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500 sm:text-xs">2025 · Elite engineering focus</p>
                </div>
              </motion.div>

              {[
                { value: '5', title: 'AIIMS & MBBS', desc: 'of 53', iconKey: 'heart', delay: 0.2 },
                { value: '86', title: '99+ Percentile', desc: 'MHT-CET', iconKey: 'trophy', delay: 0.25 },
                { value: '80', title: 'JEE Adv qualified', desc: '2025', iconKey: 'medal', delay: 0.3, suffix: '+' },
                { value: '32', title: 'Scored 95%+', desc: 'JEE Adv', iconKey: 'star', delay: 0.35 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: card.delay }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`${interactiveCard} col-span-1 flex flex-col items-center justify-center gap-1.5 bg-[#f8fafc] p-3 text-center sm:p-4`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[var(--brand-red)] shadow-sm">
                    {ACHIEVEMENT_ICON[card.iconKey]}
                  </div>
                  {card.suffix ? (
                    <AnimatedInt value={card.value} suffix={card.suffix} className="text-xl font-bold tabular-nums text-[#0066cc] sm:text-2xl" />
                  ) : (
                    <AnimatedInt value={card.value} className="text-xl font-bold tabular-nums text-[#0066cc] sm:text-2xl" />
                  )}
                  <p className="text-[10px] font-bold leading-tight text-neutral-900 sm:text-xs">{card.title}</p>
                  <p className="text-[9px] text-neutral-500 sm:text-[10px]">{card.desc}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.4 }}
                whileHover={{ scale: 1.01 }}
                className={`${interactiveCard} relative col-span-4 flex min-h-[4.5rem] items-center justify-center gap-4 overflow-hidden bg-gradient-to-r from-violet-50/90 to-white px-4 py-3 text-center sm:justify-between sm:px-5`}
              >
                <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                <span className="text-sm font-semibold text-neutral-700">IIT selections trend</span>
                <span className="text-lg font-bold tabular-nums text-violet-700 sm:text-xl">
                  3 <span className="mx-1 text-neutral-400">→</span> 5
                </span>
              </motion.div>
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/results"
                className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0066cc] shadow-sm transition-all hover:border-[#0066cc]/40 hover:bg-[#f0f7ff] hover:shadow-md sm:text-base"
              >
                View All Results
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: result trends (equal height column) */}
          <div className="flex min-h-[30rem] flex-col lg:min-h-[34rem]">
            <h3 className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-neutral-500">
              Result trends
            </h3>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${interactiveCard} relative flex h-full min-h-[13rem] flex-col overflow-hidden rounded-2xl border border-sky-200/50 bg-sky-50/70 p-5 text-center shadow-md backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(56,189,248,0.35),transparent_50%)] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-[radial-gradient(ellipse_100%_60%_at_0%_100%,rgba(125,211,252,0.25),transparent_55%)] sm:min-h-[16rem]`}
              >
                <div className="relative z-10 flex flex-1 flex-col">
                  <p className="text-xs font-bold text-sky-900 sm:text-[13px]">MHT-CET — 99+ Percentile</p>
                  <p className="mt-1.5 text-2xl font-extrabold tabular-nums tracking-tight text-sky-950 sm:text-[1.65rem]">
                    45 <span className="text-lg font-semibold text-sky-600 sm:text-xl">→</span> 86
                  </p>
                  <TrendBarChart
                    values={[45, 58, 86]}
                    valueLabels={['45', '58', '86']}
                    yearLabels={['2023', '2024', '2025']}
                    gradientFrom="#0ea5e9"
                    gradientTo="#38bdf8"
                  />
                  <TrendArrowFooter>Students per year</TrendArrowFooter>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.28 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`${interactiveCard} relative flex h-full min-h-[13rem] flex-col overflow-hidden rounded-2xl border border-emerald-200/50 bg-emerald-50/70 p-5 text-center shadow-md backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(52,211,153,0.35),transparent_50%)] after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:bg-[radial-gradient(ellipse_100%_60%_at_0%_100%,rgba(167,243,208,0.35),transparent_55%)] sm:min-h-[16rem]`}
              >
                <div className="relative z-10 flex flex-1 flex-col">
                  <p className="text-xs font-bold text-emerald-900 sm:text-[13px]">IIT Selections</p>
                  <p className="mt-1.5 text-2xl font-extrabold tabular-nums tracking-tight text-emerald-950 sm:text-[1.65rem]">
                    8 <span className="text-lg font-semibold text-emerald-600 sm:text-xl">→</span> 12+
                  </p>
                  <TrendBarChart
                    values={[8, 10, 12]}
                    valueLabels={['8', '10', '12+']}
                    yearLabels={['2023', '2024', '2025']}
                    gradientFrom="#059669"
                    gradientTo="#34d399"
                  />
                  <TrendArrowFooter>Selections per year</TrendArrowFooter>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.32 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className={`${interactiveCard} mt-3 flex min-h-0 flex-1 flex-col rounded-2xl border border-neutral-200/90 bg-white/95 p-4 shadow-md sm:min-h-[14rem] sm:p-6`}
            >
              <p className="text-center text-xs font-bold text-neutral-800 sm:text-sm">Growth Trend (Relative Scale)</p>
              <GrowthLineChart />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
