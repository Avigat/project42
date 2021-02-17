class Drop {
    constructor(x,y){
        var options={
            restitution:0.4,
            friction:0.001
        }
        this.body=Bodies.circle(x,y,5,options)
        this.radius=5;
        
        World.add(world,this.body);
    }
    display(){
        fill("blue")
        ellispeMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop()
    }
}