function realizarBusca()
{
    var pesquisar = document.getElementById("consulta").value;
    console.log("Eu realizei a pesquisa " + pesquisar);
    document.getElementById("consulta").value = "";
    var url = "https://jsonplaceholder.typicode.com/users/" + pesquisar;
    console.log("Montei a URL...");
    console.log(url);

    fetch(url, {method:"GET"})
    .then(response => response.json())
    .then(json => preencheHTML(json));
}

function preencheHTML(json)
{
   limparCampo();
   
    var resultado = document.getElementById("resultado");
    resultado.innerHTML += "Name: " + json.name + "<br>"
    resultado.innerHTML += "Username: " + json.username + "<br>"
    resultado.innerHTML += "E-mail: " + json.email + "<br>"
    resultado.innerHTML += "Address: " + "<br>"
    resultado.innerHTML += "Street: " + json.address.street +"<br>"
    resultado.innerHTML += "Suite: " + json.address.suite + "<br>"
    resultado.innerHTML += "City: " + json.address.city + "<br>"
    resultado.innerHTML += "Zipcode: " + json.address.zipcode + "<br>"
    resultado.innerHTML += "Phone: " + json.phone + "<br>"
    resultado.innerHTML += "Website: " + json.website + "<br>"
    resultado.innerHTML += "Company: " + json.company.name + "<br>"
    resultado.innerHTML += "Company: " + json.company.catchPhrase + "<br>"
}

function limparCampo() //função para limpar as informações quando você realiza uma nova busca.
{
    document.getElementById("resultado").innerHTML = " ";
}

