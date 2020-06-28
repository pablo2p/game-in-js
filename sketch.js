function setup() {
    createCanvas(windowWidth, windowHeight);
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    jogo.setup();
    cenas = {
        jogo,
        telaInicial
    };
    mainButton = new MainButton('Iniciar', width / 2, height / 2);
}

function mouseClicked() {
    jogo.click();
}

function keyPressed() {
    jogo.keyPress(key);
}

function draw() {
    cenas[cenaAtual].draw();
}