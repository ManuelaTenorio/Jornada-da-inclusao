import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';
import JogoCores from './pages/jogoCores.jsx';
import JogoMemoria from './pages/jogoMemoria.jsx';
import JogoNumeros from './pages/jogoNumeros.jsx';
import Resultados from './pages/resultados.jsx';
import Perfil from './pages/perfil/perfil.jsx';
import Login from './pages/login/Login.tsx';
import FaceJogoVogais from './pages/FaceJogoVogais/FaceJogoVogais.jsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jogo-memoria" element={<JogoMemoria />} />
        <Route path="/jogo-numeros" element={<JogoNumeros />} />
        <Route path="/jogo-vogais" element={<FaceJogoVogais />} />
        <Route path="/jogo-cores" element={<JogoCores />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  </AuthProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
