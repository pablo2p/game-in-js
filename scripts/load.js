function preload() {
    // Images
    imagemInicial = loadImage('./assets/imagens/assets/telainicial.png');
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
    imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png');
    // Sounds
    soundGame = loadSound('./assets/sons/trilha_jogo.mp3');
    somDoPulo = loadSound('./assets/sons/somPulo.mp3');
    volume = 0.1;[]
    // Fontes
    fontInicial = loadFont('./assets/imagens/assets/fonteTelaInicial.otf');
}