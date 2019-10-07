import '@babel/polyfill';
import chrome from "selenium-webdriver/chrome";
import { path } from 'chromedriver';
import { Builder, until } from "selenium-webdriver";
import assert from "assert";
import { HomePage } from '../pageObjects/homePage';

let driver = null;
let homePage = null;
let service = new chrome.ServiceBuilder(path).build();
const chromeOptions = new chrome.Options();
chrome.setDefaultService(service);

describe("Selenium", () => {

  beforeEach(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    homePage = new HomePage(driver);

    await driver.get("https://test.uinsure.co.uk/");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should show \"Login / Register\" button", async () => {
    const loginButton = await homePage.getLoginRegisterButton();
    const text = await loginButton.getText();

    assert.equal(text, "Login / Register");
  });

  it("should navigate to login page", async () => {
    const loginButton = await homePage.getLoginRegisterButton();
    await loginButton.click();

    await driver.wait(until.titleIs('Uinsure Members Area - Login'), 3000);    
  }); 
});