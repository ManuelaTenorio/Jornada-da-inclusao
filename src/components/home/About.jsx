import '../../assets/styles/About.css';
import card1 from '../../assets/images/card1.jpeg';
import card2 from '../../assets/images/card2.jpeg';
import card3 from '../../assets/images/card3.jpeg';
import card4 from '../../assets/images/little_prince.png';


const About = () => {
  return (
    <section className="about-container">
      <h2>Nossa Página</h2>

      <div className="about-content" id='sobre-nos'>
        <div className="about-item">
          <img
            src={card1}
            alt="Ilustração 1"
            className="about-image"
          />
          <p>
            A plataforma "Integra Kids" foi desenvolvida com o objetivo de apoiar crianças do ensino fundamental que enfrentam dificuldades em matérias específicas. Com um ambiente lúdico e interativo, a plataforma oferece uma variedade de jogos educativos que tornam o aprendizado mais divertido e acessível. Ao identificar as áreas em que o aluno precisa de mais ajuda, a plataforma adapta as atividades, proporcionando um suporte personalizado que visa aumentar a confiança e a compreensão da criança.
          </p>
        </div>

        <div className="about-item">
          <p>
            Os jogos disponíveis na Integra Kids abrangem disciplinas, como: matemática, ciências e língua portuguesa. Cada jogo é projetado para ser divertido e desafiador, promovendo o engajamento dos alunos enquanto trabalham suas habilidades. A plataforma também conta com um sistema de feedback, que permite que os educadores e pais acompanhem o progresso da criança, identificando as dificuldades específicas e proporcionando conquistas ao longo do caminho.
          </p>
          <img
            src={card2}
            alt="Ilustração 2"
            className="about-image"
          />
        </div>
        <div className="about-item">
          <img
            src={card3}
            alt="Ilustração 1"
            className="about-image"
          />
          <p>
            Além disso, a Integra Kids oferece recomendações de jogos complementares baseados no desempenho do aluno. Quando uma criança encontra dificuldades em um conceito, a plataforma sugere atividades alternativas que reforçam o aprendizado de forma lúdica. Dessa maneira, a criança é redirecionada a jogos que atendem suas necessidades, facilitando a compreensão e promovendo um aprendizado mais eficaz e divertido. Com essa abordagem, a Integra Kids se torna uma ferramenta valiosa tanto para alunos quanto para educadores, contribuindo para um aprendizado significativo e divertido.
          </p>
        </div>
        <div className="about-item">
          <p>
            O personagem ilustrado é o símbolo central do projeto "Integra Kids". Com sua coroa dourada, capa vermelha e lápis gigante, ele representa o espírito aventureiro e criativo que a plataforma busca despertar nas crianças. Além de inspirar confiança e curiosidade, o mascote desempenha um papel essencial na conexão com o público infantil, tornando o aprendizado mais acessível e divertido. Sua presença lúdica e acolhedora ajuda a criar uma relação de proximidade, incentivando as crianças a explorar novas ideias e superar desafios de forma leve e engajante.          </p>
          <img
            src={card4}
            alt="Ilustração 4"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
