import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Benefits from './components/Benefits'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import TechnologyDetail from './pages/TechnologyDetail'
import ExpertiseDetail from './pages/ExpertiseDetail'
import BenefitDetail from './pages/BenefitDetail'

function HomePage() {
  return (
    <>
      <Hero />
      <Technologies />
      <Benefits />
      <Expertise />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology/:id" element={<TechnologyDetail />} />
        <Route path="/expertise/:id" element={<ExpertiseDetail />} />
        <Route path="/benefit/:id" element={<BenefitDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
