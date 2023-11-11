const livrosElem = document.querySelector("#livros");

function exibirLivroNaTela(listaDeLivros) {
  livrosElem.innerHTML = "";

  listaDeLivros.forEach((livro) => {
    let disponivel = livro.quantidade <= 0 ? "indisponivel" : "";
    totalLivros.innerHTML = "";
    livrosElem.innerHTML += `
      <div class="livro">
          <img class="livro__imagens ${disponivel}" src="${
      livro.imagem
    }" alt="${livro.alt}"/>
          <h2 class="livro__titulo">${livro.titulo}</h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">${livro.preco.toLocaleString(
            "pt-BR",
            { style: "currency", currency: "BRL" }
          )}</p>
          <p id="quantidade" hidden >${livro.quantidade}</p>
  
          <div class="tags">
          <span class="tag">${livro.categoria}</span>
          </div>
    </div>`;
  });
}
