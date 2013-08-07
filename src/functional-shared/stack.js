var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  _.extend(stack, makeStack.stackMethods);

  return stack;

});

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  size++;
  storage[size] = value;
};

makeStack.stackMethods.pop = function(){
  var result = storage[size];
  delete storage[size];
  size && size--;
  return result;
};

makeStack.stackMethods.size = function(){
  return size;
};