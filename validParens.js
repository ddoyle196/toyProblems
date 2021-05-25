/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let a = [];
  for (const c of s) {
    if (c === '(') {
      a.push(')');
    } else if (c === '[') {
      a.push(']');
    } else if (c === '{') {
      a.push('}');
    } else if (c !== a.pop()) {
      return false;
    }
  }
  return a.length === 0;
};