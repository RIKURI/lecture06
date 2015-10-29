function chooseRandomStrokeColor(){
  var red,green,blue,alpha;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  alpha = Math.floor(Math.random() * 128) + 128;
  stroke(red, green, blue, alpha);
}

function drawRandomLine(){
  chooseRandomStrokeColor();
  var a,b,c,d;
  /*
  a = 100;
  b = 100;
  c = 200;
  d = 200;
  console.log("hoge");
  */
  a = Math.floor(Math.random() * 800);
  b = Math.floor(Math.random() * 800);
  c = Math.floor(Math.random() * 800);
  d = Math.floor(Math.random() * 800);

  line(a,b,c,d);
}
