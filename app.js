alert ("Vamos jogar um jogo?")
var resposta = prompt("sim ou não?").toLowerCase()
contador = 0;

while (resposta != 'sim' && resposta != 'não')  {
    alert("A resposta somente pode ser sim ou não, tente novamente")
    resposta = prompt("Responda SIM ou NÃO").toLowerCase();
}
    if (resposta === 'sim') {
        alert("Vamos jogar então! Cada pergunta valerá 25 pontos, serão 5 perguntas, podendo acertar 4")

        var perguntas = ["Qual o nome do filho de Deus?", 
        "Qual o nome do brasil em inglês?", 
        "Qual o nome do amor da minha vida?", 
        "Qual o nome do meu líder de GA?", 
        "Qual o nome completo da américa do norte?", 
        "Qual o nome completo da sigla CN?"];

        
        var respostas = [
            "Brazil",
            "Julye",
            "Israel",
            "USA",
            "China"


        ];
    
    for (var i = 0; i < perguntas.length; i++) {
    var resposta_usuario = prompt(perguntas[i]).toLowerCase();

        if (resposta_usuario === respostas[i]) {
            contador += 25
        } else {
            alert("errou, próxima pergunta");

        }
    }

    if (contador >= 100) {
    alert("Parabéns, você ganhou e sua pontuação foi " + contador);
    } else {
        alert("Você não ganhou, sua pontuação foi " + contador);

    }
}
