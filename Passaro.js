
class Passaro extends classeBase{

    constructor(x,y){
        super(x,y,50,50);
        this.imagem = loadImage("/sprites/red.png");
    }
    show(){
        //this.body.position.x = mouseX;
       // this.body.position.y = mouseY;
      
       super.show()
    }
}