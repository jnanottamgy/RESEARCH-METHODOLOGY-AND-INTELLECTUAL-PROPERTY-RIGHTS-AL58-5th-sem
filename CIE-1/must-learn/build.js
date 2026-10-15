// Renders guide.html to ../RMIPR-CIE1-Must-Learn.pdf with headless Chromium.
// Usage: node build.js
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "guide.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(__dirname, "..", "RMIPR-CIE1-Must-Learn.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
  });
  await browser.close();
})();
