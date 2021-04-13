/**********************************************
 * Raindrops
 * ==================================
 * Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
 ***********************************************/
function raindrops(n) {
  if ( n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    return n.toString()
  } else if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    return "PlingPlangPlong"
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "PlingPlang"
  } else if (n % 3 === 0 && n % 7 === 0) {
    return "PlingPlong"
  } else if (n % 5 === 0 && n % 7 === 0) {
    return "PlangPlong"
  } else if (n % 3 === 0) {
    return "Pling"
  } else if (n % 5 === 0) {
    return "Plang"
  } else if (n % 7 === 0) {
    return "Plong"
  }
}

module.exports = { raindrops };
