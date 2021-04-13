/**********************************************
 * Most Occurred Character
 * ==================================
 * Given a string, return the character that occurs the most number of times.
 * If there is a tie, return the letter that comes first alphabetically.
 * Assume that the given string only consists of lower case letters.
 * 
 * Example:
 * Running the function on "xccelerate" would return 'e'.
 * Running the function on "code" would return 'c'.


 ***********************************************/
 function mostChar(str) {
    let count = 0;
    let newArr = [];
    for (let i=0; i < str.length; i++) {
        if (str[i]) {
        count += 1
        return count
        
        } 
    }
 }


console.log(mostChar("xccelerate"))


