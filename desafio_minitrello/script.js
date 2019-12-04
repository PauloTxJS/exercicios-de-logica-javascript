function buscarInfo()
{
    fetch("http://www.professorisidro.com.br/tarefas.php", {method:"GET"})
    .then(response => response.json())
    .then(json => exibirInfo(json));
}

function exibirInfo(json) //tem que colocar o jason como parametro da var
{
    console.log("Quantidade de tarefas: " + json.length);

    var tarefaAtual;
    for(i=0;i<json.length;i++)
    {
        tarefaAtual = json[i];
        console.log("Nome da tarefa: " + tarefaAtual.nome);
        document.getElementById("resposta").innerHTML += tarefaAtual.nome + "<br>"
    }
}

var numTarefa = 0;

function recuperarDados()
{
    fetch("http://www.professorisidro.com.br/tarefas.php" , {method:"GET"})
    .then(response => response.json())
    .then(json => gerador(json));
}

function gerador(json)
{
    console.log("Mostrar tudo: " + JSON.stringify(json));

    for(i=0; i<json.length; i++)
    {
        var tarefa = json[i];
        console.log("Tarefa: " + tarefa);
        criarTarefa(tarefa.nome);
    }
}

function criarTarefa(texto) //criar uma div com atributos definidos
{
    numTarefa++
    
    var tarefaDOM = document.createElement("div"); //criando uma div 
    tarefaDOM.setAttribute("id", "tarefa" + numTarefa); //o id da div chama tarefa
    tarefaDOM.setAttribute("draggable", "true"); //tornando a tarefa arrastável 
    tarefaDOM.setAttribute("class", "itemTarefa"); //a classe dessa div se chama itemTarefa
    tarefaDOM.setAttribute("ondragstart", "pegarItem(event);"); //ondragstart serve para começar a arrastar um elemento, ou seja começar a arrastare um elemento de pegarItem()
    tarefaDOM.innerHTML = texto; //texto que eu recebi como parametro lá em cima 

    document.getElementById("pendentes").appendChild(tarefaDOM) //nessa etapa eu estou criando um filho, ou seja, eu estou apendando no id pendentes a div criada (tarefaDOM)
}

function pegarItem(event)
{
    console.log("Agora, eu começei a arrastar os itens" + event.target.id);
}
