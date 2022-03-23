var path,cart,chocolate,candy,doughnut,apple;
var pathImg,cartImg,chocolateImg,candyImg,doughnutImg,appleImg;
var foodCollection = 0;
var chocolateG,candyG,doughnutG,appleGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  cartImg = loadImage("cart.png")
  chocolateImg = loadImage("chocolate.png");
  candyImg = loadImage("candy.png");
  doughnutImg = loadImage("doughnut.png");
  appleImg = loadImage("apple.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

cart = createSprite(70,580,20,20);
cart.addAnimation("trolly",cartImg);
  
  
chocolateG=new Group();
candyG=new Group();
doughnutG=new Group();
appleGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  cart.x = World.mouseX;
  
  edges= createEdgeSprites();
  cart.collide(edges);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createChocolate();
    createCandy();
    createDoughnit();
    createApple();

    if (chocolateG.isTouching(cart)) {
      chocolateG.destroyEach();
      foodCollection=foodCollection+50;
    }
    else if (candyG.isTouching(cart)) {
      candyG.destroyEach();
      foodCollection=foodCollection+100;
      
    }else if(doughnutG.isTouching(cart)) {
        doughnutG.destroyEach();
        foodCollection= foodCollection + 150;
      
    }else{
      if(appleGroup.isTouching(cart)) {
        gameState=END;
        cart.addAnimation("trolly",endImg);

        cart.x=200;
        cart.y=300;
        
        chocolateG.destroyEach();
        candyG.destroyEach();
        doughnutG.destroyEach();
        appleGroup.destroyEach();
        
        
        chocolateG.setVelocityYEach(0);
        candyG.setVelocityYEach(0);
        doughnutG.setVelocityYEach(0);
        appleGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Food: "+ foodCollection,10,30);
  }

}

function createChocolate() {
  if (World.frameCount % 200 == 0) {
  var chocolate = createSprite(Math.round(random(50, 350),40, 10, 10));
  chocolate.addImage(chocolateImg);
  chocolate.scale=0.2;
  chocolate.velocityY = 3;
  chocolate.lifetime = 150;
  chocolateG.add(chocolate);
  }
}

function createCandy() {
  if (World.frameCount % 320 == 0) {
  var candy = createSprite(Math.round(random(50, 350),40, 10, 10));
  candy.addImage(candyImg);
  candy.scale=0.25;
  candy.velocityY = 3;
  candy.lifetime = 150;
  candyG.add(candy);
}
}

function createDoughnit() {
  if (World.frameCount % 410 == 0) {
  var doughnut = createSprite(Math.round(random(50, 350),40, 10, 10));
  doughnut.addImage(doughnutImg);
  doughnut.scale=0.2;
  doughnut.velocityY = 3;
  doughnut.lifetime = 150;
  doughnutG.add(doughnut);
  }
}

function createApple(){
  if (World.frameCount % 530 == 0) {
  var apple = createSprite(Math.round(random(50, 350),40, 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.2;
  apple.velocityY = 3;
  apple.lifetime = 150;
  appleGroup.add(apple);
  }
}
