function drawLot(){

  var a;
  a = Math.random();
  console.log(a);

  if(a > 0.7){
    return "あたり";
  }else{
    return "はずれ";
  }
}
