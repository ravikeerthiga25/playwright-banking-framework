import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

setDefaultTimeout(30000);

let browser: Browser;
let page: Page;

Before(async function () {

  browser = await chromium.launch({
    headless: false
  });

  page = await browser.newPage();

  // maximize window
  await page.setViewportSize({
    width: 1536,
    height: 864
  });

  this.page = page;

});

After(async function () {

  await page.close();

  await browser.close();

});