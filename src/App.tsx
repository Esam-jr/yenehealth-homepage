import TopNav from './components/TopNav'
import Header from './components/Header'
import MainSection from './components/MainSection'
import FeaturedLearning from './components/FeaturedLearning'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="bg-[#F2F3F5] min-h-screen">
      <TopNav />
      <Header />
      <Hero />
      <MainSection />
      <FeaturedLearning />
      <CTASection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
