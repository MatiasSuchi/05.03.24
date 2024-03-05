const posicaoSuperiorInicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorInicial = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSuperior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";   


const posicaosuperiorInicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getcomputedstyle(imgAvatar);

var posicaosuperior = 50,
    posicaoEsquerda = 50,
    topAvatar
    leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "рх";

function getTopstyle(elementToGet) {
let styleElement = window.getComputedstyle(elementToGet);
return parseInt(styleElement.getpropertyvalue('top').replace("px",''));
}

function getleftstyle(elementToGet) {
let styleElement = window.getComputedstyle(elementToGet);
return parseInt(styleElement.getpropertyvalue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    topAvatar = getTopstyle(imgAvatar);
    leftAvatar = getleftstyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
    posicaoEsquerda -= 1;
    imgAvatar.style.left = posicaoesquerda + "px";
    } else {
    console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda: ", imgAvatar.style.left);
}