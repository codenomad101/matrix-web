export default function Courses() {
  const sections = [
    { id: 'iit', title: 'IIT-JEE (Main/Advanced)', desc: 'Concept mastery, problem-solving drills, and test series.' },
    { id: 'mhtcet', title: 'MHT-CET', desc: 'Speed-focused practice, previous year analysis, and revision.' },
    { id: 'neet', title: 'NEET', desc: 'NCRT-first approach, weekly assessments, and mentorship.' },
    { id: 'iiser', title: 'IISER Foundation', desc: 'Early research aptitude and strong science fundamentals.' },
    { id: 'board', title: '8th–12th Boards', desc: 'Boards-aligned lectures, notes, and focused writing practice.' },
  ]
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold text-slate-700">Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {sections.map((s) => (
          <a key={s.id} id={s.id} href={`#${s.id}`} className="card p-6 block hover:-translate-y-0.5 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}




