//Crie uma variável "numero" e 
// peça um valor com prompt 
// verifique se é positivo, 
// negativo ou zero. 
// Use if-else para imprimir a 
// respectiva mensagem.

var numero = prompt("Informe um número")
numero = parseInt(numero)
if (numero > 0) {
    alert("O número é positivo")
} else if (numero == 0) {
    alert("O número é zero")
} else {
    alert("então o número é negativo")
}