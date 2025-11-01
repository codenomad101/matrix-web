import { useEffect, useState } from 'react'

export default function IITNEETTimeline() {
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

    const elements = document.querySelectorAll('[data-timeline-item]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const timeline = [
    {
      phase: 'Module I & II Coverage',
      duration: 'Class 11',
      months: '15th May - 31st Dec',
      description: 'Module I and II will be covered along with weekly topic wise tests and two major group-wise tests (Aug and Nov)',
      highlight: 'Foundation Building',
    },
    {
      phase: 'Daily Revision Phase',
      duration: 'Transition Period',
      months: '1st January - 15th January',
      description: 'Daily Revision Lectures + Daily Revision Tests of Module I & II. Students who find difficulty in coping up with JEE/NEET syllabus can switch to MHT-CET Batch.',
      highlight: 'Revision & Flexibility',
    },
    {
      phase: 'Module III Coverage',
      duration: 'Class 12',
      months: '16th January - 10th March',
      description: 'Module III will be covered along with weekly topic wise tests.',
      highlight: 'Advanced Learning',
    },
    {
      phase: '11th Std Term Exams',
      duration: 'Class 11 Board Exams',
      months: '10th March - 31st March',
      description: '11th std term exams will be conducted at colleges. Preparatory leave for college exams.',
      highlight: 'Academic Assessment',
    },
    {
      phase: 'Complete Syllabus Coverage',
      duration: 'Class 12',
      months: '1st April - September End',
      description: 'Complete coverage of JEE/NEET syllabus (Module IV, V & VI) along with weekly topic wise tests and two major groupwise tests (May & Aug).',
      highlight: 'Comprehensive Coverage',
    },
    {
      phase: 'Test Series & Doubt Solving',
      duration: 'Intensive Practice',
      months: '1st October - 31st January',
      description: 'JEE/NEET Test series cum doubt solving sessions (Test series includes topic wise, group-wise and full length JEE/NEET tests offline (pen and paper exam) and online Computer Based Testing (CBT) + Theoretical board type exams.',
      highlight: 'Practice & Perfection',
    },
    {
      phase: 'HSC Board Examination',
      duration: 'Class 12 Boards',
      months: '1st February - March Mid',
      description: '1st Feb-20 Feb Preparatory leave for board examination. Feb end-March mid 12th Std final board examination.',
      highlight: 'Board Preparation',
    },
    {
      phase: 'Final Preparation & Crash Course',
      duration: 'Post-Board Exams',
      months: 'March mid onwards till final JEE/NEET Exam',
      description: 'Crash course for NEET batch. JEE Advanced Problem Practice and TEST Series for students who have scored 97+ percentile in JAN attempt. Others will attend 40-45 days MHT-CET Crash course + Online Full portion Tests.',
      highlight: 'Final Sprint',
    },
  ]

  return (
    <div className="container-page py-10">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-700 mb-3">
            IIT-JEE / NEET Calendar
          </h1>
        </div>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          A structured academic calendar for IIT-JEE and NEET preparation
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-dark to-slate-300 hidden md:block"></div>

        <div className="space-y-6 md:space-y-8">
          {timeline.map((phase, idx) => (
            <div
              key={idx}
              data-timeline-item
              data-index={idx}
              className={`relative transition-all duration-1000 ease-out ${
                visibleIndex >= idx
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : 'opacity-0 translate-x-8 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                {/* Timeline Marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-dark via-brand to-brand-dark flex items-center justify-center text-white font-bold text-base md:text-lg shadow-xl hover:scale-110 transition-transform duration-300 border-4 border-white">
                    {idx + 1}
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-brand-dark animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 card bg-white rounded-2xl p-4 md:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-l-4 border-brand-dark">
                  {/* Header */}
                  <div className="mb-3">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand/20 text-brand-dark text-xs font-bold mb-2">
                      {phase.highlight}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">{phase.months}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
                      <span className="font-medium text-slate-900">{phase.phase}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600">{phase.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-4 text-sm md:text-base">{phase.description}</p>

                  {/* Decorative Bottom Border */}
                  <div className="h-1 bg-gradient-to-r from-brand via-brand-dark to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand/20 via-brand-dark/10 to-brand/20 p-8 md:p-10 border border-brand/30 shadow-xl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Important Examination Dates</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'IIT-JEE Main', dates: 'Session 1: January | Session 2: April', icon: '🎯' },
              { title: 'IIT-JEE Advanced', dates: 'Usually in May/June', icon: '🚀' },
              { title: 'NEET', dates: 'Usually in May', icon: '⚕️' },
              { title: 'Registration', dates: 'Check official websites for exact dates', icon: '📋' },
            ].map((exam, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{exam.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{exam.title}</h4>
                    <p className="text-sm text-slate-600">{exam.dates}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
