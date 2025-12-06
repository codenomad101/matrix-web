'use client'
import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const galleryImages = [
        // Felicitation & Events
        {
            category: 'felicitation',
            title: 'Felicitation Ceremony 2024',
            cloudinaryId: 'v1764181879/B_r8gw6s',
            alt: 'Felicitation Ceremony 2024'
        },
        {
            category: 'felicitation',
            title: 'Achievement Awards',
            cloudinaryId: 'v1764181864/A_dbzo2c',
            alt: 'Achievement Awards & Recognition'
        },
        // Results & Achievements
        {
            category: 'results',
            title: 'JEE Main Results',
            cloudinaryId: 'v1764181799/JEE_MAIN_o7kayq',
            alt: 'JEE Main Results'
        },
        {
            category: 'results',
            title: 'JEE Main 2025',
            cloudinaryId: 'v1764181794/JEE_MAIN_2025_aoxekj',
            alt: 'JEE Main 2025 Results'
        },
        {
            category: 'results',
            title: 'IIT Results',
            cloudinaryId: 'v1764181786/IIT_knkkka',
            alt: 'IIT Results'
        },
        {
            category: 'results',
            title: 'NEET Results',
            cloudinaryId: 'v1764181835/NEET_riozts',
            alt: 'NEET Results'
        },
        {
            category: 'results',
            title: 'Top Achievers',
            cloudinaryId: 'v1763783028/4_nl1ejs',
            alt: 'Top Achievers'
        },
        {
            category: 'results',
            title: 'Student Success',
            cloudinaryId: 'v1763783015/5_c2lqwx',
            alt: 'Student Success Stories'
        },
        {
            category: 'results',
            title: 'Academic Excellence',
            cloudinaryId: 'v1763783028/7_cgvboz',
            alt: 'Academic Excellence'
        },
        // Facilities & Campus
        {
            category: 'facilities',
            title: 'Modern Classrooms',
            cloudinaryId: 'v1764181800/7_rhfwuq',
            alt: 'Modern Classrooms'
        },
        {
            category: 'facilities',
            title: 'Library & Resources',
            cloudinaryId: 'v1764181802/2_qkyerp',
            alt: 'Library & Resources'
        },
        {
            category: 'facilities',
            title: 'Science Labs',
            cloudinaryId: 'v1764181811/6_txcbt4',
            alt: 'Science Labs'
        },
        {
            category: 'facilities',
            title: 'Study Areas',
            cloudinaryId: 'v1764181896/5_iksmin',
            alt: 'Study Areas'
        },
        {
            category: 'facilities',
            title: 'Campus Facilities',
            cloudinaryId: 'v1764181956/1_hvf5af',
            alt: 'Campus Facilities'
        },
        {
            category: 'facilities',
            title: 'Learning Environment',
            cloudinaryId: 'v1764181872/4_phnnrh',
            alt: 'Learning Environment'
        },
        // Academic Resources
        {
            category: 'academics',
            title: 'Books We Offer',
            cloudinaryId: 'v1763852019/booksweoffer_bciiam',
            alt: 'Books We Offer'
        },
        {
            category: 'academics',
            title: 'Study Materials',
            cloudinaryId: 'v1763785958/output_cbx5g1',
            alt: 'Study Materials'
        },
    ]

    const categories = [
        { id: 'all', label: 'All Photos', icon: '🖼️' },
        { id: 'felicitation', label: 'Felicitation', icon: '🏆' },
        { id: 'results', label: 'Results', icon: '📊' },
        { id: 'facilities', label: 'Facilities', icon: '🏫' },
        { id: 'academics', label: 'Academics', icon: '📚' },
    ]

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory)

    return (
        <div className="container-page py-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0a1a67] mb-3">Photo Gallery</h1>
                <p className="text-[#0a1a67] text-lg">
                    Explore moments from our events, ceremonies, facilities, and student achievements
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.id
                            ? 'bg-[#0a1a67] text-white shadow-lg scale-105'
                            : 'bg-white text-[#0a1a67] border-2 border-[#0a1a67]/20 hover:border-[#0a1a67] hover:shadow-md hover:scale-105'
                            }`}
                    >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, idx) => (
                    <div
                        key={idx}
                        className="group card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                            <OptimizedImage
                                cloudinaryId={image.cloudinaryId}
                                alt={image.alt}
                                width={800}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                crop="fill"
                                quality="auto"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a67]/80 via-[#0a1a67]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <div className="text-white">
                                    <h3 className="font-bold text-lg">{image.title}</h3>
                                    <p className="text-sm text-white/90 capitalize">{image.category}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-[#0a1a67] text-lg">{image.title}</h3>
                            <p className="text-sm text-[#0a1a67]/70 capitalize mt-1">{image.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredImages.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-[#0a1a67] text-lg">No images found in this category.</p>
                </div>
            )}
        </div>
    )
}
