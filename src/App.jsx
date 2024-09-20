import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import Cadastro from './pages/cadastro.jsx';
import JogoCores from './pages/jogoCores.jsx';
import JogoMemoria from './pages/jogoMemoria.jsx';
import JogoNumeros from './pages/jogoNumeros.jsx';
import Login from './pages/login.jsx';
import Resultados from './pages/resultados.jsx';
import Perfil from './pages/perfil.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jogo-memoria" element={<JogoMemoria />} />
      <Route path="/jogo-numeros" element={<JogoNumeros />} />
      <Route path="/jogo-cores" element={<JogoCores />} />
      <Route path="/resultados" element={<Resultados />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;