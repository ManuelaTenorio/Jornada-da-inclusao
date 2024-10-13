import '../../assets/styles/Cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className="cards-container" id='lista-jogos'>
            <Link className='link-styles' to="/jogo-numeros">
            <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Card 1" />
                <h3>Jogo dos Numeros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nobis doloremque, a corporis architecto nesciunt maiores laboriosam laudantium omnis ipsam nihil, inventore repellat neque eius. Iure aspernatur sint laboriosam illo!</p>
            </div>
            </Link>

            <Link className='link-styles' to="/jogo-memoria">
                <div className="card">

                    <img src="https://via.placeholder.com/300x200" alt="Card 2" />
                    <h3>Jogo da Memoria</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, esse possimus reiciendis tempora accusamus reprehenderit numquam perferendis corrupti ea minima itaque sed, necessitatibus eveniet blanditiis, expedita similique ratione repudiandae est!</p>
                </div>
            </Link>

            <Link className='link-styles' to="/jogo-cores">
            <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Card 3" />
                <h3>Jogo das cores</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, iste dolorem in nam modi rerum dignissimos alias molestias quae nisi nihil magni assumenda quos tempore ab vitae quod, eum iusto!</p>
            </div>
            </Link>

            <Link className='link-styles' to="/jogo-???">
            <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="Card 4" />
                <h3>Jogo Misterioso</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, veritatis. Praesentium pariatur laudantium aspernatur voluptas necessitatibus ea exercitationem totam, consequatur numquam sunt nostrum similique ullam neque eius provident ad cupiditate!</p>
            </div>
            </Link>
        </div>
    );
};

export default Cards;
