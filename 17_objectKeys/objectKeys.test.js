const getCourseKeys = require("./objectKeys");

const courseInfo = {
  name: "Code 301",
  duration: {
    dayTrack: "4 weeks",
    eveningTrack: "8 weeks",
  },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};
describe("Testing challenge 1", () => {
  test("It should return the keys from an object", () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual([
      "name",
      "duration",
      "topics",
      "finalExam",
    ]);
  });
});
