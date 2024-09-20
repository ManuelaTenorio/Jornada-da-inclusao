import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/header-footer.css';
import PiLogo from '../../assets/images/Pi LOGO.png';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 150; // Ajuste esse valor conforme a altura do seu cabeçalho
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
      <li onClick={() => scrollToSection('pagina-principal')} className="link-styles">Página Principal</li>
      <li onClick={() => scrollToSection('lista-jogos')} className="link-styles">Lista de Jogos</li>
      <li onClick={() => scrollToSection('sobre-nos')} className="link-styles">Sobre Nós</li>
      <li onClick={() => scrollToSection('contato')} className="link-styles">Contato</li>
      <li><Link className={"link-styles"} to="/login">Login/Cadastro</Link></li>
    </div>
  );
}

export default Header;


