var Queue = function() {
 /*Queue === "FIFO"*/
 var someInstance = {};

 // Use an object with numeric keys to store values
 var storage = {};
 var lastIndex = 0; //next person in line
 var index = 0; // first person in line
 var length = 0; //how many people are in line

 // Implement the methods below

 someInstance.enqueue = function(value) {
   // .enqueue adds "value" to the back
   storage[index++] = value;
   length++;
 };

 someInstance.dequeue = function() {
   // .dequeue removes "values" from the front
   if (length > 0) {
     var result = storage[lastIndex];
     delete storage[lastIndex++]
     length--;
     return result;
   }
 };
 someInstance.size = function() {
   // returns inputs and outputs
   return length;
 };

 return someInstance;
};
