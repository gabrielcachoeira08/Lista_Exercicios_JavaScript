//Exercício 1

const produtos = [ 
    {
        nome: "Monitor",
        categoria: "Informática",
        preco: "599.90",
        estoque: 5,
    },
    {
        nome: "Cadeira",
        categoria: "Escritório",
        preco: "450",
        estoque: 30,
    },
];

function validacaoPreco (object) {
    let precoNum = Number(object.preco);
    if (isNaN(precoNum) === false) {
        return "Preço Válido!"
    }
    else {
        return "Preço Inválido!"
    }
};

function dadosProduto(object) {
    console.log(`Produto: ${object.nome}`);
    console.log(`Categoria: ${object.categoria}`);
    console.log(`Preço: R$ ${object.preco}`);
};

function validacaoEstoque(object) {
    if (object.estoque >= 10) {
        console.log("Estoque Adequado!");
    }
    else {
        console.log("Estoque Baixo!");
    }
};

function propriedadesProduto(object) {
    console.log(Object.keys(object));
    console.log(Object.values(object));
};

function tiposInformacoes(object) {
    console.log(typeof object.nome);
    console.log(typeof object.categoria);
    console.log(typeof object.preco);
    console.log(typeof object.estoque);
};

// exibição Exercício 1
// produto 1
console.log(validacaoPreco(produtos[0]));
console.log(dadosProduto(produtos[0]));
console.log(validacaoEstoque(produtos[0]));
console.log(propriedadesProduto(produtos[0]));
console.log(tiposInformacoes(produtos[0]));
//produto 2
console.log(validacaoPreco(produtos[1]));
console.log(dadosProduto(produtos[1]));
console.log(validacaoEstoque(produtos[1]));
console.log(propriedadesProduto(produtos[1]));
console.log(tiposInformacoes(produtos[1]));