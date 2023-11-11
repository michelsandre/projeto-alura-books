// Capturar todos os botoes
const botoes = document.querySelector(".nav").querySelectorAll("button");
const botaoDisponivel = document.getElementById("btnLivrosDisponiveis");

let botoesCategoria = [];

// Filtra apenas botoes com atribudo de valor (categorias)
botoes.forEach((botao) => {
  let temValor = botao.hasAttribute("value");
  if (temValor) botoesCategoria.push(botao);
});

// Define função de filtrar para cada botao de categoria
botoesCategoria.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    filtrarLivrosCategoria(e);
  });
});

function filtrarLivrosCategoria(e) {
  const categoria = e.target.value;
  const livrosFiltrados = livros.filter(
    (livro) => livro.categoria == categoria
  );

  exibirLivroNaTela(livrosFiltrados);
}

botaoDisponivel.addEventListener("click", filtrarLivrosDiponiveis);

function filtrarLivrosDiponiveis() {
  const livrosFiltrados = livros.filter((livro) => livro.quantidade > 0);
  exibirLivroNaTela(livrosFiltrados);
  somarLivrosDisponiveis(livrosFiltrados);
}
