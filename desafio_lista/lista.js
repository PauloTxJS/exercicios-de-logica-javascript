var num = 0;

function inserirNovaTarefa() {
    num++;//contador
    var tarefa1 = document.getElementById("inserir").value; //pegando o valor que foi inserido pelo usuário
    document.getElementById("inserir").value = ""; //para limpar a caixinha automaticamente após você dar um OK na tarefa
    var tarefa = '<tr><th scope="row"><input type="checkbox" id="ok" onclick="tarefaFeita(this,'+num+')"></th><td id="linha'+num+'">...</td><td >**trocar**</td></tr>'

    //<td id="linha'+num+'">...</td> -- colocare um id +  a var num, porque você irá riscar o que entrar em linha

    tarefa = tarefa.replace("...", tarefa1); //subtituindo ... pelo que entrar na var tarefa1 ou seja, o que o usuário inserir
    tarefa = tarefa.replace("**trocar**",num); //substituindo **trocar** por num (número de tarefas que o contador irá acumular)
    document.getElementById("novaTarefa").innerHTML += tarefa; //container
}

function tarefaFeita(pegar, num) //vai pegar a variavel num que está lá em cima pq num se transforma em constante no nosso codigo 
{
    if(pegar.checked) //variavel com a função checked para verificar se o checkbox está em true or false
    {
        document.getElementById("linha"+num).style.textDecoration = "line-through"; //true, irá riscar a tarefa
    }
    else
    {
        document.getElementById("linha"+num).style.textDecoration = ""; //false, irá deixae a tarefa sem estilo 
    }
}

