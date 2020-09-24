const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res  = 0;
     arr.forEach(element => {
       if(Array.isArray(element)){
        let elemisarr = this.calculateDepth(element);
        if (res < elemisarr) {
          res = elemisarr;
        }
      }
     });
     return res+1;
  }
}
