import { Link } from 'react-router-dom';
import '../../assets/styles/header-footer.css';
import PiLogo from '../../assets/images/Pi LOGO.png';

function Header() {
  return (
    <div className="head">
      <li>
        <img src={PiLogo} alt="Logo da página Integra Kids, ilustrando um jogo educativo" />
      </li>
      <li><Link to="/">Página Principal</Link></li>
      <li><Link to="/jogos">Lista de Jogos</Link></li>
      <li><Link to="/sobre">Sobre Nós</Link></li>
      <li><Link to="/login">Login/Cadastro</Link></li>
    </div>
  );
}

export default Header;
