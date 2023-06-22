function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

  // O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous,
        tmp;
  
    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;
  
      // reverse pointer
      node.next = previous;
  
      // step forward in the list
      previous = node;
      node = tmp;
    }
  
    return previous;
  }