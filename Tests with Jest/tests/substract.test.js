const { expect } = require("@jest/globals");
const subtract = require("../functions/subtract");

test("Testen der Subtract-Funktion", () => {
  expect(subtract(5, 2)).toBe(3);
});
