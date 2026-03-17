'use client'

import Link from 'next/link'

const testimonials = [
  {
    text: "Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi.",
    name: 'Dhruv Shinde',
    college: 'IIT Mandi',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763883041/rahulshinde-Picsart-AiImageEnhancer_wusaln.png',
  },
  {
    text: "I never thought I could crack NEET on my first attempt. The structured approach and constant guidance made all the difference.",
    name: 'Rahul Kavhale',
    college: 'IIT Kharagpur',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763882954/rahul-Picsart-AiImageEnhancer_y8emgu.png',
  },
  {
    text: "The doubt-clearing sessions and mock tests were instrumental in building my confidence. I'm grateful for the support that helped me achieve my goal.",
    name: 'Maithili Sagare',
    college: 'IIT Guwahati',
    exam: 'IIT-JEE',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763883051/maithili-Picsart-AiImageEnhancer_apk2th.png',
  },
  {
    text: "The faculty here transformed my understanding of engineering. Their innovative teaching methods and personal attention helped me secure admission to my dream college.",
    name: 'Dhruv Unde',
    college: 'NIT Trichy',
    exam: 'MHT-CET',
    photo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763882946/soham1_s7aa4m.png',
  },
]

export default function TestimonialsShowcase() {
  return (
    <section className="home-section bg-white">
      <div className="container-page">
        <h2 className="home-section-title">Student Success Stories</h2>
        <p className="home-section-body max-w-2xl mb-8">
          Hear from students who achieved their dreams with our guidance.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:border-gray-300 transition-colors flex flex-col"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-end justify-between gap-3 mt-auto">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.college} · {t.exam}</p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-9 h-9 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="text-[#B30027] font-medium hover:underline"
          >
            View all success stories →
          </Link>
        </div>
      </div>
    </section>
  )
}
