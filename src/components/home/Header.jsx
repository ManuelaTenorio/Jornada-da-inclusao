import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/header-footer.css';
import PiLogo from '../../assets/images/Pi LOGO.png';

export default function Header() {
  return (
    <header className="header-bar">
      <nav className="nav-bar container" role="navigation">
        <img className="logo" src={PiLogo} alt="Logo da página Integra Kids, ilustrando um jogo educativo" />
        <ul className="nav-list">
          <li className="nav-item">
            <a className="link" href="#start-section">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="link" href="#games-section">Jogos</a>
          </li>
          <li className="nav-item">
            <a className="link" href="#about-section">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="link" href="#contact-section">Contato</a>
          </li>
          <li className="nav-item">
            <Link className="link form-button" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
