import React from 'react';
import Header from "../components/home/Header.jsx";
import Carousel from "../components/home/Carousel.jsx"
import Cards from "../components/home/Cards.jsx"
import Contact from "../components/home/Contact.jsx";
import About from "../components/home/About.jsx";
import Footer from "../components/home/Footer.jsx"

import '../assets/styles/home.css';

// BUG: Carousel broken after setting defaults in App.css
const Home = () => (
  <div className="home">
    <Header />
    <main>
      <Carousel />
      <div className="heading-section">
        <h1 className="heading">Confira os jogos da nossa plataforma</h1>
      </div>
      <Cards />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
