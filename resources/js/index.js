window.onload = function(){ 
  var canvas = document.getElementById("sky"); 
  var context = canvas.getContext("2d")

  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  var mf = 100;
  var flakes = [];

  for(var i = 0; i < mf; i++){
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 5 + 2,
      d: Math.random() + 1
    })
  }

  function drawFlakes(){
    context.clearRect(0,0,w,h);
    context.fillStyle = "white";
    context.beginPath();
    for(var i = 0; i < mf; i++){
      var f = flakes[i];
      context.moveTo(f.x,f.y);
      context.arc(f.x,f.y,f.r,0,Math.PI * 2,true);
    }
    context.fill();
    moveFlakes();
  }

  var angle = 0;
  function moveFlakes(){
    angle += 0.01;
    for(var i = 0; i < mf; i++){
      var f = flakes[i];
      f.y = Math.pow(f.d, 2) + 1;
      f.x = Math.sin(angle) * 2;
      
      if(f.y > h){
        flakes[i] = {x: Math.random() * w, y: 0, r: f.r,d: f.d};
      }

    }
  }
  setInterval(drawFlakes(), 1);

}
