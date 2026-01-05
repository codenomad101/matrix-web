'use client'
import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)

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
            title: 'Parking',
            cloudinaryId: 'v1764181896/5_iksmin',
            alt: 'parking area'
        },
        {
            category: 'facilities',
            title: 'Campus Facilities',
            cloudinaryId: 'v1764181956/1_hvf5af',
            alt: 'Campus Facilities'
        },
        {
            category: 'facilities',
            title: 'Office',
            cloudinaryId: 'v1764181872/4_phnnrh',
            alt: 'Office Environment'
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

    const currentImageIndex = selectedImage !== null ? filteredImages.findIndex(img => img.cloudinaryId === selectedImage.cloudinaryId) : -1

    const goToNext = () => {
        if (currentImageIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentImageIndex + 1])
        }
    }

    const goToPrevious = () => {
        if (currentImageIndex > 0) {
            setSelectedImage(filteredImages[currentImageIndex - 1])
        }
    }

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
                        onClick={() => setSelectedImage(image)}
                        className="group card bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a67]/80 via-[#0a1a67]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                    <p className="font-bold">Click to view</p>
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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    {currentImageIndex > 0 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Next Button */}
                    {currentImageIndex < filteredImages.length - 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <OptimizedImage
                            cloudinaryId={selectedImage.cloudinaryId}
                            alt={selectedImage.alt}
                            width={1920}
                            height={1080}
                            className="w-full h-full object-contain"
                            crop="fit"
                            quality="auto"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                            <p className="text-white/70 capitalize">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
