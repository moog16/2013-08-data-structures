var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {};
      stack.storage = {};
      stack.size = 0; // Hint: set an initial value here

  // Implement the methods below
  return _.extend(stack, makeStack.stackMethods);

};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.size++;
  this.storage[this.size] = value;
};

makeStack.stackMethods.pop = function(){
  var result = this.storage[this.size];
  delete this.storage[this.size];
  this.size && this.size--;
  return result;
};

makeStack.stackMethods.getSize = function(){

  return this.size;
};