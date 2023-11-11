const totalLivros = document.getElementById("valor_total_livros_disponiveis");

function somarLivrosDisponiveis(livros) {
  const total = livros.reduce((soma, livro) => soma + livro.preco, 0);
  totalLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${total.toLocaleString(
          "pt-BR",
          {
            minimumFractionDigits: 2,
          }
        )}</span></p>
    </div>`;
}
