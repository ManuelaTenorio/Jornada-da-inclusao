import React, { createContext, useState, ReactNode } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

// Define a interface para o contexto de autenticação, incluindo o estado do usuário e métodos de login e logout.
interface AuthContextProps {
    usuario: UsuarioLogin; // Estado do usuário autenticado.
    handleLogout(): void; // Método para deslogar o usuário.
    handleLogin(usuario: UsuarioLogin): Promise<void>; // Método para autenticar o usuário.
    isLoading: boolean; // Indica se uma operação de login está em andamento.
}

// Define a interface para as propriedades do provedor de autenticação.
interface AuthProviderProps {
    children: ReactNode; // Elementos filhos que serão envoltos pelo provedor.
}

// Cria o contexto de autenticação com um valor padrão vazio.
export const AuthContext = createContext({} as AuthContextProps);

// Define o provedor de autenticação, que gerencia o estado de autenticação do usuário.
export function AuthProvider({ children }: AuthProviderProps) {
    // Estado que armazena as informações do usuário autenticado.
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0, // ID do usuário, inicia como 0.
        nome: "", // Nome do usuário, inicia como uma string vazia.
        usuario: "", // E-mail do usuário, inicia como uma string vazia.
        senha: "", // Senha do usuário, inicia como uma string vazia.
        foto: "",
        token: "" // Token de autenticação, inicia como uma string vazia.
    });

    // Estado que indica se o login está em andamento.
    const [isLoading, setIsLoading] = useState(false);

    // Método para realizar o login do usuário.
    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true); // Indica que a operação de login está em andamento.
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario); // Chama o método de login.
            alert("O Usuário foi autenticado com sucesso!"); // Mensagem de sucesso.
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!"); // Mensagem de erro caso o login falhe.
        }
        setIsLoading(false); // Finaliza a operação de login.
    }

    // Método para realizar o logout do usuário.
    function handleLogout() {
        setUsuario({
            id: 0, // Reseta o ID do usuário para 0.
            nome: "", // Reseta o nome do usuário para uma string vazia.
            usuario: "", // Reseta o e-mail do usuário para uma string vazia.
            senha: "", // Reseta a senha do usuário para uma string vazia.
            foto: "",
            token: "" // Reseta o token do usuário para uma string vazia.
        });
    }

    // Retorna o provedor de autenticação com o valor do contexto.
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
