/**********************************************
 * Capitalize
 * ==================================
 * Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
 ***********************************************/

function capitalize(str) {
  let words = str.split(" ");
  let sentence = []
  console.log(words)
  for (let i = 0; i < words.length; i++) {
  sentence.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return sentence.join(" ")
}
module.exports = { capitalize };
