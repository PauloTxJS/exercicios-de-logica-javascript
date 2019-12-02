var numMusica = 0;

function tocaAnterior() {
    numMusica--;

    if (numMusica < 0) {
        numMusica = 3;
    }
    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
}
function tocaAtual() {
    console.log("musica atual = " + document.getElementById("mymusic").src);

    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
    console.log("ah... chato!");
}
function paraTudo() {
    document.getElementById("mymusic").pause();

}
function tocaProxima() {
    numMusica++

    if (numMusica == 4) {
        numMusica = 0;
    }
    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();

}