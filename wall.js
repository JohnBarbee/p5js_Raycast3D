class Wall{
  constructor(x1,y1,x2,y2){
    this.point1 = createVector(x1,y1);
    this.point2 = createVector(x2,y2);
  }
  
  show(){
    push();
    stroke(0);
    line(this.point1.x, this.point1.y,
         this.point2.x, this.point2.y);
    pop();
  }
}