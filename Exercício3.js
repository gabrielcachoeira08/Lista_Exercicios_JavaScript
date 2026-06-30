let autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
let autores2 = "J. K. Rowling,J. R. R. Tolkien";

function exibirAutores(string) {
    let arrayAutores = string.split(",");
    for (i = 0; i < arrayAutores.length; i++) {
        console.log(arrayAutores[i])
    };
};

function verificarAutor(string,autor) {
    if (string.includes(autor)) {
        return "Autor Encontrado!"
    }
    else {
        return "Autor Não Encontrado!"
    }
};

function tituloAutor(titulo,autor) {
    console.log(`A obra ${titulo} foi feita por ${autor}`);
};

function exibirLista(lista) {
    let newarray = string.split(",");
    let newlist = newarray.join(",");
    return newlist
};

// Visualização Execício 3
// Autores 1
console.log(exibirAutores(autores1));
console.log(verificarAutor(autores1,"Monteiro Lobato"));
console.log(exibirLista(autores1));
// Autores 2
console.log(verificarAutor(autores2,"Monteiro Lobato"));
console.log(exibirAutores(autores2));
console.log(exibirLista(autores2));
// Títulos e Autores
console.log(tituloAutor("Dom Casmurro","Machado de Assis"));
console.log(tituloAutor("O Senhor Dos Aneis","J. R. R. Tolkien"));