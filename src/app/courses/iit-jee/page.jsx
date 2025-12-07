'use client'
import Link from 'next/link'

export default function IITJEEPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#B30027] to-[#8a001e] text-white py-16 md:py-24">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-4xl">🎯</span>
                            <span className="font-semibold">Premium Engineering Entrance</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IIT-JEE</h1>
                        <p className="text-xl md:text-2xl mb-2 opacity-90">Joint Entrance Examination</p>
                        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                            The gateway to India's premier engineering institutions - IITs, NITs, and IIITs
                        </p>
                    </div>
                </div>
            </section>

            {/* About the Exam */}
            <section className="container-page py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-6">About IIT-JEE</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed mb-4">
                            The Joint Entrance Examination (JEE) is India's most prestigious engineering entrance exam,
                            conducted for admission to the Indian Institutes of Technology (IITs), National Institutes of
                            Technology (NITs), Indian Institutes of Information Technology (IIITs), and other centrally
                            funded technical institutions.
                        </p>
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed">
                            JEE is conducted in two stages: JEE Main and JEE Advanced. JEE Main serves as a gateway for
                            JEE Advanced and admission to NITs, IIITs, and other institutions, while JEE Advanced is
                            specifically for admission to the 23 IITs across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">Exam Pattern</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* JEE Main */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-2xl font-bold text-[#B30027] mb-4">JEE Main</h3>
                                <ul className="space-y-3 text-[#0a1a67]/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">📅</span>
                                        <span><strong>When:</strong> January & April (Two attempts per year)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">📝</span>
                                        <span><strong>Subjects:</strong> Physics, Chemistry, Mathematics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">⏱️</span>
                                        <span><strong>Duration:</strong> 3 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">❓</span>
                                        <span><strong>Questions:</strong> 90 questions (30 per subject)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">💯</span>
                                        <span><strong>Total Marks:</strong> 300</span>
                                    </li>
                                </ul>
                            </div>

                            {/* JEE Advanced */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-2xl font-bold text-[#B30027] mb-4">JEE Advanced</h3>
                                <ul className="space-y-3 text-[#0a1a67]/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">📅</span>
                                        <span><strong>When:</strong> May (Once a year)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">📝</span>
                                        <span><strong>Subjects:</strong> Physics, Chemistry, Mathematics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">⏱️</span>
                                        <span><strong>Duration:</strong> 3 hours per paper (2 papers)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">🎯</span>
                                        <span><strong>Eligibility:</strong> Top 2.5 lakh JEE Main qualifiers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#B30027] font-bold">🏛️</span>
                                        <span><strong>For:</strong> Admission to 23 IITs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Achieve */}
            <section className="container-page py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">What You'll Achieve</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: '🏛️', title: 'Access to 23 IITs', desc: 'Study at India\'s most prestigious engineering institutes' },
                            { icon: '🎓', title: 'World-class Education', desc: 'Learn from the best faculty and cutting-edge curriculum' },
                            { icon: '💼', title: 'Excellent Placements', desc: 'Top companies with packages ranging from 20-50 LPA+' },
                            { icon: '🔬', title: 'Research Opportunities', desc: 'Access to state-of-the-art labs and research facilities' },
                            { icon: '🌍', title: 'Global Recognition', desc: 'IIT degree recognized worldwide for higher studies' },
                            { icon: '🤝', title: 'Strong Alumni Network', desc: 'Join a network of successful IIT alumni globally' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-[#B30027]/10 to-[#B30027]/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="text-xl font-bold text-[#0a1a67] mb-2">{item.title}</h3>
                                <p className="text-[#0a1a67]/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Results */}
            <section className="bg-[#0a1a67] text-white py-12 md:py-16">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Results</h2>
                        <div className="text-6xl md:text-7xl font-extrabold text-[#B30027] mb-4">12+</div>
                        <p className="text-xl md:text-2xl mb-6">IIT Admissions in 2025</p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">80+</div>
                                <p className="text-sm opacity-90">Students Qualified for JEE Advanced</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">32</div>
                                <p className="text-sm opacity-90">Students Scored 95%+ in JEE Advanced</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <p className="text-sm opacity-90">Success Rate in Top NITs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="container-page py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">Our Teaching Approach</h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Conceptual Clarity', desc: 'Deep understanding of fundamental concepts with real-world applications' },
                            { title: 'Advanced Problem Solving', desc: 'Extensive practice with IIT-level problems and previous year questions' },
                            { title: 'Regular Mock Tests', desc: 'Full-length mock tests simulating actual JEE Main and Advanced exams' },
                            { title: 'Personalized Attention', desc: 'Small batch sizes ensuring individual doubt clearing and mentorship' },
                            { title: 'Performance Tracking', desc: 'Detailed analysis of strengths and weaknesses with improvement plans' },
                            { title: 'Expert Faculty', desc: 'IIT alumni and experienced teachers with proven track records' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#B30027] rounded-full flex items-center justify-center text-white font-bold">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0a1a67] mb-2">{item.title}</h3>
                                    <p className="text-[#0a1a67]/70">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-page py-12">
                <div className="bg-gradient-to-r from-[#0a1a67] to-[#B30027] rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your IIT Journey?</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Join Matrix Science Academy and achieve your dream of studying at IIT
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/enquiry"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1a67] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Enquire Now
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1a67] px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                        >
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
