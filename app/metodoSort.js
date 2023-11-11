const botaoOrdenar = document.getElementById("btnOrdenarPorPreco");

botaoOrdenar.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  // Ordena por ordem crescente (a-b)
  const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

  exibirLivroNaTela(livrosOrdenados);
}
