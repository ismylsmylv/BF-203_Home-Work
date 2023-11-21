import './App.css'
import ButtonWrapper from './components/buttonwrapper'
import Footer from './components/footer'
import Hero from './components/hero'
import Intro from './components/intro'
import Map from './components/map'
import Offers from './components/offers'
import Welcome from './components/welcome'
import Projects from './components/recent'

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Offers />
      <Welcome />
      <Projects />
      <ButtonWrapper />
      <Map />
      <Footer />
    </>
  )
}

export default App
