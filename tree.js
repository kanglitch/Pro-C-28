class Tree {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWitdh=450;
        this.dustbinHeight=600;
        this.wallthickness=10;

        this.image=loadImage("Plucking mangoes/tree.png")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallThickness)
        this.leftWallBody=Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness)
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbin/2,this.y-this.dustbinHeight/2)
        World.add(world,this.bottombody)
        World.add(world,this.leftWallbody)
        World.add(world,this.rightWallbody)
    }

    display(){
        var Posbottom=this.BottomBody.position;
        push()
        translate(Posbottom.x,Posbottom.y);
        rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER)
        
        this.image(this.image,0,0,this.r*2,this.r*2)
        pop()
    }
}