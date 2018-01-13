var Queue = function() {
 /*Queue === "FIFO"*/
 var someInstance = {};


 var storage = {};
 var lastIndex = 0;
 var index = 0;
 var length = 0;



 someInstance.enqueue = function(value) {

   storage[index++] = value;
   length++;
 };

 someInstance.dequeue = function() {

   if (length > 0) {
     var result = storage[lastIndex];
     delete storage[lastIndex++]
     length--;
     return result;
   }
 };
 someInstance.size = function() {

   return length;
 };

 return someInstance;
};
