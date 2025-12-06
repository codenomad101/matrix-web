'use client'
import OptimizedImage from '@/components/OptimizedImage'

export default function Faculty() {
  // Cloudinary image ID for the faculty image
  const facultyImageId = 'v1764994908/Pi7_faculty_main_zqsz6c'

  return (
    <div className="max-w-[1320px] mx-auto py-8 px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1a67]">Our Esteemed Faculty</h1>
        <p className="text-base sm:text-lg md:text-xl text-[#0a1a67]/80 mt-2">
          Our dedicated faculty members are committed to nurturing talent and guiding students towards academic excellence. Their goal is to inspire and empower every learner.
        </p>
      </div>
      <OptimizedImage
        cloudinaryId={facultyImageId}
        alt="Our Faculty - Matrix Science Academy"
        width={1200}
        height={1600}
        className="w-full h-auto object-contain"
        crop="fit"
        quality="100"
      />
    </div>
  )
}
