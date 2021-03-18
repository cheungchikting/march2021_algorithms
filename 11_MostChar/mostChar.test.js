const mostChar = require("./mostChar");
const remove = require("./mostChar");

test("Return the most occured letter in the word: xccelerate", () => {
  expect(mostChar("xccelerate")).toBe('e');
});
