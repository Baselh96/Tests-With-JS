const { generateText } = require("../../util");
const { expect } = require("@jest/globals");

// Unit-Teste
test("soll der Name und Alter zurückgegeben werden", () => {
  const text = generateText("Basel", 26);
  expect(text).toBe(`Basel (26 years old)`);
});

test("soll der Name und Alter für andere Werte zurückgegeben werden", () => {
  const text = generateText("", null);
  expect(text).toBe(` (null years old)`);
});
