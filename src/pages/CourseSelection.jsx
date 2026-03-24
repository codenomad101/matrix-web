export default function CourseSelection() {
  const courses = [
    {
      title: 'IIT-JEE (Main/Advanced)',
      description: 'Comprehensive preparation for India\'s most prestigious engineering entrance exams.',
      duration: '2-3 Years',
      target: 'Class 11-12 Students',
      features: ['Expert faculty', 'Regular mock tests', 'Doubt solving sessions', 'Study material']
    },
    {
      title: 'MHT-CET',
      description: 'Tailored program for Maharashtra Common Entrance Test for engineering admissions.',
      duration: '1-2 Years',
      target: 'Class 12 Students',
      features: ['State syllabus focus', 'Speed & accuracy training', 'Previous year papers', 'Performance tracking']
    },
    {
      title: 'NEET',
      description: 'Complete preparation for National Eligibility cum Entrance Test for medical courses.',
      duration: '2-3 Years',
      target: 'Class 11-12 Students',
      features: ['Biology specialization', 'NCERT coverage', '100/100 score guidance', 'Expert mentorship']
    },
    {
      title: 'IISER Foundation',
      description: 'Foundation program for Indian Institutes of Science Education and Research.',
      duration: '2-3 Years',
      target: 'Class 9-10 Students',
      features: ['Scientific aptitude', 'Research orientation', 'Critical thinking', 'Interview preparation']
    },
    {
      title: '8th-12th Board',
      description: 'Comprehensive board preparation ensuring excellent academic results.',
      duration: 'Full Academic Year',
      target: 'Class 8-12 Students',
      features: ['Syllabus coverage', 'Regular assessments', 'Writing skills', 'Practical support']
    },
  ]

  return (
    <div className="container-page py-6">
      <div className="text-center mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--brand-red)] mb-3">Course Selection Guide</h1>
        <p className="text-[var(--brand-red)] text-lg">
          Choose the right course based on your career aspirations and academic goals
        </p>
      </div>

      {/* Course Selection for 11th-12th Science */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--brand-red)] mb-6">Course Selection: 11th–12th Science</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-5">
          {/* Regular Science Subjects */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-[var(--brand-red)] mb-4">Regular Science Subjects</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-brand/30">
                    <th className="text-left py-2 px-3 font-semibold text-[var(--brand-red)]">Subject</th>
                    <th className="text-right py-2 px-3 font-semibold text-[var(--brand-red)]">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">English</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Hindi/Marathi/IT (Any 1)</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Physics</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Chemistry</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Maths</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">CS-1 or Elec-1 (Any 1)</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="bg-brand/10 font-semibold">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Total</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bifocal Subjects */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-[var(--brand-red)] mb-4">Bifocal Subjects</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-brand/30">
                    <th className="text-left py-2 px-3 font-semibold text-[var(--brand-red)]">Subject</th>
                    <th className="text-right py-2 px-3 font-semibold text-[var(--brand-red)]">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">English</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Physics</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Chemistry</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Maths/Biology/Geography (Any 1)</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">CS-2 or Elec-2 (Any 1)</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-red)]/20">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Maths/Biology/Geography (Any 1)</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">100</td>
                  </tr>
                  <tr className="bg-brand/10 font-semibold">
                    <td className="py-2 px-3 text-[var(--brand-red)]">Total</td>
                    <td className="py-2 px-3 text-right text-[var(--brand-red)]">600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Entrance Exams after 12th */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--brand-red)] mb-6">Lists of Entrance Exams after 12th</h2>
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand/30">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--brand-red)]">Stream</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--brand-red)]">Entrance Exams</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Engineering</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">MHT-CET (PCM), JEE(M) & JEE(A), BITSAT, VITEEE</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Medical</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">NEET(UG)</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Paramedical</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">MHT-CET (PCB)</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Pure Sciences</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">IAT (IISER), IISc, CMI, SRM</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Architecture/Design</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">NATA, JEE(M) Paper 2, UID, NID</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">Defence</td>
                  <td className="py-3 px-4 text-[var(--brand-red)]">NDA Entrance Exam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Average Self Study Hours */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--brand-red)] mb-6">Average Self Study Hours of Toppers (According to MSA Survey)</h2>
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand/30">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--brand-red)]">Exam</th>
                  <th className="text-center py-3 px-4 font-semibold text-[var(--brand-red)]">In Class XI</th>
                  <th className="text-center py-3 px-4 font-semibold text-[var(--brand-red)]">In Class XII</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">MHT-CET</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">4–5 hrs Daily</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">6–8 hrs Daily</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">IIT–JEE</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">7–8 hrs Daily</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">9–10 hrs Daily</td>
                </tr>
                <tr className="border-b border-[var(--brand-red)]/20">
                  <td className="py-3 px-4 font-medium text-[var(--brand-red)]">NEET</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">7–8 hrs Daily</td>
                  <td className="py-3 px-4 text-center text-[var(--brand-red)]">9–10 hrs Daily</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="card p-6 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[var(--brand-red)] mb-2">{course.title}</h3>
              <p className="text-[var(--brand-red)] text-sm">{course.description}</p>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--brand-red)] font-medium">Duration: {course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-[var(--brand-red)] font-medium">Target: {course.target}</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-[var(--brand-red)] mb-2">Key Features:</div>
              <ul className="space-y-1">
                {course.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm text-[var(--brand-red)] flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand/20 to-brand-dark/10 p-8 sm:p-10 border border-brand/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[var(--brand-red)] mb-4">Need Help Choosing?</h3>
          <p className="text-[var(--brand-red)] text-lg mb-6">
            Our expert counselors are here to guide you through the course selection process. 
            Book a free counseling session to understand which course aligns best with your career goals.
          </p>
          <a href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">
            Schedule Counseling Session
          </a>
        </div>
      </div>
    </div>
  )
}

