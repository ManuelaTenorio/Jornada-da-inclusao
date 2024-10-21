export default interface UsuarioLogin {
    // Identificador único do usuário (geralmente atribuído pelo banco de dados).
    id: number;

    // Nome do usuário (pode ser o nome completo ou apenas um nome).
    nome: string;

    // E-mail do usuário, que pode ser um string, um número, ou um array de strings (embora geralmente deva ser apenas uma string).
    // A inclusão de `number` e `readonly string[] | undefined` sugere flexibilidade, mas pode ser restrita a apenas `string` em muitos casos.
    email: string | number | readonly string[] | undefined;

    // Senha do usuário, armazenada como uma string.
    senha: string;

    // Token de autenticação gerado após o login bem-sucedido, usado para autenticação em requisições subsequentes.
    token: string;
}
