class TelaInicial {
    constructor() {
        this.tela = 0;
    }

    draw() {
        this._background();
        this._text();
        this._button();
    }

    _background() {
        image(imagemInicial, 0, 0, width, height);
    }

    _text() {
        textFont(fontInicial);
        textSize(50);
        textAlign(CENTER);
        text('As aventuras de', width /2, height /4);
        textSize(150);
        text('Hipista', width /2 , height /4 + 100)
    }

    _button() {
        mainButton.y = height / 7*5;
        mainButton.draw();
    }
}