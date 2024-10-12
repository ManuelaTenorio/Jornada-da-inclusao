export default interface UsuarioLogin {
    id: number;
    nome: string;
    email: string | number | readonly string[] | undefined;
    senha: string;
    token: string;
}