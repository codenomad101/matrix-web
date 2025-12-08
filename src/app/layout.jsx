import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingInquiryButton from '@/components/FloatingInquiryButton'

export const metadata = {
  metadataBase: new URL('https://www.matrixscienceacademy.com'),
  title: {
    default: 'Matrix Science Academy | Leading IIT-JEE, NEET, MHT-CET Coaching in Pune',
    template: '%s | Matrix Science Academy',
  },
  description: 'Matrix Science Academy is one of the leading and most successful coaching institutions in Pune, offering expert guidance for IIT-JEE, NEET, MHT-CET, and IISER entrance exams. Join us to achieve excellence in competitive examinations.',
  keywords: [
    'Matrix Science Academy',
    'IIT-JEE coaching Pune',
    'NEET coaching Pune',
    'MHT-CET coaching Pune',
    'IISER coaching',
    'best coaching institute Pune',
    'engineering entrance coaching',
    'medical entrance coaching',
    'competitive exam coaching',
    'JEE Main coaching',
    'JEE Advanced coaching',
    'coaching classes Pune',
    'Nigdi coaching',
    'Pradhikaran coaching',
    'Ravet coaching',
    'Wakad coaching',
    'Chinchwad coaching',
    'Shahunagar coaching',
    'Moshi coaching',
  ],
  authors: [{ name: 'Matrix Science Academy' }],
  creator: 'Matrix Science Academy',
  publisher: 'Matrix Science Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.matrixscienceacademy.com',
    siteName: 'Matrix Science Academy',
    title: 'Matrix Science Academy | Leading IIT-JEE, NEET, MHT-CET Coaching in Pune',
    description: 'One of the leading and most successful coaching institutions in Pune, offering expert guidance for IIT-JEE, NEET, MHT-CET, and IISER entrance exams.',
    images: [
      {
        url: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png',
        width: 1200,
        height: 630,
        alt: 'Matrix Science Academy - Leading Coaching Institute in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrix Science Academy | Leading IIT-JEE, NEET, MHT-CET Coaching in Pune',
    description: 'One of the leading and most successful coaching institutions in Pune, offering expert guidance for IIT-JEE, NEET, MHT-CET, and IISER entrance exams.',
    images: ['https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png'],
  },
  alternates: {
    canonical: 'https://www.matrixscienceacademy.com',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  category: 'Education',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Matrix Science Academy',
    description: 'One of the leading and most successful coaching institutions in Pune, offering expert guidance for IIT-JEE, NEET, MHT-CET, and IISER entrance exams.',
    url: 'https://www.matrixscienceacademy.com',
    logo: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763788005/matrix_logo_cra98w.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Educational Institution',
      areaServed: 'IN',
    },
    sameAs: [
      // Add your social media profiles here when available
      // 'https://www.facebook.com/matrixscienceacademy',
      // 'https://www.instagram.com/matrixscienceacademy',
      // 'https://www.linkedin.com/company/matrixscienceacademy',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Educational Services',
      description: 'Coaching for IIT-JEE, NEET, MHT-CET, and IISER entrance examinations',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingInquiryButton />
      </body>
    </html>
  )
}



