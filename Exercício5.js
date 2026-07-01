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
    let numParticipantes = eventos.participantes.length
    if (numParticipantes > 0) {
        return `Há ${numParticipantes} participantes.`;
    }
    else {
        return "Não há nenhum participante!";
    }
};

function dadosEvento(evento) {
    console.log(`Evento: ${evento.nome}`)
    console.log(`Local: ${evento.local}`);
};

function propriedadesEvento(evento) {
    console.log(Object.keys(evento));
    console.log(Object.values(evento));
};

function verificarLocal(evento) {
    if ((evento).hasOwnProperty("local")) {        
        return "contém local";
    }
    else {
        return "Sem local definido";
    }
};

function tiposEventos(evento) {
    console.log(typeof evento.nome);
    console.log(typeof evento.local);
    console.log(typeof evento.data);
    console.log(typeof evento.participantes);
}

// Visualização Exercício 5
// Evento 1
console.log(new Date(eventos[0].data).toLocaleDateString("pt-BR"));
console.log(verificarParticipantes(eventos[0]));
console.log(dadosEvento(eventos[0]));
console.log(propriedadesEvento(eventos[0]));
console.log(verificarLocal(eventos[0]));
console.log(tiposEventos(eventos[0]));
// Evento 2
console.log(new Date(eventos[1].data).toLocaleDateString("pt-BR"));
console.log(verificarParticipantes(eventos[1]));
console.log(dadosEvento(eventos[1]));
console.log(propriedadesEvento(eventos[1]));
console.log(verificarLocal(eventos[1]));
console.log(tiposEventos(eventos[1]));