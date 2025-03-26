import styles from '../header/header-footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Integra Kids. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
