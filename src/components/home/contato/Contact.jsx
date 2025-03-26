import styles from './contact.module.css';
import React from 'react';

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/nRyPAqMh8R3SKUjhnNGymn', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result); 

      if (response.ok) {
        if (result && result.success) {
          alert('Mensagem enviada com sucesso!');
          event.target.reset();
        } else {
          alert(`Erro ao enviar a mensagem: ${result.error || 'Mensagem enviada, mas sem confirmação.'}`);
        }
      } else {
        // Exibe o erro retornado pela API
        alert(`Erro ao enviar a mensagem: ${result.error || 'Tente novamente mais tarde.'}`);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  };

  return (
    <section className={styles.contactContainer} id="contato">
      <h2>Entre em Contato Conosco</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="Nome"
          placeholder="Seu nome"
        />

        <input
          type="email"
          id="email"
          name="E-mail"
          placeholder="Seu e-mail"
        />

        <textarea
          id="message"
          name="Mensagem"
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