var Stack = function() {
      this.storage = {};
      this.size = 0; // Hint: set an initial value here
};

Stack.stackMethods = {};

Stack.prototype.push = function(value){
  this.size++;
  this.storage[this.size] = value;
};

Stack.prototype.pop = function(){
  var result = this.storage[this.size];
  delete this.storage[this.size];
  this.size && this.size--;
  return result;
};

Stack.prototype.getSize = function(){

  return this.size;
};

//var stackInstance = new Stack();

