import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { login } from "../services/Service";
export const AuthContext = createContext({});
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        token: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    // isLoggedIn é verdadeiro se o token do usuário não estiver vazio
    const isLoggedIn = usuario.token !== "";
    async function handleLogin(usuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert("O Usuário foi autenticado com sucesso!");
        }
        catch (error) {
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
    return (_jsx(AuthContext.Provider, { value: { usuario, handleLogin, handleLogout, isLoading, isLoggedIn }, children: children }));
}
