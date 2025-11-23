const stats = [
  { label: 'Teachers', value: '150+' },
  { label: 'Happy Students', value: '1 Lakh+' },
  { label: 'YouTube Viewers', value: '10M+' },
  { label: 'Hours Learned', value: '20M+' },
  { label: 'Branches', value: '8' },
]

export default function Stats() {
  return (
    <section className="container-page py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-6 text-center group">
            <div className="text-3xl font-extrabold text-[#004c8f] group-hover:text-brand-dark transition-colors duration-300">{s.value}</div>
            <div className="mt-1 text-sm text-[#004c8f]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}




