import React from 'react'
import './cadastro.css'

function Cadastro() {
    return (
        <>
            <div id="login-container" className="form-container">
                <h1></h1>
                <form className='formCad' id="login-form">
                    <div className="full-box">
                        <label className='labelCad' for="parent-name">Nome do Pai/Responsável</label>
                        <input type="text" name="parent-name" id="parent-name" placeholder="Digite o nome do pai ou responsável" required />
                    </div>
                    <div className="full-box">
                        <label className='labelCad' for="parent-email">E-mail</label>
                        <input type="email" name="parent-email" id="parent-email" placeholder="Digite o e-mail do pai ou responsável" required />
                    </div>
                    <div className="half-box">
                        <div className="full-box">
                            <label className='labelCad' for="parent-password">Senha</label>
                            <input type="password" name="parent-password" id="parent-password" placeholder="Digite a senha do pai ou responsável" required />

                        </div>
                        <div className="full-box">
                            <label className='labelCad' for="parent-password-confirmation">Confirmação de Senha</label>
                            <input type="password" name="parent-password-confirmation" id="parent-password-confirmation" placeholder="Digite novamente a senha" required />

                        </div>
                        <input type="submit" value="Cadastrar" />

                        <p>Já tem cadastro?<a href="/login">  Faça seu login</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro