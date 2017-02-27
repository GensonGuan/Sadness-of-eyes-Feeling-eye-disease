var myImage
var myImage2
var myImage3
var myImage4
var myImage5
var mySong
var mySong2
var mySong3

function preload(){
   myImage = loadImage("pics/blind.png");
   myImage2 = loadImage("pics/b1.png");
   myImage3 = loadImage("pics/b2.png");
   myImage4 = loadImage("pics/BG.png");
   myImage5 = loadImage("pics/logo2.png");
   mySong = loadSound('music/street.mp3')
   mySong2 = loadSound('music/Hi.m4a')
   mySong3 = loadSound('music/angry.mp3')
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  imageMode(CENTER)
  image(myImage, width/2, height/2, height/842*1271, height);
  street()
  setTimeout(hi,3000)
  
  fill(250)
  textSize(26)
  textAlign(CENTER)
  text("Only one chance!",windowWidth/2,windowHeight/20*18)
  text("‘Click’ to find out who is saying hi to you.",windowWidth/2,windowHeight/20*19)
  textAlign(LEFT)
  fill(237,78,41)
  textSize(16)
  s = "Pretend that you are a short-sight patient, and you heard that someone called you just now. Find out who he or she is within 15 seconds, otherwise, your friend will be angry."
  text(s,15,windowHeight/100*40,245,windowHeight/100*80)
  
  image(myImage5, width/100*92, height/100*12);
  
  
  
}

function draw() {
  //fill(0)
  //rect(width/100*18,height/100*38,width/100*6,height/100*40)
  
  //resetbar
  push()
  stroke(237,78,41)
  strokeWeight(60)
  line(35,height-5-30,200,height-5-30) 
  pop()
  
  fill(255)
  textAlign(CENTER);
  textSize(40)
  text('Reset',117.5, height-5-15)
  
}

function street(){
  mySong.play()
}

function hi(){
  mySong2.play()
}

function good(){
  image(myImage4, width/2, height/2, width, height)
  image(myImage2, width/2, height/2, height/4177*7426, height)
}

function bad(){
  image(myImage4, width/2, height/2, width, height)
  image(myImage3, width/2, height/2, height/4177*7426, height)
  mySong3.play()
}

function mouseClicked(){
  if(mouseX > width/100*18 && mouseX < width/100*24 && mouseY > height/100*38 && mouseY < height/100*78){
  good()}
  else{
    bad()}
    if(mouseX > 5 && mouseX < 205 && mouseY > height/100*92 && mouseY < height/100*92+60){
    setup()}
  }
    
  






function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}