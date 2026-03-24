export default function Performance() {
  const performanceData = [
    { year: 2022, students: 12, growth: null },
    { year: 2023, students: 36, growth: 200 },
    { year: 2024, students: 60, growth: 66.7 },
  ]

  const maxStudents = Math.max(...performanceData.map(d => d.students))

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-heading mb-3">
              Number of Students Scoring More than 99 Percentile
            </h1>
            <p className="text-body text-lg">
              Consistent upward trend demonstrating our commitment to excellence
            </p>
          </div>

          {/* Visual Chart */}
          <div className="page-card p-6 sm:p-8 mb-5">
        <div className="flex flex-col sm:flex-row items-end justify-center gap-6 sm:gap-8 mb-5" style={{ minHeight: '350px', alignItems: 'flex-end' }}>
          {performanceData.map((data, idx) => {
            const heightPercent = (data.students / maxStudents) * 100
            const barHeight = Math.max((heightPercent / 100) * 280, 80) // Minimum 80px, max 280px based on 100%
            return (
              <div key={idx} className="flex flex-col items-center gap-3 flex-1 max-w-[200px]">
                {/* Number above bar */}
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-2">{data.students}</div>
                {/* Bar */}
                <div className="relative w-full flex flex-col items-center justify-end">
                  <div 
                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand transition-all duration-500 hover:shadow-xl hover:scale-105"
                    style={{ height: `${barHeight}px`, minHeight: '80px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 rounded-t-lg"></div>
                  </div>
                </div>
                {/* Year Label */}
                <div className="text-lg sm:text-xl font-bold text-heading mt-2">{data.year}</div>
                {/* Growth Badge */}
                {data.growth && (
                  <div className="px-3 py-1 rounded-full bg-brand/20 text-brand-dark text-sm font-semibold">
                    +{data.growth}% Growth
                  </div>
                )}
              </div>
            )
          })}
        </div>
          </div>

          {/* Year Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-5">
            <div className="page-card p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl font-extrabold text-heading mb-2">12</div>
              <div className="text-lg font-semibold text-body mb-3">Students in 2022</div>
              <p className="text-body text-sm">
                The number of students scoring above 99 percentile was 12.
              </p>
            </div>
            <div className="page-card p-6 hover:-translate-y-1 transition-transform duration-300 border-2 border-[var(--brand-red)]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="text-4xl font-extrabold text-heading">36</div>
                <div className="px-3 py-1 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-sm font-bold">+200%</div>
              </div>
              <div className="text-lg font-semibold text-body mb-3">Students in 2023</div>
              <p className="text-body text-sm">
                The number increased significantly to 36 students, reflecting a growth of 200% from the previous year.
              </p>
            </div>
            <div className="page-card p-6 hover:-translate-y-1 transition-transform duration-300 border-2 border-[var(--brand-red)]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="text-4xl font-extrabold text-heading">60</div>
                <div className="px-3 py-1 rounded-full bg-[var(--brand-red)]/10 text-[var(--brand-red)] text-sm font-bold">+66.7%</div>
              </div>
              <div className="text-lg font-semibold text-body mb-3">Students in 2024</div>
              <p className="text-body text-sm">
                The number further increased to 60 students, showing an impressive growth of 66.7% from 2023.
              </p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="rounded-2xl bg-[var(--brand-red)]/5 p-8 sm:p-10 border border-gray-200/80">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-[var(--brand-red)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-heading">Achievement Summary</h3>
              </div>
              <p className="text-body text-lg leading-relaxed">
                The data demonstrates a consistent upward trend in the number of students achieving top percentiles
                in the CET exam, highlighting the effectiveness of the educational strategies and the dedication of
                both students and faculty at Matrix Science Academy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

