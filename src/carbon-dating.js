const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){
    return false;
  }
  if(!/^[\d.]+$/.test(sampleActivity)){
    return false;
  }
  if (sampleActivity <= 0 || MODERN_ACTIVITY < sampleActivity) {
      return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
