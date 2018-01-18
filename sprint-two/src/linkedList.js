var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    LinkedList.prototype.addToTail = function(vae) {
      var nodeData = Node(value)
      if (list.head === null){
        list.head = nodeData
        list.tail = list.head
      } else {
        list.tail.next = nodeData
        list.tail = list.tail.next
      }
    };
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
