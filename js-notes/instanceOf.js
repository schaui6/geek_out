INSTANCEOF = function(obj, constructor) {
  if(obj.__proto__ === constructor.prototype){
    return true;
  } 
  else if(obj.__proto__) {
    return INSTANCEOF(obj.__proto, constructor);
  }
  else {
    return false;
  }
};