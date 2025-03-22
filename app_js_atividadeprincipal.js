alert("Seja bem vindo ao jogo do milhão");

let numeroSecreto = 100;
let numeroInserido = prompt("Escolha um número entre 1 e 30");
numeroInserido = Number(numeroInserido);
console.log = numeroInserido

while (numeroInserido != numeroSecreto) {
    alert("Você errou! tente novamente");
    numeroInserido = prompt("Escolha um número entre 1 e 30");
    numeroInserido = Number(numeroInserido);
}

alert(`Você finalmente acertou! o número correto é ${numeroSecreto}`)
console.log(numeroSecreto)
