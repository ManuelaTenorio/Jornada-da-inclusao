import Header from "../../components/home/header/Header.jsx";
import Carousel from "../../components/home/carousel/Carousel.jsx";
import Cards from "../../components/home/card/Cards.jsx";
import Contact from "../../components/home/contato/Contact.jsx";
import About from "../../components/home/sobre/About.jsx";
import Footer from "../../components/home/footer/Footer.jsx";
import styles from "./home.module.css";


const Home = () => (
  <div className={styles.home}>
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

