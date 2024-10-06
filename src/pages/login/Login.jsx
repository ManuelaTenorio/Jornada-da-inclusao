import React from 'react'
import './login.css'

function Login() {
    return (
        <>
            <div id="login-container">
                <h1></h1>
                <form id="login-form">
                    <div className="full-box">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                    </div>
                    <div className="full-box">
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                    </div>
                    <input type="submit" value="Entrar" />
                    <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </form>
            </div>
        </>
    )
}

export default Login