import React from 'react';

import '../../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id='contact-section'>
      <h2 className="heading">Entre em Contato Conosco</h2>
      <form className="generic-form">
        <label className="label" htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          className="formfield"
          required
        />

        <label className="label" htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          className="formfield"
          required
        />

        <label className="label" htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Sua mensagem"
          rows="5"
          className="formfield -textarea"
          required
        ></textarea>

        <button type="submit" role='button' className='button'>Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
