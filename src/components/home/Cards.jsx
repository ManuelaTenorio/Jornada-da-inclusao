import '../../assets/styles/Cards.css';
import { Link } from 'react-router-dom';

import letter from '../../assets/images/letters.jpg';
import color from '../../assets/images/colors.jpg';
import memory from '../../assets/images/memory.png';
import number from '../../assets/images/numbers.png';

const Cards = () => {
    return (
        <div className="cards-container" id='lista-jogos'>
            <Link className='link-styles' to="/jogo-numeros">
            <div className="card">
                <img src={number} alt="Card 1" />
                <h3>Jogo dos Numeros</h3>
                <p>Neste jogo, as crianças praticam a ordenação de números em sequência crescente ou decrescente. Essa atividade desenvolve o raciocínio lógico e familiariza os alunos com a sequência numérica.</p>
            </div>
            </Link>

            <Link className='link-styles' to="/jogo-memoria">
                <div className="card">

                    <img src={memory} alt="Card 2" />
                    <h3>Jogo da Memoria</h3>
                    <p>O Jogo da Memória ajuda as crianças a melhorarem a concentração e a memória visual. Ao encontrar pares de cartas relacionadas a conceitos educativos, os alunos reforçam o aprendizado de forma divertida.</p>
                </div>
            </Link>

            <Link className='link-styles' to="/jogo-cores">
            <div className="card">
                <img src={color} alt="Card 3" />
                <h3>Jogo das Cores</h3>
                <p>O Jogo das Cores ensina as crianças a identificar e nomear cores através de atividades lúdicas. Além de estimular a observação, ajuda a expandir o vocabulário e a criatividade.</p>
            </div>
            </Link>

            <Link className='link-styles' to="/jogo-vogais">
            <div className="card">
                <img src={letter} alt="Card 4" />
                <h3>Jogo das Vogais</h3>
                <p>Neste jogo, as crianças aprendem sobre vogais de forma interativa. Através de atividades de reconhecimento e combinação, desenvolvem habilidades de leitura e aumentam o interesse pela linguagem.</p>
            </div>
            </Link>
        </div>
    );
};

export default Cards;
