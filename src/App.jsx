import { lazy, Suspense } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Background from './components/Background'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen scroll-smooth">
        <Background />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="relative z-10">
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  )
}

export default App
