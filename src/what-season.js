const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  try {
    if (!date) {
      return 'Unable to determine the time of year!';
    }
    date.getTimezoneOffset();
    if(date.getMonth()+1 === 1 || date.getMonth()+1 === 2 || date.getMonth()+1 === 12){
      return 'winter';
    } else if(date.getMonth()+1 === 3 || date.getMonth()+1 === 4 || date.getMonth()+1 === 5){
      return 'spring';
    } else if(date.getMonth()+1 === 6 || date.getMonth()+1 === 7 || date.getMonth()+1 === 8){
      return 'summer';
    } else if(date.getMonth()+1 === 9 || date.getMonth()+1 === 10 || date.getMonth()+1 === 11){
      return 'autumn';
    }
  } catch (err) {
    throw new Error();
  }
};
