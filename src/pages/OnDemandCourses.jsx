'use client'
import { useEffect, useState } from 'react'

export default function OnDemandCourses() {
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'))
            setVisibleIndex((prev) => Math.max(prev, index))
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('[data-section]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { year: '2021', students: '2,600', label: 'Students Registered' },
    { year: '2022', students: '2,700', label: 'Students Registered' },
    { year: '2023', students: '3,500', label: 'Students Registered (Projected)' },
    { year: '2024', students: '5,000', label: 'Students Registered (Till Date)' },
  ]

  const features = [
    'Flexible learning through recorded lectures',
    'Easy access to missed offline lectures through the MATRIX APP',
    'Enhanced preparation and revision opportunities',
  ]

  const appContent = [
    { title: 'Complete HSC Syllabus', description: 'Detailed Lectures covering entire syllabus' },
    { title: 'One Shot Revision', description: 'Quick revision sessions for all topics' },
    { title: 'Video Solutions', description: 'Video solutions of MCQ Assignments' },
  ]

  return (
    <div className="container-page py-10">
      {/* Header */}
      <div className="text-center mb-12" data-section data-index={0}>
        <div className="inline-block mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004c8f] mb-3">
            On Demand Courses: On-Demand
          </h1>
        </div>
        <p className="text-[#004c8f] text-lg max-w-3xl mx-auto">
          Recorded Lectures - Impulse Batch by MATRIX: Revolutionizing 11th and 12th Std Education
        </p>
      </div>

      {/* Hero Section with Images */}
      <div className="grid md:grid-cols-2 gap-6 mb-12" data-section data-index={1}>
        <div className={`transition-all duration-1000 ease-out ${
          visibleIndex >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="card rounded-2xl overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
              alt="Educational App Interface with Notes and Questions" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
              }}
            />
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="text-xl font-bold text-[#004c8f] mb-2">MATRIX App</h3>
              <p className="text-[#004c8f] text-sm">Access recorded lectures, notes, and question solutions anytime</p>
            </div>
          </div>
        </div>
        <div className={`transition-all duration-1000 ease-out ${
          visibleIndex >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="card rounded-2xl overflow-hidden h-full">
            <img 
              src="/images/audi1.png" 
              alt="Auditorium" 
              className="w-full h-full object-cover"
            />
            <div className="p-6 bg-gradient-to-br from-brand/20 to-brand-dark/10">
              <h3 className="text-xl font-bold text-[#004c8f] mb-2">Our Infrastructure</h3>
              <p className="text-[#004c8f] text-sm">State-of-the-art learning facilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mb-12" data-section data-index={2}>
        <div className={`card p-8 md:p-10 mb-8 transition-all duration-1000 ease-out ${
          visibleIndex >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004c8f] mb-6 text-center">
              Impulse Batch by MATRIX: Revolutionizing 11th and 12th Std Education
            </h2>
            <p className="text-[#004c8f] text-lg leading-relaxed mb-6">
              Impulse Batch, an online platform owned by MATRIX, provides comprehensive recorded lectures covering the entire 12th standard syllabus. Since its inception, the platform has witnessed remarkable growth:
            </p>

            {/* Growth Statistics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-brand/20 to-brand-dark/10 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-brand/30"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">{stat.students}</div>
                  <div className="text-sm font-semibold text-[#004c8f] mb-1">{stat.year}</div>
                  <div className="text-xs text-[#004c8f]">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-[#004c8f] text-lg leading-relaxed mb-6">
              Catering specifically to 11th and 12th std Science students in Maharashtra, Impulse Batch addresses the challenges of understanding the vast and complex syllabus. The platform offers:
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border-2 border-brand/20 hover:border-brand-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-[#004c8f] leading-relaxed pt-1">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* App Content Section */}
      <div className="mb-12" data-section data-index={3}>
        <div className={`transition-all duration-1000 ease-out ${
          visibleIndex >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="rounded-2xl bg-gradient-to-br from-brand/20 via-brand-dark/10 to-brand/20 p-8 md:p-10 border border-brand/30 shadow-xl">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004c8f] mb-8 text-center">
                Content Available on MATRIX APP
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {appContent.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-dark via-brand to-brand-dark flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#004c8f] mb-2 text-center">{item.title}</h3>
                    <p className="text-[#004c8f] text-center text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-2xl bg-gradient-to-br from-brand/20 via-brand-dark/10 to-brand/20 p-8 md:p-10 border border-brand/30 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#004c8f] mb-4">Ready to Get Started?</h3>
          <p className="text-[#004c8f] text-lg mb-6">
            Join thousands of students who are already benefiting from our comprehensive on-demand courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="inline-flex justify-center items-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">
              Enquire Now
            </a>
            <a href="/courses" className="btn-outline inline-flex justify-center">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
