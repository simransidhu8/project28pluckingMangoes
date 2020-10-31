class Mango{
    constructor(x, y){
      var options= {
          isStatic: true,
          restitution: 0,
          //friction: 1
      }
      this.image= loadImage("mango.png");
      this.body = Bodies.circle(x, y, 20, options);
      
      this.radius= 50;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      var angle= this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255, 0, 255);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
}