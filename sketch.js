var drawing = [];
//var currentPath =[];
var button ;


var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function setup(){
  
  createCanvas(500,500);
  var button = createButton('clear',10,10);
  button.position(105, 180);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(0);
  fill(255);
  textSize(20);
  text("Press space bar to clear",100,450);
  if(mouseIsPressed){
    var point ={
      x:mouseX,
      y:mouseY
    } 
    drawing.push(point);
  }
 beginShape();
 stroke(255);
 strokeWeight(10);  
noFill();
for(i = 0; i < drawing.length;i++){
    vertex(drawing[i].x,drawing[i].y)
}
endShape();
if (keyIsDown(32)){
drawing = drawing[i];
}
}
