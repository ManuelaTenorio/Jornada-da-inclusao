import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
function Login() {
    // Hook para navegar entre as páginas, usado para redirecionar o usuário após o login.
    const navigate = useNavigate();
    // Obtém o `usuario`, `handleLogin` (função para realizar o login), e `isLoading` (indicador de carregamento) do contexto de autenticação.
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    // Estado para armazenar os dados de login do usuário, como e-mail e senha.
    const [usuarioLogin, setUsuarioLogin] = useState({} // Inicializa o estado com um objeto vazio que segue a interface `UsuarioLogin`.
    );
    // Hook de efeito que redireciona o usuário para a página '/home' se o login for bem-sucedido e um token for retornado.
    useEffect(() => {
        if (usuario && usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario, navigate]);
    // Função que atualiza o estado `usuarioLogin` quando os campos do formulário mudam.
    // Cada alteração nos campos de entrada é armazenada no estado usando o `name` dos inputs para definir a chave.
    function atualizarEstado(e) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }
    // Função que é chamada ao submeter o formulário de login.
    // Previne o comportamento padrão do formulário (recarregar a página) e chama a função `handleLogin`.
    function login(e) {
        e.preventDefault();
        handleLogin(usuarioLogin); // Chama a função de login com os dados do usuário.
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "bodyLogin", children: _jsxs("div", { id: "login-container", children: [_jsx("h1", {}), _jsxs("form", { id: "login-form", onSubmit: login, children: [_jsxs("div", { className: "full-box", children: [_jsx("label", { htmlFor: "email", children: "E-mail" }), _jsx("input", { type: "email", id: "email", name: "email", placeholder: "Digite seu e-mail", required: true, value: usuarioLogin.email, onChange: (e) => atualizarEstado(e) })] }), _jsxs("div", { className: "full-box", children: [_jsx("label", { htmlFor: "password", children: "Senha" }), _jsx("input", { type: "password", id: "senha", name: "senha", placeholder: "Digite sua senha", required: true, value: usuarioLogin.senha, onChange: (e) => atualizarEstado(e) })] }), _jsx("input", { type: "submit", value: "Entrar" }), _jsxs("p", { children: ["N\u00E3o tem uma conta? ", _jsx("a", { href: "/cadastro", children: "Cadastre-se" })] }), _jsx("p", { children: _jsx("a", { href: "/", children: "Voltar Para Home" }) })] })] }) }), _jsxs("div", { className: "enabled", children: [_jsx("div", { className: "active", "vw-access-button": true }), _jsx("div", { "vw-plugin-wrapper": true, children: _jsx("div", { className: "vw-plugin-top-wrapper" }) })] }), _jsx("script", { src: "https://vlibras.gov.br/app/vlibras-plugin.js" }), _jsx("script", { children: "new window.VLibras.Widget('https://vlibras.gov.br/app');" }), _jsx("script", { src: "https://website-widgets.pages.dev/dist/sienna.min.js", defer: true })] }));
}
export default Login;
