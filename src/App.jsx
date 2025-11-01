import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Faculty from './pages/Faculty.jsx'
import Testimonials from './pages/Testimonials.jsx'
import About from './pages/About.jsx'
import ThankYou from './pages/ThankYou.jsx'
import DirectorsMessage from './pages/DirectorsMessage.jsx'
import Activities from './pages/Activities.jsx'
import Performance from './pages/Performance.jsx'
import Felicitation from './pages/Felicitation.jsx'
import CourseSelection from './pages/CourseSelection.jsx'
import IITNEETTimeline from './pages/IITNEETTimeline.jsx'
import MHTCETTimeline from './pages/MHTCETTimeline.jsx'
import OnDemandCourses from './pages/OnDemandCourses.jsx'
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
          <Route path="/activities/performance" element={<Performance />} />
          <Route path="/activities/felicitation" element={<Felicitation />} />
          <Route path="/activities/course-selection" element={<CourseSelection />} />
          <Route path="/activities/iit-neet-timeline" element={<IITNEETTimeline />} />
          <Route path="/activities/mht-cet-timeline" element={<MHTCETTimeline />} />
          <Route path="/activities/on-demand-courses" element={<OnDemandCourses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
