class Caixa extends classeBase {
    constructor(x, y) {
        super(x,y,70,70)
        this.imagem = loadImage('sprites/madeira.png')
    }
    show(){
        super.show();
    }

}