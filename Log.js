class Log extends BaseClass{
  constructor(x,y,hieght,angle){
    super(x,y,20,hieght,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body,angle);
  }

}