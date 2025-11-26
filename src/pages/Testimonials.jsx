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
    <div className="container-page py-10">
      <h1 className="text-3xl font-bold mb-2 text-[#0a1a67]">Testimonials</h1>
      <p className="text-[#0a1a67] mb-8">Hear from our successful students who achieved their dreams</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
          >
            {/* Quote Section with Brand Color */}
            <div className="relative bg-brand px-6 pt-8 pb-6">
              {/* Quote Icon */}
              <div className="absolute top-4 left-6 opacity-20">
                <svg className="w-16 h-16 text-[#0a1a67]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.986zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.481.967-5 2.848-5 7.153 0 3.031 1.214 5.555 3.003 7.266h-7.003z"/>
                </svg>
              </div>
              
              {/* Quote Text */}
              <div className="relative z-10">
                <p className="text-[#0a1a67] text-base leading-relaxed font-medium italic">
                  "{t.text}"
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-dark/20 rounded-tl-full transform translate-x-8 translate-y-8"></div>
            </div>

            {/* Person Details Section */}
            <div className="px-6 py-5 bg-white border-t border-[#0a1a67]/10">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center text-[#0a1a67] font-bold text-lg shrink-0 group-hover:bg-brand/50 transition-colors duration-300">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#0a1a67] text-lg">{t.name}</div>
                  <div className="text-sm font-medium text-brand mt-0.5">{t.college}</div>
                  <div className="text-xs text-[#0a1a67] mt-1">{t.exam}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}




