DOT = function(obj, prop){
  if(obj.hasOwnProperty(prop)){
    return obj[prop];
  }
  else if(obj.__proto__) {
    return DOT(obj.__proto__, prop);
  }
};

DOTCALL = function(obj, propertyName, args) {
 var fn = DOT(obj, prop);

 if(fn) {
  return fn.apply(obj, args);
 }
};

DOTCALL(person, 'speak',[]); // person.speak()