var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var begin = 0; //next person's number in line

  var end = 0; //next in line for roller coaster

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[begin] = value;
    begin++;  //2
  };

  queue.dequeue = function(){
    var result = storage[end];
    delete storage[end];
    end++;
    return result; 
  };

  queue.size = function(){
    return begin - end >= 0 ? begin-end : 0;
  };

  return queue;
};
