import { useEffect, useState } from 'react'

export default function MHTCETTimeline() {
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
      phase: '11th STD Syllabus Coverage',
      duration: 'Class 11',
      months: '15th May - 31st Dec',
      description: 'Complete coverage of 11th STD syllabus along with weekly topic wise tests and two major groupwise tests (Aug & Nov).',
      highlight: 'Foundation Building',
    },
    {
      phase: 'Daily Revision Phase',
      duration: 'Transition Period',
      months: '1st January - 15th January',
      description: 'Daily Revision Lectures + Daily Revision Tests of 11th std syllabus.',
      highlight: 'Revision & Reinforcement',
    },
    {
      phase: '12th STD Syllabus (Partial) + 11th STD Tests',
      duration: 'Class 12 (Early)',
      months: '16th January - 10th March',
      description: 'From 12th std syllabus, 3 lessons of each subject will be covered during this period. Although we are covering 12th std syllabus during this period, student needs to be in touch with 11th std syllabus as he/she is expected to appear for 11th std college exams which will be held around March end. Weekly tests during this period will be based on 11th std syllabus.',
      highlight: 'Balanced Learning',
    },
    {
      phase: '11th Std Term Exams',
      duration: 'Class 11 Board Exams',
      months: '10th March - 31st March',
      description: '11th std term exams will be conducted at colleges. Preparatory leave for college exams.',
      highlight: 'Academic Assessment',
    },
    {
      phase: '12th STD Complete Syllabus Coverage',
      duration: 'Class 12',
      months: '1st April - October End',
      description: 'Complete coverage of 12th STD syllabus along with weekly topic wisely tests and two major groupwise tests (May & Aug).',
      highlight: 'Comprehensive Coverage',
    },
    {
      phase: 'Revision Lectures & Tests',
      duration: 'Intensive Revision',
      months: '1st November - 31st January',
      description: 'Revision lectures + Topic wise + Groupwise + Full syllabus theoretical & MCQs based Revision Tests.',
      highlight: 'Practice & Perfection',
    },
    {
      phase: 'HSC Board Examination',
      duration: 'Class 12 Boards',
      months: '1st February - March Mid',
      description: '1st Feb-20 Feb - Preparatory leave for board examination. Feb end-March mid 12th Std final board examination.',
      highlight: 'Board Preparation',
    },
    {
      phase: 'MHT-CET Crash Course',
      duration: 'Final Preparation',
      months: 'March mid onwards till final MHT-CET Exam',
      description: '40-45 days MHT-CET Crash course + Online full portion tests.',
      highlight: 'Final Sprint',
    },
  ]

  return (
    <div className="container-page py-10">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-700 mb-3">
            MHT-CET Calendar
          </h1>
        </div>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          A comprehensive academic calendar for MHT-CET preparation
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
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">MHT-CET Important Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Exam Date', info: 'Usually in April/May (Check official website for exact dates)', icon: '📅' },
              { title: 'Subjects', info: 'Physics, Chemistry, Mathematics/Biology (PCM/PCB)', icon: '📚' },
              { title: 'Total Marks', info: '200 marks (50 marks per subject for PCM/PCB)', icon: '🎯' },
              { title: 'Duration', info: '3 hours (180 minutes)', icon: '⏱️' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.info}</p>
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
