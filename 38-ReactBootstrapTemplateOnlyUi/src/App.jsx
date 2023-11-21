import ButtonWrapper from './components/buttonwrapper'
import Footer from './components/footer'
import Hero from './components/hero'
import Intro from './components/intro'
import Map from './components/map'
import Offers from './components/offers'
import Welcome from './components/welcome'
import Recent from './components/recent'
import "./style/reset.css"
function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Offers />
      <Welcome />
      <Recent />
      <ButtonWrapper />
      <Map />
      <Footer />
    </>
  )
}

export default App
