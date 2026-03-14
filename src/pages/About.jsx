'use client'
import Link from 'next/link'
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'

const directors = [
  { branch: 'Nigdi', name: 'Mr. Nishant Patwardhan', cloudinaryId: 'v1764218938/abhi_mehta_f6h4om' },
  { branch: 'Shahunagar', name: 'Mr. Ravindra Yadav', cloudinaryId: 'v1764990905/yadav_vv66wt' },
  { branch: 'Chinchwad', name: 'Mr. Algesh Patrike', cloudinaryId: 'v1765163829/algesh_hskjtk' },
  { branch: 'Ravet', name: 'Mr. Abhishek Mehta', cloudinaryId: 'v1764218937/nishant_tifi1f' },
  { branch: 'Wakad', name: 'Mr. Manoj Kumar', cloudinaryId: 'v1765163801/manoj_1_algvci' },
  { branch: 'Moshi', name: 'Mr. Umesh Bharde', cloudinaryId: 'v1765163805/umesh_1_aoyp2r' },
]

export default function About() {
  const branches = [
    {
      name: 'Pradhikaran Office',
      address: 'Tated horizon building Opp. St. Ursula School Nigdi, Pradhikaran',
      phone: ['70587 40609'],
    },
    {
      name: 'Nigdi Office',
      address: '3rd Floor, Kohinoor Arcade, Nigdi Chowk',
      phone: ['70587 40609'],
    },
    {
      name: 'Ravet 1 Office',
      address: '3rd Floor, Blooming Dale, Above Dominos',
      phone: ['70587 40609'],
    },
    {
      name: 'Ravet 2 Office',
      address: '3rd Floor, Sr No. 95, Bhalchandra Prospera',
      phone: ['70587 40609'],
    },
    {
      name: 'Chinchwad Office',
      address: '3rd Floor, Geo Spaces, Opp. Elpro Mall, Link Road',
      phone: ['70587 40609'],
    },
    {
      name: 'Shahunagar Office',
      address: 'Spine Road, Near NKGSB Bank, Purnanagar',
      phone: ['70587 40609'],
    },
    {
      name: 'Moshi',
      address: 'Bharat Mata Chowk Above Reliance Digital',
      phone: ['70587 40609'],
    },
    {
      name: 'Wakad Office',
      address: 'Sr No 190/190 Ground Floor, Sunder Height, Near Saraswat Bank, Datta Mandir',
      phone: ['70587 40609'],
    },
  ]

  return (
    <div>
      {/* About Section - Allen-style white section */}
      <section className="page-section-white">
        <div className="container-page">
          <div className="page-card max-w-4xl">
            <h1 className="section-heading text-3xl md:text-4xl mb-6">About Matrix Science Academy</h1>
            <p className="text-lg text-[#0a1a67] leading-relaxed mb-5">
              Matrix Science Academy (MSA) is dedicated to building strong concepts and habits for
              competitive exams and boards. With a blended learning approach, we offer mentor-led
              classes, quality study material, and rigorous assessments.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#0a1a67]">
                <h3 className="text-lg font-bold text-[#0a1a67] mb-2">Our Mission</h3>
                <p className="text-[#0a1a67] text-sm leading-relaxed">
                  Deliver accessible, high-quality education with compassion and discipline.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#B30027]">
                <h3 className="text-lg font-bold text-[#0a1a67] mb-2">Our Vision</h3>
                <p className="text-[#0a1a67] text-sm leading-relaxed">
                  Enable every learner to achieve excellence and freedom through knowledge.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-[#0a1a67] mb-3">Our Philosophy</h3>
              <p className="text-[#0a1a67] leading-relaxed text-sm">
                We are teachers by our choice and we passionately do our job. Our aim is not to run the classes conventionally,
                but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.
                We believe education is the key to success. Matrix Science Academy aims to provide quality and affordable education
                to all students via offline as well as online mode. We have young and highly qualified teachers who can drive the
                students for their career.
              </p>
            </div>

            {/* Our Vision - Full Message */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-[#B30027]">
              <h3 className="text-lg font-bold text-[#0a1a67] mb-3">Our Vision</h3>
              <div className="space-y-3 text-[#0a1a67] text-sm leading-relaxed">
                <p>
                  <strong>We are teachers by our choice and we passionately do our job.</strong> Our aim is not to run the classes conventionally, but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.
                </p>
                <p>
                  Matrix Science Academy aims to provide <strong>quality and affordable education</strong> to all students via offline as well as online mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="page-section-gray">
        <div className="container-page">
          <div className="text-center mb-6">
            <h2 className="section-heading-center mb-3">Our Directors</h2>
            <p className="section-subheading text-center">Leaders at each branch driving excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {directors.map((d, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-[#0a1a67]/30 hover:shadow-xl transition-all duration-300 text-center">
                  <OptimizedImage
                    cloudinaryId={d.cloudinaryId}
                    alt={d.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full shadow-lg border-2 border-gray-200 mx-auto"
                    crop="fill"
                    loading="lazy"
                  />
                  <p className="mt-3 font-semibold text-[#0a1a67]">{d.name}</p>
                  <p className="text-sm text-[#B30027] font-medium">MSA {d.branch}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Branches Section - Allen-style gray section */}
      <section className="page-section-gray">
        <div className="container-page">
          <div className="text-center mb-6">
            <h2 className="section-heading-center mb-3">Contact Us</h2>
            <p className="section-subheading text-center">Visit any of our 8 branches across Pune</p>
          </div>

          {/* General Contact Info */}
          <div className="bg-[#0a1a67] text-white rounded-xl p-4 md:p-6 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Email Us</div>
                  <div className="font-semibold text-lg">msapcmc@gmail.com</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Call Us</div>
                  <div className="font-semibold text-lg">7058740609</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/30"></div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaBuilding className="text-2xl" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Our Locations</div>
                  <div className="font-semibold text-lg">8 Branches Across Pune</div>
                </div>
              </div>
            </div>
          </div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#0a1a67] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-[#0a1a67] flex items-center mb-4">
                  <div className="bg-[#0a1a67]/10 p-3 rounded-lg mr-3">
                    <FaBuilding className="text-[#0a1a67]" />
                  </div>
                  {branch.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start text-[#0a1a67]">
                    <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0 text-[#B30027]" />
                    <span className="text-sm">{branch.address}</span>
                  </div>

                  <div className="flex items-center text-[#0a1a67]">
                    <FaPhoneAlt className="mr-3 flex-shrink-0 text-[#B30027]" />
                    <div className="flex flex-wrap gap-2">
                      {branch.phone.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-sm font-medium hover:text-[#B30027] transition-colors duration-300"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-[#0a1a67] mb-3 text-sm">Ready to start your journey with us?</p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] transition-colors duration-300 px-6 py-2.5 font-semibold text-sm"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
