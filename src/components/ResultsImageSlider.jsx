'use client'

import { useEffect, useState } from 'react'

export default function ResultsImageSlider({
  visibleCount = 2,
  showControls = true,
  showDots = true,
  heightClassName = 'h-[280px] md:h-[350px] lg:h-[400px]',
  framed = true,
  className = 'relative overflow-hidden rounded-2xl',
} = {}) {
  const [offset, setOffset] = useState(0)
  const images = [
    { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763783015/5_c2lqwx.jpg', alt: 'Results image 1' },
    { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763783028/7_cgvboz.jpg', alt: 'Results image 2' },
  ]
  const step = 1
  const maxOffset = Math.max(0, images.length - visibleCount)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev >= maxOffset ? 0 : prev + step))
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length, maxOffset])

  return (
    <div className={className}>
      <div className={`relative ${heightClassName} overflow-hidden`}>
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * (100 / visibleCount)}%`,
            transform: `translateX(-${offset * (100 / images.length)}%)`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`flex h-full flex-shrink-0 items-center justify-center ${framed ? 'p-2 md:p-3' : 'p-0'}`}
              style={{ width: `${100 / images.length}%` }}
            >
              {framed ? (
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-gray-200/60 bg-page-bg shadow-md">
                  <img
                    src={img.src ?? `https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                    alt={img.alt}
                    className="h-full w-full object-contain"
                    loading={idx < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              ) : (
                <img
                  src={img.src ?? `https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_1200,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
                  alt={img.alt}
                  className="h-full w-full object-contain"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              )}
            </div>
          ))}
        </div>

        {showControls && (
          <>
            <button
              type="button"
              onClick={() => setOffset((prev) => (prev === 0 ? maxOffset : prev - step))}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:h-12 md:w-12"
            >
              <svg className="h-5 w-5 text-[var(--brand-red)] transition-colors hover:text-white md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setOffset((prev) => (prev >= maxOffset ? 0 : prev + step))}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:h-12 md:w-12"
            >
              <svg className="h-5 w-5 text-[var(--brand-red)] transition-colors hover:text-white md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {showDots && (
        <div className="flex justify-center gap-2 py-3">
          {Array.from({ length: maxOffset + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setOffset(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${offset === idx
                ? 'w-6 bg-[var(--brand-red)]'
                : 'w-2 bg-gray-300 hover:bg-[var(--brand-red)]/50'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
