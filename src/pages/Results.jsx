'use client'
import OptimizedImage from '@/components/OptimizedImage'

export default function Results() {
  // Cloudinary image IDs for results photos
  const resultsImages = [
    { id: 'v1763783028/7_cgvboz', alt: 'Results Photo 1' },
    { id: 'v1763783028/4_nl1ejs', alt: 'Results Photo 2' },
    { id: 'v1763783003/2_ocfn47', alt: 'Results Photo 3' },
  ]

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#004c8f] mb-8 text-center">Our Results</h1>
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

