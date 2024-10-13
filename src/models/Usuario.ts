export default interface Usuario {
    id: number; // Identificador único do usuário, geralmente gerado automaticamente pelo sistema.
    nomeResponsavel: string; // Nome do responsável, como um pai ou guardião.
    email: string; // E-mail do usuário ou responsável, usado para login e comunicação.
    senha: string; // Senha para autenticação do usuário, usada para proteger o acesso à conta.
  }
  