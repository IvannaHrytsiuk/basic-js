const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isMachine) {
    this.isMachine = isMachine;
  }

  encrypt(message, key) {
    if(!message ||!key) {
      throw new Error();
    }

    let res = [];
    let ind = 0;
    let sum;
    let ind2;

    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    
    for (let i=65; i<91; i++) {
      letters.push( String.fromCharCode(i) );
    }
    
    for (let i = 0; i < message.length; i++) {
      if(letters.indexOf(message[i]) === -1) {
        res.push(message[i]);
        continue;
      }
      sum = letters.indexOf(message[i]) + letters.indexOf(key[ind]);
      ind2 = -1;
      
      if (letters.length - 1 - sum < 0) {
        ind2 = Math.abs(letters.length - 1 - sum) - 1;
      } else {
        ind2 = sum;
      }
      res.push(letters[ind2]);
      ind++;
      if (ind === key.length) {
        ind = 0;
      }
    }
    if(this.isMachine === false){
      return res.reverse().join('');
    } else{
      return res.join('');
    }
  }

  decrypt(message, key) {
    if(!message || !key) {
      throw new Error();
    }
    let res = [];
    let ind = 0;
    let sum;
    let ind2;
    let find;
    message= message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    for (let i = 65; i < 91; i++) {
      letters.push(String.fromCharCode(i));
    }

    for (let i = 0; i < message.length; i++) {
      if(letters.indexOf(message[i]) === -1) {
        res.push(message[i]);
        continue;
      }

      sum = letters.indexOf(message[i]);
      ind2 = letters.indexOf(key[ind]);
    
      if(1+(sum > ind2)){
        find = sum-ind2;
      } else{
        find=ind2 - sum
      }
      if(find < 0) {
        find = letters.length + find;
      }
      
      res.push(letters[find]);
      
      ind++;
      if (ind === key.length){
        ind = 0;
      }
    }
    if(this.isMachine === false){
      return res.reverse().join('');
    } else{
      return res.join('');
    }  
  }
}


module.exports = VigenereCipheringMachine;
