import { DropBox } from '../components/DropBox'
import { NumberBox } from '../components/NumberBox'
import '../assets/jogo2.css'

function Randomize() {
    function GetRandom(arr: number[]) {
        let currIndex = arr.length;

        while (currIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;

            [arr[currIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currIndex]
            ];
        }
    }

    let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    GetRandom(numbers);

    return numbers;
}

export default function Jogo2() {
    const arr: number[] = Randomize();

    return (
        <>
            <div className="container">
                <h1>Jogo dos Números</h1>
                <p>Arraste os números para cima na sequência correta.</p>
                <div className="drop-area">
                    <DropBox />
                </div>
                <div className="number-area">
                    <NumberBox value={arr[0]} />
                    <NumberBox value={arr[1]} />
                    <NumberBox value={arr[2]} />
                    <NumberBox value={arr[3]} />
                    <NumberBox value={arr[4]} />
                    <NumberBox value={arr[5]} />
                    <NumberBox value={arr[6]} />
                    <NumberBox value={arr[7]} />
                    <NumberBox value={arr[8]} />
                    <NumberBox value={arr[9]} />
                </div>
            </div >
        </>
    )
}
