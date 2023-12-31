// Script para interatividade na loja virtual

document.addEventListener("DOMContentLoaded", function () {
    // Array para armazenar os produtos no carrinho
    const carrinho = [];

    // Função para adicionar um produto ao carrinho
    function adicionarAoCarrinho(nomeProduto, precoProduto) {
        carrinho.push({ nome: nomeProduto, preco: precoProduto });
        atualizarContagemCarrinho();
    }

    // Função para atualizar a contagem no carrinho no cabeçalho
    function atualizarContagemCarrinho() {
        const contagemCarrinho = document.getElementById("contagem-carrinho");
        contagemCarrinho.textContent = carrinho.length.toString();
    }

    // Adiciona um ouvinte de evento para cada botão "Adicionar ao Carrinho"
    const botoesAdicionarCarrinho = document.querySelectorAll(".produto button");
    botoesAdicionarCarrinho.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const produto = this.parentNode;
            const nomeProduto = produto.querySelector("h2").textContent;
            const precoProduto = produto.querySelector(".preco").textContent;
            adicionarAoCarrinho(nomeProduto, precoProduto);
        });
    });
});

