import Header from "./home-components/Header.jsx"
import Carousel from "./home-components/Carousel.jsx"
import Cards from "./home-components/Cards.jsx"
import Contact from './home-components/Contact';
import About from './home-components/About';
import Footer from "./home-components/Footer.jsx"

import './App.css';

function App(){
  return(
    <div>
      <Header />
      <Carousel/>
      <h1>Confira os jogos da nossa plataforma</h1>
      <Cards/>
      <About/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App