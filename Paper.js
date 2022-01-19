class Paper{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density : 1.2
        }
        this.x = 100;
        this.y = 660;
        this.r= 60;
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(100,660,60,60,options);
        World.add(world,this.body)
    }

    display(){
        push();
        translate (this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image (this.image,0,0,this.r, this.r);
        pop();
    }
}