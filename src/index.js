const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ executablePath: "/home/chromium/latest/chrome", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  await page.screenshot({ path: "out.png", fullPage: true });

  await browser.close();
})();
