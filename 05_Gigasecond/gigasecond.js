/**********************************************
 * Gigasecond
 * ==================================
 * Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.
 ***********************************************/
// <<<<<<< HEAD
// function gigasecond(startDate) {
//     let startTime = startDate.getTime();
//     let endDate = new Date(startTime + 1000000000000);
//     return endDate;
// }

// =======
export const gigasecond = (startDate) => {
  var startTime = startDate.getTime();
  var endDate = new Date(startTime + 1000000000000);
  return endDate;
};
// >>>>>>> 12d21be2090cbd0899a25adde27183c4c9a92d4a
module.exports = { gigasecond };
