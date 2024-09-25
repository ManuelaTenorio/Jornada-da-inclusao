import '../../assets/styles/header-footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Integra Kids. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
