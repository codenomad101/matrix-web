'use client'
import { useEffect, useMemo, useState } from 'react'

const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
)

const HERO_CAROUSEL_IMAGES = [
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181879/B_r8gw6s.jpg', alt: 'Matrix Science Academy' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181786/IIT_knkkka.jpg', alt: 'IIT Results' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1763783028/4_nl1ejs', alt: 'Our success' },
  { src: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/v1764181864/A_dbzo2c.jpg', alt: 'Academy' },
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
    <section className="relative overflow-hidden">
      <div className="container-page pt-1 pb-2 sm:pt-4 sm:pb-5 px-2 sm:px-6">
        <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] rounded-lg sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
          <div className="w-full h-full relative bg-gradient-to-br from-white via-red-50/50 to-red-100/40">
            <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-5 md:pt-6 lg:pt-7 px-4 sm:px-5 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-5 overflow-y-auto items-start">
              {/* Left: Hero 1 – Headline, tagline, stats, CTA */}
              <div className="flex flex-col justify-center min-w-0 mt-2 sm:mt-3 md:mt-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-1">
                  <span className="text-[#ed1c24]">Matrix</span>{' '}
                  <span className="text-[#646262] font-black">Science</span>
                  <span className="block text-[#214295] font-black">Academy</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                  Pune&apos;s leading coaching for JEE, NEET & MHT-CET
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-[#8B1538]">8</span>
                    <span className="text-[10px] sm:text-xs text-slate-500">Branches</span>
                  </div>
                  <div className="w-px bg-red-200/80 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-[#8B1538]">30K+</span>
                    <span className="text-[10px] sm:text-xs text-slate-500">Alumni</span>
                  </div>
                  <div className="w-px bg-red-200/80 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-[#8B1538]">86</span>
                    <span className="text-[10px] sm:text-xs text-slate-500">99+ Percentile</span>
                  </div>
                </div>
                <Link
                  href="/enquiry"
                  className="inline-flex justify-center items-center w-fit bg-[#B30027] text-white hover:bg-[#8a001e] text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Enquire Now
                </Link>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-2">
                  Nigdi · Shahunagar · Chinchwad · Ravet · Wakad · Moshi · Kolhapur · Rahatani
                </p>
              </div>

              {/* Right: Image carousel (2nd box) */}
              <div className="flex items-center justify-center min-w-0 h-full relative">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
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
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {HERO_CAROUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Image ${i + 1}`}
                      onClick={() => setCarouselIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? 'w-5 bg-[#B30027]' : 'w-1.5 bg-white/80 hover:bg-white'}`}
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