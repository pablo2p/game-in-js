class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = [
            {
                inimigo: 0,
                velocidade: 10
            },
            {
                inimigo: 1,
                velocidade: 30
            },
            {
                inimigo: 1,
                velocidade: 15
            },
            {
                inimigo: 2,
                velocidade: 40
            }
        ]
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        points = new Pontuacao();
        vida = new Vida(3, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem,
            0, 40*scaleH, 220*scaleH, 270*scaleH, 220, 270
        );
    
        const inimigo = new Inimigo(matrizInimigo, 
            imagemInimigo,
            width - 104*scaleH, 
            40*scaleH, 104*scaleH,
            104*scaleH, 104, 104,
            10
        );
    
        const inimigoVoador = new Inimigo(matrizInimigoVoador, 
            imagemInimigoVoador,
            width - 400*scaleH, 
            400*scaleH, 200*scaleH,
            150*scaleH, 200, 150,
            10
        );
        
        const inimigoGrande = new Inimigo(matrizInimigoGrande, 
            imagemInimigoGrande,
            width - 104*scaleH, 
            0, 400*scaleH, 400*scaleH,
            400, 400,
            10
        );
        
        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoGrande);

        frameRate(40);

        soundGame.setVolume(volume);
        soundGame.loop();
    }

    keyPress(key){
        if(key === 'ArrowUp') {
            personagem.pula();
            somDoPulo.setVolume(volume);
        }
    }

    click(){
        if(cenaAtual == 'jogo'){
            personagem.pula();
            somDoPulo.setVolume(volume);
        }
    }

    draw() {
        cenario.show();
        cenario.move();

        vida.draw();

        points.show();
        points.addPoints();

        personagem.show();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.show();
        inimigo.move();

        if(inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if(this.indice > this.mapa.length -1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)){
            vida.removeVida();
            personagem.tornarInvencivel();
            if(vida.vidas == 0) {
                image(imagemGameOver, width / 2 - 200, height / 3);
                noLoop();
            }
        }
    }
}