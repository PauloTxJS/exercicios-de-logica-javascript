var num = 0;

function inserirNovaTarefa() {
    num++;
    var tarefa1 = document.getElementById("inserir").value;
    var tarefa = ' <tr><th scope="row"><input onclick="feito();" type="checkbox" id="check1"></th><td>...</td><td>**trocar**</td></tr>'

    tarefa = tarefa.replace("...", tarefa1);
    tarefa = tarefa.replace("**trocar**",num)
    document.getElementById("novaTarefa").innerHTML += tarefa;

   

}