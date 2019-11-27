function calcular()
{
   var salario = document.getElementById("entrada").value;
   //console.log("Salário digitado = ", salario);
   var imposto;
    
   if(salario < 1000)
   {
        imposto = 0;
        //console.log("Isento");
   }
   else
   {
    if(salario >= 1000 && salario < 2500)
    {
        imposto = salario * 0.125;
        //console.log("O valor do imposto a ser pago é de 12,5% = " + imposto);
    }
    else
    {
        if(salario >= 2500 && salario < 5000)
        {
            imposto = salario * 0.25;
            //console.log("O valor do imposto a ser pago é de 12,5% = " + imposto);
        }
        else
        {
            imposto = 1300;
            //console.log("O valor do imposto a ser pago é de R$ 1300,00");
        }
    }
   }
   return imposto; //retorna o valor que está armazenado na var imposto
}

function exibir()
{
    var salarioBruto = document.getElementById("entrada").value;
    console.log("Salário bruto declarado: " + salarioBruto);
    var imp = calcular();
    console.log("Imposto a ser pago: " + imp);
    var salarioLiq = salarioBruto - imp;
    document.getElementById("resultado").innerHTML = "Imposto Devido R$ " + imposto+ "<br>" + "Salário Liquido R$ " + salarioLiq + "<br>";
}