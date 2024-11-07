import React, { createContext, useState, ReactNode } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
    isLoggedIn: boolean; // Adiciona isLoggedIn para indicar se o usuário está logado
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        token: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    
    // isLoggedIn é verdadeiro se o token do usuário não estiver vazio
    const isLoggedIn = usuario.token !== "";

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert("O Usuário foi autenticado com sucesso!");
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!");
        }
        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            email: "",
            senha: "",
            token: ""
        });
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
