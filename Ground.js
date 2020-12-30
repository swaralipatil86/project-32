class Ground{
constructor(){
 var ground_options={
     isStatic:true
 }

this.ground = Bodies.rectangle(450,390,900,20,ground_options);
World.add(world,this.ground)



}
display(){
noStroke();
fill(188,67,67);
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,900,20)





}






}