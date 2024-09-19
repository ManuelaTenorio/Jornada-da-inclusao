import '../../assets/styles/About.css';

const About = () => {
  return (
    <section className="about-container">
      <h2>Sobre a Nossa Página</h2>

      <div className="about-content">
        <div className="about-item">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Ilustração 1" 
            className="about-image"
          />
          <p>
            Bem-vindo à nossa página! Nosso objetivo é fornecer informações de alta qualidade
            e serviços personalizados para atender às suas necessidades. Aqui, você encontrará 
            recursos diversos, como artigos, tutoriais, e muito mais, para ajudar a alcançar seus 
            objetivos de forma eficiente.
          </p>
        </div>

        <div className="about-item">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Ilustração 2" 
            className="about-image"
          />
          <p>
            Estamos comprometidos em oferecer uma experiência excepcional, com uma interface 
            amigável e conteúdo relevante. Explore nossas seções e sinta-se à vontade para 
            entrar em contato conosco para quaisquer dúvidas ou sugestões!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
