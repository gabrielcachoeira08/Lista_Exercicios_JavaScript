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
    if (typeof precoNum === Number) {
        return true
    }
    else {
        return false
    }
};

function dados(object) {
    console.log(`Produto: ${object.nome}`);
    console.log(`Categoria: ${object.categoria}`);
    console.log(`Preço: R$ ${object.preco}`);
};