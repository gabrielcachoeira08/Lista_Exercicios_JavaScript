const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
const autores2 = "J. K. Rowling,J. R. R. Tolkien";

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

// Visualização Execício 3
// Autores 1
console.log(exibirAutores(autores1));
console.log(verificarAutor(autores1,"Monteiro Lobato"));
// Autores 2
console.log(verificarAutor(autores2,"Monteiro Lobato"));
console.log(exibirAutores(autores2));