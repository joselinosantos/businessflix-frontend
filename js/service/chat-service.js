import { API_BUSINESS } from "../api.js";

const responder = async (mensagem) => {
    try {
        return await fetch(`${API_BUSINESS}/businesschat`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({'mensagem': mensagem}),
        }).then(res => { return res.json()});
    } catch (error) {
        console.error(`Não foi possível retornar a resposta da mensagem! ${error}`);
    }
}

export const chatService = {
    responder
}