var salMin = prompt("Digite o valor do salario minimo: ");
var qtdKw = prompt("Digite a quantidade de KW: ");

var valor1Kw = salMin / 700;
var valorTotal = valor1Kw * qtdKw;
var valorDesconto = valorTotal * 0.9;

document.write("Valor de 1 KW: R$ " + valor1Kw + "<br>");
document.write("Valor total da conta: R$ " + valorTotal + "<br>");
document.write("Valor com 10% de desconto: R$ " + valorDesconto + "<br>")

console.log("Valor de 1 KW: R$" + valor1Kw);
console.log("Valor total da conta: R$" + valorTotal);
console.log("Valor com 10% de desconto: R$" + valorDesconto)