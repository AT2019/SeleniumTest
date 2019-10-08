import "@babel/polyfill";
import chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import { Builder, until } from "selenium-webdriver";
import assert from "assert";
import { ResetPasswordPage } from "../pageObjects/resetPasswordPage";

let driver = null;
let passwordPage = null;
let service = new chrome.ServiceBuilder(path).build();
const chromeOptions = new chrome.Options();
chrome.setDefaultService(service);

describe("Uinsure Reset Password", () => {
  beforeEach(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    passwordPage = new ResetPasswordPage(driver);

    await driver.get("https://test.uinsure.co.uk/members/change-password");
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should show validation message when no current password has been entered", async () => {
    await passwordPage.changePassword();

    const currentPasswordError = await passwordPage.getCurrentPasswordText();
    const text = await currentPasswordError.getText();

    assert.equal(text, "");
  });

  it("should show validation message when no new password has been entered", async () => {
    await passwordPage.changePassword();

    const newPasswordError = await passwordPage.getCurrentPasswordText();
    const text = await newPasswordError.getText();

    assert.equal(text, "");
  });

  it("should show validation message when no confirm new password has been entered", async () => {
    await passwordPage.changePassword();

    const confirmNewPasswordError = await passwordPage.getCurrentPasswordText();
    const text = await confirmNewPasswordError.getText();

    assert.equal(text, "");
  });
});
