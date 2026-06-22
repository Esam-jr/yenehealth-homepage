import TopNav from './components/TopNav'
import Header from './components/Header'
import MainSection from './components/MainSection'
import FeaturedLearning from './components/FeaturedLearning'
import CTA from './components/CTA'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <TopNav />
      <Header />
      <Hero />
      <MainSection />
      <FeaturedLearning />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
