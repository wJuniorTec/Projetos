// Array para armazenar os itens do carrinho
let carrinho = [];

// Variáveis de controle do usuário
let usuarioLogado = false; // Exemplo: o usuário não está logado inicialmente
let enderecoSelecionado = false; // Exemplo: nenhum endereço selecionado inicialmente

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    let itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

// Função para aumentar a quantidade de um item no carrinho
function aumentarQuantidade(index) {
    carrinho[index].quantidade++;
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

// Função para diminuir a quantidade de um item no carrinho
function diminuirQuantidade(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

// Função para atualizar o modal do carrinho com os itens atuais
function atualizarModalCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-items');
    const totalCarrinhoElement = document.getElementById('total-carrinho');
    carrinhoContainer.innerHTML = ''; // Limpa o conteúdo atual do modal

    let totalCarrinho = 0;
    // Para cada item no carrinho, cria um elemento de lista e adiciona ao modal
    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} x 
            <button onclick="diminuirQuantidade(${index})">-</button>
            ${item.quantidade}
            <button onclick="aumentarQuantidade(${index})">+</button>
            <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoContainer.appendChild(itemElement);
        totalCarrinho += item.preco * item.quantidade;
    });
    totalCarrinhoElement.textContent = totalCarrinho.toFixed(2); // Atualiza o total do carrinho
}

// Função para abrir o modal do carrinho
function abrirModalCarrinho() {
    atualizarModalCarrinho(); // Atualiza o modal do carrinho antes de exibir
    document.getElementById('modalCarrinho').style.display = 'block'; // Exibe o modal do carrinho
}

// Função para fechar o modal do carrinho
function fecharModalCarrinho() {
    document.getElementById('modalCarrinho').style.display = 'none';
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarModalCarrinho(); // Atualiza o modal do carrinho
}

// Botão para limpar o carrinho
document.getElementById('limpar-carrinho').addEventListener('click', limparCarrinho);