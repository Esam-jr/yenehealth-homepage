import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import TopNav from './components/TopNav'
import Header from './components/Header'
import MainSection from './components/MainSection'
import FeaturedLearning from './components/FeaturedLearning'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CTASection from './components/CTASection'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#F2F3F5] min-h-screen">
      <LoadingScreen />
      <TopNav />
      <Header />
      <Hero />
      <MainSection />
      <FeaturedLearning />
      <CTASection />
      <Newsletter />
      <Footer />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-6 z-50 rounded-full bg-coral p-3 text-white shadow-lg transition-all duration-300 hover:opacity-90 ${
          showScrollTop ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'
        }`}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
        </svg>
      </button>
    </div>
  )
}

export default App
