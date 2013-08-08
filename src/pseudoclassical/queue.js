var Queue = function() {
  this.begin = 0; //next person's number in line
  this.end = 0; //next in line for roller coaster
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.begin] = value;
  this.begin++;  //2
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.end];
  delete this.storage[this.end];
  this.end++;
  return result;
};

Queue.prototype.size = function(){
  return this.begin - this.end >= 0 ? this.begin-this.end : 0;
};

