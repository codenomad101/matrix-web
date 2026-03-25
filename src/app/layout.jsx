import './globals.css'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingInquiryButton from '@/components/FloatingInquiryButton'
import BackToTop from '@/components/BackToTop'
import ShowStopperPopup from '@/components/ShowStopperPopup'

const GA_MEASUREMENT_ID = 'G-691QRXV0X2'
const GTM_ID = 'GTM-5GPMKPKV'

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

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
    // google added explicitly in <head> below so it’s visible in view-source for Search Console
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
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('msa-theme');if(t==='red'||t==='blue')document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme','blue');}catch(e){document.documentElement.setAttribute('data-theme','blue');}})();",
          }}
        />
        {/* Google Search Console site verification - visible in view-source for verification */}
        <meta name="google-site-verification" content="kh5Lhw6qb0rfqtFJWhX370Jqb2lKsz75k3IeLPJGpDU" />
        {/* Google Tag Manager - as high in head as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <span id="top" aria-hidden="true" className="absolute top-0 left-0" />
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <FloatingInquiryButton />
        <ShowStopperPopup />
      </body>
    </html>
  )
}

