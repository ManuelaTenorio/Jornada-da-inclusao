import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header-footer.module.css';
import PiLogo from '../../../assets/images/nano-icon.png';

export default function Header() {

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'instant' });
    }
  }

  return (
    <div className={styles.head}>
      <li>
        <img src={PiLogo} alt="Logo da página Integra Kids, ilustrando um jogo educativo" />
      </li>
      <li onClick={() => scrollToElement('pagina-principal')} className={styles.linkStyles}>Inicio</li>
      <li onClick={() => scrollToElement('lista-jogos')} className={styles.linkStyles}>Jogos</li>
      <li onClick={() => scrollToElement('sobre-nos')} className={styles.linkStyles}>Sobre</li>
      <li onClick={() => scrollToElement('contato')} className={styles.linkStyles}>Contato</li>
      <li><Link className={styles.linkStyles} to="/login">Login</Link></li>
    </div>
  );
}
