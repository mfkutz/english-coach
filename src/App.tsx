import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import HowItWorks from './sections/HowItWorks'
import Roadmap from './sections/Roadmap'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="bg-[#07071a] text-white font-body min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <HowItWorks />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}

export default App
