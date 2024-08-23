var produtos = []

function novosProdutos(produto, preço, quantidade){
    if (produto && preço > 0 && quantidade > 0){
        const produtinhos = {
            produto,
            preço,
            quantidade
        }
        produtos.push(produtinhos)
    }else{
        console.log("Sem produtos selecionados ou dados inválidos!")
    }
}

function listarProdutos(){
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("Os produtos selecionados foram:");
    produtos.forEach((produto) => {
        console.log(`Produto: ${produto.produto}, Preço: ${produto.preço}, Quantidade: ${produto.quantidade}`);
    });
}

function calcularValorEstoque(){
    let valorTotal = 0;
    produtos.forEach((produto) => {
        valorTotal += produto.preço * produto.quantidade;
    });
    console.log(`Seu Valor Final Foi: ${valorTotal}`);
}

novosProdutos('Pasta de Dente', 10, 2)
novosProdutos('Escova', 20, 3)
listarProdutos()
calcularValorEstoque()