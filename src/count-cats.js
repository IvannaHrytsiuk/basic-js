const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  count = 0;
  backyard.forEach(el => {
    el.forEach(el2 => {
      if(el2 === "^^"){
        count++;
      }
    })
  });
  return count;
};
