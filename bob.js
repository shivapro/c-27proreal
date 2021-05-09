class Bob {
    constructor(x, y,r) {
      var options = {
        'density':0.8,
        'friction': 0,
        'restitution':1,
        'isStatic': false
        

      };
      
      this.r = r;
      this.x=x
      this.y=y
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    };
    display(){
      
      
  
      push();
      translate(this.body.position.x,this.body.position.y);
    
     
      ellipseMode(CENTER)
      fill("silver")
      ellipse(0,0,this.r,this.r);
      pop();
    };
  };
  