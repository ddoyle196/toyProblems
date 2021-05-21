/*
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let state = x;
  let negative;
  x < 0 ? negative = true : negative = false;
  state = state.toString();
  state = state.split('');
  if (negative) { state = state.slice(0); }
  state = state.reverse();
  if (negative) { state = ['-'].concat(state); }
  state = state.join('');
  state = parseInt(state);
  return state > Math.pow(2, 31) - 1 || state < Math.pow(-2, 31) ? 0 : state;
};