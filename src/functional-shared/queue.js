var makeQueue = function(){
  // Use an object with numeric keys to store values
  var queue = {};
  queue.begin = 0; //next person's number in line
  queue.end = 0; //next in line for roller coaster
  queue.storage = {};
  // Implement the methods below
  _.extend(queue, makeQueue.queueFunctions);
  return queue;
};

makeQueue.queueFunctions = {};

makeQueue.queueFunctions.enqueue = function(value){
  this.storage[this.begin] = value;
  this.begin++;  //2
};

makeQueue.queueFunctions.dequeue = function(){
  var result = this.storage[this.end];
  delete this.storage[this.end];
  this.end++;
  return result;
};

makeQueue.queueFunctions.size = function(){
  return this.begin - this.end >= 0 ? this.begin-this.end : 0;
};

