const livrosElem = document.querySelector("#livros");

async function carregarAPI() {
  const api = await fetch(
    "https://guilhermeonrails.github.io/casadocodigo/livros.json"
  );
  const livros = await api.json();
  console.log(livros);

  livros.forEach((livro) => {
    livrosElem.innerHTML += `
    <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}</p>
        <p id="quantidade" hidden>${livro.quantidade}</p>
        
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
  </div>`;
  });
}

carregarAPI();
