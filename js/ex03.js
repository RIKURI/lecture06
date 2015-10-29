function pickFortuneShip(){

  var a;
  a = Math.random();
  console.log(a);

  if(a > 0.9){
    return "大吉";
  }else{
    if(a > 0.5){
      return "中吉"
    }else{
      if(a > 0.2){
        return "吉"
      }else{
        if(a > 0.05){
          return "凶"
        }else{
          return "大凶"
        }
      }
    }
  }
}
