//20. Valid Parentheses
//Revisit - stack ds.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const parentheses = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = [];


  for (const char of s) {
    if (char in parentheses) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let temp = stack.pop();

      if (parentheses[temp] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;

};
