class Solo {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        var parado = { isStatic: true };
        this.body = Bodies.rectangle(x, y, w, h, parado);

        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        strokeWeight(4)
        stroke("green");
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();


    }

}