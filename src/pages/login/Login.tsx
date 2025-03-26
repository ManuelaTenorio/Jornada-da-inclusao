
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import React from 'react';
import styles from './login.module.css'
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  // Hook para navegar entre as páginas, usado para redirecionar o usuário após o login.
  const navigate = useNavigate();

  // Obtém o `usuario`, `handleLogin` (função para realizar o login), e `isLoading` (indicador de carregamento) do contexto de autenticação.
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  // Estado para armazenar os dados de login do usuário, como e-mail e senha.
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin // Inicializa o estado com um objeto vazio que segue a interface `UsuarioLogin`.
  );

  // Hook de efeito que redireciona o usuário para a página '/home' se o login for bem-sucedido e um token for retornado.
  useEffect(() => {
    if (usuario && usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario, navigate]);

  // Função que atualiza o estado `usuarioLogin` quando os campos do formulário mudam.
  // Cada alteração nos campos de entrada é armazenada no estado usando o `name` dos inputs para definir a chave.
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  // Função que é chamada ao submeter o formulário de login.
  // Previne o comportamento padrão do formulário (recarregar a página) e chama a função `handleLogin`.
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(usuarioLogin);
    
    handleLogin(usuarioLogin); // Chama a função de login com os dados do usuário.
  }

  return (
    <>
      <div className={styles.bodyLogin}>
        <div className={styles.loginContainer}>
          <h1></h1>
          <form id="loginForm" onSubmit={login}>
            <div className={styles.fullBox}>
              <label htmlFor="usuario">E-mail</label>
              <input
                type="usuario"
                id="usuario"
                name="usuario"
                placeholder="Digite seu e-mail"
                required
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className={styles.fullBox}>
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
            <button className={styles.btnSubmit}
              type="submit" value="Entrar"
            >

              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Entrar</span>
              }
            </button>
            <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
            <p><a href="/">Voltar Para Home</a></p>
          </form>
        </div>
      </div>
      <div className="enabled">
        <div className="active" vw-access-button></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
      <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      </script>
      <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
    </>
  )
}
export default Login
