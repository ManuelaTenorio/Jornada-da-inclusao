import React from "react";
import { Link } from "react-router-dom";
import styles from "./explicacao.module.css";

export const ExplicacaoCores = () => {
  return (
    <>
      <div className={styles.explicacaoBody}>
        <div className={styles.containerExp}>
          <h2 className={styles.headingExp}>Jogo dos Cores</h2>
          <p className={styles.paragraphExp}>No Jogo das Cores, o objetivo é arrastar cada uma das cores para o container do animal correspondente.</p>
          <div className={styles.choices}>
            <Link className={styles.inlineButton} to="/jogo-cores">Ir ao Jogo</Link>
            <Link className={styles.inlineButton} to="/">Voltar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const ExplicacaoMemoria = () => {
  return (
    <>
      <div className={styles.explicacaoBody}>
        <div className={styles.containerExp}>
          <h2 className={styles.headingExp}>Jogo da Memória</h2>
          <p className={styles.paragraphExp}>No Jogo da Memória, as cartas começarão viradas de cabeça para baixo, esperando um clique para serem reveladas. Caso duas cartas iguais sejam selecionadas consecutivamente, elas serão tidas como reveladas, do contrário, elas voltarão a ficar ocultas. Seu objetivo é revelar todas as cartas.</p>
          <div className={styles.choices}>
            <Link className={styles.inlineButton} to="/jogo-memoria">Ir ao Jogo</Link>
            <Link className={styles.inlineButton} to="/">Voltar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const ExplicacaoNumeros = () => {
  return (
    <>
      <div className={styles.explicacaoBody}>
        <div className={styles.containerExp}>
          <h2 className={styles.headingExp}>Jogo dos Números</h2>
          <p className={styles.paragraphExp}>No Jogo dos Números, o objetivo é ordernar todos os números em sequência numérica ao arrastá-los para o container.</p>
          <div className={styles.choices}>
            <Link className={styles.inlineButton} to="/jogo-numeros">Ir ao Jogo</Link>
            <Link className={styles.inlineButton} to="/">Voltar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const ExplicacaoVogais = () => {
  return (
    <>
      <div className={styles.explicacaoBody}>
        <div className={styles.containerExp}>
          <h2 className={styles.headingExp}>Jogo das Vogais</h2>
          <p className={styles.paragraphExp}>No Jogo das Vogais, o objetivo é arrastar, dentre o alfabeto inteiro, apenas as letras vogais para o container.</p>
          <div className={styles.choices}>
            <Link className={styles.inlineButton} to="/jogo-vogais">Ir ao Jogo</Link>
            <Link className={styles.inlineButton} to="/">Voltar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

