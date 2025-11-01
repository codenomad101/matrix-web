export default function OnDemandCourses() {
  const courses = [
    {
      title: 'Crash Course for IIT-JEE',
      duration: '3-4 Months',
      target: 'Class 12 & Droppers',
      description: 'Intensive preparation course for students appearing in upcoming IIT-JEE exams',
      highlights: ['Fast-paced syllabus completion', 'Daily practice tests', 'Expert doubt solving', 'Exam strategy']
    },
    {
      title: 'NEET Crash Course',
      duration: '3-4 Months',
      target: 'Class 12 & Droppers',
      description: 'Comprehensive crash course focusing on all three subjects for NEET preparation',
      highlights: ['Complete NCERT coverage', 'Biology special focus', 'Regular mock tests', 'Performance tracking']
    },
    {
      title: 'MHT-CET Quick Prep',
      duration: '2-3 Months',
      target: 'Class 12 Students',
      description: 'Accelerated preparation program for MHT-CET with focus on speed and accuracy',
      highlights: ['State board syllabus', 'Previous year papers', 'Speed building', 'Accuracy improvement']
    },
    {
      title: 'Board Exam Preparation',
      duration: '2-3 Months',
      target: 'Class 10 & 12',
      description: 'Focused preparation for board examinations with emphasis on writing and presentation',
      highlights: ['Syllabus completion', 'Sample papers', 'Writing practice', 'Exam techniques']
    },
    {
      title: 'Doubt Clearing Sessions',
      duration: 'Flexible',
      target: 'All Students',
      description: 'Personalized doubt clearing sessions on specific topics as per student requirement',
      highlights: ['One-on-one sessions', 'Topic-specific focus', 'Flexible timing', 'Expert guidance']
    },
    {
      title: 'Test Series Program',
      duration: 'Ongoing',
      target: 'All Competitive Exam Aspirants',
      description: 'Comprehensive test series with detailed analysis and performance improvement plans',
      highlights: ['Regular tests', 'Detailed analysis', 'Weakness identification', 'Improvement plans']
    },
  ]

  return (
    <div className="container-content py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">On Demand Courses</h1>
        <p className="text-slate-600 text-lg">
          Flexible courses designed to meet your specific learning needs and schedule
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course, idx) => (
          <div key={idx} className="card p-6 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </span>
                <span>•</span>
                <span>{course.target}</span>
              </div>
              <p className="text-slate-700 text-sm">{course.description}</p>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-slate-900 mb-3">Course Highlights:</div>
              <ul className="space-y-2">
                {course.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-sm text-slate-700 flex items-start gap-2">
                    <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-brand/20 to-brand-dark/10 p-8 sm:p-10 border border-brand/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Customize Your Learning</h3>
          <p className="text-slate-700 text-lg mb-6">
            Our on-demand courses offer flexibility to match your schedule and learning pace. 
            Whether you need intensive preparation or specific topic coverage, we have a solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="btn-primary inline-flex justify-center">
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

