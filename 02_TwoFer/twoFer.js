/**********************************************
 * Two Fer
 * ==================================
 * Given a name, return a string with the message:
 *  One for X, one for me.
 *  Where X is the given name.
 * However, if the name is missing, return the string:
 *  One for you, one for me.
 ***********************************************/

function twoFer(x) {
  if (x === null || x === undefined) {
  return "One for you, one for me."
  }
  return `One for ${x}, one for me.`
}

module.exports = twoFer;
