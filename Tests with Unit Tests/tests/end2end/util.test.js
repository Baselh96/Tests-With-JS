const puppeteer = require("puppeteer");
const { expect } = require("@jest/globals");

test("Testen eines Pages", async () => {
    //Als erstes erstellen wir einen Browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  // Dann erstellen wir einen Page
  const page = await browser.newPage();
  await page.goto(
    "http://127.0.0.1:5500/Tests%20with%20Unit%20Tests/index.html"
  );

  // Füllen wir die Elemente des Pages 
  await page.click("input#name");
  await page.type("input#name", "Anna"); //Hiermit wird automatisch name-input ausgefüllt
  await page.click("input#age");
  await page.type("input#age", "15"); //Hiermit wird automatisch age-input ausgefüllt

  await page.click("#btnAddUser"); //Hiermit wird der Button automatisch geklickt

  //Dann überprüfen wir die Elemente
  const finalContent = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalContent).toBe("Anna (15 years old)");
}, 10000); // Ist die Laufzeit
