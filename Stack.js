'use strict';

const { LinkedList } = require('./ll');

class Stack {
  constructor() {
    this.storage = new LinkedList();
    this.top = null
  };
  push(value) {
    this.top = this.storage.append(value);
  };
  pop() {
    if (this.storage.deleteLast()) {
      return this.top = this.storage.deleteLast()
    } else {
      return (`tack is empty`);
    }
  };
  peek() {
    if (this.storage.head) {
      return this.top.value;
    } else {
      return (` stack is empty`);
    }
  };
  isEmpty() {
    if (this.storage.head) {
      return 0;
    } else {
      return 1;
    }
  };
}

module.exports = { Stack };