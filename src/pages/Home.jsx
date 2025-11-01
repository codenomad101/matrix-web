import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider.jsx'
import Stats from '../components/Stats.jsx'

const topTestimonials = [
  { 
    name: 'Dhruv Shinde', 
    college: 'IIT MANDI',
    text: 'Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi.',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Rahul Kavhale', 
    college: 'IIT KHARAGPUR',
    text: 'Thanks to Matrix Science Academy, I achieved my goal of getting into IIT. Their expert teaching and supportive environment were vital to my success.',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Dhruv Unde', 
    college: 'NIT TRICHY',
    text: 'Matrix Science Academy was instrumental in my journey to NIT Trichy. The exceptional teaching & comprehensive support helped me excel.',
    exam: 'MHT-CET' 
  },
]

const topResults = {
  mhtcet: { count: 123, percentile: '98+', highlight: '60 students scored 99+ percentile' },
  iit: { count: 12, colleges: 'IIT Guwahati, IIT Kharagpur, IIT Mandi' },
  neet: { score: '100/100', subject: 'Biology', students: 'Multiple students' },
}

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* Top Images Section */}
      <section className="container-content py-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/top1.png" 
              alt="Top Achievement 1" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/top2.png" 
              alt="Top Achievement 2" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container-content py-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold">Why MSA?</h3>
            <p className="mt-2 text-slate-600">150+ teachers by choice, curated content, and disciplined guidance for competitive exams.</p>
          </div>
          <div className="card p-6 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold">Programs</h3>
            <p className="mt-2 text-slate-600">IIT-JEE, MHT-CET, NEET, IISER Foundation, and 8th–12th board prep.</p>
          </div>
          <div className="card p-6 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold">Branches</h3>
            <p className="mt-2 text-slate-600">8 branches: Pradhikaran, Nigdi, Ravet, Shahunagar, Chinchwad, Wakad, Moshi.</p>
          </div>
        </div>
      </section>

      <Stats />

      {/* Results Section */}
      <section className="container-content py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Our Results</h2>
          <Link to="/results" className="btn-outline">View All Results</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-4xl font-extrabold text-brand-dark mb-2">{topResults.mhtcet.count}</div>
            <div className="text-lg font-semibold text-slate-900">MHT-CET 2024</div>
            <div className="text-sm text-slate-600 mt-2">Students scored {topResults.mhtcet.percentile} percentile</div>
            <div className="text-xs text-brand mt-2">{topResults.mhtcet.highlight}</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-extrabold text-brand-dark mb-2">{topResults.iit.count}+</div>
            <div className="text-lg font-semibold text-slate-900">IIT Admissions</div>
            <div className="text-sm text-slate-600 mt-2">{topResults.iit.colleges}</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-extrabold text-brand-dark mb-2">{topResults.neet.score}</div>
            <div className="text-lg font-semibold text-slate-900">NEET Biology</div>
            <div className="text-sm text-slate-600 mt-2">{topResults.neet.students} achieved perfect score</div>
          </div>
        </div>
        
        {/* Enhanced Results Display */}
        <div className="mt-10">
          <div className="rounded-2xl bg-gradient-to-br from-brand/30 to-brand-dark/20 p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">MHT-CET 2024 Excellence</h3>
              <p className="text-slate-700">123 students scored 98+ percentile | 60 students scored 99+ percentile</p>
            </div>
            
            {/* Top Percentile Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { name: 'Dhruv Shinde', percentile: '99.98', subject: 'PCM' },
                { name: 'Shreyas Joshi', percentile: '99.97', subject: 'PCM' },
                { name: 'Sean Dias', percentile: '99.95', subject: 'PCM' },
                { name: 'Shubham More', percentile: '99.93', subject: 'PCM' },
                { name: 'Dhruv Unde', percentile: '99.92', subject: 'PCM' },
              ].map((student, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-extrabold text-brand-dark mb-1">{student.percentile}</div>
                  <div className="text-xs text-slate-500 mb-2">Percentile</div>
                  <div className="text-sm font-semibold text-slate-900">{student.name}</div>
                  <div className="text-xs text-brand mt-1">{student.subject}</div>
                </div>
              ))}
            </div>

            {/* Achievement Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-extrabold text-brand-dark mb-2">12+</div>
                <div className="text-lg font-semibold text-slate-900">IIT Admissions</div>
                <div className="text-sm text-slate-600 mt-2">IIT Guwahati, Kharagpur, Mandi</div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-extrabold text-brand-dark mb-2">100/100</div>
                <div className="text-lg font-semibold text-slate-900">NEET Biology</div>
                <div className="text-sm text-slate-600 mt-2">Perfect scores achieved</div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-extrabold text-brand-dark mb-2">60</div>
                <div className="text-lg font-semibold text-slate-900">99+ Percentile</div>
                <div className="text-sm text-slate-600 mt-2">MHT-CET 2024</div>
              </div>
            </div>

            {/* Results Images */}
            <div className="mt-6 flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full">
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/50 p-2">
                  <img 
                    src="/images/results.png" 
                    alt="Matrix Science Academy Results" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg bg-white/50 p-2">
                  <img 
                    src="/images/results2.png" 
                    alt="Matrix Science Academy Results 2" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand/10 py-6">
        <div className="container-content">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Student Testimonials</h2>
            <Link to="/testimonials" className="btn-outline bg-white">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topTestimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Quote Section with Brand Color */}
                <div className="relative bg-brand px-6 pt-8 pb-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 left-6 opacity-20">
                    <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.003z"/>
                    </svg>
                  </div>
                  
                  {/* Quote Text */}
                  <div className="relative z-10">
                    <p className="text-slate-900 text-base leading-relaxed font-medium italic">
                      "{t.text}"
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-dark/20 rounded-tl-full transform translate-x-8 translate-y-8"></div>
                </div>

                {/* Person Details Section */}
                <div className="px-6 py-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center text-slate-900 font-bold text-lg shrink-0 group-hover:bg-brand/50 transition-colors duration-300">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-lg">{t.name}</div>
                      <div className="text-sm font-medium text-brand mt-0.5">{t.college}</div>
                      <div className="text-xs text-slate-500 mt-1">{t.exam}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="container-content py-8">
        <div className="rounded-2xl bg-brand/30 border border-brand/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Ready to start your journey?</h3>
            <p className="text-slate-700 mt-1">Speak with our counsellors and get a personalized plan.</p>
          </div>
          <Link to="/enquiry" className="btn-primary">Enquire Now</Link>
        </div>
      </section>
    </div>
  )
}


