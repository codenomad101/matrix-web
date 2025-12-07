'use client'
import { useState } from 'react'

// WhatsApp numbers for each branch
const BRANCH_WHATSAPP_NUMBERS = {
    'Pradhikaran': '917058740609',
    'Nigdi': '917058740609',
    'Ravet': '917058740609',
    'Shahunagar': '917058740609',
    'Chinchwad': '917058740609',
    'Wakad': '917058740609',
    'Moshi': '917058740609',
}

export default function FloatingInquiryButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.target)
        const formValues = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            course: formData.get('course'),
            branch: formData.get('branch'),
            message: formData.get('message') || 'No message provided'
        }

        // Get WhatsApp number for selected branch
        const whatsappNumber = BRANCH_WHATSAPP_NUMBERS[formValues.branch] || BRANCH_WHATSAPP_NUMBERS['Pradhikaran']

        // Format WhatsApp message
        const whatsappMessage = `*New Enquiry from Matrix Science Academy Website*

*Name:* ${formValues.name}
*Phone:* ${formValues.phone}
*Email:* ${formValues.email}
*Course:* ${formValues.course}
*Branch:* ${formValues.branch}
*Message:* ${formValues.message}

_This enquiry was submitted through the website._`

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage)

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')

        // Reset form and close modal after a short delay
        setTimeout(() => {
            e.target.reset()
            setIsSubmitting(false)
            setIsOpen(false)
        }, 1000)
    }

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Open Enquiry Form"
            >
                {/* Pulsing ring animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

                {/* WhatsApp Icon */}
                <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Modal Content */}
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-[320px] w-full max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0a1a67] to-[#1a2a87] p-4 rounded-t-xl relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-white">Quick Enquiry</h2>
                                    <p className="text-white/80 text-xs">We'll reach out shortly</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-4 space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Full Name *</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Phone *</label>
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    placeholder="98765 43210"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Email *</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Course *</label>
                                <select
                                    name="course"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all"
                                >
                                    <option>IIT-JEE (Main/Advanced)</option>
                                    <option>MHT-CET</option>
                                    <option>NEET</option>
                                    <option>IISER Foundation</option>
                                    <option>8th–12th Boards</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Preferred Branch *</label>
                                <select
                                    name="branch"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all"
                                >
                                    <option>Pradhikaran</option>
                                    <option>Nigdi</option>
                                    <option>Ravet</option>
                                    <option>Shahunagar</option>
                                    <option>Chinchwad</option>
                                    <option>Wakad</option>
                                    <option>Moshi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-[#0a1a67] mb-1">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    rows="2"
                                    placeholder="Tell us about your goals"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1a67] focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 text-sm"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Send via WhatsApp
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-gray-500 text-center">
                                Your enquiry will be sent via WhatsApp to our team
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
