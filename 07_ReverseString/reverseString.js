/**********************************************
 * Reverse String
 * ==================================
 * Reverse a string

For example: input: "cool" output: "looc"
 ***********************************************/
function reverseString(word) {
  let spliteWord = word.split("");
  let reverseWord = spliteWord.reverse();
  let joinreverse = reverseWord.join("");
  return joinreverse  
}


module.exports = { reverseString };

