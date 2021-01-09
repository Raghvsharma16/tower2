class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.4,
            'friction': 0.5,
            'density': 2.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;


        World.add(world, this.body);
    }
    display() {
        if(this.body.speed<3){
            push();
            var pos = this.body.position;
            rectMode(CENTER);
            stroke(0);
            strokeWeight(1);
            fill(random(0,255), random(0,255), random(0,255));
            rect(pos.x, pos.y, this.width, this.height);
            pop();
     
          }
          else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-10;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();


          }

        
      
    }
}

















