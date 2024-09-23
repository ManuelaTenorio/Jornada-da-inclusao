import '../../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id='contato'>
      <h2>Entre em Contato Conosco</h2>
      <form className="contact-form">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          required
        />

        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
          rows="5"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
