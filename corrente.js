class Corrente{

    constructor(corpoA, corpoB){
        var op={
            bodyA:corpoA,
            bodyB:corpoB,
            stifness:0.04,
            length:100
        }
        this.elastico=Constraint.create(op);
        World.add(world, this.elastico);
    }

    //método que libera o corpo
    soltar(){
        this.elastico.bodyA = null;
    }

    //método que mostra a corrente
    exibir(){

            var pontoA = this.elastico.bodyA.position;
            var pontoB = this.elastico.bodyB.position;
            line(pontoA.x, pontoA.y, pontoB.x, pontoB.y);
    }
    
}