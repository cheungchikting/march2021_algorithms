/**********************************************
 * Append Strings
 * ==================================
 * Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.
 ***********************************************/

function appendString(string) {
  // CODE HERE
}
/**********************************************
 * Append Array
 * ==================================
 * Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'.
Do not use a return statement.
For example:
const a = [1, 2, 3];
appendFirstToLast(a);
console.log(a) prints [1, 2, 3, 1]
 ***********************************************/
function appendArray(array) {
  // CODE HERE
}

/**********************************************
 * Append Object
 * ==================================
 * Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.
The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.
Do not use a return statement.
For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }

// key is yearBorn
 ***********************************************/
function appendObject(obj, value) {
  // CODE HERE
}

module.exports = {
  appendString,
  appendArray,
  appendObject,
};
