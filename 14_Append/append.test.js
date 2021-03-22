const appendString = require("./append").appendString;
const appendArray = require("./append").appendArray;
const appendObject = require("./append").appendObject;

describe("Testing challenge 1", () => {
  test("It should append without modifying the oiginal", () => {
    const a = "This is my story.";
    const b = appendString(a);

    expect(a).toStrictEqual("This is my story.");
    expect(b).toStrictEqual("This is my story. The end.");
  });
});

describe("Testing challenge 2", () => {
  test("It should append by modifying the oiginal", () => {
    const a = ["Yes", "it", "is"];
    appendArray(a);

    expect(a).toStrictEqual(["Yes", "it", "is", "Yes"]);
  });
});

describe("Testing challenge 3", () => {
  test("It should add a property to an object", () => {
    const a = { fullName: "Octavia Butler" };
    appendObject(a, 1947);

    expect(a.yearBorn).toStrictEqual(1947);
  });
});
