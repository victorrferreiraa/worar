//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!". ]
// Caso contrário, mostre "Boa semana!".


alert("Seja bem vindo ao programa")

var diadaSemana = prompt("Informe qual é o dia da semana");

if (diadaSemana.toLowerCase() == "sabado" || diadaSemana.toLowerCase() == "domingo" ) {
    alert("Bom fim de semana")
} else {
    alert("Boa semana")
}