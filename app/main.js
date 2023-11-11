const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

let livros = [];

carregarAPI();

async function carregarAPI() {
  const res = await fetch(endpointAPI);
  livros = await res.json();
  console.table(livros);

  const livrosComDesconto = aplicarDesconto(livros);
  exibirLivroNaTela(livrosComDesconto);
}

function filtraPorCategoria(listaDeLivros) {
  const botoesCategoria = document
    .querySelector("nav")
    .querySelectorAll("button");

  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      console.log(e.target.value);
      const livrosFiltrados = listaDeLivros.filter(
        (livro) => livro.categoria == e.target.value
      );
      exibirLivroNaTela(livrosFiltrados);
    });
  });
}
