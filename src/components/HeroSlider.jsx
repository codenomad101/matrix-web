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
            {/* Left: headline, description, list, CTAs */}
            <div className="flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight mb-2 sm:mb-3">
                Build strong academic foundations in science and mathematics
              </h1>
              <p className="text-sm sm:text-base text-gray-800 mb-3 max-w-lg">
                Concept-based coaching and personalized academic guidance to help students excel in school and competitive examinations.
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
