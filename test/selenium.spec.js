import '@babel/polyfill';
import chrome from "selenium-webdriver/chrome";
import { path } from 'chromedriver';
import { Builder, By, Key } from "selenium-webdriver";
import assert from "assert";

let driver = null;
let service = new chrome.ServiceBuilder(path).build();
const chromeOptions = new chrome.Options();
chrome.setDefaultService(service);

describe("Selenium", () => {

  beforeEach(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

    await driver.get("http://www.google.com/");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should render \"Selenium WebDriver\" on a Google search result", async () => {
    const element = await driver.findElement(By.name("q"));
    await element.sendKeys("webdriver", Key.RETURN);
    const res = await driver.findElement(By.css(".LC20lb")).getText();

    assert.equal(res, "Selenium WebDriver");
  });
 
});