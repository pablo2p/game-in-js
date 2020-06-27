const scaleH = window.innerHeight / 900;

class Personagem {
    constructor(imagem){
        console.log(scaleH);
        this.imagem = imagem;
        this.matriz = [
            [0,0],  [220,0],  [440,0], [660,0],
            [0,270], [220,270], [440,270], [660,270],
            [0,540], [220,540], [440,540], [660,540],
            [0,810], [220,810], [440,810], [660,810]
        ]
        this.frameAtual = 0;
    }

    show(){
        image(this.imagem, 0, height - 270*scaleH, 
            220*scaleH, 270*scaleH, 
            this.matriz[this.frameAtual][0], 
            this.matriz[this.frameAtual][1],  
            220, 270
        );

        this.animated();
    }

    animated(){
        this.frameAtual++;

        if(this.frameAtual >= this.matriz.length - 1){
            this.frameAtual = 0;
        }
    }
}