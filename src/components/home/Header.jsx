import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/header-footer.css';
import PiLogo from '../../assets/images/Pi LOGO.png';

function Header({ isLoggedIn }) { // Recebe isLoggedIn como prop
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 150; // Ajuste conforme a altura do cabeçalho
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="head">
      <li>
        <img src={PiLogo} alt="Logo da página Integra Kids, ilustrando um jogo educativo" />
      </li>
      <li onClick={() => scrollToSection('pagina-principal')} className="link-styles">Inicio</li>
      <li onClick={() => scrollToSection('lista-jogos')} className="link-styles">Jogos</li>
      <li onClick={() => scrollToSection('sobre-nos')} className="link-styles">Sobre</li>
      <li onClick={() => scrollToSection('contato')} className="link-styles">Contato</li>
      <li>
        <Link className="link-styles" to={isLoggedIn ? "/perfil" : "/login"}>
          {isLoggedIn ? "Perfil" : "Login"}
        </Link>
      </li>
    </div>
  );
}

export default Header;
