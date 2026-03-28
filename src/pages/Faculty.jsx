'use client'

import OptimizedImage from '@/components/OptimizedImage'
import GallerySection from '@/components/GallerySection'

export default function Faculty() {
  const facultyImageId = 'v1765176351/faculties_lyaigl'

  return (
    <div className="interior-page">
      <section className="page-section-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-5">
            <h1 className="interior-title interior-title-center mb-3">Our Esteemed Faculty</h1>
            <p className="text-base text-neutral-600 md:text-lg max-w-2xl mx-auto text-center">
              Our dedicated faculty members are committed to nurturing talent and guiding students towards academic excellence.
            </p>
          </div>
          <OptimizedImage
            cloudinaryId={facultyImageId}
            alt="Our Faculty - Matrix Science Academy"
            width={2400}
            height={3200}
            className="w-full h-auto object-contain"
            crop="fit"
            quality="100"
            loading="eager"
          />
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="container-page py-6 md:py-10">
          <GallerySection headingLevel="h2" />
        </div>
      </section>
    </div>
  )
}
