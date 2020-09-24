const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 let teamname = '';
 try {
    members.map(mem => {
        if (typeof mem !== 'string') {
          return '';
        }
        return mem.trim().toUpperCase()
      })
      .sort()
      .forEach(mem => {
      if (mem[0]) {
          teamname += mem[0];
        }
      })
    return teamname;
  } catch (err) {
    return false;
  }
};
