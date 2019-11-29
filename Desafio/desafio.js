function separar() {
    nome = document.getElementById("nome").value; //pegando o que foi digitado no input 
    vetor = []; //vetor criado para armazenar toda a lista 
    i = 0;

    console.log("Tamanho da primeira palavra " + nome.length);

    while (nome.indexOf(" ") >= 0) //laço criado para repetir a instrução pois não sei quantos nomes a pessoa terá 
    {
        var primeira = nome.slice(0, nome.indexOf(" ")); //pegando o caracter da posição zero até o primeiro espaço 
        vetor [i] = primeira
        console.log("Primeiero nome: " + primeira); //exibindo o resultado da primeira extração
        nome = nome.slice(nome.indexOf(" ") + 1); //lendo o primeiro espaço para frente 
        console.log("O que sobrou: " + nome);
        i++ //incremento 
    }

    vetor[i] = nome; //exibição da lista completa
    console.log("O que sobrou: " + vetor)
}







