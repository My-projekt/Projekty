// setting up frames delivery from static
const staticURL = 'static/models/mx5/';
const frameName = 'car';
const fileFormat = '.jpg';
const animationLength = 239;
// setting up canvas and loading frames
const canvas = document.getElementById('car_vid');
const ctx = canvas.getContext('2d');
const frames = loadFrames(animationLength);
canvas.width = 1280;
canvas.height = 720;
const car = {
  frame: 0,
};
/**
* function to update the canvas
**/
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(frames[car.frame], 0, 0);
}
/** 
*@param {number} frameCount - number of frames
*load frames from url and return an array
**/
function loadFrames(frameCount) {
  const frames = [];
  for (let i = 0; i <= frameCount; i++) {
    const f = new Image();
    f.src = `${staticURL}${frameName}${String(i).padStart(3, '0')}${fileFormat}`;
    frames.push(f);
  }
  return frames;
}
/** 
* Hide the splash div and restore overflow to default
**/
function splash(){
  setTimeout(() => {  
    $('#splash').fadeOut('slow');
    $('body').css("overflow","auto");
  }, 1500);
}
function main() {
  window.scrollTo(0, 0);
  gsap.to(car, {
  		frame: animationLength - 1,
  		snap: 'frame',
  		scrollTrigger: {
    	scrub: 0.5,
    },
  	onUpdate: render,
  });
  frames[0].onload = render;
}
main();
