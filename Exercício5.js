const eventos = [
    {
        nome: "Semana da Tecnologia",
        local: "Auditório",
        data: new Date("2026-08-20"),
        participantes: ["Ana","Carlos","Marcos"]
    },
    {
        nome: "Workshop Angular",
        local: "Laboratório 5",
        data: new Date("2026-09-10"),
        participantes: [],
    },
];

function verificarParticipantes(eventos) {
    let numParticipantes = eventos[0].participantes.length
};

// Visualização Exercício 5
// Evento 1
console.log(new Date(eventos[0].data).toLocaleDateString("pt-BR"));
console.log(eventos[0].participantes.length);
// Evento 2
console.log(new Date(eventos[1].data).toLocaleDateString("pt-BR"));
console.log(eventos[1].participantes.length);