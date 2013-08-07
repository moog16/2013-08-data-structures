var Stack = function() {

  // Use an object with numeric keys to store values
  var stack = Object.create(Stack.stackMethods);
      stack.storage = {};
      stack.size = 0; // Hint: set an initial value here

  // Implement the methods below
  return stack;

};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.size++;
  this.storage[this.size] = value;
};

Stack.stackMethods.pop = function(){
  var result = this.storage[this.size];
  delete this.storage[this.size];
  this.size && this.size--;
  return result;
};

Stack.stackMethods.getSize = function(){

  return this.size;
};