NEW = function(constructor, args) {
  // create a new object
  //set new object's __proto__ to constructor's prototype
  // invoke our constructor with our new object as context
  //return our new object
  var o = {};
  o.__proto__ = constructor.prototype;
  constructor.apply(o, args);

  return o;
};