var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    size++;
    storage[size] = value;
  };

  stack.pop = function(){
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
