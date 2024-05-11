import { titulosService } from './service/titulos-service.js';

const listaSeries = document.querySelector('.series .card-deck')

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

const listarSeries = async () => {
    try {
        const resposta = await titulosService.listar(listaSeries, 'series');

        resposta.slice(0, 4).forEach((item) => {
            let card = criarCard(item.titulo, item.autor, item.capa)

            let cardBody = card.querySelector('.card-body')
            card.addEventListener('mouseover', () => {
                cardBody.style.display = "flex"
            })
            listaSeries.appendChild(card)
        })
    } catch (error) {
        listaSeries.innerHTML = `<p class="alert alert-danger">Não foi possível carregar a lista de séries! ${error}</p>`;
    }
}

listarSeries()
