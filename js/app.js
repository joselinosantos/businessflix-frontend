import { titulosService } from './service/titulos-service.js';

const listaRecomendados = document.querySelector('.recomendados .card-deck')
const listaSeries = document.querySelector('.series .card-deck')
const listaBooks = document.querySelector('.livros .card-deck')

const criarCard = (titulo, autor, capa) => {
    const card = document.createElement('div');

    card.className = 'card'
    card.innerHTML = `
        <img src="img/${capa}" alt="Imagem capa">
        <div class="card-body">
            <h5 class="text-blue">${autor}</h5>
            <h5 class="titulo">${titulo}</h5>
            <a class="btn btn-play bg-white text-dark" href="#">
                <i class="fa fa-play"></i> Assistir Agora
            </a>
        </div>`
    return card;
}

export const listarItensRecomendacao = async () => {
    try {
        let lista = '';
        // Fluxo principal: Requisição de recomendações
        let resposta = await titulosService.listarRecomendados(listaRecomendados)
            .then((res) => {
                return res;
            })
            .catch(() => {
                return null;
            });

        if (resposta && resposta.resposta) {
            let recomendacoes = resposta.resposta;
            listaRecomendados.textContent = '';

            if (recomendacoes.includes('json')) {
                recomendacoes = recomendacoes.replace('```json', '').replace('```', '')
                lista = JSON.parse(recomendacoes);
            }
        } else {
            // Fluxo alternativo: Executar requisição para os dados eventuais
            lista = await titulosService.listar(listaRecomendados, 'series');
        }

        lista.slice(0, 4).forEach((item) => {
            let card = criarCard(item.titulo, item.autor, item.capa)
            listaRecomendados.appendChild(card)
        })
    } catch (error) {
        listaRecomendados.innerHTML = `<p class="alert alert-danger">Não foi possível carregar a lista de itens recomendados! ${error}</p>`;
    }
}

const listarSeries = async () => {
    try {
        const resposta = await titulosService.listar(listaSeries, 'series');

        resposta.slice(0, 4).forEach((item) => {
            let card = criarCard(item.titulo, item.autor, item.capa)

            listaSeries.appendChild(card)
        })
    } catch (error) {
        listaSeries.innerHTML = `<p class="alert alert-danger">Não foi possível carregar a lista de séries! ${error}</p>`;
    }
}

const listarBooks = async () => {
    try {
        const resposta = await titulosService.listar(listaBooks, 'books');

        resposta.slice(0, 4).forEach((item) => {
            let card = criarCard(item.titulo, item.autor, item.capa)

            listaBooks.appendChild(card)
        })
    } catch (error) {
        listaBooks.innerHTML = `<p class="alert alert-danger">Não foi possível carregar a lista de livros! ${error}</p>`;
    }
}

listarSeries()
listarBooks()
listarItensRecomendacao()