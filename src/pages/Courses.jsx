'use client'
import Link from 'next/link'

export default function Courses() {
  const sections = [
    { id: 'iit', title: 'IIT-JEE (Main/Advanced)', href: '/courses/iit-jee', desc: 'Concept mastery, problem-solving drills, and test series.' },
    { id: 'mhtcet', title: 'MHT-CET', href: '/courses/mht-cet', desc: 'Speed-focused practice, previous year analysis, and revision.' },
    { id: 'neet', title: 'NEET', href: '/courses/neet', desc: 'NCRT-first approach, weekly assessments, and mentorship.' },
    { id: 'iiser', title: 'IISER Foundation', href: '/courses/iiser', desc: 'Early research aptitude and strong science fundamentals.' },
    { id: 'board', title: '8th–12th Boards', href: '/courses', desc: 'Boards-aligned lectures, notes, and focused writing practice.' },
  ]
  return (
    <section className="page-section-white">
      <div className="container-page">
        <h1 className="section-heading mb-5">Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link key={s.id} href={s.href} className="page-card-hover block">
              <h3 className="text-lg font-semibold text-[#0a1a67] mb-2">{s.title}</h3>
              <p className="text-[#0a1a67]/80 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}




