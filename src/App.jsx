import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';
import JogoCores from './pages/jogoCores.jsx';
import JogoMemoria from './pages/jogoMemoria.jsx';
import Resultados from './pages/resultados.jsx';
import Perfil from './pages/perfil.jsx';
import Login from './pages/login/Login.tsx';
import FaceJogoVogais from './pages/faceJogoVogais/FaceJogoVogais.jsx';
import FaceJogoNumeros from './pages/faceJogoNumeros/FaceJogoNumeros';
import { ExplicacaoCores, ExplicacaoMemoria, ExplicacaoNumeros, ExplicacaoVogais } from './pages/explicacaoNumeros.jsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jogo-cores-exp" element={<ExplicacaoCores />} />
        <Route path="/jogo-memoria-exp" element={<ExplicacaoMemoria />} />
        <Route path="/jogo-numeros-exp" element={<ExplicacaoNumeros />} />
        <Route path="/jogo-vogais-exp" element={<ExplicacaoVogais />} />
        <Route path="/jogo-memoria" element={<JogoMemoria />} />
        <Route path="/jogo-numeros" element={<FaceJogoNumeros />} />
        <Route path="/jogo-vogais" element={<FaceJogoVogais />} />
        <Route path="/jogo-cores" element={<JogoCores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  </AuthProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
