import { API_DATA, API_BUSINESS } from "../api.js";

const listar = async (container, endpoint) => {
    try {
        let resposta = await fetch(`${API_DATA}/${endpoint}`);
        return resposta.json();
    } catch (error) {
        container.innerHTML = `<p class="alert alert-danger">Não foi possível realizar a requisição! ${error}</p>`;
    }
}

export const listarRecomendados = async (container) => {
    try {
        let resposta = await fetch(`${API_BUSINESS}/recomendacoes`);
        return resposta.json();
    } catch (error) {
        container.innerHTML = `<p class="alert alert-danger">Não foi possível realizar a requisição do endpoint /recomendacoes! ${error}</p>`;
    }
}

export const titulosService = {
    listar,
    listarRecomendados
}