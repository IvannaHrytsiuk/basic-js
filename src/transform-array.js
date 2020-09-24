const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let rem = [];
  let res = [];

  if(!Array.isArray(arr)){
    throw new Error();
  }

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
          i = i + 1;
          rem.push(i);
      } else if (arr[i] === '--discard-prev') {
          if (rem.findIndex(index => index === (i - 1)) === -1 ) {
            res.pop();
          }
      } else if (arr[i] === '--double-next') {
          if ( arr[i + 1] !== undefined) {
            res.push(arr[i + 1]);
          }
      } else if (arr[i] === '--double-prev') {
          if (arr[i - 1] !== undefined && rem.findIndex(index => index === (i - 1)) === -1) {
            res.push(arr[i - 1]);
          }
      } else {
        res.push(arr[i]);
      }
  }
  return res;
};
