import "./Styles.css"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Fleet from "./components/Fleet"
import Services from "./components/Services"
import Reviews from './components/Reviews';
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Fleet/>
      <Services/>
      <Reviews />
      <Footer />
    </>
  )
}

export default App