const alphabetize = require("./sortArray");

describe("Testing challenge 2", () => {
  test("It should sort strings alphabetically", () => {
    expect(
      alphabetize([
        "alphabet",
        "Zebra",
        "Alphabet",
        "carrot",
      ])
    ).toStrictEqual([
      "Alphabet",
      "Zebra",
      "alphabet",
      "carrot",
    ]);
    expect(
      alphabetize(["alphabet", "Alphabet", "carrot"])
    ).toStrictEqual(["Alphabet", "alphabet", "carrot"]);
    expect(alphabetize([])).toStrictEqual([]);
  });
});
