'use client'
import OptimizedImage from '@/components/OptimizedImage'

export default function Faculty() {
  // Cloudinary image ID for the faculty image
  const facultyImageId = 'v1765176351/faculties_lyaigl'

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-heading text-center mb-3">Our Esteemed Faculty</h1>
          <p className="text-body/80 text-base md:text-lg max-w-2xl mx-auto text-center">
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
    </div>
  )
}
