/**********************************************
 * RNA Transcription
 * ==================================
 * Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
 ***********************************************/
function rnaTranscription(x) {
  let arr = x.split("");
  for (let i =0; i < arr.length; i++){
    if (arr[i] === "G") {
      arr[i] = "C";
    } else if (arr[i] === "C") {
      arr[i] = "G";
    } else if (arr[i] === "T") {
      arr[i] = "A";
    } else if (arr[i] === "A") {
      arr[i] = "U";
    }
  }
  let tranArr = arr.join("")
  return tranArr
}
module.exports = { rnaTranscription };
