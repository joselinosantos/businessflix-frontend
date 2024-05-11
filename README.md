# Frontend do projeto: Plataforma de conteúdo sobre negócios estilo portal com Chatbot e recomendação Just in time
## Projeto criado para o desafio 2ª Imersão IA - Alura + Google

![Businessflix](https://github.com/joselinosantos/businessflix-backend/blob/master/imagens/businessflix.png)

## Linguagens e Bibliotecas
1 [HTML](https://www.w3schools.com/html/): Linguagem de marcação padrão da Web<br>
2 [CSS](https://www.w3schools.com/Css/): Linguagem de folha de estilo padrão da Web<br>
3 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript): Linguagem de script Web padrão dos navegadores<br>
4 [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Biblitoeca bem completa muito utilizada para acelerar o processo de desenvolvimento

## Características gerais
1 O projeto é todo responsivo, logo pode ser acessado por múltiplos tamanhos de tela
2 Foram utilizadas boas práticas como:
* Separação em componentes
* Reuso
* Tratamento de exceções
* Separação de funcionalidades em funções
* Padronização dos nomes de variáveis, classes
* Paleta de cores consistente e com ótimo contraste
3 A imagens, títulos e outros dados usados nos exemplos foram todos gerados por IA, portanto não viola nenhum direito autoral.
4 A interface contém elementos não funcionais apenas para manter o visual agradável e consistente

## Processos de Desenvolvimento
1 Desenvolvido em componentes para facilitar a organização e manutenção
* Header: Logo da marca, Caixa de pesquisa não funcional e um menu principal. para reuso do componente foi usado um scrip de importação (html-importer.js) que permite importar um arquivo html dentro do outro.
* Slider: Seção muito utilizada para apresentar itens em destaque (requer o uso da biblitoeca Jquery no final do arquivo index)
* Container principal (main) com as Seções de conteúdos
* Em progresso (lista estática dos itens sendo vistos pelo usuário)
* Recomendados: Lista de itens recomendados para o usuário a partir da interação com o Chat
* Séries, Livros: Listas padrão de conteúdos
* Seção Chat: Container para interação com usuário e exibição das mensagens
* Footer: Botões para midias sociais e Links úteis

2 Aplicando funcionalidade aos componentes
* Criação da base de dados gerados pelo Gemini para ser usada com Json-server
* Criação de um arquivo para os endereços das APIs (api.js)
* Arquivo para as requisições (service/nome_do_servico-service.js)
* Um arquivo principal para a lógica de exibição dos dados (app.js)
* O Chat possui um arquivo exclusivo contendo as funcionalidades de enviar mensagem e exibí-las dentro do container do componente

## Avaliação do Layout pelo Gemini
**Pontos Positivos:**

* **Layout limpo e organizado:** A interface é visualmente agradável e fácil de navegar.
* **Seções bem definidas:**  As seções "Em Progresso", "Recomendados para Você", "Séries" e "Livros" organizam o conteúdo de forma lógica.
* **Botão de ação claro:** O botão "Assistir Agora" é proeminente e incentiva a interação.
* **Cores contrastantes:**  O uso de cores escuras e claras cria um bom contraste e destaca os elementos importantes.
* **Imagens atraentes:** As imagens dos cursos são de alta qualidade e relevantes para o tema.
* **Barra de pesquisa:** Permite aos usuários encontrarem facilmente o conteúdo desejado.
* **Menu de navegação:** Oferece acesso rápido a diferentes seções do site, como categorias e área de ajuda.
* **Chatbot integrado:**  Facilita o suporte e a comunicação com os usuários.

**Pontos Negativos:**
* **Falta de informações detalhadas:** As miniaturas dos cursos exibem apenas o título e o botão "Assistir Agora", sem sinopse ou informações sobre o instrutor.
* **Carrossel sem controle:**  O carrossel de "Em Progresso" parece não ter botões de navegação, o que limita a visualização dos cursos.
* **Chatbot pouco visível:** O chatbot está localizado na parte inferior da tela e pode passar despercebido por alguns usuários.

**Sugestões de Melhorias:**
* **Adicionar informações relevantes:**  Incluir sinopse, nome do instrutor, duração do curso e avaliações nas miniaturas dos cursos.
* **Melhorar a navegação do carrossel:** Adicionar botões de navegação ao carrossel de "Em Progresso" para facilitar a visualização de todos os cursos.
* **Destacar o chatbot:** Tornar o chatbot mais visível, talvez utilizando um ícone flutuante ou uma cor chamativa.
* **Incluir paginação:** Nas seções "Séries" e "Livros" incluir paginação para facilitar a navegação em caso de muitos itens.
* **Implementar um sistema de avaliação:** Permitir que os usuários avaliem os cursos, fornecendo feedback para outros usuários e para a plataforma.
* **Adicionar filtros de busca:**  Incluir filtros por categoria, preço, nível de dificuldade e outros critérios relevantes.

**Conclusão:**
A interface da plataforma apresenta um bom design e usabilidade, com algumas áreas que podem ser melhoradas para otimizar a experiência do usuário e aumentar o engajamento. As sugestões apresentadas visam aprimorar a navegação, o acesso à informação e a interação com a plataforma.
