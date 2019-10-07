import '@babel/polyfill';
import chrome from "selenium-webdriver/chrome";
import { path } from 'chromedriver';
import { Builder, By, Key, until } from "selenium-webdriver";
import assert from "assert";

let driver = null;
let service = new chrome.ServiceBuilder(path).build();
const chromeOptions = new chrome.Options();
chrome.setDefaultService(service);

describe("Selenium", () => {

  beforeEach(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

    await driver.get("https://test.uinsure.co.uk/");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should show \"Login / Register\" button", async () => {
    const element = await driver.findElement(By.css(".login"));
    const text = await element.getText();

    assert.equal(text, "Login / Register");
  });

  it("should navigate to login page", async () => {
    const element = await driver.findElement(By.css(".login"));
    const text = await element.click();

    await driver.wait(until.titleIs('Uinsure Members Area - Login'), 3000);    
  });
 
});