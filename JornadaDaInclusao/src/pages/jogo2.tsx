import '../jogo2.css'

export default function Jogo2() {
    return (
        <>
            <div className="container">
                <h1>Jogo dos Números</h1>
                <p>Arraste os números para cima na sequência correta</p>
                <div className="drop-area">
                    <div className="drop-box"></div>
                </div>
                <div className="number-area">
                    <div className="number-box">
                        <span>5</span>
                    </div>
                    <div className="number-box">
                        <span>8</span>
                    </div>
                    <div className="number-box">
                        <span>9</span>
                    </div>
                    <div className="number-box">
                        <span>1</span>
                    </div>
                    <div className="number-box">
                        <span>7</span>
                    </div>
                    <div className="number-box">
                        <span>2</span>
                    </div>
                    <div className="number-box">
                        <span>6</span>
                    </div>
                    <div className="number-box">
                        <span>0</span>
                    </div>
                    <div className="number-box">
                        <span>3</span>
                    </div>
                    <div className="number-box">
                        <span>4</span>
                    </div>
                </div>
            </div>
        </>
    )
}
