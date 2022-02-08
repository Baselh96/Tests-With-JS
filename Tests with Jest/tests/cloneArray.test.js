const { expect } = require("@jest/globals");
const cloneArray = require("../functions/cloneArray");

test("Testen der cloneArray-Funktion", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
