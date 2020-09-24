const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === null){
      this.arr.push('( null )')
    } else{
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (!this.arr[position]) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};


module.exports = chainMaker;
