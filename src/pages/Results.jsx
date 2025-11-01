export default function Results() {
  const iitResults = [
    { name: 'Bhavesh Sandbhor', college: 'IIT GUWAHATI' },
    { name: 'Tejas Amritkar', college: 'IIT GUWAHATI' },
    { name: 'Shubham Mahajan', college: 'IIT GUWAHATI' },
    { name: 'Maithilee Sagare', college: 'IIT GUWAHATI' },
    { name: 'Rahul Kavhale', college: 'IIT GUWAHATI' },
    { name: 'Rajas Deshpande', college: 'IIT MANDI' },
    { name: 'Madhav Dahiphale', college: 'IIT KHARAGPUR' },
    { name: 'Sujal Upadhye', college: 'IIT KHARAGPUR' },
    { name: 'Soham Deshpande', college: 'IIT MANDI' },
    { name: 'Pratap Bhandari', college: 'IIT KHARAGPUR' },
    { name: 'Shardul Deshmukh', college: 'IIT MANDI' },
    { name: 'Harshwardhan Shinde', college: 'VNIT NAGPUR' },
  ]

  const nitResults = [
    { name: 'Neha Chandan', college: 'IIIT DHARWAD' },
    { name: 'Tejas Kulkarni', college: 'VNIT NAGPUR' },
    { name: 'Madhura Chate', college: 'NIT TRICHY' },
    { name: 'Dhruv Shinde', college: 'GSV BHUBANESWAR' },
    { name: 'Sanchit Kulkarni', college: 'IIIT VADODARA' },
    { name: 'Piyush Ambure', college: 'NIT JAMSHEDPUR' },
    { name: 'Dhruv Unde', college: 'NIT TRICHY' },
  ]

  const mhtcetToppers = [
    { name: 'Dhruv Shinde', percentile: '99.98' },
    { name: 'Shreyas Joshi', percentile: '99.97' },
    { name: 'Sean Dias', percentile: '99.95' },
    { name: 'Shubham More', percentile: '99.93' },
    { name: 'Dhruv Unde', percentile: '99.92' },
    { name: 'Sujal Kotgire', percentile: '99.91' },
    { name: 'Sanskar Dhanawade', percentile: '99.91' },
    { name: 'Shreya Jagtap', percentile: '99.90' },
    { name: 'Aviral Shirgupe', percentile: '99.89' },
    { name: 'Sayli Panse', percentile: '99.89' },
  ]

  const neetToppers = [
    { name: 'Mohit Nikam', score: '100/100 Biology', college: 'BJMC MBBS' },
    { name: 'Prathamesh Joshi', score: '100/100 Biology', college: 'MBBS' },
    { name: 'Aishwarya Gade', score: '100 Percentile', college: 'MBBS' },
  ]

  return (
    <div className="container-content py-10">
      <h1 className="text-3xl font-bold mb-2">Results & Achievements</h1>
      <p className="text-slate-600 mb-8">Celebrating our students' remarkable achievements in competitive exams</p>

      {/* MHT-CET Results 2024 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">MHT-CET Results 2024</h2>
          <div className="text-sm text-slate-600 bg-brand/20 px-4 py-2 rounded-full">
            123 students scored 98+ percentile | 60 students scored 99+ percentile
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {mhtcetToppers.map((student, idx) => (
            <div key={idx} className="card p-4 text-center">
              <div className="text-2xl font-extrabold text-brand-dark">{student.percentile}</div>
              <div className="text-sm font-medium text-slate-900 mt-1">Percentile</div>
              <div className="text-xs text-slate-600 mt-2">{student.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IIT Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">IIT Admissions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {iitResults.map((student, idx) => (
            <div key={idx} className="card p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-slate-900">{student.name}</div>
              <div className="text-sm text-brand mt-1">{student.college}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NIT Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">NIT & IIIT Admissions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nitResults.map((student, idx) => (
            <div key={idx} className="card p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-slate-900">{student.name}</div>
              <div className="text-sm text-brand mt-1">{student.college}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEET Results */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">NEET Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {neetToppers.map((student, idx) => (
            <div key={idx} className="card p-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="font-semibold text-slate-900">{student.name}</div>
              <div className="text-lg font-extrabold text-brand-dark mt-2">{student.score}</div>
              <div className="text-sm text-brand mt-1">{student.college}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

