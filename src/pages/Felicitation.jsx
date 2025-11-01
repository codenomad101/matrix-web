export default function Felicitation() {
  return (
    <div className="container-content py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Felicitation Ceremonies</h1>
        <p className="text-slate-600 text-lg">
          Celebrating the outstanding achievements of our students
        </p>
      </div>

      <div className="space-y-12">
        {/* Felicitation Section 1 */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Felicitation Ceremony 2024</h2>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl w-full">
              <img 
                src="/images/felicitation.png" 
                alt="Felicitation Ceremony 2024" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Felicitation Section 2 */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Achievement Awards & Recognition</h2>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl w-full">
              <img 
                src="/images/felicitation2.png" 
                alt="Achievement Awards & Recognition" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

