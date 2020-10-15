(function(win, doc) {

    'use strict';

    function exibir() {

        let salarioBruto = doc.querySelector('#entrada').value;
        console.log(`Salário bruto declarado: ${salarioBruto}`);
        let imp = calcular();
        console.log(`Imposto a ser pago: ${imp}`);
        let salarioLiq = salarioBruto - imp;
        let msg = doc.querySelector("#resultado");
        msg.innerHTML = `Imposto Devido R$ ${imp} <br> Salário Liquido R$ ${salarioLiq}`;
   
    }

    win.exibir = exibir;

})(window, document);