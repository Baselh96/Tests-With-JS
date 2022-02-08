const { checkAndGenerate } = require("../../util");
const { expect } = require("@jest/globals");

test("soll der Name und Alter zurückgegeben werden", () => {
  const text = checkAndGenerate("Basel", 26);
  expect(text).toBe(`Basel (26 years old)`);
});
