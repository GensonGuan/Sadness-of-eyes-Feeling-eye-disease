
var video;
var slider;
var capture;
var img;




function setup() {
  
   
  canvas = createCanvas(680, 460, WEBGL);
  textSize(35);
  
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(1080, 960);
  video.id('p5video');
  video.hide();
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(20,20);
  
  slider.id('blur-slider');
  
  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

   var blur = seriously.effect('blur');
  blur.amount = '#blur-slider';
   blur.source = src;
   target.source = blur;

 seriously.go();
 
}


  
/*function draw(){
   var seriously = new Seriously();
   var a = slider.value();
  if(a > 0.5 & a < 0.7){
 // ellipse(50,50, 500);
  
 
  
  }
}
*/











