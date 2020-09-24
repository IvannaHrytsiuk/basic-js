const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let addition;
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  addition = options.addition !== undefined ? options.addition : '';
  options.additionRepeatTimes--;
  
  while (options.additionRepeatTimes > 0) {
    addition += options.additionSeparator + options.addition;
    options.additionRepeatTimes--;
  }

  res = str = str + addition;
  options.repeatTimes--;

  while (options.repeatTimes > 0) {
    res += options.separator + str;
    options.repeatTimes--;
  }

  return res;
};
  
