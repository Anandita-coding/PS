 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Evens;
 const Bodies = Matter.Bodies;
 const Body = Matter.Bodies;
 var gameState = "start"
var particles = [];
var plinkos = [];
var divisions = [];
var particle = null;
var turn = 0
var score = 0
var dh = 300

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    // line = new Ground(250,350,500,5)

    ground = new Ground(width/2,690,500,10)
    

    for (var j = 40; j <=width; j = j + 50) {
   
      plinkos.push(new Plinko(j,75))
  
    }
    for (var j = 15; j <=width-10; j = j + 50) {
   
      plinkos.push(new Plinko(j,150))
  
    }

    for (var j = 40; j <=width; j = j + 50) {
   
      plinkos.push(new Plinko(j,225))
  
    }
    
  for (var j = 15; j <=width-10; j = j + 50) {
   
    plinkos.push(new Plinko(j,300))

  }

  
  for (var k = 0; k <width; k = k + 70) {
   
    divisions.push(new Divisions(k,height-dh/2,10,dh))
     
  }
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Pink");
    
  for (var j = 0; j < plinkos.length; j++) {
   
   plinkos[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
   
    divisions[k].display();
  }
  
   ground.display();
   text("500",20,450)
   text("300",90,450)
   text("600",160,450)
   text("100",230,450)
   text("400",300,450)
   text("200",370,450)
   text("500",440,450)
   if(particle !== null){
    particle.display()
    if( particle.body.position.y > 350 ){
      if( particle !== null && particle.body.position.x >0 && particle.body.position.x<70  ){

        score = score + 500
        particle = null
       
      }
  }
    if( particle.body.position.y > 350 ){
      if(particle !== null &&particle.body.position.x >140 && particle.body.position.x<70 ){

        score = score + 300
        particle = null
        
      }
  }
  
  if( particle.body.position.y > 350 ){
    if(particle !== null &&particle.body.position.x >140 && particle.body.position.x<210 ){

      score = score + 600
      particle = null
      
    }
}

if( particle.body.position.y > 350 ){
  if(particle !== null &&particle.body.position.x >210 && particle.body.position.x<280 ){

    score = score + 100
    particle = null
    
  }
}
if( particle.body.position.y > 350 ){
  if(particle !== null &&particle.body.position.x >280 && particle.body.position.x<350 ){

    score = score + 400
    particle = null
    
  }
}
if( particle.body.position.y > 350 ){
  if(particle !== null &&particle.body.position.x >350 && particle.body.position.x<420 ){

    score = score + 200
    particle = null
    text("100")
  }
}
if( particle.body.position.y > 350 ){
  if(particle !== null && particle.body.position.x >420 && particle.body.position.x<500 ){

    score = score + 500
    particle = null
    
  }
}
   }
  
  textSize(20) 
   text ("Turn: "+turn,100,100)
   text ("Score: "+score,100,290)
   if(turn>=5)gameState = "end"
   


 if (gameState ===  "end"){
   particle = null
   textSize(10)
   text("Game Over", 300,100)
 }




}
function mousePressed (){
  if(gameState !== "end"){
     turn++;
     particle = new Particle(mouseX,10,10,10)
     
  }
}



