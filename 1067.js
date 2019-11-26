var valor = prompt("Digite um número inteiro: ");
var htmlIntegrado = "";
var nLinha =0;


for (i = 0; i <= valor; i++) {

    if (i % 2 !== 0) {
       var cssLinha = "cor_" + nLinha
        htmlIntegrado += "<div class= 'row "+ cssLinha + " '> ";
        htmlIntegrado += "<div class='col-sm-6'>" + i + "</div>";
        htmlIntegrado += "</div>";

        nLinha = (nLinha + 1)%3;

        /*nLinha = (nLinha + 1)%3;
        é a mesma coisa que:
        
        nLinha = nLinha + 1
        if(nLinha == 3)
        {
            nLinha = 0;
        }
        */ 
    }

}

document.getElementById("tabuada").innerHTML = htmlIntegrado;