import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../components/home/Header.jsx";
import Carousel from "../components/home/Carousel.jsx"
import Cards from "../components/home/Cards.jsx"
import Contact from '../components/home/Contact.jsx';
import About from '../components/home/About.jsx';
import Footer from "../components/home/Footer.jsx"

const Home = () => (
    <div>
        <Header />
        <Carousel />
        <h1>Confira os jogos da nossa plataforma</h1>
        <Cards />
        <About />
        <Contact />
        <Footer />
    </div>
);

export default Home;
