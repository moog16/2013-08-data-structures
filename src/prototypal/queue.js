var Queue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  // Use an object with numeric keys to store values
  var queue = Object.create(Queue.queueFunctions);
  queue.begin = 0; //next person's number in line
  queue.end = 0; //next in line for roller coaster
  queue.storage = {};
  // Implement the methods below
  return queue;
};

Queue.queueFunctions = {};

Queue.queueFunctions.enqueue = function(value){
  this.storage[this.begin] = value;
  this.begin++;  //2
};

Queue.queueFunctions.dequeue = function(){
  var result = this.storage[this.end];
  delete this.storage[this.end];
  this.end++;
  return result;
};

Queue.queueFunctions.size = function(){
  return this.begin - this.end >= 0 ? this.begin-this.end : 0;
};

