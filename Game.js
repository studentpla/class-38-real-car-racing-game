class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    c1 = createSprite(100,200);
    c2 = createSprite(300,200);
    c3 = createSprite(500,200);
    c4 = createSprite(700,200);
    carA = [c1,c2,c3,c4];

  }
  play(){
    form.hide();
    textSize(30);
    text("Game Starts",120,100);
    Player.getPlayerinfo();
    if(allP!==undefined){
      //var displayPosition = 130;
      var index = 0;
      var x = 0;
      var y ;
     for(var plr in allP){
       index = index+1;
       x = x+200;
       y = displayHeight-allP[plr].distance;
       carA[index-1].x = x;
       carA[index-1].y = y;
     if (index === player.index){
       carA[index-1].shapeColor = "red";
       camera.position.x = displayWidth/2;
       camera.position.y = carA[index-1].y;
     }
     
    
    //displayPosition+=20;
    //textSize(15);
    //text(allP[plr].name+":"+allP[plr].distance,120,displayPosition);
    }
    }
  if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance+=50;
    player.update();
  }
  drawSprites();
}
}
