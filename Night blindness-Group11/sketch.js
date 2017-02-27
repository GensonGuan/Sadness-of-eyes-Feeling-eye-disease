var myImage;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var button;
var bgcolor
var mySong
var mySong2
var mySong3
var mySong4
var s
var a=2;


function preload(){
   myImage = loadImage("images/room2.jpg");
   myImage2 = loadImage("images/pee.png");
   myImage3 = loadImage("images/peepants.png");
   myImage4 = loadImage("images/BG.png");
   myImage5 = loadImage("images/logo2.png");
   mySong = loadSound('music/glass.mp3')
   mySong2 = loadSound('music/water.mp3')
   mySong3 = loadSound('music/wow.mp3')
   mySong4 = loadSound('music/no.mp3')
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  bgcolor = color(0,0,0,0)
  
  imageMode(CENTER)
  //setTimeout(pee,t)
  image(myImage, width/2, height/2, height/497*819, height);
  image(myImage5, width/100*92, height/100*12);
  
  //timebar
  push()
  stroke(237,78,41)
  strokeWeight(20)
  line(15,15,210,15)
  pop()
  setTimeout(timebar,1000)
  setTimeout(timebar2,2000)
  setTimeout(timebar3,3000)
  setTimeout(timebar4,4000)
  setTimeout(timebar5,5000)
  setTimeout(timebar6,6000)
  setTimeout(timebar7,7000)
  setTimeout(timebar8,8000)
  setTimeout(timebar9,9000)
  setTimeout(timebar10,10000)
  
  
  fill(250)
  textSize(26)
  textAlign(CENTER)
  text("Come on,10 seconds,",windowWidth/2,windowHeight/20*18)
  text("‘Click’ to find out that where is the door.",windowWidth/2,windowHeight/20*19)
  textAlign(LEFT)
  fill(237,78,41)
  textSize(16)
  s = "Pretend that you are a night-blindness patient, and you need to use the toilet at a power outage night in your home. Try to find the door of the toilet within 15 seconds, otherwise, you will wet your pants. Be careful not to break things at home."
  text(s,15,windowHeight/100*40,260,windowHeight/100*80)
  
  
  if(a==2){
    setTimeout(soundpee,10000);
  }
}

function soundpee(){
  mySong3.play();
}

function pee(){
  image(myImage3, width/2, height/2, height/4177*7426, height)
  //mySong3.play()
}

function musicplay(){
  mySong.play()
}

function no(){
  mySong4.play()
}

function changeColor(){
  //image(myImage4, width/2, height/2, width, height)
  //fill(0);
  //noStroke();
  //rect(0,0,width, height);
  image(myImage4,0,0,windowWidth*2,windowHeight*2)
  
  //rewrite
  textAlign(LEFT)
  fill(237,78,41)
  textSize(16)
  s = "Pretend that you are a night-blindness patient, and you need to use the toilet at a power outage night in your home. Try to find the door of the toilet within 15 seconds, otherwise, you will wet your pants. Be careful not to break things at home."
  text(s,15,windowHeight/100*40,260,windowHeight/100*80)
  image(myImage5, width/100*92, height/100*12);
  //resetbar
  push()
  stroke(237,78,41)
  strokeWeight(60)
  line(35,height-5-30,230,height-5-30) 
  pop()
  fill(255)
  textAlign(CENTER);
  textSize(40)
  text('Reset',132.5, height-5-15)

  bgcolor = image(myImage2, width/2, height/2, height/4177*7426, height)
  //mySong2.play()
  fill(255)
  textSize(50)
  textAlign(CENTER)
  //text('PEE TIME!!!',windowWidth/2,windowHeight/20*19)
}

function draw() {
  
  //fill(10)
  //rect(width/100*51,height/100*46,50,50)
  //rect(width/100*18,height/100*48,100,100)
  
  //resetbar
  push()
  stroke(237,78,41)
  strokeWeight(60)
  line(35,height-5-30,230,height-5-30) 
  pop()
  
  fill(255)
  textAlign(CENTER);
  textSize(40)
  text('Reset',132.5, height-5-15)
  
  if(a==2){
    setTimeout(pee,10000);
  }else if(a==1){
     changeColor();
  }
}

function timebar(){
  noStroke()
  ellipse(15,15,20,20)
  ellipse(35,15,20,20)
  rect(15,5,20,20)}
function timebar2(){
  noStroke()
  ellipse(55,15,20,20)
  rect(35,5,20,20)}
function timebar3(){
  noStroke()
  ellipse(75,15,20,20)
  rect(55,5,20,20)}
function timebar4(){
  noStroke()
  ellipse(95,15,20,20)
  rect(75,5,20,20)}
function timebar5(){
  noStroke()
  ellipse(115,15,20,20)
  rect(95,5,20,20)}
function timebar6(){
  noStroke()
  ellipse(135,15,20,20)
  rect(115,5,20,20)}
function timebar7(){
  noStroke()
  ellipse(155,15,20,20)
  rect(135,5,20,20)}
function timebar8(){
  noStroke()
  ellipse(175,15,20,20)
  rect(155,5,20,20)}
function timebar9(){
  noStroke()
  ellipse(195,15,20,20)
  rect(175,5,20,20)}
function timebar10(){
  noStroke()
  ellipse(215,15,20,20)
  rect(195,5,20,20)}

function mouseClicked(){
  if(mouseX > width/100*51 && mouseX < width/100*51+50 && mouseY > height/100*46 && mouseY < height/100*46+50){
    a=1;
    mySong2.play()
    //changeColor()
    //setTimeout(pee,10800000)
    //}else{
    // setTimeout(pee,10000)
  }

  if(mouseX > width/100*51 && mouseX < width/100*51+50 && mouseY > height/100*46 && mouseY < height/100*46+50){
  }else{
    //a=2;
    no();
  }
  
  if(mouseX > width/100*18 && mouseX < width/100*18+100 && mouseY > height/100*48 && mouseY < height/100*48+100){
    musicplay();
  }
  
  if(mouseX > 5 && mouseX < 205 && mouseY > height/100*92 && mouseY < height/100*92+60){
    setup()
  }
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}