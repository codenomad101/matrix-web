'use client'
import Link from 'next/link'

export default function IISERPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#B30027] to-[#8a001e] text-white py-16 md:py-24">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-4xl">🔬</span>
                            <span className="font-semibold">Science Research Institutes</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IISER</h1>
                        <p className="text-xl md:text-2xl mb-2 opacity-90">Indian Institutes of Science Education and Research</p>
                        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                            Premier institutes for integrated BS-MS programs in pure sciences
                        </p>
                    </div>
                </div>
            </section>

            {/* About IISER */}
            <section className="container-page py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-6">About IISER</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed mb-4">
                            The Indian Institutes of Science Education and Research (IISERs) are a group of premier
                            autonomous public institutions in India, established by the Ministry of Education for
                            research and teaching in basic sciences. Currently, there are seven IISERs located in
                            Berhampur, Bhopal, Kolkata, Mohali, Pune, Thiruvananthapuram, and Tirupati.
                        </p>
                        <p className="text-[#0a1a67]/80 text-lg leading-relaxed">
                            IISERs offer integrated BS-MS dual degree programs in Biology, Chemistry, Earth and Climate
                            Science, Mathematics, and Physics. These institutes are known for their research-oriented
                            curriculum and provide excellent opportunities for students passionate about pure sciences
                            and research.
                        </p>
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">Admission Process</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Channel 1 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-purple-600 mb-4">JEE Advanced Channel</h3>
                                <ul className="space-y-2 text-[#0a1a67]/80 text-sm">
                                    <li>• Based on JEE Advanced rank</li>
                                    <li>• Most competitive route</li>
                                    <li>• Direct admission</li>
                                    <li>• No separate exam required</li>
                                </ul>
                            </div>

                            {/* Channel 2 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-purple-600 mb-4">KVPY Channel</h3>
                                <ul className="space-y-2 text-[#0a1a67]/80 text-sm">
                                    <li>• Kishore Vaigyanik Protsahan Yojana</li>
                                    <li>• For science enthusiasts</li>
                                    <li>• Scholarship + admission</li>
                                    <li>• Research aptitude test</li>
                                </ul>
                            </div>

                            {/* Channel 3 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-4xl mb-4">📝</div>
                                <h3 className="text-xl font-bold text-purple-600 mb-4">SCB Channel</h3>
                                <ul className="space-y-2 text-[#0a1a67]/80 text-sm">
                                    <li>• State/Central Board marks</li>
                                    <li>• Based on 12th board results</li>
                                    <li>• Aptitude test conducted</li>
                                    <li>• Interview process</li>
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
                            { icon: '🎓', title: 'Integrated BS-MS', desc: 'Five-year dual degree program in pure sciences' },
                            { icon: '🔬', title: 'Research-Oriented', desc: 'Hands-on research experience from first year' },
                            { icon: '🌍', title: 'PhD Opportunities', desc: 'Direct pathway to PhD programs in India and abroad' },
                            { icon: '👨‍🔬', title: 'Career in Research', desc: 'Build a career in scientific research and academia' },
                            { icon: '💡', title: 'Innovation & Discovery', desc: 'Work on cutting-edge scientific problems' },
                            { icon: '🏛️', title: 'World-Class Faculty', desc: 'Learn from renowned scientists and researchers' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="text-xl font-bold text-[#0a1a67] mb-2">{item.title}</h3>
                                <p className="text-[#0a1a67]/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Offered */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container-page">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8">Programs Offered</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { icon: '🧬', name: 'Biology', desc: 'Life sciences and molecular biology' },
                                { icon: '⚗️', name: 'Chemistry', desc: 'Organic, inorganic, and physical chemistry' },
                                { icon: '🌍', name: 'Earth Sciences', desc: 'Geology, climate, and environmental science' },
                                { icon: '📐', name: 'Mathematics', desc: 'Pure and applied mathematics' },
                                { icon: '⚛️', name: 'Physics', desc: 'Theoretical and experimental physics' },
                                { icon: '💻', name: 'Data Science', desc: 'Computational and data sciences (select IISERs)' }
                            ].map((program, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                                    <div className="text-4xl mb-3">{program.icon}</div>
                                    <h3 className="text-lg font-bold text-[#0a1a67] mb-2">{program.name}</h3>
                                    <p className="text-sm text-[#0a1a67]/70">{program.desc}</p>
                                </div>
                            ))}
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
                            { title: 'Science Foundation Building', desc: 'Strong foundation in fundamental science concepts across all disciplines' },
                            { title: 'Research Aptitude Development', desc: 'Training in scientific thinking, problem-solving, and research methodology' },
                            { title: 'Critical Thinking Skills', desc: 'Developing analytical and critical thinking abilities essential for research' },
                            { title: 'JEE Advanced Preparation', desc: 'Comprehensive preparation for JEE Advanced for IISER admission' },
                            { title: 'KVPY Training', desc: 'Special coaching for KVPY examination and interview process' },
                            { title: 'Mentorship Program', desc: 'Guidance from IISER alumni and current students' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Pursue Research in Science?</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Join Matrix Science Academy and achieve your dream of studying at IISER
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/enquiry"
                            className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Enquire Now
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                        >
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
