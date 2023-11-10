const livrosElem = document.querySelector("#livros");

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

let livros = [];

carregarAPI();

async function carregarAPI() {
  const res = await fetch(endpointAPI);
  livros = await res.json();
  console.log("lista original", livros);

  exibirLivroNaTela(livros);
  aplicaDesconto(livros);
}

function exibirLivroNaTela(listaDeLivros) {
  livrosElem.innerHTML = "";

  listaDeLivros.forEach((livro) => {
    livrosElem.innerHTML += `
    <div class="livro">
        <img class="livro__imagens ${
          livro.quantidade <= 0 ? "indisponivel" : ""
        }" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}</p>
        <p id="quantidade" >${livro.quantidade}</p>

        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
  </div>`;
  });
}

function aplicaDesconto(listaDeLivros) {
  const livrosComDesconto = listaDeLivros.map((livro) => {
    return { ...livro, preco: livro.preco * 0.9 };
  });

  console.log("desconto", livrosComDesconto);
  exibirLivroNaTela(livrosComDesconto);
}
