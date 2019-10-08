import "@babel/polyfill";
import chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import { Builder, until } from "selenium-webdriver";
import assert from "assert";
import { LoginPage } from "../pageObjects/loginPage";
import { By } from "selenium-webdriver";

let driver = null;
let service = new chrome.ServiceBuilder(path).build();
const chromeOptions = new chrome.Options();
chrome.setDefaultService(service);

describe("Uinsure Login", () => {
  let loginPage = null;

  beforeEach(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    loginPage = new LoginPage(driver);

    await driver.get(
      "https://test.uinsure.co.uk/members/login?ReturnUrl=%2fmembers%2flogin.aspx"
    );
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should login with valid email address and password", async () => {
    const authenticatedUrl = "https://test.uinsure.co.uk/members/";

    //TODO: login using valid credentials

    const url = await driver.getCurrentUrl();

    driver.findElement(By.id("emailAddress")).sendKeys("tim");
    driver.findElement(By.id("password")).sendKeys("exercise19!");
    driver.findElement(By.id("btnLogin")).click();

    await driver.wait(until.urlIs(authenticatedUrl), 3000);
  });

  it("should show validation when no email address entered", async () => {
    await loginPage.loginAs();

    const emailError = await loginPage.getEmailError();
    const text = await emailError.getText();

    assert.equal(text, "This field is required.");
  });

  it("should show error message if an invalid email address is entered", async () => {
    await loginPage.loginAs();

    const invalidEmail = await loginPage.getInvalidEmailMessage();
    const text = await invalidEmail.getText();

    assert.equal(text, "");
  });

  it("should show validation when no password is entered", async () => {
    await loginPage.loginAs();

    const passwordError = await loginPage.getPasswordError();
    const text = await passwordError.getText();

    assert.equal(text, "This field is required.");
  });

  it("should show error message if an invalid password is entered", async () => {
    await loginPage.loginAs();

    const invalidPassword = await loginPage.getInvalidPasswordMessage();
    const text = await invalidPassword.getText();

    assert.equal(text, "");
  });

  it("should take you to reset password instructions if you click the Reset your password link", async () => {
    const resetPasswordLink = await loginPage.getPasswordReset();
    await resetPasswordLink.click();

    await driver.wait(
      until.titleIs("Uinsure Members Area - Forgotten Password"),
      3000
    );
  });

  it("should take you back to the homepage if you click the Back button", async () => {
    const backBtn = await loginPage.getBackToHomepage();

    await driver.wait(until.titleIs("Uinsure"), 3000);
  });
});
