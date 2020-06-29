function preload() {
    // Cenários
    imagemInicial = loadImage('./assets/imagens/assets/telainicial.png');
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png');
    imagemGameOver = loadImage('./assets/imagens/assets/game-over.png');
    imagemVida = loadImage('./assets/imagens/assets/coracao.png');
    // Personagem
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png');
    // Inimigo
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