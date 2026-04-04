'use client'
import Link from 'next/link'
import CourseHeroPlain from '@/components/CourseHeroPlain'

export default function IITJEEPage() {
    return (
        <div className="interior-page">
            <CourseHeroPlain
                eyebrow="Premium engineering entrance"
                title="IIT-JEE"
                subtitle="Joint Entrance Examination"
                description="The gateway to India's premier engineering institutions — IITs, NITs, and IIITs."
            />

            {/* About the Exam */}
            <section className="page-section-white">
                <div className="container-page max-w-4xl mx-auto">
                    <h2 className="interior-section-title mb-6">About IIT-JEE</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-body/80 text-lg leading-relaxed mb-4">
                            The Joint Entrance Examination (JEE) is India's most prestigious engineering entrance exam,
                            conducted for admission to the Indian Institutes of Technology (IITs), National Institutes of
                            Technology (NITs), Indian Institutes of Information Technology (IIITs), and other centrally
                            funded technical institutions.
                        </p>
                        <p className="text-body/80 text-lg leading-relaxed">
                            JEE is conducted in two stages: JEE Main and JEE Advanced. JEE Main serves as a gateway for
                            JEE Advanced and admission to NITs, IIITs, and other institutions, while JEE Advanced is
                            specifically for admission to the 23 IITs across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="page-section-gray">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="interior-section-title mb-8">Exam Pattern</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* JEE Main */}
                            <div className="page-card p-6">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4">JEE Main</h3>
                                <ul className="space-y-3 text-body/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">📅</span>
                                        <span><strong>When:</strong> January & April (Two attempts per year)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">📝</span>
                                        <span><strong>Subjects:</strong> Physics, Chemistry, Mathematics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">⏱️</span>
                                        <span><strong>Duration:</strong> 3 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">❓</span>
                                        <span><strong>Questions:</strong> 90 questions (30 per subject)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">💯</span>
                                        <span><strong>Total Marks:</strong> 300</span>
                                    </li>
                                </ul>
                            </div>

                            {/* JEE Advanced */}
                            <div className="page-card p-6">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4">JEE Advanced</h3>
                                <ul className="space-y-3 text-body/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">📅</span>
                                        <span><strong>When:</strong> May (Once a year)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">📝</span>
                                        <span><strong>Subjects:</strong> Physics, Chemistry, Mathematics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">⏱️</span>
                                        <span><strong>Duration:</strong> 3 hours per paper (2 papers)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">🎯</span>
                                        <span><strong>Eligibility:</strong> Top 2.5 lakh JEE Main qualifiers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-neutral-600 font-bold">🏛️</span>
                                        <span><strong>For:</strong> Admission to 23 IITs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Achieve */}
            <section className="page-section-white">
                <div className="container-page max-w-4xl mx-auto">
                    <h2 className="interior-section-title mb-8">What You'll Achieve</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: '🏛️', title: 'Access to 23 IITs', desc: 'Study at India\'s most prestigious engineering institutes' },
                            { icon: '🎓', title: 'World-class Education', desc: 'Learn from the best faculty and cutting-edge curriculum' },
                            { icon: '💼', title: 'Excellent Placements', desc: 'Top companies with packages ranging from 20-50 LPA+' },
                            { icon: '🔬', title: 'Research Opportunities', desc: 'Access to state-of-the-art labs and research facilities' },
                            { icon: '🌍', title: 'Global Recognition', desc: 'IIT degree recognized worldwide for higher studies' },
                            { icon: '🤝', title: 'Strong Alumni Network', desc: 'Join a network of successful IIT alumni globally' }
                        ].map((item, idx) => (
                            <div key={idx} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-shadow hover:shadow-md">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                <p className="text-body/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Results */}
            <section className="border-y border-neutral-200 bg-neutral-50 py-8 md:py-10">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto text-center text-neutral-900">
                        <h2 className="interior-section-title mb-4">Our Results</h2>
                        <div className="text-6xl md:text-7xl font-extrabold text-neutral-800 mb-4">12+</div>
                        <p className="text-xl md:text-2xl mb-6 text-neutral-700">IIT Admissions in 2025</p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">80+</div>
                                <p className="text-sm text-neutral-600">Students Qualified for JEE Advanced</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">32</div>
                                <p className="text-sm text-neutral-600">Students Scored 95%+ in JEE Advanced</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <p className="text-sm text-neutral-600">Success Rate in Top NITs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="page-section-gray">
                <div className="container-page max-w-4xl mx-auto">
                    <h2 className="interior-section-title mb-8">Our Teaching Approach</h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Conceptual Clarity', desc: 'Deep understanding of fundamental concepts with real-world applications' },
                            { title: 'Advanced Problem Solving', desc: 'Extensive practice with IIT-level problems and previous year questions' },
                            { title: 'Regular Mock Tests', desc: 'Full-length mock tests simulating actual JEE Main and Advanced exams' },
                            { title: 'Personalized Attention', desc: 'Small batch sizes ensuring individual doubt clearing and mentorship' },
                            { title: 'Performance Tracking', desc: 'Detailed analysis of strengths and weaknesses with improvement plans' },
                            { title: 'Expert Faculty', desc: 'IIT alumni and experienced teachers with proven track records' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 page-card p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex-shrink-0 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-body/80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section-white">
                <div className="container-page">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-12 text-center text-neutral-900">
                    <h2 className="interior-section-title mb-4">Ready to Start Your IIT Journey?</h2>
                    <p className="text-lg md:text-xl mb-8 text-neutral-600">
                        Join Matrix Science Academy and achieve your dream of studying at IIT
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/enquiry"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-neutral-800"
                        >
                            Enquire Now
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-8 py-4 font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
                        >
                            View All Courses
                        </Link>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
