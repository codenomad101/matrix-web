'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Year-wise stats for charts + Results table (single source of truth).
 * IIT 2025 uses 12 in charts; display as "12+" in the table.
 */
export const RESULTS_YEAR_ROWS = [
  { year: '2023', mhtCet: 45, iit: 8, neet: 3 },
  { year: '2024', mhtCet: 62, iit: 10, neet: 4 },
  { year: '2025', mhtCet: 86, iit: 12, neet: 5 },
]

const YEAR_ROWS = RESULTS_YEAR_ROWS

const BAR_HEIGHT_PX = 160

function AnimatedMetricBars({ title, subtitle, values, labels, colorClass, bgTrackClass, showPlus2025 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const max = Math.max(...values, 1)
  const trackH = BAR_HEIGHT_PX - 36

  return (
    <div ref={ref} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">{title}</h3>
        {subtitle ? <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p> : null}
      </div>
      <div className="flex justify-between gap-2">
        {values.map((v, i) => {
          const pct = (v / max) * 100
          const display = showPlus2025 && labels[i] === '2025' ? `${v}+` : v
          return (
            <div key={labels[i]} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <span className="text-center text-xs font-semibold tabular-nums text-neutral-800">{display}</span>
              <div
                className={`relative w-full max-w-[3.5rem] overflow-hidden rounded-t-md sm:max-w-[4.5rem] ${bgTrackClass}`}
                style={{ height: trackH }}
              >
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 rounded-t-md ${colorClass}`}
                  initial={{ height: reduceMotion ? `${pct}%` : 0 }}
                  animate={inView ? { height: `${pct}%` } : { height: reduceMotion ? `${pct}%` : 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
                  }
                />
              </div>
              <span className="text-[11px] font-medium text-neutral-500 sm:text-xs">{labels[i]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** Normalized 0–100 per series for a single comparative line chart */
function normalizedPoints(key) {
  const vals = YEAR_ROWS.map((r) => r[key])
  const max = Math.max(...vals, 1)
  return vals.map((v) => Math.round((v / max) * 100))
}

function TrendLineChart() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()

  const w = 320
  const h = 140
  const padX = 36
  const padY = 16
  const innerW = w - padX * 2
  const innerH = h - padY * 2

  const xForIndex = (i) => padX + (innerW / (YEAR_ROWS.length - 1 || 1)) * i

  const series = [
    { key: 'mhtCet', label: 'MHT-CET 99+', color: '#2563eb', points: normalizedPoints('mhtCet') },
    { key: 'iit', label: 'IIT selections', color: '#059669', points: normalizedPoints('iit') },
    { key: 'neet', label: 'NEET', color: '#7c3aed', points: normalizedPoints('neet') },
  ]

  const pathFor = (points) =>
    points
      .map((p, i) => {
        const x = xForIndex(i)
        const y = padY + innerH - (p / 100) * innerH
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
      })
      .join(' ')

  return (
    <div
      ref={ref}
      className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6"
    >
      <h3 className="text-sm font-semibold text-neutral-900 sm:text-base">Growth trend (relative scale)</h3>
      <p className="mt-0.5 text-xs text-neutral-500">
        Each line scales to its own peak year so you can compare momentum across years.
      </p>
      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="mx-auto h-auto w-full max-w-md"
          role="img"
          aria-label="Line chart of year-over-year growth for MHT-CET, IIT, and NEET metrics"
        >
          {/* grid */}
          {[0, 0.5, 1].map((t) => {
            const y = padY + innerH * (1 - t)
            return (
              <line
                key={t}
                x1={padX}
                y1={y}
                x2={w - padX}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth={1}
              />
            )
          })}
          {YEAR_ROWS.map((row, i) => (
            <text
              key={row.year}
              x={xForIndex(i)}
              y={h - 4}
              textAnchor="middle"
              className="fill-neutral-500 text-[11px]"
            >
              {row.year}
            </text>
          ))}

          {series.map((s) => (
            <motion.path
              key={s.key}
              d={pathFor(s.points)}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={
                inView
                  ? { pathLength: 1, opacity: 1 }
                  : reduceMotion
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { pathLength: { duration: 1.2, delay: 0.2, ease: 'easeInOut' }, opacity: { duration: 0.3 } }
              }
            />
          ))}

          {series.map((s, si) =>
            s.points.map((p, i) => {
              const x = xForIndex(i)
              const y = padY + innerH - (p / 100) * innerH
              return (
                <motion.circle
                  key={`${s.key}-${i}`}
                  cx={x}
                  cy={y}
                  r={4}
                  fill={s.color}
                  initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { delay: 0.4 + si * 0.15 + i * 0.08, type: 'spring', stiffness: 320, damping: 18 }
                  }
                />
              )
            })
          )}
        </svg>
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-600">
        {series.map((s) => (
          <li key={s.key} className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} aria-hidden />
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResultsPerformanceCharts() {
  const labels = YEAR_ROWS.map((r) => r.year)
  const mhtVals = YEAR_ROWS.map((r) => r.mhtCet)
  const iitVals = YEAR_ROWS.map((r) => r.iit)
  const neetVals = YEAR_ROWS.map((r) => r.neet)

  return (
    <div className="mb-8 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatedMetricBars
          title="MHT-CET — 99+ percentile"
          subtitle="Students per year"
          values={mhtVals}
          labels={labels}
          colorClass="bg-blue-600"
          bgTrackClass="bg-blue-100"
        />
        <AnimatedMetricBars
          title="IIT selections"
          subtitle="Selections per year"
          values={iitVals}
          labels={labels}
          colorClass="bg-emerald-600"
          bgTrackClass="bg-emerald-100"
          showPlus2025
        />
        <AnimatedMetricBars
          title="NEET (AIIMS / MBBS)"
          subtitle="Selections per year"
          values={neetVals}
          labels={labels}
          colorClass="bg-violet-600"
          bgTrackClass="bg-violet-100"
        />
      </div>
      <TrendLineChart />
    </div>
  )
}
