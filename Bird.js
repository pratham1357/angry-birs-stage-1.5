class Bird
{
    constructor(x,y)
    {
        var options={
            restitution:0.8,friction:1.0,density:1.0

        }
        
        this.body=Bodies.rectangle(x,y,60,60,options);
        this.width = 60;
        this.height = 60;
        World.add(world,this.body);

    }

    display()
    {
        var pos=this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill (255);
        rect(0,0,this.width,this.height);
        pop ();

    }
}