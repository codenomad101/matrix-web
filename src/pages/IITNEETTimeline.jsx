export default function IITNEETTimeline() {
  const timeline = [
    {
      phase: 'Foundation Phase',
      duration: 'Class 11',
      months: 'April - March',
      description: 'Build strong fundamentals in Physics, Chemistry, and Mathematics/Biology',
      activities: [
        'Complete NCERT syllabus',
        'Understand core concepts',
        'Regular practice sessions',
        'Monthly assessments'
      ]
    },
    {
      phase: 'Intensive Preparation',
      duration: 'Class 12 (First Half)',
      months: 'April - September',
      description: 'Advanced topics, problem-solving strategies, and intensive practice',
      activities: [
        'Complete advanced syllabus',
        'Regular mock tests',
        'Doubt solving sessions',
        'Performance analysis'
      ]
    },
    {
      phase: 'Revision & Mock Tests',
      duration: 'Class 12 (Second Half)',
      months: 'October - December',
      description: 'Comprehensive revision, full-length tests, and time management',
      activities: [
        'Complete syllabus revision',
        'Weekly full-length tests',
        'Weak topic strengthening',
        'Exam strategy sessions'
      ]
    },
    {
      phase: 'Final Preparation',
      duration: 'Exam Season',
      months: 'January - May',
      description: 'Final touches, last-minute revision, and maintaining peak performance',
      activities: [
        'Daily practice tests',
        'Quick revision notes',
        'Stress management',
        'Exam day preparation'
      ]
    }
  ]

  return (
    <div className="container-content py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">IIT-JEE / NEET Timeline</h1>
        <p className="text-slate-600 text-lg">
          A structured roadmap to success in IIT-JEE and NEET examinations
        </p>
      </div>

      <div className="space-y-8">
        {timeline.map((phase, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Line */}
            {idx !== timeline.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-brand/30"></div>
            )}
            
            <div className="flex gap-6">
              {/* Timeline Marker */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {idx + 1}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 card p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{phase.phase}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="font-medium">{phase.duration}</span>
                      <span>•</span>
                      <span>{phase.months}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4">{phase.description}</p>
                
                <div className="bg-brand/10 rounded-lg p-4">
                  <div className="text-sm font-semibold text-slate-900 mb-2">Key Activities:</div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {phase.activities.map((activity, aIdx) => (
                      <li key={aIdx} className="text-sm text-slate-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand/20 to-brand-dark/10 p-8 sm:p-10 border border-brand/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Important Dates</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">IIT-JEE Main</h4>
              <p className="text-sm text-slate-600">Session 1: January | Session 2: April</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">IIT-JEE Advanced</h4>
              <p className="text-sm text-slate-600">Usually in May/June</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">NEET</h4>
              <p className="text-sm text-slate-600">Usually in May</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">Registration</h4>
              <p className="text-sm text-slate-600">Check official websites for exact dates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

