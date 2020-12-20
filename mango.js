class Mango{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.image = loadImage("mango.jpg");
     


        World.add(world, this.body);
      }
      display(){
    
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

       
      }
}