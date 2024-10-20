import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { login } from "../services/Service";
// Cria o contexto de autenticação com um valor padrão vazio.
export const AuthContext = createContext({});
// Define o provedor de autenticação, que gerencia o estado de autenticação do usuário.
export function AuthProvider({ children }) {
    // Estado que armazena as informações do usuário autenticado.
    const [usuario, setUsuario] = useState({
        id: 0, // ID do usuário, inicia como 0.
        nome: "", // Nome do usuário, inicia como uma string vazia.
        email: "", // E-mail do usuário, inicia como uma string vazia.
        senha: "", // Senha do usuário, inicia como uma string vazia.
        token: "" // Token de autenticação, inicia como uma string vazia.
    });
    // Estado que indica se o login está em andamento.
    const [isLoading, setIsLoading] = useState(false);
    // Método para realizar o login do usuário.
    async function handleLogin(usuarioLogin) {
        setIsLoading(true); // Indica que a operação de login está em andamento.
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario); // Chama o método de login.
            alert("O Usuário foi autenticado com sucesso!"); // Mensagem de sucesso.
        }
        catch (error) {
            alert("Os Dados do usuário estão inconsistentes!"); // Mensagem de erro caso o login falhe.
        }
        setIsLoading(false); // Finaliza a operação de login.
    }
    // Método para realizar o logout do usuário.
    function handleLogout() {
        setUsuario({
            id: 0, // Reseta o ID do usuário para 0.
            nome: "", // Reseta o nome do usuário para uma string vazia.
            email: "", // Reseta o e-mail do usuário para uma string vazia.
            senha: "", // Reseta a senha do usuário para uma string vazia.
            token: "" // Reseta o token do usuário para uma string vazia.
        });
    }
    // Retorna o provedor de autenticação com o valor do contexto.
    return (_jsx(AuthContext.Provider, { value: { usuario, handleLogin, handleLogout, isLoading }, children: children }));
}
