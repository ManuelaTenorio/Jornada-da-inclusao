<<<<<<< HEAD:src/routes.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import JogoCores from './pages/jogoCores.jsx';
import JogoNumeros from './pages/jogoNumeros.jsx';
import JogoVogais from "./pages/JogoVogais/JogoVogais";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogo-cores" element={<JogoCores />} />
            <Route path="/jogo-numeros" element={<JogoNumeros />} />
            <Route path="/jogo-vogais" element={<JogoVogais />} />
        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
