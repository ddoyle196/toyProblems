/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = '';
  if (strs.length === 0) { return longest }
  if (strs.length === 1) { return strs[0] }
  for (let y = 0; y < strs[0].length; y++) {
    let sub = strs[0].slice(0, y + 1);
    let match = true;
    for (let z = 1; z < strs.length; z++) {
      if (strs[z].slice(0, y + 1) !== (sub)) { match = false }
    }
    if (match === true && longest.length < sub.length) { longest = sub; }
  }
  return longest;
};