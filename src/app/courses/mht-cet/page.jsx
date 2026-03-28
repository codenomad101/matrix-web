'use client'
import Link from 'next/link'
import CourseHeroPlain from '@/components/CourseHeroPlain'

export default function MHTCETPage() {
    return (
        <div className="interior-page">
            <CourseHeroPlain
                eyebrow="Maharashtra state entrance"
                title="MHT-CET"
                subtitle="Maharashtra Common Entrance Test"
                description="Maharashtra's premier entrance exam for engineering and pharmacy admissions."
            />

            {/* About the Exam */}
            <section className="page-section-white">
                <div className="container-page max-w-4xl mx-auto">
                    <h2 className="interior-section-title mb-6">About MHT-CET</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-body/80 text-lg leading-relaxed mb-4">
                            The Maharashtra Common Entrance Test (MHT-CET) is a state-level entrance examination
                            conducted by the State Common Entrance Test Cell, Government of Maharashtra, for admission
                            to undergraduate professional courses in engineering, pharmacy, and agriculture in
                            Maharashtra state.
                        </p>
                        <p className="text-body/80 text-lg leading-relaxed">
                            MHT-CET is the gateway to prestigious institutions like COEP (College of Engineering Pune),
                            VJTI (Veermata Jijabai Technological Institute), and other top engineering colleges across
                            Maharashtra, offering quality education at affordable costs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="page-section-gray">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="interior-section-title mb-8">Exam Pattern</h2>
                        <div className="page-card p-8">
                            <ul className="space-y-4 text-body/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">📅</span>
                                    <span><strong>Exam Date:</strong> Usually conducted in May</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">📝</span>
                                    <span><strong>Subjects:</strong> Physics, Chemistry, Mathematics (3 separate papers)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">⏱️</span>
                                    <span><strong>Duration:</strong> 90 minutes per paper</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">❓</span>
                                    <span><strong>Questions:</strong> 50 questions per paper (150 total)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">💯</span>
                                    <span><strong>Total Marks:</strong> 100 per paper (300 total)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">📖</span>
                                    <span><strong>Syllabus:</strong> Based on 11th and 12th Maharashtra State Board</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">✅</span>
                                    <span><strong>Marking:</strong> +2 for correct, -1 for incorrect (negative marking)</span>
                                </li>
                            </ul>
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
                            { icon: '🏛️', title: 'Top Engineering Colleges', desc: 'COEP, VJTI, PICT, and other premier institutes in Maharashtra' },
                            { icon: '💰', title: 'Affordable Education', desc: 'Quality engineering education at government college fees' },
                            { icon: '🎓', title: 'State Board Advantage', desc: 'Exam pattern aligned with Maharashtra State Board syllabus' },
                            { icon: '🤝', title: 'Strong Alumni Network', desc: 'Connect with successful alumni across Maharashtra' },
                            { icon: '💼', title: 'Excellent Placements', desc: 'Top companies recruit from Maharashtra engineering colleges' },
                            { icon: '🏠', title: 'Study Near Home', desc: 'Colleges across Maharashtra - Pune, Mumbai, Nagpur, and more' }
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
                        <h2 className="interior-section-title mb-4">Our Outstanding Results</h2>
                        <div className="text-6xl md:text-7xl font-extrabold text-neutral-800 mb-4">86</div>
                        <p className="text-xl md:text-2xl mb-6 text-neutral-700">Students Scored 99+ Percentile in 2025</p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">162</div>
                                <p className="text-sm text-neutral-600">Students Scored 98+ Percentile</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">95%</div>
                                <p className="text-sm text-neutral-600">Success Rate in Top Colleges</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">#1</div>
                                <p className="text-sm text-neutral-600">Ranked in Pune Region</p>
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
                            { title: 'State Board Focused', desc: 'Curriculum perfectly aligned with Maharashtra State Board syllabus' },
                            { title: 'Comprehensive Coverage', desc: 'Complete coverage of 11th and 12th standard topics with depth' },
                            { title: 'Regular Mock Tests', desc: 'Weekly tests simulating actual MHT-CET exam pattern and difficulty' },
                            { title: 'Time Management', desc: 'Special focus on solving 50 questions in 90 minutes efficiently' },
                            { title: 'Previous Year Analysis', desc: 'Detailed analysis of past 10 years MHT-CET question papers' },
                            { title: 'Doubt Clearing Sessions', desc: 'Daily doubt sessions ensuring no concept is left unclear' }
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
                    <h2 className="interior-section-title mb-4">Ready to Ace MHT-CET?</h2>
                    <p className="text-lg md:text-xl mb-8 text-neutral-600">
                        Join Matrix Science Academy and secure admission to top engineering colleges in Maharashtra
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
