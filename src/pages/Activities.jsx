import { Link } from 'react-router-dom'

export default function Activities() {
  const activities = [
    {
      title: 'Performance',
      description: 'Track our consistent growth in student achievements year over year',
      link: '/activities/performance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Course Selection',
      description: 'Get guidance on choosing the right course for your career goals',
      link: '/activities/course-selection',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'IIT-JEE/NEET Timeline',
      description: 'Comprehensive preparation roadmap for IIT-JEE and NEET exams',
      link: '/activities/iit-neet-timeline',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'MHT-CET Timeline',
      description: 'Structured timeline for MHT-CET preparation and success',
      link: '/activities/mht-cet-timeline',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'On Demand Courses',
      description: 'Flexible courses designed to meet your specific learning needs',
      link: '/activities/on-demand-courses',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Felicitation',
      description: 'Celebrate the outstanding achievements of our students',
      link: '/activities/felicitation',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 8h10M5 21h14M5 21l14-18M5 21v-4m14 4v-4M9 8h6m-6 4h6m-6 4h6" />
        </svg>
      )
    },
  ]

  return (
    <div className="container-content py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Activities & Programs</h1>
        <p className="text-slate-600 text-lg">
          Explore our comprehensive range of activities, timelines, and programs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, idx) => (
          <Link 
            key={idx} 
            to={activity.link}
            className="card p-6 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand/20 text-brand-dark group-hover:bg-brand/30 transition-colors duration-300 flex-shrink-0">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-dark transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {activity.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
