// Exercício 2

const disciplinas = [
    [
        "HTML",
        "CSS",
        "JavaScript",
    ],
    [
        "Banco de Dados",
        "",
        "TCC",
        "Redes"
    ],
];

function exibicaoDisciplinas(disciplina) {
    for (let i = 0; i < disciplina.length; i++) {
        console.log(disciplina[i])
    };
    console.log(`Total: ${disciplina.length}`);
};

function verificarJavaScript(disciplina) {
    if ((disciplina).includes("JavaScript")) {
        return "Cursa JavaScript!"
    }
    else {
        return "Não cursa JavaScript!"
    }
};

function percorrerDisciplinas(disciplina) {
    for (let x = 0; x < disciplina.length; x++) {
        console.log(disciplina[x]);
        if (disciplina[x] === "") {
            continue;
        }
        if (disciplina[x] === "TCC") {
            break;
        }
    };
};

// Visualização Exercício 2
// aluno 1
console.log(exibicaoDisciplinas(disciplinas[0]));
console.log(verificarJavaScript(disciplinas[0]));
disciplinas[0].push("TCC");
console.log(percorrerDisciplinas(disciplinas[0]));

//aluno 2
console.log(exibicaoDisciplinas(disciplinas[1]));
console.log(verificarJavaScript(disciplinas[1]));
disciplinas[1].push("JavaScript");
console.log(percorrerDisciplinas(disciplinas[1]));