import axios from "axios";

// Cria uma instância do axios para realizar as requisições HTTP.
// A `baseURL` aponta para a URL base da API que será chamada.
const api = axios.create({
    // A URL base é definida usando uma variável de ambiente ou um valor padrão.
    // Aqui, está sendo utilizada uma URL local para desenvolvimento.
    baseURL: 'http://localhost:8080/'
});

/**
 * Realiza uma requisição POST para cadastrar um novo usuário.
 * @param url - A URL específica do endpoint para cadastro.
 * @param dados - Os dados do usuário a serem enviados no corpo da requisição.
 * @param setDados - Função para atualizar o estado com a resposta da API.
 */
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados); // Envia os dados para o servidor.
    setDados(resposta.data); // Atualiza o estado com os dados retornados pela API.
};

/**
 * Realiza uma requisição POST para autenticação (login) de um usuário.
 * @param url - A URL específica do endpoint de login.
 * @param dados - Credenciais de login (e.g., email e senha).
 * @param setDados - Função para armazenar o token de autenticação e outras informações retornadas.
 */
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados); // Envia as credenciais para autenticar.
    setDados(resposta.data); // Atualiza o estado com os dados retornados pela API.
};

/**
 * Realiza uma requisição GET para buscar informações do servidor.
 * @param url - A URL específica do endpoint.
 * @param setDados - Função para armazenar os dados retornados pela API.
 * @param header - Cabeçalhos adicionais para autenticação ou configurações da requisição.
 */
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header); // Faz uma requisição GET para buscar dados.
    setDados(resposta.data); // Atualiza o estado com os dados retornados pela API.
};

/**
 * Realiza uma requisição POST para criar um novo recurso no servidor.
 * @param url - A URL específica do endpoint.
 * @param dados - Os dados a serem enviados no corpo da requisição.
 * @param setDados - Função para armazenar os dados retornados pela API.
 * @param header - Cabeçalhos adicionais para autenticação ou configurações da requisição.
 */
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header); // Envia os dados para o servidor.
    setDados(resposta.data); // Atualiza o estado com os dados retornados pela API.
};

/**
 * Realiza uma requisição PUT para atualizar um recurso existente no servidor.
 * @param url - A URL específica do endpoint.
 * @param dados - Os dados a serem enviados no corpo da requisição para atualização.
 * @param setDados - Função para armazenar os dados retornados pela API.
 * @param header - Cabeçalhos adicionais para autenticação ou configurações da requisição.
 */
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header); // Envia os dados atualizados para o servidor.
    setDados(resposta.data); // Atualiza o estado com os dados retornados pela API.
};

/**
 * Realiza uma requisição DELETE para remover um recurso no servidor.
 * @param url - A URL específica do endpoint.
 * @param header - Cabeçalhos adicionais para autenticação ou configurações da requisição.
 */
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header); // Envia uma requisição DELETE para o servidor.
};
