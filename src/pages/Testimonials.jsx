const items = [
  { 
    name: 'Dhruv Shinde', 
    college: 'IIT MANDI',
    text: 'Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi. I\'m deeply grateful for their support & dedication. Thank you, Matrix Science Academy!',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Rahul Kavhale', 
    college: 'IIT KHARAGPUR',
    text: 'Thanks to Matrix Science Academy, I achieved my goal of getting into IIT Guwahati. Their expert teaching and supportive environment were vital to my success. I\'m truly grateful for their guidance and encouragement. Thank you, Matrix Science Academy!',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Maithili Sagare', 
    college: 'IIT GUWAHATI',
    text: 'Matrix Science Academy played a crucial role in my success. The expert guidance and rigorous curriculum prepared me well for IIT Guwahati. I\'m grateful for the support and resources that helped me achieve my goals.',
    exam: 'IIT-JEE' 
  },
  { 
    name: 'Dhruv Unde', 
    college: 'NIT TRICHY',
    text: 'Matrix Science Academy was instrumental in my journey to NIT Trichy. The exceptional teaching & comprehensive support I received helped me excel and achieve my dream. I\'m deeply thankful for the dedication of the faculty and the effective study resources that guided me throughout.',
    exam: 'MHT-CET' 
  },
  { 
    name: 'Soham Deshpande', 
    college: 'NIT JAMSHEDPUR',
    text: 'Matrix Science Academy was a game-changer for me. The tailored instruction and supportive environment were key to my success in securing a spot at NIT Jamshedpur. I\'m grateful for the commitment and expertise of the faculty that helped me reach my goals.',
    exam: 'MHT-CET' 
  },
]

export default function Testimonials() {
  return (
    <div className="interior-page">
      <section className="page-section-white">
        <div className="container-page">
          <h1 className="interior-title mb-2">Testimonials</h1>
          <p className="mb-5 text-neutral-600">Hear from our successful students who achieved their dreams</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((t, idx) => (
              <div 
                key={idx} 
                className="page-card rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
            <div className="relative border-b border-neutral-200 bg-neutral-50 px-6 pt-8 pb-6">
              <div className="absolute top-4 left-6 opacity-15">
                <svg className="h-16 w-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.003z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <p className="text-base font-medium italic leading-relaxed text-neutral-800">
                  "{t.text}"
                </p>
              </div>
            </div>

            {/* Person Details Section */}
            <div className="border-t border-neutral-200 bg-white px-6 py-5">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-lg font-bold text-neutral-800 transition-colors group-hover:bg-neutral-300">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-neutral-900">{t.name}</div>
                  <div className="mt-0.5 text-sm font-medium text-neutral-700">{t.college}</div>
                  <div className="text-xs text-body/80 mt-1">{t.exam}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>
    </div>
  )
}




