import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
function Cadastro() {
    // Hook para navegar entre as páginas, usado para redirecionar o usuário.
    const navigate = useNavigate();
    // Estado para armazenar a confirmação de senha.
    const [confirmaSenha, setConfirmaSenha] = useState("");
    // Estado que armazena os dados do usuário a ser cadastrado.
    // Utiliza a interface `Usuario` para garantir que os dados tenham a estrutura correta.
    const [usuario, setUsuario] = useState({
        id: 0,
        nomeResponsavel: '',
        email: '',
        senha: '',
    });
    // Hook de efeito que monitora a mudança no ID do usuário.
    // Se o ID for diferente de zero, significa que o usuário foi cadastrado com sucesso,
    // então redireciona para a página de login.
    useEffect(() => {
        if (usuario.id !== 0) {
            retornar(); // Chama a função que redireciona para o login.
        }
    }, [usuario]);
    // Função que redireciona para a página de login.
    function retornar() {
        navigate('/login');
    }
    // Função que atualiza o estado do `usuario` com base nos valores digitados nos campos do formulário.
    // O nome do campo (atributo `name`) é usado para identificar qual propriedade deve ser atualizada.
    function atualizarEstado(e) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    // Função que atualiza o estado da `confirmaSenha` quando o usuário digita na confirmação de senha.
    function handleConfirmarSenha(e) {
        setConfirmaSenha(e.target.value);
    }
    // Função assíncrona que é chamada ao enviar o formulário de cadastro.
    async function cadastrarNovoUsuario(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página).
        // Verifica se a senha e a confirmação são iguais e se a senha possui ao menos 8 caracteres.
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            try {
                // Tenta cadastrar o usuário usando a função `cadastrarUsuario`.
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                alert('Usuário cadastrado com sucesso!');
            }
            catch (error) {
                alert('Erro ao cadastrar o usuário!');
            }
        }
        else {
            // Exibe um alerta caso as senhas sejam diferentes ou a senha seja menor que 8 caracteres.
            alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');
            setUsuario({ ...usuario, senha: '' }); // Limpa a senha do usuário.
            setConfirmaSenha(''); // Limpa a confirmação de senha.
        }
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "bodyCad", children: _jsxs("div", { id: "login-container", className: "form-container", children: [_jsx("h1", {}), _jsx("form", { className: 'formCad', id: "login-form", onSubmit: cadastrarNovoUsuario, children: _jsxs("div", { className: "half-box", children: [_jsxs("div", { className: "full-box", children: [_jsx("label", { className: 'labelCad', htmlFor: "parent-name", children: "Nome do Pai/Respons\u00E1vel" }), _jsx("input", { className: 'inputCad', type: "text", name: "nomeResponsavel", id: "parent-name", placeholder: "Digite o nome do pai ou respons\u00E1vel", required: true, value: usuario.nomeResponsavel, onChange: (e) => atualizarEstado(e) })] }), _jsxs("div", { className: "full-box", children: [_jsx("label", { className: 'labelCad', htmlFor: "parent-email", children: "E-mail" }), _jsx("input", { className: 'inputCad', type: "email", name: "email", id: "parent-email", placeholder: "Digite o e-mail do pai ou respons\u00E1vel", required: true, value: usuario.email, onChange: (e) => atualizarEstado(e) })] }), _jsxs("div", { className: "full-box", children: [_jsx("label", { className: 'labelCad', htmlFor: "parent-password", children: "Senha" }), _jsx("input", { type: "password", id: "parent-password", name: "senha", placeholder: "Digite a senha do pai ou respons\u00E1vel", className: "inputCad", required: true, value: usuario.senha, onChange: (e) => atualizarEstado(e) })] }), _jsxs("div", { className: "full-box", children: [_jsx("label", { className: 'labelCad', htmlFor: "parent-password-confirmation", children: "Confirmar Senha" }), _jsx("input", { className: 'inputCad', type: "password", name: "senha", id: "parent-password-confirmation", placeholder: "Digite novamente a senha", required: true, value: confirmaSenha, onChange: (e) => handleConfirmarSenha(e) })] }), _jsx("input", { type: "submit", value: "Cadastrar" }), _jsxs("p", { children: ["J\u00E1 tem cadastro?", _jsx("a", { href: "/login", children: "  Fa\u00E7a seu login" })] }), _jsx("p", { children: _jsx("a", { href: "/", children: "Voltar Para Home" }) })] }) })] }) }), _jsxs("div", { className: "enabled", children: [_jsx("div", { className: "active", "vw-access-button": true }), _jsx("div", { "vw-plugin-wrapper": true, children: _jsx("div", { className: "vw-plugin-top-wrapper" }) })] }), _jsx("script", { src: "https://vlibras.gov.br/app/vlibras-plugin.js" }), _jsx("script", { children: "new window.VLibras.Widget('https://vlibras.gov.br/app');" }), _jsx("script", { src: "https://website-widgets.pages.dev/dist/sienna.min.js", defer: true })] }));
}
export default Cadastro;
