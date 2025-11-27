'use client'
import { useState, useEffect } from 'react'
import OptimizedImage from '@/components/OptimizedImage'

// Results Image Slider Component
function ResultsImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { cloudinaryId: 'v1764181799/JEE_MAIN_o7kayq', alt: 'JEE Main Results' },
    { cloudinaryId: 'v1764181794/JEE_MAIN_2025_aoxekj', alt: 'JEE Main 2025 Results' },
    { cloudinaryId: 'v1764181786/IIT_knkkka', alt: 'IIT Results' },
    { cloudinaryId: 'v1764181835/NEET_riozts', alt: 'NEET Results' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-white shadow-lg">
      {/* Main Slider */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              currentIndex === idx 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_1200,h_800,c_fit,q_auto,f_auto/${img.cloudinaryId}`}
              alt={img.alt}
              className="w-full h-full object-contain"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <svg className="w-6 h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 py-4 bg-white/80">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? 'w-10 bg-[#0a1a67]' 
                : 'w-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Results() {
  // Cloudinary image IDs for results photos
  const resultsImages = [
    { id: 'v1763783028/7_cgvboz', alt: 'Results Photo 1' },
    { id: 'v1763783028/4_nl1ejs', alt: 'Results Photo 2' },
    { id: 'v1763783003/2_ocfn47', alt: 'Results Photo 3' },
  ]

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#0a1a67] mb-8 text-center">Our Results</h1>
      
      {/* Results Image Slider */}
      <div className="mb-10">
        <ResultsImageSlider />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {resultsImages.map((image, idx) => (
          <div 
            key={idx} 
            className="card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full aspect-[3/4] overflow-hidden">
              <OptimizedImage
                cloudinaryId={image.id}
                alt={image.alt}
                width={600}
                height={800}
                className="w-full h-full object-cover"
                crop="fill"
                quality="auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

