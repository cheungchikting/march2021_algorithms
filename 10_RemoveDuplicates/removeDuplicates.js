/**********************************************
 * Remove Duplicates
 * ==================================
 * Given an array of integers, find and remove any duplicates in the array.
 * Return a new array without any duplicates.
 * 
 * Example:
 * Running the function on [3, 2, 5, 4, 2] would return [3, 2, 5, 4].
 * Running the function on [1, 2, 3] would return [1, 2, 3].


 ***********************************************/
function removeDuplicates(arr) {
  let unique = new Set(arr);
  let backtoArr = [...unique]
  return backtoArr
}

console.log(removeDuplicates([1,2,3,4,5,1]))

module.exports = removeDuplicates;
