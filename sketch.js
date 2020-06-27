let imagemCenario;
let imagemPersonagem;
let cenario;
let soundGame;
let personagem;

function preload() {
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
    soundGame = loadSound('./assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    frameRate(40);
    soundGame.loop();
}

function draw() {
    cenario.exibe();
    cenario.move();
    personagem.show();
}