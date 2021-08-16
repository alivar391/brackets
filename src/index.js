module.exports = function check(str, bracketsConfig) {
  let steck = [];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1])  steck.push(str[i]);
      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1] && counter === 0) {
        steck.push(str[i]);
        counter = 1;
        continue;
      }
      if (str[i] === bracketsConfig[j][1] && steck.length === 0) return false;
      if (str[i] === bracketsConfig[j][1] && steck[steck.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][0]!=bracketsConfig[j][1]) steck.pop();
      if (str[i] === bracketsConfig[j][1] && steck[steck.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][0]=== bracketsConfig[j][1] && counter===1) {
        steck.pop();
        counter = 0;
      }
    }
  } 
      
      if (steck.length != 0) return false;
      if (steck.length === 0) return true;
    }

