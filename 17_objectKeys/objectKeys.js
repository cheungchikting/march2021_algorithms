/**********************************************
 * Object Keys
 * ==================================
 * Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object. 
For example: (['name', 'duration', 'topics', 'finalExam']).
 ***********************************************/

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

function getCourseKeys(obj) {
  return Object.keys(obj);
}

module.exports = getCourseKeys;
