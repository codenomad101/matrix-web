import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Faculty from './pages/Faculty.jsx'
import Testimonials from './pages/Testimonials.jsx'
import About from './pages/About.jsx'
import ThankYou from './pages/ThankYou.jsx'
import DirectorsMessage from './pages/DirectorsMessage.jsx'
import Activities from './pages/Activities.jsx'
import Results from './pages/Results.jsx'
import Enquiry from './pages/Enquiry.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/directors-message" element={<DirectorsMessage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/results" element={<Results />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <footer className="border-t mt-16">
        <div className="container-responsive py-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div>
            © {new Date().getFullYear()} Matrix Science Academy. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="nav-link" href="#">Privacy</a>
            <a className="nav-link" href="#">Terms</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
