// import { DropBox } from '../components/DropBox'
// import { NumberBox } from '../components/NumberBox'
// import '../assets/jogoNumeros.css'

// function Randomize(arr: number[]) {
//     let currIndex = arr.length;

//     while (currIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currIndex);
//         currIndex--;

//         [arr[currIndex], arr[randomIndex]] = [
//             arr[randomIndex], arr[currIndex]
//         ];
//     }

//     return arr;
// }

// function Populate(n: number) {
//     let numbers: number[] = [];

//     for (let i = 0; i < n; i++) {
//         numbers.push(i);
//     }

//     return Randomize(numbers);
// }

// export default function JogoNumeros() {
//     // Quantidade de elementos a serem gerados
//     const elements: number[] = Populate(10);
//     const listElements = elements.map(element =>
//         <NumberBox key={elements.indexOf(element)} value={element} />
//     );

//     return (
//         <>
//             <div className="container">
//                 <h1>Jogo dos Números</h1>
//                 <p>Arraste os números para cima na sequência correta.</p>
//                 <div className="drop-area">
//                     <DropBox />
//                 </div>
//                 <div className="number-area">
//                     {listElements}
//                 </div>
//             </div >
//         </>
//     );
// }
