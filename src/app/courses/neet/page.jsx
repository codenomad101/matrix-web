'use client'
import Link from 'next/link'
import CourseHeroPlain from '@/components/CourseHeroPlain'

export default function NEETPage() {
    return (
        <div className="interior-page">
            <CourseHeroPlain
                eyebrow="Medical entrance examination"
                title="NEET"
                subtitle="National Eligibility cum Entrance Test"
                description="The single gateway to MBBS, BDS, and AYUSH courses across India."
            />

            {/* About the Exam */}
            <section className="page-section-white">
                <div className="container-page max-w-4xl mx-auto">
                    <h2 className="interior-section-title mb-6">About NEET</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-body/80 text-lg leading-relaxed mb-4">
                            The National Eligibility cum Entrance Test (NEET) is the single entrance examination for
                            admission to MBBS, BDS, and AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy)
                            courses in government and private medical colleges across India.
                        </p>
                        <p className="text-body/80 text-lg leading-relaxed">
                            Conducted by the National Testing Agency (NTA), NEET is a highly competitive exam that opens
                            doors to a prestigious medical career. With over 18 lakh students appearing annually,
                            thorough preparation is essential for success.
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
                                    <span><strong>Exam Date:</strong> Usually conducted in May (Once a year)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">📝</span>
                                    <span><strong>Subjects:</strong> Physics, Chemistry, Biology (Botany & Zoology)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">⏱️</span>
                                    <span><strong>Duration:</strong> 3 hours 20 minutes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">❓</span>
                                    <span><strong>Questions:</strong> 200 questions (180 to be attempted)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">💯</span>
                                    <span><strong>Total Marks:</strong> 720 marks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">📖</span>
                                    <span><strong>Syllabus:</strong> NCERT (11th & 12th) - Physics, Chemistry, Biology</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-600 font-bold text-xl">✅</span>
                                    <span><strong>Marking:</strong> +4 for correct, -1 for incorrect</span>
                                </li>
                            </ul>
                            <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                                <p className="text-sm text-neutral-700">
                                    <strong>Subject-wise Distribution:</strong> Physics (45 Q), Chemistry (45 Q),
                                    Botany (45 Q), Zoology (45 Q) - Total 180 questions to be attempted from 200
                                </p>
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
                            { icon: '🏥', title: 'MBBS Admission', desc: 'Admission to government and private medical colleges across India' },
                            { icon: '🦷', title: 'BDS & AYUSH', desc: 'Eligibility for dental and alternative medicine courses' },
                            { icon: '👨‍⚕️', title: 'Become a Doctor', desc: 'Fulfill your dream of serving the nation as a medical professional' },
                            { icon: '🌟', title: 'Prestigious Career', desc: 'Join one of the most respected professions in society' },
                            { icon: '💰', title: 'Financial Security', desc: 'Excellent earning potential and job security' },
                            { icon: '🌍', title: 'Global Opportunities', desc: 'Practice medicine in India or pursue opportunities abroad' }
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
                        <h2 className="interior-section-title mb-4">Our Remarkable Results</h2>
                        <div className="text-6xl md:text-7xl font-extrabold text-neutral-800 mb-4">5</div>
                        <p className="text-xl md:text-2xl mb-6 text-neutral-700">Selections in AIIMS and MBBS out of 53 students</p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <p className="text-sm text-neutral-600">Students Qualified for MBBS</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">650+</div>
                                <p className="text-sm text-neutral-600">Average Score of Top Students</p>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-6">
                                <div className="text-3xl font-bold mb-2">90%</div>
                                <p className="text-sm text-neutral-600">Success Rate in Medical Admissions</p>
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
                            { title: 'NCERT-Focused Approach', desc: 'Complete mastery of NCERT textbooks - the foundation of NEET' },
                            { title: 'Biology Specialists', desc: 'Expert faculty specializing in Botany and Zoology with medical background' },
                            { title: 'Conceptual Learning', desc: 'Deep understanding of biological concepts, not just memorization' },
                            { title: 'Regular Practice Tests', desc: 'Weekly full-length mock tests simulating actual NEET exam' },
                            { title: 'Previous Year Analysis', desc: 'Comprehensive analysis of past 15 years NEET question papers' },
                            { title: 'Doubt Clearing Sessions', desc: 'Dedicated sessions for clearing doubts in Physics, Chemistry, and Biology' }
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
                    <h2 className="interior-section-title mb-4">Ready to Start Your Medical Journey?</h2>
                    <p className="text-lg md:text-xl mb-8 text-neutral-600">
                        Join Matrix Science Academy and achieve your dream of becoming a doctor
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
