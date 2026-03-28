'use client'

import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import { galleryImages, galleryCategories } from '@/data/gallery-data'

const defaultTitle = 'Photo Gallery'
const defaultSubtitle =
  'Explore moments from our events, ceremonies, facilities, and student achievements'

/**
 * Same grid, filters, cards, and lightbox as the standalone gallery page.
 */
export default function GallerySection({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  headingLevel = 'h1',
} = {}) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    selectedCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const currentImageIndex =
    selectedImage !== null ? filteredImages.findIndex((img) => img.cloudinaryId === selectedImage.cloudinaryId) : -1

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1])
    }
  }

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1])
    }
  }

  const HeadingTag = headingLevel

  return (
    <div className="py-6">
      <div className="text-center mb-5">
        <HeadingTag className="mb-3 text-3xl font-bold text-neutral-900 sm:text-4xl">{title}</HeadingTag>
        <p className="text-lg text-neutral-600">{subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'scale-105 bg-neutral-900 text-white shadow-lg'
                : 'border-2 border-neutral-200 bg-white text-neutral-800 hover:scale-105 hover:border-neutral-400 hover:shadow-md'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedImage(image)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedImage(image)
              }
            }}
            className="group card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
              <OptimizedImage
                cloudinaryId={image.cloudinaryId}
                alt={image.alt}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                crop="fill"
                quality="auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-neutral-900/75 via-neutral-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  <p className="font-bold">Click to view</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[var(--brand-red)] text-lg">{image.title}</h3>
              <p className="text-sm text-[var(--brand-red)]/70 capitalize mt-1">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg text-neutral-600">No images found in this category.</p>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {currentImageIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentImageIndex < filteredImages.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              cloudinaryId={selectedImage.cloudinaryId}
              alt={selectedImage.alt}
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
              crop="fit"
              quality="auto"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
