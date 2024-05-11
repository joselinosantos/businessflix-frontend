import { API_DATA } from "../api.js";

const listar = async (container, endpoint) => {
    try {
        let resposta = await fetch(`${API_DATA}/${endpoint}`);
        return resposta.json();
    } catch (error) {
        container.innerHTML = `<p class="alert alert-danger">Não foi possível realizar a requisição! ${error}</p>`;
    }
}

export const titulosService = {
    listar
}