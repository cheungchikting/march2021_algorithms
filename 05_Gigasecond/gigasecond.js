/**********************************************
 * Gigasecond
 * ==================================
 * Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.
 ***********************************************/
function gigasecond(startDate) {
    let startTime = startDate.getTime();
    let endDate = new Date(startTime + 1000000000000);
    return endDate;
}

module.exports = { gigasecond };
