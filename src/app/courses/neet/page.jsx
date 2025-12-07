'use client'
import Link from 'next/link'

export default function NEETPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#B30027] to-[#8a001e] text-white py-16 md:py-24">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-4xl">⚕️</span>
                            <span className="font-semibold">Medical Entrance Examination</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">NEET</h1>
                        <p className="text-xl md:text-2xl mb-2 opacity-90">National Eligibility cum Entrance Test</p>
                        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                            The single gateway to MBBS, BDS, and AYUSH courses across India
                        </p>
                    </div>
                </div>
            </section>

            {/* About the Exam */}
            <section className="container-page py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-6">About NEET</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed mb-4">
                            The National Eligibility cum Entrance Test (NEET) is the single entrance examination for
                            admission to MBBS, BDS, and AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy)
                            courses in government and private medical colleges across India.
                        </p>
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed">
                            Conducted by the National Testing Agency (NTA), NEET is a highly competitive exam that opens
                            doors to a prestigious medical career. With over 18 lakh students appearing annually,
                            thorough preparation is essential for success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exam Pattern */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">Exam Pattern</h2>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <ul className="space-y-4 text-[#0a1a67]/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">📅</span>
                                    <span><strong>Exam Date:</strong> Usually conducted in May (Once a year)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">📝</span>
                                    <span><strong>Subjects:</strong> Physics, Chemistry, Biology (Botany & Zoology)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">⏱️</span>
                                    <span><strong>Duration:</strong> 3 hours 20 minutes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">❓</span>
                                    <span><strong>Questions:</strong> 200 questions (180 to be attempted)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">💯</span>
                                    <span><strong>Total Marks:</strong> 720 marks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">📖</span>
                                    <span><strong>Syllabus:</strong> NCERT (11th & 12th) - Physics, Chemistry, Biology</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-600 font-bold text-xl">✅</span>
                                    <span><strong>Marking:</strong> +4 for correct, -1 for incorrect</span>
                                </li>
                            </ul>
                            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                                <p className="text-sm text-emerald-800">
                                    <strong>Subject-wise Distribution:</strong> Physics (45 Q), Chemistry (45 Q),
                                    Botany (45 Q), Zoology (45 Q) - Total 180 questions to be attempted from 200
                                </p>
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
                            { icon: '🏥', title: 'MBBS Admission', desc: 'Admission to government and private medical colleges across India' },
                            { icon: '🦷', title: 'BDS & AYUSH', desc: 'Eligibility for dental and alternative medicine courses' },
                            { icon: '👨‍⚕️', title: 'Become a Doctor', desc: 'Fulfill your dream of serving the nation as a medical professional' },
                            { icon: '🌟', title: 'Prestigious Career', desc: 'Join one of the most respected professions in society' },
                            { icon: '💰', title: 'Financial Security', desc: 'Excellent earning potential and job security' },
                            { icon: '🌍', title: 'Global Opportunities', desc: 'Practice medicine in India or pursue opportunities abroad' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Remarkable Results</h2>
                        <div className="text-6xl md:text-7xl font-extrabold text-emerald-400 mb-4">100/100</div>
                        <p className="text-xl md:text-2xl mb-6">Perfect Scores in Biology</p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <p className="text-sm opacity-90">Students Qualified for MBBS</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">650+</div>
                                <p className="text-sm opacity-90">Average Score of Top Students</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="text-3xl font-bold mb-2">90%</div>
                                <p className="text-sm opacity-90">Success Rate in Medical Admissions</p>
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
                            { title: 'NCERT-Focused Approach', desc: 'Complete mastery of NCERT textbooks - the foundation of NEET' },
                            { title: 'Biology Specialists', desc: 'Expert faculty specializing in Botany and Zoology with medical background' },
                            { title: 'Conceptual Learning', desc: 'Deep understanding of biological concepts, not just memorization' },
                            { title: 'Regular Practice Tests', desc: 'Weekly full-length mock tests simulating actual NEET exam' },
                            { title: 'Previous Year Analysis', desc: 'Comprehensive analysis of past 15 years NEET question papers' },
                            { title: 'Doubt Clearing Sessions', desc: 'Dedicated sessions for clearing doubts in Physics, Chemistry, and Biology' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
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
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Join Matrix Science Academy and achieve your dream of becoming a doctor
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/enquiry"
                            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Enquire Now
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                        >
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
