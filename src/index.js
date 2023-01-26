module.exports = function check(str, bracketsConfig) {

  let closeSymbol = bracketsConfig.reduce((acc, el) => {
    acc.push(el[1])
    return acc;
  }, [])

  let pairsSymbol = bracketsConfig.reduce((acc, el) => {
    acc[el[1]] = el[0];
    return acc;
  }, {})

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];

    if (stack.length === 0) {
      stack.push(currentSymbol);
    }
    else {
      let topSymbol = stack[stack.length - 1];
      if (closeSymbol.includes(currentSymbol) && topSymbol === pairsSymbol[currentSymbol]) {
        stack.pop();
      }
      else {
        stack.push(currentSymbol);
      }
    }
  }
  return stack.length === 0;
}




