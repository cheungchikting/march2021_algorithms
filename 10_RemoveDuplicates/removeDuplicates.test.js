const remove = require("./removeDuplicates");

test("Removes duplicates from the array [3, 2, 5, 4, 2]", () => {
  expect(remove([3, 2, 5, 4, 2])).toStrictEqual([3, 2, 5, 4]);
});
