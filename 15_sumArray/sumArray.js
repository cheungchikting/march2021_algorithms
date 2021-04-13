/**********************************************
 * Sum Array
 * ==================================
 * Given an array of integers, return the sum of the array.
 *
 * Example:
 * Running the function on [1, 2, 3] would return 6.
 * Running the function on [-1, 2, -3] would return -2.
 ***********************************************/
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}
module.exports = sumArray;
