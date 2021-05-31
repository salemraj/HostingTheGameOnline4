var path,mainCyclist,gameOver;
var opponent1,opponent2,opponent3;
var pathImg,mainCyclistAnimation1,mainCyclistAnimation2,opponent1Animation1,           opponent1Animation2,opponent2Animation1,opponent2Animation2,
    opponent3Animation1,opponent3Animation2,obstacle1Img,obstacle2Img,obstacle3Img,
    check_PointSound,gameOverImg;
var opponent1,opponent2,opponent3;

var circle;
var rewardButton1;
var rewardButton2;
var restartButton;
var restartButton3;
var startButton;
var startButton3;
var playButton;
var restartButton2;
var startButton2;
var playButton2;
var playButton3;
var rewardButton3;
var distance2 = 0;
var betterScore = 0;
var speed3 = 0;
var distance3 = 0;
var bestScore = 0;
var restartButton4;
var boult;
var cone;
var goodScore = 0;
var speed = 0;
var distance = 0;
var speed2 = 0;

//game states
var INT = 0;
var restart = 1;
var round1 = 2;
var end1 = 3;
var reward1 = 4;
var win1 = 5;
var restart2 = 6;
var round2 = 7;
var end2 = 8;
var reward2 = 9;
var win2 = 10;
var restart3 = 11;
var round3 =12;
var end3 = 13;
var reward3 = 14;
var win3 = 15;
var gameState = INT;

function preload()
{
  pathImg = loadImage("images/Road.png");
  
  mainCyclistAnimation1 = loadAnimation("images/mainPlayer1.png",
                                       "images/mainPlayer2.png");  
    
  mainCyclistAnimation2 = loadAnimation("images/mainPlayer3.png");  
    
  opponent1Animation1 = loadAnimation("images/opponent1.png", 
                                      "images/opponent2.png")
  
  opponent1Animation2 = loadAnimation("images/opponent3.png");
  
  opponent2Animation1 = loadAnimation("images/opponent4.png",
                                      "images/opponent5.png");
  
  opponent2Animation2 = loadAnimation("images/opponent6.png");
  
  opponent3Animation1 = loadAnimation("images/opponent7.png",
                                      "images/opponent8.png");
  
  opponent3Animation2 = loadAnimation("images/opponent9.png");
  
  obstacle1Img  = loadImage("images/obstacle1.png");
  
  obstacle2Img  = loadImage("images/obstacle3.png");
  
  obstacle3Img  = loadImage("images/obstacle2.png");
  
  check_PointSound = loadSound("sound/bell.mp3");
  
  gameOverImg = loadImage("images/gameOver.png");
}

function setup()
{
  createCanvas(750,300);
  
  //creating road as a sprite
  path = createSprite(100,150);
  
  //code to add image to the road
  path.addImage(pathImg);
  
  //code to make the road invisible
  path.visible = false;
  
  //creating reward button 1 as a sprite to reward the player when the reward button 1 after the player loses round 1 in the game  
  rewardButton1 = createSprite(380,220,120,50);
  
  //code to give colour to the reward button 1
  rewardButton1.shapeColor = "blue";
  
  //code to make the reward button 1 invisible
  rewardButton1.visible = false;
  
  //creating a restart button as a sprite so that the game will restart when the restart button is pressed when the game is in the round 1
  restartButton = createSprite(350,100,120,50);
  
  //code to give colour to the restart button
  restartButton.shapeColor = "purple";
  
  //code to make the restart button invisible
  restartButton.visible = false;
  
  //creating a start button as a sprite so that in the game round 1 will start when the start button is pressed
  startButton = createSprite(325,280,100,30);
  
  //code to give colour to the start button
  startButton.shapeColor = "brown";
  
  //creating a play button as a sprite to play round 1 in the game when the play button is pressed
  playButton = createSprite(360,180,120,50);
  
  //code to give colour to the play button
  playButton.shapeColor = "yellow";
  
  //code to make the play button invisible
  playButton.visible = false;
  
  //creating a start button 2 as a sprite so that in the game round 2 will start when the start button 2 is pressed
  startButton2 = createSprite(365,270,100,50);
  
  //code to give colour to the start button 2
  startButton2.shapeColor = "magenta";
  
  //code to make the start button 2 invisible
  startButton2.visible = false;
  
  //creating a play button 2 as a sprite to play round 2 in the game when the play button 2 is pressed
  playButton2 = createSprite(365,210,120,50);
  
  //code to give colour to the play button 2
  playButton2.shapeColor = "cyan";
  
  //code to make the play button 2 invisible
  playButton2.visible = false;
  
  //creating reward button1 as a sprite to reward the player after he loses round 1 in the game
  rewardButton2 = createSprite(380,220,120,50);
  
  //code to give colour to the reward button 2
  rewardButton2.shapeColor = "lime";
  
  //code to make reward button 2 invisible
  rewardButton2.visible = false;
  
  //creating a restart button 2 as a sprite so that the game will restart when the restart button 2 is pressed when the game is in the round 2
  restartButton2 = createSprite(350,100,120,50);
  
  //code to give colour to the restart button 2
  restartButton2.shapeColor = "lime";
  
  //code to make the restart button 2 invisible
  restartButton2.visible = false;
  
  //creating a start button 3 as a sprite so that in the game round 3 will start when the start button 3 is pressed
  startButton3 = createSprite(365,270,100,50);
  
  //code to give colour to the start button 3
  startButton3.shapeColor = "blue";
  
  //code to make the start button 3 invisible
  startButton3.visible = false;
  
  //creating a play button 3 as a sprite to play round 3 in the game when the play button 3 is pressed
  playButton3 = createSprite(365,210,120,50);
  
  //code to give colour to the play button 3
  playButton3.shapeColor = "yellow";
  
  //code to make the play button 3 invisible
  playButton3.visible = false;
  
  //creating reward button as a sprite to reward the player when the reward button 3 after the player loses round 3 in the game
  rewardButton3 = createSprite(380,220,120,50);
  
  //code to give colour to the reward button 3
  rewardButton3.shapeColor = "purple";
  
  //code to make the reward button 3 invisible
  rewardButton3.visible = false;
  
  //creating a restart button 3 as a sprite so that the game will restart when the restart button 3 is pressed when the game is in the round 3
  restartButton3 = createSprite(350,100,120,50);
  
  //code to give colour to the restart button 3
  restartButton3.shapeColor = "yellow";
  
  //code to make the restart button 3 invisible
  restartButton3.visible = false;
  
  //creating a restart button 4 as a sprite so that the game will restart when the restart button 4 is pressed when the whole game is finished
  restartButton4 = createSprite(380,100,120,50);
  
  //code to give colour to the restart button4
  restartButton4.shapeColor = "purple";
  
  //code to make the restart button4 invisible
  restartButton4.visible = false;
  
  //creating circle as a sprite to show when the game state is in the introduction for the better understanding of the players
  circle = createSprite(265,195,20,20);
  
  //code to add image to the circle
  circle.addImage("circle",obstacle3Img);
  
  //code to assign size to the circle
  circle.scale = 0.06;
  
  //creating boult as a sprite to show when the game state is in the introduction for the better understanding of the players
  boult = createSprite(350,195,20,20);
  
  //code to add image to the boult
  boult.addImage("boult",obstacle2Img);
  
  //code to assign size to the boult
  boult.scale = 0.06;
  
  //creating cone as a sprite to show when the game state is in the introduction for the better understanding of the players
  cone = createSprite(265,215,20,20);
  
  //code to add image to the cone
  cone.addImage("cone",obstacle1Img);
  
  //code to assign size to the cone
  cone.scale = 0.05;
  
  //creating main cyclist as a sprite 
  mainCyclist  = createSprite(180,150);
  
  //code to add animation to the main cyclist
  mainCyclist.addAnimation("mainCyclist_Cycling",mainCyclistAnimation1);
  
  //code to add another animation to the main cyclist
  mainCyclist.addAnimation("MainCyclist_Falling",mainCyclistAnimation2);
  
  //code to add size to the main cyclist
  mainCyclist.scale=0.07;
  
  //code to make the sensor of the main cyclist to size of the main cyclist
  mainCyclist.setCollider("rectangle",0,0,1200,1200);
  
  //code to make the sensor of the main cyclist invisible
  mainCyclist.debug = false;
  
  //code to make the main cyclist invisible
  mainCyclist.visible = false;
  
  //creating game over as a sprite to display when the game is over
  gameOver = createSprite(375,50);
  
  //code to make the game over invisible when the game state is in round 3
  gameOver.visible = false;
    
  //code add image to the game over
  gameOver.addImage("gameOver",gameOverImg);
  
  //code to add size to the game over
  gameOver.scale = 0.8;
  
  //code to make the game over invisible
  gameOver.visible = false;
  
  //creating groups to add sprites in it
  boultsGroup = new Group();
  roundsGroup = new Group();
  opponents1Group = new Group();
  opponents2Group = new Group();
  opponents3Group = new Group();
  barracksGroup = new Group();
}

function draw()
{
  //set background colour
  background(0);
  
  drawSprites();
  
  //code to make speed to increase the speed of the main cyclist as the game goes to make the game challenging
  textSize(20);
  fill("white")
  text("Speed:" + speed,-800,150);
  
  //code when the game state is in instruction
  if(gameState == INT)
    {
      //code to make the restart button 4 invisible when the game state is in the instruction
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the instruction
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the instruction
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the instruction
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the instruction
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the instruction
      restartButton2.visible = false;

      //code to make the reward button 2 invisible when the game state is in the instruction
      rewardButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the instruction
      startButton2.visible = false;
      
      //code to make the road invisible when the game state is in the instruction
      path.visible = false;
      
      //code to make the restart button invisible when the game state is in the instruction
      restartButton.visible = false;
      
      //code to make the reward button 1 invisible when the game state is in the instruction
      rewardButton1.visible = false;
      
      //code to make the game over invisible when the game state is in the instruction
      gameOver.visible = false;
      
      //code to make the main cyclist invisible when the game state is in the instruction
      mainCyclist.visible = false;
      
      //code to make the play button invisible when the game state is in the instruction
      playButton.visible = false;
      
      //code to make the start button visible when the game state is in the instruction
      startButton.visible = true;
      
      //code to make the paly button 2 invisible when the game state is in the instruction
      playButton2.visible = false;
      
      //code to reset the X position of the circle when the game state is in the instruction
      circle.x = 265;
      
      //code to reset the X position of the boult when the game state is in the instruction
      boult.x = 360;
      
      //code to reset the X position of the cone when the game state is in the instruction
      cone.x = 265;
      
      //code to display the heading instruction
      textSize(50);
      fill("lime");
      text("INSTRUCTION",220,50);
      
      //code to display instruction
      textSize(20);
      fill("cyan");
      text("1.There is a cycle racer in the game you can move the cycle racer up and down ",10,100);
      
      textSize(20);
      fill("cyan");
      text("using up and down arrow keys.",25,120);
      
      textSize(20);
      fill("cyan");
      text("2.There are 3 rounds in this game:",10,160);
      
      textSize(20);
      fill("cyan");
      text("i.If the cycle racer touches the other cycle racer you will be eliminated from round 1.",3,180);
      
      textSize(20);
      fill("cyan");
      text("ii.If the cycle racer touches",3,200);
      
      textSize(20);
      fill("cyan");
      text("and",290,200);
      
      textSize(20);
      fill("cyan");
      text("you will be eliminated from round 2.",380,200);
      
      textSize(20);
      fill("cyan");
      text("iii.If the cycle racer touches",3,220);
      
      textSize(20);
      fill("cyan");
      text("you will be eliminated from round 3.",280,220);
      
      textSize(30);
      fill("violet");
      text("Press this button to start",150,250);
      
      textSize(20);
      fill("yellow");
      text("Start",300,288);
      
      //code to change the game state to restart when the mouse is pressed on the start button
      if(mousePressedOver(startButton))
        {
          gameState = restart;
        }
  }
  
  //code when the game state is in the restart
  else if(gameState == restart)
    {
      //code to make the restart button 4 invisible when the game state is in the game state is in the restart
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the game state is in the restart
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the game state is in the restart
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the game state is in the restart
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the game state is in the restart
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the game state is in the restart
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the game state is in the restart
      rewardButton2.visible = false;
      
      //code to change the X position of the circle
      circle.x = -300;
      
      //code to change the X position of the boult
      boult.x = -300;
      
      //code to change the X position of the cone
      cone.x = -300;
      
      //code to make the road invisible when the game state is in the restart
      path.visible = false;
      
      //code to reset the diatance when the game state is in the restart
      distance = 0;
      
      //code to reset the speed when the game state is in the restart
      speed = 0;
      
      //code to reset the speed 2 when the game state is in the restart
      speed2 = 0;
      
      //code to reset the diatance 2 when the game state is in the restart
      distance2 = 0;
      
      //code to reset the better score when the game state is in the restart
      betterScore = 0;
      
      //code to reset the good score when the game state is in the restart
      goodScore = 0; 
      
      //code to reset the diatance3 when the game state is in the restart
      distance3 = 0;
      
      //code to reset the speed 3 when the game state is in the restart
      speed3 = 0;
      
      //code to reset the best score when the game state is in the restart
      bestScore = 0;
      
      //code to make the play button 2 invisible when the game state is in the restart
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the restart
      startButton2.visible = false;
      
      //code to make the restart button invisible when the game state is in the restart
      restartButton.visible = false;
      
      //code to make the reward button 1 invisible when the game state is in the restart
      rewardButton1.visible = false;
      
      //code to make the game over invisible when the game state is in the restart
      gameOver.visible = false;
      
      //code to make the main cyclist invisible when the game state is in the restart
      mainCyclist.visible = false;
      
      //code to make the start button invisible when the game state is in the restart
      startButton.visible = false;
      
      //code to make the play button visible when the game state is in the restart
      playButton.visible = true;
      
      //code to change the animation of the main cyclist when the game state is in the restart
      mainCyclist.changeAnimation("mainCyclist_Cycling",mainCyclistAnimation1);
      
      //code to display press the play button play round1 when the game state is in the restart
      textSize(50);
      fill("orange");
      text("Press this button to play Round 1",10,120);
      
      //code to display the text play over the play button when the game state is in the restart
      textSize(30);
      fill("red");
      text("Play",330,190);
      
      //code to change the game state to round 1 when the mouse is pressed on the play button
      if(mousePressedOver(playButton))
        {
          gameState = round1;
        }
  }
  
  //code when the game state is in the round 1
  else if(gameState == round1)
    {
      //code to make the restart button 4 invisible when the game state is in the round 1
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the round 1
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the round 1
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the round 1
      playButton3.visible = false;

      //code to make the restart button 2 invisible when the game state is in the round 1
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the round 1
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the round 1
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the round 1
      startButton2.visible = false;
      
      //code to make the restart button  invisible when the game state is in the round 1
      restartButton.visible = false;
      
      //code to increase the velocity of the road after each and every speed
      path.velocityX = -(7 + 3*speed/100);
      
      //code to make the main cyclist visible when the game state is in the round 1
      mainCyclist.visible = true;
      
      //code to make the reward button 1 invisible when the game state is in the round 1
      rewardButton1.visible = false;
      
      //code to make the play button invisible when the game state is in the round 1
      playButton.visible = false;
      
      //code to make the path visible when the game state is in the round 1
      path.visible = true;
      
      //code to make the game over visible when the game state is in the round 1
      gameOver.visible = false;
  
      //code to make to move the road like an infinite road by making its X position to half of its width when the path X position is lesser than 0
      if(path.x < 0 )
        {
          path.x = width/2;
        }
      
      //this function is to create opponents
      createOpponents();
      
      //code to increase speed after every 30 frames
      speed = speed + (getFrameRate()/30);
  
      //code to increase distance after every 60 frames
      distance = distance + Math.round(getFrameRate()/60);
  
      //code to display how much distance is covered 
      textSize(20);
      fill("gold");
      text("Distance:" + distance + "m",560,30);
      
      //code to create background edges
      edges = createEdgeSprites();
      
      //code to make the main cyclist collide with the background edges
      mainCyclist.collide(edges);
      
      //code to make the main cyclist move up when the up arrow key is pressed 
      if(keyDown("up"))
        {
          mainCyclist.y = mainCyclist.y - 20;
        }
  
      //code to make the main cyclist move down when the down arrow key is pressed
      if(keyDown("down"))
        {
          mainCyclist.y = mainCyclist.y + 20;
        }
  
      //code to make the check point sound to come after every 100 distance
      if(distance>0 && distance%100 == 0)
        {
          check_PointSound.play();
        }
  
      //code to change the game state to the end and change the the animation of the of the opponent1 when the main cyclist is touching the opponent1
      if(mainCyclist.isTouching(opponents1Group))
        {
          gameState = end1;
          opponent1.changeAnimation("opponent1_Falling",opponent1Animation2);
        }
      
      //code to change the game state to the end and change the the animation of the of the opponent2 when the main cyclist is touching the opponent2
      if(mainCyclist.isTouching(opponents2Group))
        {
          gameState = end1;
          opponent2.changeAnimation("opponent2_Falling",opponent2Animation2);
        }
      
      //code to change the game state to the end and change the the animation of the of the opponent3 when the main cyclist is touching the opponent3
      if(mainCyclist.isTouching(opponents3Group))
        {
          gameState = end1;
          opponent3.changeAnimation("opponent3_Falling",opponent3Animation2);
        }
    
      //code to make good score increase by 1 when the distance is 1000
      if(distance == 1000)
        {
          goodScore = goodScore + 1
        }
      
      //code to change the game state to the win1 when the good score is 1 
      if(goodScore == 1)
        {
          gameState = win1;
        }
  }
    
  //code when the game state is in end1
  else if(gameState == end1)
    {
      //code to make the restart button 4 invisible when the game state is in the end1
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the end1
      restartButton3.visible = false;
      
      //code to make the rerward button 3 invisible when the game state is in the end1
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the end1
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the end1
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the end1
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the end1
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the end1
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the end1
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the end1
      path.visible = false;
      
      //code to make the restart button invisible when the game state is in the end1
      restartButton.visible = false;
      
      //code to make the reward button 1 visible when the game state is in the end1
      rewardButton1.visible = true;
      
      //code to make the paly button invisible when the game state is in the end1
      playButton.visible = false;
      
      //code to change another animation of the main cyclist when the game state is in the end1
      mainCyclist.changeAnimation("MainCyclist_Falling",mainCyclistAnimation2);
      
      //code to make the road stop moving when the game state is in the end1
      path.velocityX = 0;
      
      //setting the velocity of each and every opponent1 in the background 0 when the game state is in the end1
      opponents1Group.setVelocityXEach(0);
      
      //setting the velocity of each and every opponent2 in the background 0 when the game state is in the end1
      opponents2Group.setVelocityXEach(0);
      
      //setting the velocity of each and every opponent3 in the background 0 when the game state is in the end1
      opponents3Group.setVelocityXEach(0);
      
      //code to not make the each and every opponent1 in the background to destroy when the game state is in the end1
      opponents1Group.setLifetimeEach(-1);
      
      //code to not make the each and every opponent2 in the background to destroy when the game state is in the end1
      opponents2Group.setLifetimeEach(-1);
      
      //code to not make the each and every opponent3 in the background to destroy when the game state is in the end1
      opponents3Group.setLifetimeEach(-1);
      
      //code to make the game over visible when the game state is in the end1
      gameOver.visible = true;
      
      //code to display the player to press the reward button1 to get the reward when the player losese the game in the round1 when the game state is in the end1
      textSize(50);
      fill("magenta");
      text("Press this button to get reward",50,160);
      
      //code to display the text reward over the reward button 1 when the game state is in the end1
      textSize(30);
      fill("red");
      text("Reward",330,230);
      
      //code to change the game state to the reward 1 when the mouse is pressing on the reward button1
      if(mousePressedOver(rewardButton1))
        {
          gameState = reward1;
        }
  }
  
  //code when the game state is in the reward1
  else if(gameState == reward1)
    {
      //code to make the restart button 4 invisible when the game state is in the reward1 
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the reward1
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the reward1
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the reward1
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the reward1
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the reward1
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the reward1
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the reward1
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the reward1
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the reward1
      path.visible = false;
      
      //code to make the game over invisible when the game state is in the reward1
      gameOver.visible = false;
      
      //code to make the reward button 1 invisible when the game state is in the reward1
      rewardButton1.visible = false;
      
      //code to make the restart button visible when the game state is in the reward1
      restartButton.visible = true;
      
      //code to make the play button invisible when the game state is in the reward1
      playButton.visible = false;
      
      //code to disappear each and every opponent1 when the game state is in the reward1
      opponents1Group.destroyEach();
      
      //code to disappear each and every opponent2 when the game state is in the reward1
      opponents2Group.destroyEach();
      
      //code to disappear each and every opponent3 when the game state is in the reward1
      opponents3Group.destroyEach();
      
      //code to make the main cyclist invisible when the game state is in the reawrd1
      mainCyclist.visible = false;
      
      //code to display press the restart button to restart the game when the game state is in the reward1
      textSize(50);
      fill("yellow");
      text("Press this button to restart",50,50);          
      
      //code to display the text reward over the restart button when the game state is in the reward1
      textSize(30);
      fill("magenta");
      text("Restart",300,110);
      
      //code to display reward for the player after he loses the round 1 in the game when the game state is in the reward1
      textSize(70);
      fill("cyan")
      text("Good!",270,190);
      
      textSize(50);
      fill("lime");
      text("You have travelled",140,240);
      
      textSize(50);
      fill("blue");
      text(distance + "m",300,290);
      
      textSize(50);
      fill("lime");
      text("in Round 1.",440,290);
      
      //code to change the game state to the instruction when the mouse is pressing the restart button
      if(mousePressedOver(restartButton))
        {
          gameState = INT;
        }
  }
  
  //code when the game state is in the win1
  else if(gameState == win1)
    {
      //code to make the restart button 4 invisible when the game state is in the win1
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the win1
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the win1
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the win1
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the win1
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the win1
      restartButton2.visible = false;
      
      //code to make the reward button 4 invisible when the game state is in the win1
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the win1
      playButton2.visible = false;
      
      //code to make the start button 2 visible when the game state is in the win1
      startButton2.visible = true;
      
      //code to make the path invisible when the game state is in the win1
      path.visible = false;
      
      //code to make the road stop moving when the game state is in the win1
      path.velocityX = 0;
      
      //code to make the main cyclist invisible when the game state is in the win1
      mainCyclist.visible = false;
      
      //setting the velocity of each and every opponent1 in the background 0 when the game state is in the win1
      opponents1Group.setVelocityXEach(0);
      
      //setting the velocity of each and every opponent2 in the background 0 when the game state is in the win1
      opponents2Group.setVelocityXEach(0);
      
      //setting the velocity of each and every opponent3 in the background 0 when the game state is in the win1
      opponents3Group.setVelocityXEach(0);
      
      //code to destroy each and every opponent1 in the background when the game state is in the win1
      opponents1Group.setLifetimeEach(0);
      
      //code to destroy each and every opponent2 in the background when the game state is in the win1
      opponents2Group.setLifetimeEach(0);
      
      //code to destroy each and every opponent3 in the background when the game state is in the win1
      opponents3Group.setLifetimeEach(0);
      
      //code to display reward for winning the round 1
      textSize(70);
      fill("blue")
      text("Amazing!",150,60);
      
      
      textSize(50);
      fill("red");
      text("You have completed Round1",50,120);
      
      textSize(50);
      fill("red");
      text("by travelling 1000m.",150,170);
      
      //code to display press the start button 2 to start the round 2 in the game when the game state is in the win1
      textSize(50);
      fill("cyan");
      text("Press this button to go to Round2",5,230);
      
      //code to display the text start over the start button 2 when the game state is in the win1
      textSize(30);
      fill("purple");
      text("Start",330,280);
      
      //code to change the game state to restart2 when the mouse is pressing the start button 2 
      if(mousePressedOver(startButton2))
        {
          gameState = restart2
        }
  }
  
  //code when the game state is in the restart2
  else if(gameState == restart2)
    {
      //code to make the restart button 4 invisible when the game state is in restart2
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in restart2
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in restart2
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in restart2
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in restart2
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in restart2
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in restart2
      rewardButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in restart2
      startButton2.visible = false;
      
      //code to make the play button 2 visible when the game state is in restart2
      playButton2.visible = true;
      
      //code to reset the speed when the game state is in restart2 
      speed = 0;
      
      //code to reset the distance when the game state is in restart2
      distance = 0;
      
      //code to reset the good score when the game state is in restart2
      goodScore = 0;
     
      //code to display press the play button 2 to play the round 2 in the game when the game state is in the restart2
      textSize(50);
      fill("yellow");
      text("Press this button to play Round2",5,150);
      
      //code to display the text play over the play button 2 when the game state is in the restart2
      textSize(30);
      fill("blue");
      text("Play",330,220);
      
      //code to change the game state to the round 2 when the mouse is pressing the play button 2
      if(mousePressedOver(playButton2))
        {
          gameState = round2
        }
  }
  
  //code when the game state is in the round 2
  else if (gameState == round2)
    {
      //code to make the restart button 4 invisible when the game state is in the round 2
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the round 2
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the round 2
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the round 2
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the round 2
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the round 2
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the round 2
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the round 2
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the round 2
      startButton2.visible = false;
      
      //code to make the restart button invisible when the game state is in the round 2
      restartButton.visible = false;
      
      //code to increase the velocity of the road after each and every speed2
      path.velocityX = -(7 + 3*speed2/100);
      
      //code to make the main cyclist visible when the game state is in the round 2
      mainCyclist.visible = true;
      
      //code to make the reward button 1 invisible when the game state is in the round 2
      rewardButton1.visible = false;
      
      //code to make the play button invisible when the game state is in the round 2
      playButton.visible = false;
      
      //code to make the path visible when the game state is in the round 2
      path.visible = true;
      
      //code to make the game over invbisible when the game state is in the round 2
      gameOver.visible = false;
  
      //code to make to move the road like an infinite road by making its X position to half of its width when the path X position is lesser than 0
      if(path.x < 0 )
        {
          path.x = width/2;
        }
      
      //code to increase the speed2 after every 20 frames
      speed2 = speed2 + (getFrameRate()/20);
  
      //code to increase distance2 afetr every 60 frames 
      distance2 = distance2 + Math.round(getFrameRate()/60);
  
      //code to display how much distance2 is covered
      textSize(20);
      fill("gold");
      text("Distance:" + distance2 + "m",560,30);
      
      //code to create background edges   
      edges = createEdgeSprites();
      
      //code to make the main cyclist to collide with the background edges
      mainCyclist.collide(edges);
      
      //code to make the main cyclist move up when the up arrow key is pressed  
      if(keyDown("up"))
        {
          mainCyclist.y = mainCyclist.y - 30;
        }
  
      //code to make the main cyclist move down when the down arrow key is pressed
      if(keyDown("down"))
        {
          mainCyclist.y = mainCyclist.y + 30;
        }
  
      //code to make the check point sound to come after every 200 distance2
      if(distance2>0 && distance2%200 == 0)
        {
          check_PointSound.play();
        }
  
      //this function is to create obstacles
      createObstacles();
      
      //code to change the game state to the end2 when the main cyclist is touching the boult or round.
      if(mainCyclist.isTouching(boultsGroup) ||                                              mainCyclist.isTouching(roundsGroup))
        {
          gameState = end2;
        }
      

      //code to make better score increase by 1 when the distance2 is 2000 
      if(distance2 == 2000)
        {
          betterScore = betterScore + 1;
        }
      
      //code to change the game state to the win2 when the better score is 1
      if(betterScore == 1 )
        {
          gameState = win2;
        }
  }
  
  //code when the game state is in the end2
  else if(gameState == end2)
    {
      //code to make the restart button 4 invisible when the game state is in the end2
      restartButton4.visible = false;
           
      //code to make the restart button 3 invisible when the game state is in the end2
      restartButton3.visible = false;
           
      //code to make the reward button 3 invisible when the game state is in the end2
      rewardButton3.visible = false;
           
      //code to make the play button 3 invisible when the game state is in the end2
      playButton3.visible = false;
           
      //code to make the start button 3 invisible when the game state is in the end2
      startButton3.visible = false;
           
      //code to make the restart button 2 invisible when the game state is in the end2
      restartButton2.visible = false;
           
      //code to make the reward button 2 visible when the game state is in the end2
      rewardButton2.visible = true;
           
      //code to make the play button 2 invisible when the game state is in the end2
      playButton2.visible = false;
           
      //code to make the start button 2 invisible when the game state is in the end2
      startButton2.visible = false;
           
      //code to make the path invisible when the game state is in the end2
      path.visible = false;
           
      //code to make the restart button invisible when the game state is in the end2
      restartButton.visible = false;
           
      //code to make the reward button 1 invisible when the game state is in the end2
      rewardButton1.visible = false;
           
      //code to make the play button invisible when the game state is in the end2
      playButton.visible = false;
           
      //code to change another animation to the main cyclist when the game state is in the end2
      mainCyclist.changeAnimation("MainCyclist_Falling",mainCyclistAnimation2);
           
      //code to make the road stop moving when the game state is in the end2
      path.velocityX = 0;
           
      //setting the velocity of each and every boult in the background 0 when the game state is in the end2
      boultsGroup.setVelocityXEach(0);
           
      //setting the velocity of each and every round in the background 0 when the game state is in the end2
      roundsGroup.setVelocityXEach(0);   
           
      //code to not make the each and every boult in the background to destroy when the game state is in the end2
      boultsGroup.setLifetimeEach(-1);
           
      //code to not make the each and every round in the background to destroy when the game state is in the end2
      roundsGroup.setLifetimeEach(-1);
           
      //code to make the game over visible when the game state is in the end2
      gameOver.visible = true;
           
      //code to display the player to press the reward button 2 to get the reward when the player losese the game in the round 2 when the game state is in the end2
      textSize(50);
      fill("indigo");
      text("Press this button to get reward",50,160);
    
      //code to display the text reward over the reward button 2 when the game state is in the end2
      textSize(30);
      fill("green");
      text("Reward",330,230);
           
      //code to change the game state to reward2 when the mouse is pressing the button reward button 2 
      if(mousePressedOver(rewardButton2))
        {
          gameState = reward2
        }
  }
  
  //code when the game state is in the reward2
  if(gameState == reward2)
    {
      //code to make the restart button 4 invisible when the game state is in the reaward2
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the reaward2
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the reaward2
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the reaward2
      playButton3.visible = false;
      
      //code to make the restart button 2 visible when the game state is in the reaward2
      restartButton2.visible = true;
      
      //code to make the reward button 2 invisible when the game state is in the reaward2
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the reaward2
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the reaward2
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the reaward2
      path.visible = false;
      
      //code to make the game over invisible when the game state is in the reaward2
      gameOver.visible = false;
      
      //code to make the reward button 1 invisible when the game state is in the reaward2
      rewardButton1.visible = false;
      
      //code to make the restart button invisible when the game state is in the reaward2
      restartButton.visible = false;
      
      //code to make the play button invisible when the game state is in the reaward2
      playButton.visible = false;
      
      //code to disappear each and every boult when the game state is in the reward2
      boultsGroup.destroyEach();
      
      //code to disappear each and every round when the game state is in the reward2
      roundsGroup.destroyEach();
      
      //code to make the main cyclist invisible when the game state is in the reward2
      mainCyclist.visible = false;
      
      //code to display press the restart button 2 to restart the game when the game state is in the reward2
      textSize(50);
      fill("orange");
      text("Press this button to restart",50,50);          
      
      //code to display the text restart over the restart button 2 when the game state is in the reward2
      textSize(30);
      fill("blue");
      text("Restart",300,110);
      
      //code to display reward for the player after he loses the round 2 in the game when the game state is in the reward2
      textSize(70);
      fill("red")
      text("Fantastic!",240,190);
      
      textSize(50);
      fill("magenta");
      text("You have travelled",140,240);
      
      textSize(50);
      fill("indigo");
      text(distance2 + "m",300,290);
      
      textSize(50);
      fill("magenta");
      text("in Round 2.",480,290);
      
      //code to change the game state to the instruction when the mouse is pressing the restart button 2
      if(mousePressedOver(restartButton2))
        {
          gameState = INT;
        }
  }
  
  //code when the game state is in the win2
  else if(gameState == win2)
    {
      //code to make the restart button 4 invisible when the game state is in the win2
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the win2
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the win2
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the win2
      playButton3.visible = false;
      
      //code to make the start button 3 visible when the game state is in the win2
      startButton3.visible = true;
      
      //code to make the restart button 2 invisible when the game state is in the win2
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the win2
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the win2
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the win2
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the win2
      path.visible = false;
      
      //code to make the road stop moving when the game state is in the win2
      path.velocityX = 0;
      
      //code to make the main cyclist invisible when the game state is in the win2
      mainCyclist.visible = false;
      
      //setting the velocity of each and every boult in the background 0 when the game state is in the win2
      boultsGroup.setVelocityXEach(0);
      
      //setting the velocity of each and every round in the background 0 when the game state is in the win2
      roundsGroup.setVelocityXEach(0);
      
      //code to destroy each and every boult in the background when the game state is in the win2
      boultsGroup.setLifetimeEach(0);
      
      //code to destroy each and every round in the background when the game state is in the win2
      roundsGroup.setLifetimeEach(0);
      
      //code to display reward for winning the round 2
      textSize(70);
      fill("yellow")
      text("Fabuluous!",150,60);
      
      textSize(50);
      fill("red");
      text("You have completed Round2",50,120);
      
      textSize(50);
      fill("red");
      text("by travelling 2000m.",150,170);
      
      //code to display press the start button 3 to start the round 2 in the game when the game state is in the win2
      textSize(50);
      fill("magenta");
      text("Press this button to go to Round3",5,230);
      
      //code to display the text start over the start button 3 when the game state is in the win2
      textSize(30);
      fill("purple");
      text("Start",330,280);
      
      //code to change the game state to the restart3 when the mouse is pressing the start button3
      if(mousePressedOver(startButton3))
        {
          gameState = restart3
        } 
  }
 
  //code when the game state is in the restart3
  if(gameState == restart3)
    {
      //code to make the restart button 4 invisible when the game state is in the restart3 
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the restart3
      restartButton3.visible = false;
      
    //code to make the reward button 3 invisible when the game state is in the restart3
      rewardButton3.visible = false;
      
      //code to make the play button 3 visible when the game state is in the restart3
      playButton3.visible = true;
      
      //code to make the start button 3 invisible when the game state is in the restart3
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the restart3
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the restart3
      rewardButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the restart3
      startButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the restart3
      playButton2.visible = false;
      
      //code to reset the speed2 when the game state is in the restart3 
      speed2 = 0;
      
      //code to reset the distance2 when the game state is in restart3
      distance2 = 0;
      
      //code to reset the better score when the game state is in the restart3
      betterScore = 0;
     
      //code to display press the play button 3 to play the round 3 in the game when the game state is in the restart3
      textSize(50);
      fill("orange");
      text("Press this button to play Round3",5,150);
      
      //code to display the text play over the play button 3 when the game state is in the restart3
      textSize(30);
      fill("brown");
      text("Play",330,220);
      
      //code to change the game state to the round 3 when the mouse is pressing the play button 3
      if(mousePressedOver(playButton3))
        {
          gameState = round3
        }
  }
 
  //code when the game state is in the round 3
  if(gameState == round3)
    {
      //code to make the restart button 4 invisible when the game state is in the round 3
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the round 3
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the round 3
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the round 3
      playButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the round 3
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the round 3
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the round 3
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the round 3
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the round 3
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the round 3
      startButton2.visible = false;
      
      //code to make the restart button invisible when the game state is in the round 3
      restartButton.visible = false;
      
      //code to increase the velocity of the road after each and every speed3
      path.velocityX = -(7 + 3*speed3/100);
      
      //code to make the main cyclist visible when the game state is in the round 3
      mainCyclist.visible = true;
      
      //code to make the reward button 1 invisible when the game state is in the round 3
      rewardButton1.visible = false;
      
      //code to make the play button invisible when the game state is in the round 3
      playButton.visible = false;
      
      //code to make the path visible when the game state is in the round 3
      path.visible = true;
      
      //code to make the game over invisible when the game state is in round 3
      gameOver.visible = false;
  
      //code to make to move the road like an infinite road by making its X position to half of its width when the path X position is lesser than 0
      if(path.x < 0 )
        {
          path.x = width/2;
        }
      
      //code to increase speed3 after every 10 frames 
      speed3 = speed3 + (getFrameRate()/10);
  
      //code to increase distance3 after every 60 frames
      distance3 = distance3 + Math.round(getFrameRate()/60);
  
      //code to display how much distance3 is covered
      textSize(20);
      fill("gold");
      text("Distance:" + distance3 + "m",560,30);
      
      //code to create background edges  
      edges = createEdgeSprites();
      
      //code to make the main cyclist to collide with the background edges
      mainCyclist.collide(edges);
      
      //code to make the main cyclist move up when the up arrow key is pressed
      if(keyDown("up"))
        {
          mainCyclist.y = mainCyclist.y - 40;
        }
  
      //code to make the main cyclist move down when the down arrow key is pressed
      if(keyDown("down"))
        {
          mainCyclist.y = mainCyclist.y + 40;
        }
  
      //code to make the check point sound to come after every 300 distance3
      if(distance3>0 && distance3%300 == 0)
        {
          check_PointSound.play();
        }
  
      //this function is to create barracks
      createBarracks();
      
      //code to change the game state to the end3 when the main cyclist is touching the barrack
      if(mainCyclist.isTouching(barracksGroup))
        {
          gameState = end3;
        }
  
      //code to make best score increase by 1 when the distance3 is 3000
      if(distance3 == 3000)
        {
          bestScore = bestScore + 1;
        }
      
      //code to change the game state to the win3 when the best score is 1
      if(bestScore == 1 )
        {
          gameState = win3;
        }
  }
  
  //code when the game is in the end3
  if(gameState == end3)
    {
      //code to make the restart button 4 invisible when the game state is in the end3
      restartButton4.visible = false;
      
      //code to make the restart button 3 invisible when the game state is in the end3
      restartButton3.visible = false;
      
      //code to make the reward button 3 visible when the game state is in the end3
      rewardButton3.visible = true;
      
      //code to make the play button 3 invisible when the game state is in the end3
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the end3
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the end3
      restartButton2.visible = false;
      
      //code to make the reward button 2 visible when the game state is in the end3
      rewardButton2.visible = true;
      
      //code to make the play button 2 invisible when the game state is in the end3
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the end3
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the end3
      path.visible = false;
      
      //code to make the restart button invisible when the game state is in the end3
      restartButton.visible = false;
      
      //code to make the reward button 1 invisible when the game state is in the end3
      rewardButton1.visible = false;
      
      //code to make the play button invisible when the game state is in the end3
      playButton.visible = false;
      
      //code to change another animation to the main cyclist when the game state is in the end3 
      mainCyclist.changeAnimation("MainCyclist_Falling",mainCyclistAnimation2);
      
      //code to make the road stop moving when the game state is in the end3
      path.velocityX = 0;
      
      //setting the velocity of each and every barrack in the  background 0 when the game state is in the end3
      barracksGroup.setVelocityXEach(0);
      
      //setting the velocity of each and every round in the background 0 when the game state is in the end3
      barracksGroup.setLifetimeEach(-1);
      
      //code to make the game over visible when the game state is in the end3
      gameOver.visible = true;
           
      //code to display the player to press the reward button 3 to get the reward when the player losese the game in the round 3 when the game state is in the end3
      textSize(50);
      fill("yellow");
      text("Press this button to get reward",50,160);
      
      //code to display the text reward over the reward button 3 when the game state is in the end3
      textSize(30);
      fill("blue");
      text("Reward",330,230);
      
      //code to change the game state to the reward3 when the mouse is pressing the reward button 3
      if(mousePressedOver(rewardButton3))
        {
          gameState = reward3;
        }
  }
  
  //code when the game state is in the reward 3 
  if(gameState == reward3)
    {
      //code to make restart button 4 invisible when the game state is in the reward3
      restartButton4.visible = false;
      
      //code to make restart button 3 visible when the game state is in the reward3
      restartButton3.visible = true;
      
      //code to make reward button 3 invisible when the game state is in the reward3
      rewardButton3.visible = false;
      
      //code to make play button 3 invisible when the game state is in the reward3
      playButton3.visible = false;
      
      //code to make restart button 2 invisible when the game state is in the reward3
      restartButton2.visible = false;
      
      //code to make reward button 2 invisible when the game state is in the reward3
      rewardButton2.visible = false;
      
      //code to make play button 2 invisible when the game state is in the reward3
      playButton2.visible = false;
      
      //code to make start button 2 invisible when the game state is in the reward3
      startButton2.visible = false;
      
      //code to make path invisible when the game state is in the reward3
      path.visible = false;
      
      //code to make game over invisible when the game state is in the reward3
      gameOver.visible = false;
      
      //code to make reward button 1 invisible when the game state is in the reward3
      rewardButton1.visible = false;
      
      //code to make restart button invisible when the game state is in the reward3
      restartButton.visible = false;
      
      //code to make play button invisible when the game state is in the reward3
      playButton.visible = false;
      
      //code to disappear each and every barrack when the game state is in the reward3
      barracksGroup.destroyEach();
      
      //code to make the main cyclist invisible when the game state is in the reward3
      mainCyclist.visible = false;
      
      //code to display press the restart button 3 to restart the game when the game state is in the reward3
      textSize(50);
      fill("orange");
      text("Press this button to restart",50,50);          
      
      //code to display the text restart over the restart button 3 when the game state is in the reward3
      textSize(30);
      fill("red");
      text("Restart",300,110);
      
      //code to display reward for the player after he loses the round 3 in the game when the game state is in the reward3
      textSize(70);
      fill("red")
      text("Wonderful!",240,190);
      
      textSize(50);
      fill("lime");
      text("You have travelled",140,240);
      
      textSize(50);
      fill("cyan");
      text(distance3 + "m",300,290);
      
      textSize(50);
      fill("lime");
      text("in Round 3.",480,290);
      
      //code to change the game state to the instruction when the mouse is pressing the restart button 3
      if(mousePressedOver(restartButton3))
        {
          gameState = INT;
        }
  }
  
  //code when the game state is in the win3
  if(gameState == win3)
    {
      //code to make the restart button 4 visible when the game state is in the win3
      restartButton4.visible = true;
      
      //code to make the restart button 3 invisible when the game state is in the win3 
      restartButton3.visible = false;
      
      //code to make the reward button 3 invisible when the game state is in the win3 
      rewardButton3.visible = false;
      
      //code to make the play button 3 invisible when the game state is in the win3 
      playButton3.visible = false;
      
      //code to make the start button 3 invisible when the game state is in the win3 
      startButton3.visible = false;
      
      //code to make the restart button 2 invisible when the game state is in the win3 
      restartButton2.visible = false;
      
      //code to make the reward button 2 invisible when the game state is in the win3 
      rewardButton2.visible = false;
      
      //code to make the play button 2 invisible when the game state is in the win3 
      playButton2.visible = false;
      
      //code to make the start button 2 invisible when the game state is in the win3 
      startButton2.visible = false;
      
      //code to make the path invisible when the game state is in the win3 
      path.visible = false;
      
      //code to make the road stop moving when the game state is in the win3
      path.velocityX = 0;
      
      //code to make the main cyclist invisible when the game state is in the win3 
      mainCyclist.visible = false;
      
      //setting the velocity of each and every barrack in the background 0 when the game state is in the win3
      barracksGroup.setVelocityXEach(0);
      
      //code to destroy each and evevry barrack in the background when the game state is in the win3
      barracksGroup.setLifetimeEach(0);
      
      //code to display press the restart button 4 to restart when the player won the round 3 when the game state is in the win3
      textSize(50);
      fill("yellow");
      text("Press this button to restart",50,50);

      //code to display the text restart over the restart button 4 when the game state is in the win3
      textSize(30);
      fill("magenta");
      text("Restart",330,110);

      //code to display reward for winning the whole game
      textSize(70);
      fill("lime")
      text("Excellent!",150,190);
      
      textSize(50);
      fill("cyan");
      text("You have won the whole game",50,240);
      
      textSize(50);
      fill("cyan");
      text("by travelling 3000m in Round 3.",30,290);
      
      //code to change the game state to the instruction when the mouse is pressing the restart button 4
      if(mousePressedOver(restartButton4))
        {
          gameState = INT;
        }
  }
}

function createOpponents()
{
  //code to make a variable for selecting random opponents
  var select_opponents = Math.round(random(1,3))
  
  //code to make to come each and every opponent after every 140 frames
  if(frameCount%140 == 0)
    {
      //code to make the opponent1 to come if the random number is 1
      if(select_opponents == 1)
        {
          //this function is to create opponent1
          createOpponent1();
        }
      
      //code to make the opponent2 to come if the random number is 2
      else if(select_opponents == 2)
        {
          //this function is to create opponent2
          createOpponent2();
        }
      
      //code to make the opponent3 to come if the random number is 3
      else if(select_opponents == 3)
        {
          //this function is to create opponent3
          createOpponent3();
        }
  }
}
      
function createOpponent1()
{
  //creating opponent1 as a sprite and making the opponent1 to come at random Y position between 50 and 250
  opponent1 = createSprite(1100,random(50,250));
        
  //code to increase the velocity of the opponent1 after each and every speed
  opponent1.velocityX = -(5 + speed/100);
        
  //code to add animation for the opponent1
  opponent1.addAnimation("opponent1_Cycling",opponent1Animation1);
        
  //code to add another animation for the opponent1
  opponent1.addAnimation("opponent1_Falling",opponent1Animation2);
        
  //code to assign size to the opponent1
  opponent1.scale = 0.06;
        
  //code to assign lifetime to the opponent1 so that it will destroy the opponent1 after sometime and it don't makes memory leak
  opponent1.lifetime = 240;
        
  //code to make the depth of the opponent1 and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the opponent1 will come infront of the main cyclist
  opponent1.depth = mainCyclist.depth;
  mainCyclist.depth = mainCyclist.depth + 1;
        
  //code to make the sensor of the opponent1 to the size of the opponent1
  opponent1.setCollider("rectangle",0,0,1200,1300);
        
  //code to make the sensor of the opponent1 invisible
  opponent1.debug = false;
        
  //code to add opponent1 to the opponents1 group
  opponents1Group.add(opponent1)
}

function createOpponent2()
{
  //creating opponent2 as a sprite and making the opponent2 to come at random Y position between 50 and 250
  opponent2 = createSprite(1100,random(50,250));
        
  //code to increase the velocity of the opponent2 after each and every speed
  opponent2.velocityX = -(5 + speed/100);
        
  //code to add animation for the opponent2
  opponent2.addAnimation("opponent2_Cycling",opponent2Animation1);
        
  //code to add another animation for the opponent2
  opponent2.addAnimation("opponent2_Falling",opponent2Animation2);
        
  //code to assign size to the opponent2
  opponent2.scale = 0.06;
        
  //code to assign lifetime to the opponent2 so that it will destroy the opponent2 after sometime and it don't makes memory leak
  opponent2.lifetime = 240;
        
  //code to make the depth of the opponent2 and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the opponent2 will come infront of the main cyclist
  opponent2.depth = mainCyclist.depth;
  mainCyclist.depth = mainCyclist.depth + 1;
        
  //code to make the sensor of the opponent2 to the size of the opponent2
  opponent2.setCollider("rectangle",0,0,1200,1300);
        
  //code to make the sensor of the opponent2 invisible
  opponent2.debug = false;
        
  //code to add opponent2 to the opponents2 group
  opponents2Group.add(opponent2);
}

function createOpponent3()
{
  //creating opponent3 as a sprite and making the opponent1 to come at random Y position between 50 and 250
  opponent3 = createSprite(1100,random(50,250));
        
  //code to increase the velocity of the opponent3 after each and every speed
  opponent3.velocityX = -(5 + speed/100);
        
  //code to add animation for the opponent3
  opponent3.addAnimation("opponent3_Cycling",opponent3Animation1);
        
  //code to add another animation for the opponent3
  opponent3.addAnimation("opponent3_Falling",opponent3Animation2);
        
  //code to assign size to the opponent3
  opponent3.scale = 0.06;
        
  //code to assign lifetime to the opponent3 so that it will destroy the opponent3 after sometime and it don't makes memory leak
  opponent3.lifetime = 240;
  
  //code to make the depth of the opponent3 and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the opponent3 will come infront of the main cyclist
  opponent3.depth = mainCyclist.depth;
  mainCyclist.depth = mainCyclist.depth + 1;
        
  //code to make the sensor of the opponent3 to the size of the opponent3
  opponent3.setCollider("rectangle",0,0,1200,1300);
        
  //code to make the sensor of the opponent3 invisible
  opponent3.debug = false;
        
  //code to add opponent3 to the opponents3 group
  opponents3Group.add(opponent3);
}

function createObstacles()
{
  //code to make a variable for selecting random obstacles
  var select_obstacles = Math.round(random(1,2));
  
  //code to make to come each and every obstacle after every 150 frames
  if(frameCount%150 == 0)
    {
      //code to make the boult to come if the random number is 1
      if(select_obstacles == 1)
        {
          //this function is to create boults
          createBoults();
        }
      
      //code to make the round to come if the random number is 2
      else if(select_obstacles == 2)
        {
          //this function is to create rounds
          createRounds();
        }
  }
}

function createBoults()
{
  //creating boult as a sprite and making the boult to come at random Y position between 60 and 240
  var boult = createSprite(700,random(60,240),20,20);
  
  //code to increase the velocity of the boult after each and every speed2
  boult.velocityX = -(5 + speed2/100);
  
  //code to add image to the boult
  boult.addImage(obstacle2Img);
  
  //code to assign size to the boult
  boult.scale = 0.07;
  
  //code to assign lifetime to the boult so that it will destroy the boult after sometime and it don't makes memory leak
  boult.lifetime = 200;
  
  //code to make the depth of the boult and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the boult will come infront of the main cyclist
  boult.depth = mainCyclist.depth;
  mainCyclist.depth = mainCyclist.depth + 1;
  
  //code to make the sensor of the boult to the size of the boult
  boult.setCollider("rectangle",0,0,600,300);
  
  //code to make the sensor of the boult invisible
  boult.debug = false;
  
  //code to add boult to the boults group
  boultsGroup.add(boult);
}

function createRounds()
{
  //creating round as a sprite and making the round to come at random Y position between 60 and 240
  var round = createSprite(700,random(60,240),20,20);
  
  //code to increase the velocity of the round after each and every speed2
  round.velocityX = -(5 + speed2/100);
  
  //code to add image to the round
  round.addImage(obstacle3Img);
  
  //code to assign size to the round
  round.scale = 0.07;
  
  //code to assign lifetime to the round so that it will destroy the round after sometime and it don't makes memory leak
  round.lifetime = 200;
  
  //code to make the depth of the round and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the round will come infront of the main cyclist
  round.depth = mainCyclist.depth;
  mainCyclist.depth = mainCyclist.depth + 1;
  
  //code to make the sensor of the round to the size of the round
  round.setCollider("rectangle",0,0,700,300);
  
  //code to make the sensor of the round invisible
  round.debug = false;
  
  //code to add round to the rounds group
  roundsGroup.add(round);
}

function createBarracks()
{
  //code to make to come each and every barrack after every 150 frames
  if(frameCount%150 == 0)
    {
      //creating barrack as a sprite and making the barrack to come at random Y position between 60 and 240 
      var barrack = createSprite(700,random(60,240),20,20);
      
      //code to increase the velocity of the barrack after each and every speed3
      barrack.velocityX = -(5 + speed3/100);
      
      //code to add image to the barrack
      barrack.addImage(obstacle1Img);
      
      //code to assign size to the barrack
      barrack.scale = 0.07;
      
      //code to assign lifetime to the barrack so that it will destroy the barrack after sometime and it don't makes memory leak
      barrack.lifetime = 200;
      
      //code to make the depth of the barrack and the depth of the main cyclist equal and then increase the depth of the main cyclist by 1 so that the barrack will come infront of the main cyclist
      barrack.depth = mainCyclist.depth;
      mainCyclist.depth = mainCyclist.depth + 1;
      
      //code to make the sensor of the barrack to the size of the barrack
      barrack.setCollider("rectangle",0,0,400,500);
      
      //code to make the sensor of the barrack invisible
      barrack.debug = false;
      
      //code to add barrack to the barracks group
      barracksGroup.add(barrack);
  }
}


      
      
      
      
  
    
  

