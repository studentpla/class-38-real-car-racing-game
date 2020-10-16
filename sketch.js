var canvas, backgroundImage;
var allP;
var gameState = 0;
var playerCount;
var c1,c2,c3,c4;
var carA;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 2){
    game.update(1)
  }
  if(gameState===1){
    clear();
  game.play();
  }
}
