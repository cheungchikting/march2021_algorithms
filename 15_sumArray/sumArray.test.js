const sumArray = require("./sumArray");

describe("Sum Array", () => {
  test("Returning the sum of the array [1, 2, 3]", () => {
    expect(sumArray([1, 2, 3])).toEqual(6);
  });

  test("Returning the sum of the array [-1, 2, -3]", () => {
    expect(sumArray([-1, 2, -3])).toEqual(-2);
  });
});
