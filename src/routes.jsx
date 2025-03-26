import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import JogoCores from './pages/jogoCores.jsx';

import JogoNumeros from './pages/jogoNumeros.jsx';
import JogoVogais from "./pages/JogoVogais";

// import JogoNumeros from './pages/jogoNumeros.jsx';
import FaceJogoNumeros from './pages/faceJogoNumeros/FaceJogoNumeros';
import FaceJogoVogais from "./pages/faceJogoVogais/FaceJogoVogais";


const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogo-cores" element={<JogoCores />} />

            <Route path="/jogo-numeros" element={<FaceJogoNumeros />} />
            <Route path="/jogo-vogais" element={<FaceJogoVogais />} />

        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
