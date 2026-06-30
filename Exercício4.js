const valores = [
    [
        "500",
        "350.50",
        "1000",
    ],
    [
        "800",
        "900",
        "700",
    ],
];

let valores1Number = [];

for (i = 0; i < valores[0].length; i++) {
    valores1Number.push(Number(valores[0][i]))
};

let valores2Number = [];
for (i = 0; i < valores[1].length; i++) {
    valores2Number.push(Number(valores[1][i]))
};

function somarGastos(valores) {
    let somaGastos = 0
    for (x = 0; x < valores.length; x++) {
        somaGastos += valores[x]
    };
    return `Total: R$ ${somaGastos}`;
};

function limiteGastos(totalGastos) {
    if (totalGastos > 2000) {
        return "Passou do limite de gastos"
    }
    else {
        return "Gastou dentro do limite"
    }
};

// Visualização Exercício 4
// Valores 1
console.log(somarGastos(valores1Number));
console.log(limiteGastos(somarGastos(valores1Number)));
// Valores 2
console.log(somarGastos(valores2Number));
console.log(limiteGastos(somarGastos(valores2Number)));