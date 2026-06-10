import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-noise">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
