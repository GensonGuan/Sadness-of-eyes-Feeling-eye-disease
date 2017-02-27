var myVideo
var myVideo2
//var myImage
var myImage2
var myImage3
var myImage4
var myImage5
var myS
var myS2
//var a=0
var s
var status = 'intro'

function preload(){
  
  myImage2 = loadImage("pics/boom.png")
  myImage3 = loadImage("pics/BG.png")
  myImage4 = loadImage("pics/good.png")
  myImage5 = loadImage("pics/logo2.png")
  myS = loadSound('music/b.mp3')
  myS2 = loadSound('music/p.mp3')
  
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  
  imageMode(CENTER)
  myVideo = createVideo('video/car1.mp4')
  myVideo2 = createVideo('video/car3.mp4')
  myVideo.hide()
  myVideo2.hide()
  
  //left text
  textAlign(LEFT)
  fill(237,78,41)
  textSize(16)
  s = "Pretend that you are a color-blindness patient, and you need to drive through the street. Decide when to across at the traffic light. Be careful!"
  text(s,15,windowHeight/100*40,260,windowHeight/100*80)
}
  
function draw() {
  
  if(status == 'intro') {
    intro();
  }
 
  if(status == 'boom') {
    boom();
  }
  
  if( status == 'greenlight'){
    greenlight();
  }
  
   
    button();
    
    image(myImage5, width/100*92, height/100*12);
  }
  
  
function intro() {
    imageMode(CENTER)
  //draw first frame
    image(myVideo,windowWidth/2,windowHeight/2,windowWidth,windowWidth/1920*1080);
     if(s =='drive'){
      myVideo.play();
   }
 //draw the text
  textAlign(LEFT)
  fill(237, 78, 41)
  textSize(16)
  s = "Pretend that you are a color-blindness patient, and you need to drive through the street. Decide when to across at the traffic light. Be careful!"
  text(s, 15, windowHeight / 100 * 40, 260, windowHeight / 100 * 80)

}

function greenlight(){
  
  imageMode(CENTER)
  image(myVideo2,windowWidth/2,windowHeight/2,windowWidth,windowWidth/1920*1080)
  myVideo2.play()
}

function button(){
  push();
  strokeWeight(40)
  stroke(237,78,41)
  line(width/2-200,height/100*90+20,width/2-100,height/100*90+20)
  line(width/2+100,height/100*90+20,width/2+200,height/100*90+20)
  line(width/2-50,height/100*90+20,width/2+50,height/100*90+20)
  pop();
  fill(237,78,41)
  textSize(26)
  textAlign(CENTER)
  text("When driving to the crossroads, choose pass or wait",windowWidth/2,windowHeight/20*17)
  
  fill(250)
  textSize(20)
  textAlign(CENTER)
  text("Pass", width/2-150, height/100*90+30)
  text("Wait 10s", width/2+150, height/100*90+30)
  text("Start", width/2, height/100*90+30)
  
}

function boom(){
  imageMode(CENTER)
  image(myImage3, width/2, height/2, width, height)
  image(myImage2, width/2, height/2, height/4177*7426, height)
}


function mouseClicked(){

   if(mouseX > width/2-50 && mouseX < width/2+50 && mouseY > height/100*90 && mouseY < height/100*90+40){
   s = 'drive'
    
  }
  
  if(mouseX > width/2-200 && mouseX < width/2-100 && mouseY > height/100*90 && mouseY < height/100*90+40){
   status = 'boom'
   // boom()
   myS.play()
    
  }
  
  if(mouseX > width/2+100 && mouseX < width/2+200 && mouseY > height/100*90 && mouseY < height/100*90+40){
  
   status = 'greenlight'
   myS2.play()
   
  }
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}