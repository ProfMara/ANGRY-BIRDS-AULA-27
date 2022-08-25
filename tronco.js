class Tronco extends classeBase {
    constructor(x, y, height ,angle) {
        super(x,y,20,height,angle);
        Body.setAngle(this.body, angle)
        this.imagem = loadImage("/sprites/madeira2.png");
        
    }
    show() {
       super.show();
    }

}