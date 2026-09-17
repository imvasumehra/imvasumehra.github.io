import { About, Contact, Education, Experience, Hero, Navbar, Publications, Works } from './components';

const App = () => {
  return (
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Works />
        <Publications />
        <Contact />
      </div>
  )
}

export default App
