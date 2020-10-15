(function(doc) { //Função IIFE, serve para encapsular o código.

    'use strict'; //Impede a declaração em escopo global.

    const button = doc.querySelector('#botao');
    button.addEventListener('click', exibir);

})(document);