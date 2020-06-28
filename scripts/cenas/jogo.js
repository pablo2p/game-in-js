class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        points = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem,
            0, 40*scaleH, 220*scaleH, 270*scaleH, 220, 270
        );
    
        const inimigo = new Inimigo(matrizInimigo, 
            imagemInimigo,
            width - 104*scaleH, 
            40*scaleH, 104*scaleH,
            104*scaleH, 104, 104,
            10, 100
        );
    
        const inimigoVoador = new Inimigo(matrizInimigoVoador, 
            imagemInimigoVoador,
            width - 400*scaleH, 
            400*scaleH, 200*scaleH,
            150*scaleH, 200, 150,
            10, 100
        );
        
        const inimigoGrande = new Inimigo(matrizInimigoGrande, 
            imagemInimigoGrande,
            width - 104*scaleH, 
            0, 400*scaleH, 400*scaleH,
            400, 400,
            10, 100
        );
        
        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);

        frameRate(40);

        /* soundGame.setVolume(volume);
        soundGame.loop(); */
    }

    keyPress(key){
        if(key === 'ArrowUp') {
            personagem.pula();
            somDoPulo.setVolume(volume);
        }
    }

    draw() {
        cenario.show();
        cenario.move();

        points.show();
        points.addPoints();

        personagem.show();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.show();
        inimigo.move();

        if(inimigoVisivel) {
            this.inimigoAtual++;
            if(this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(5,30));
        }

        if (personagem.estaColidindo(inimigo)){
            image(imagemGameOver, width / 2 - 200, height / 3);
            noLoop();
        }
    }
}