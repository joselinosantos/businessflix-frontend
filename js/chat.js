import { chatService } from "./service/chat-service.js";
import { listarItensRecomendacao } from "./app.js"

const chat = document.querySelector('.chat-messages')
const input = document.querySelector('.input-mensagem')
const btnEnviar = document.querySelector('.btn-enviar')

async function enviarMensagem() {
    if (input.value == "" || input.value == null) return;

    let mensagem = input.value;
    input.value = "";

    // Mensagem usuario
    let novaMensagem = criaMensagem(mensagem);
    chat.appendChild(novaMensagem);
    vaiParaFinalDoChat();

    // Mensagem chatbot Businesschat
    var textoResposta = '';

    const resposta = await chatService.responder(mensagem);
    textoResposta = resposta.resposta;

    let novaMensagemBot = criaMensagem(textoResposta);
    chat.appendChild(novaMensagemBot);
    vaiParaFinalDoChat();

    listarItensRecomendacao();
}

function criaMensagem(mensagem) {
    let caixaMensagem = document.createElement('div');

    caixaMensagem.innerHTML += `
    <div class="msg-box">
        <div class="chat-text">
            ${mensagem}
        </div>
    </div>`;

    return caixaMensagem;
}

function vaiParaFinalDoChat() {
    chat.scrollTop = chat.scrollHeight;
}

btnEnviar.addEventListener('click', enviarMensagem);

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnEnviar.click();
    }
});
