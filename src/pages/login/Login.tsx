import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import React from 'react';


function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  )
  
  useEffect(() => {
    if (usuario && usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario, navigate])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }
  return (
    <>
      <div id="login-container">
        <h1></h1>
        <form id="login-form" onSubmit={login}>
          <div className="full-box">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="full-box">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              required
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <input type="submit" value="Entrar" />
          <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
        </form>
      </div>
    </>
  )
}

export default Login