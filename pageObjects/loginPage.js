import { By } from "selenium-webdriver";

export class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async loginAs(email, password) {
    const emailField = await this.getEmailAddressField();
    emailField.sendKeys(email);

    const passwordField = await this.getPasswordField();
    passwordField.sendKeys(password);

    const loginButton = await this.getLoginButton();
    await loginButton.click();
  }

  async getEmailAddressField() {
    const element = await this.driver.findElement(By.id("emailAddress"));
    return element;
  }

  async getPasswordField() {
    const element = await this.driver.findElement(By.id("password"));
    return element;
  }

  async getLoginButtonText() {
    const element = await this.driver.findElement(By.css(".login"));
    const text = await element.getText();

    return text;
  }

  async getLoginButton() {
    return await this.driver.findElement(By.id("btnLogin"));
  }

  async getEmailError() {
    return await this.driver.findElement(By.id("emailAddress-error"));
  }

  async getInvalidLoginDetailsMessage() {
    return await this.driver.findElement(By.id("errorMessage"));
  }

  async getPasswordError() {
    return await this.driver.findElement(By.id("password-error"));
  }

  async getPasswordReset() {
    return await this.driver.findElement(By.linkText("Reset your password"));
  }

  async getBackToHomepage() {
    return await this.driver.navigate().to("https://test.uinsure.co.uk/");
  }
}
