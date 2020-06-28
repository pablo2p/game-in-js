class Personagem extends Animation {
    constructor(matriz, imagem, x, variacaoY, largura, altura,
        larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura,
            larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 6;
        this.alturaDoPulo = -50;
        this.pulos = 0;
    }

    pula() {
        if(this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.pulos++;
            somDoPulo.play();
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
        if(this.y > this.yInicial){
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    estaColidindo(inimigo) {
        const precisao = .7;

        const colisao = collideCircleCircle(
            this.x + (this.largura / 2) + 13, 
            this.y + (this.altura / 2), 
            this.largura * precisao, 
            inimigo.x + (inimigo.largura / 2) + 13,
            inimigo.y + (inimigo.altura / 2),
            inimigo.largura * precisao,
            inimigo.altura * precisao,
            this.altura * precisao
        );

        return colisao;
    }
   /*  estaColidindo(inimigo) {
        const precisao = .7;
        noFill();
        rect(inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao);
        
        rect(this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao);

        const colisao = collideRectRect(
            this.x, 
            this.y, 
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );

        return colisao;
    } */
}