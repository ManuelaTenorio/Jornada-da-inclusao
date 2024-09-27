import axios from "axios";


//API de consulta utilizando AXIOS para realizar a requisição
const api = axios.create({
  baseURL: "https://api.estagio.amfernandes.com.br",
});

export default api;