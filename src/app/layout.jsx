import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Matrix Science Academy',
  description: 'One of the most sought after and successful institution',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


