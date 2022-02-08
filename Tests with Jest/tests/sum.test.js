const { expect } = require("@jest/globals");
const sum = require("../functions/sum");

function Exception(message, codeStatus) {
  this.message = message;
  this.codeStatus = codeStatus;
  this.name = "Exception";
}

test("Testen der Sum-Funktion", () => {
  // erste Methode
  /* if (sum(1, 2) === 3) {
    console.log("Test succesfull");
  } else {
    throw new Exception("Der Test ist fehlgeschlagen", 401);
    //throw "Der Test ist fehlgeschlagen";
    //throw Error;
  }
*/
  // zweiste Methode besser
  expect(sum(1, 2)).not.toBe(4);
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toEqual(4);
  expect(sum(1, 2)).toEqual(3);
});
