'use client'

import { useEffect, useState } from 'react'

const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
)

const HERO_CAROUSEL_IMAGES = [
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg', alt: 'Matrix Science Academy', heading: 'Campus & Learning' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181786/IIT_knkkka.jpg', alt: 'IIT Results', heading: 'IIT & Top Engineering Results' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1763783028/4_nl1ejs', alt: 'Our success', heading: 'Our Success Stories' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181864/A_dbzo2c.jpg', alt: 'Academy', heading: 'About Matrix Science Academy' },
]
const CAROUSEL_INTERVAL_MS = 4500

export default function HeroSlider() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % HERO_CAROUSEL_IMAGES.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white">
      <div className="container-page pt-4 pb-5 sm:pt-6 sm:pb-8 px-4 sm:px-6">
        <div className="border border-gray-200/80 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 sm:p-5 md:p-6 lg:p-8 min-h-[200px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
            {/* Left: headline, description, list, CTAs — growth chart decoration behind (like Vriksha tree) */}
            <div className="relative flex flex-col justify-center min-h-0 overflow-hidden rounded-lg">
              {/* Background: upward trend + arrow (readability: gradient scrim on the left) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg" aria-hidden>
                <div className="absolute inset-0 bg-gradient-to-r from-white from-[28%] via-white/92 to-white/40 sm:from-[32%] sm:via-white/88 sm:to-transparent z-[1]" />
                <div className="hero-growth-chart absolute -right-2 sm:right-0 bottom-0 w-[min(100%,280px)] sm:w-[min(100%,320px)] md:w-[340px] h-[min(75%,200px)] sm:h-[210px] md:h-[230px] text-[#0a1a67] z-0">
                  <svg
                    viewBox="0 0 240 140"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMax meet"
                  >
                    <defs>
                      <linearGradient id="heroGrowthFill" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#B30027" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#0a1a67" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="heroGrowthLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#B30027" />
                        <stop offset="100%" stopColor="#0a1a67" />
                      </linearGradient>
                    </defs>
                    {/* faint grid */}
                    <path d="M20 120h200M20 95h200M20 70h200M20 45h200" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
                    {/* area under curve */}
                    <path
                      className="hero-growth-fill"
                      d="M 24 118 L 52 102 L 84 88 L 118 72 L 152 58 L 186 42 L 220 28 L 220 118 Z"
                      fill="url(#heroGrowthFill)"
                    />
                    {/* growth line — pathLength enables stroke draw animation */}
                    <path
                      className="hero-growth-path"
                      pathLength={100}
                      d="M 24 118 L 52 102 L 84 88 L 118 72 L 152 58 L 186 42 L 220 28"
                      stroke="url(#heroGrowthLine)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.65"
                    />
                    {/* up arrow at end of trend */}
                    <g className="hero-growth-arrow" opacity="0.65">
                      <path
                        d="M 218 26 L 228 18 M 218 26 L 210 18"
                        stroke="#B30027"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M 228 18 L 224 12 L 220 18" fill="#B30027" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="relative z-[2] flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mb-2 sm:mb-3">
                Build strong academic foundations in science and mathematics
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-3 max-w-lg leading-relaxed">
                <span className="font-bold text-[#0a1a67]">
                  Concept-based coaching and personalized academic guidance
                </span>
                <span className="text-gray-700 font-normal">
                  {' '}
                  to help students excel in school and competitive examinations.
                </span>
              </p>
              <ul className="space-y-1.5 mb-4 text-sm text-black">
                {[
                  'Small batch sizes for individual attention',
                  'Concept-based learning over rote memorization',
                  'Regular tests and rigorous performance tracking',
                  'Personalized student guidance and mentoring',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-black shrink-0" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/counseling"
                  className="inline-flex items-center justify-center bg-[#B30027] text-white hover:bg-[#8a001e] text-sm font-medium px-5 py-2.5 rounded transition-colors"
                >
                  Book Free Counselling
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center border border-gray-200/80 text-black hover:bg-gray-100 text-sm font-medium px-5 py-2.5 rounded transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
              </div>
            </div>

            {/* Right: slider title + image carousel */}
            <div className="flex flex-col justify-center items-center lg:items-end">
              <h2 className="text-base sm:text-lg font-bold text-black mb-2 w-full text-center lg:text-right max-w-[280px] sm:max-w-[320px] transition-opacity duration-300">
                {HERO_CAROUSEL_IMAGES[carouselIndex].heading}
              </h2>
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border border-gray-200/80">
                  {HERO_CAROUSEL_IMAGES.map((img, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 transition-opacity duration-700 ease-out"
                      style={{ opacity: i === carouselIndex ? 1 : 0, zIndex: i === carouselIndex ? 1 : 0 }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {HERO_CAROUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Image ${i + 1}`}
                      onClick={() => setCarouselIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? 'w-5 bg-gray-600' : 'w-1.5 bg-gray-300 hover:bg-gray-500'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
