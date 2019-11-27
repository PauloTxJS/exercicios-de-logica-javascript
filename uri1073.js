//parte lógica do exercício, sem o html nada será mostrado para o usuário.
// Exercicío: Leia um valor inteiro N.Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

var num = prompt("Digite um número inteiro: ");

for(i=1; i<=num; i++) //for coomeçando em um por onta da especificação do exercício
{
    if(i%2 == 0) //resto da divisão por 2 igual a zero, isso dererminará se um número é ou não é par.
    {
        var resultado = Math.pow(i,2); //função especifica expontes, ai você coloca sua base e o seu expoente.
        document.write(i + " ^ 2 = "+ resultado + "<br>"); //+ serve para concatenar assim como a vírgula.
        //esse comando vai dentro do laço de repetição pois eu terei várias saídas, se ele ficar fora do laço só irá mostrar o último número.
    }
 
}




