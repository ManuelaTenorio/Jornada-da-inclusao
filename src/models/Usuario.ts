export default interface Usuario {
    id: number; // Identificador único do usuário, geralmente gerado automaticamente pelo sistema.
    nome: string; // Nome do responsável, como um pai ou guardião.
    usuario: string; // E-mail do usuário ou responsável, usado para login e comunicação.
    foto: string;
    senha: string; // Senha para autenticação do usuário, usada para proteger o acesso à conta.
  }
  