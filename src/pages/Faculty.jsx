'use client'
import OptimizedImage from '@/components/OptimizedImage'

export default function Faculty() {
  // Cloudinary image ID for the faculty image
  const facultyImageId = 'v1763783229/1_yyfdsn'

  return (
    <div className="max-w-[1320px] mx-auto">
      <OptimizedImage
        cloudinaryId={facultyImageId}
        alt="Our Faculty - Matrix Science Academy"
        width={1200}
        height={1600}
        className="w-full h-auto object-contain"
        crop="fit"
        quality="auto"
      />
    </div>
  )
}
