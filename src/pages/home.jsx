import React, { useContext } from 'react';
import Header from "../components/home/Header.jsx";
import Carousel from "../components/home/Carousel.jsx";
import Cards from "../components/home/Cards.jsx";
import Contact from '../components/home/Contact.jsx';
import About from '../components/home/About.jsx';
import Footer from "../components/home/Footer.jsx";
import { AuthContext } from '../contexts/AuthContext';

import '../assets/styles/home.css';
import backgroundImage from '../assets/images/background-home.jpg';

const Home = () => {
  // Obtém `isLoggedIn` do contexto de autenticação
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="home" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed', 
    }}>
      <Header isLoggedIn={isLoggedIn} />
      <Carousel />
      <h1>Confira os jogos da nossa plataforma</h1>
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
