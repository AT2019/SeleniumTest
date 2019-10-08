import { By } from "selenium-webdriver";

export class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async loginAs(email, password) {
    const loginButton = await this.getLoginButton();
    await loginButton.click();
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

  async getInvalidEmailMessage() {
    return await this.driver.findElement(By.css(".error-text"));
  }

  async getPasswordError() {
    return await this.driver.findElement(By.id("password-error"));
  }

  async getInvalidPasswordMessage() {
    return await this.driver.findElement(By.css(".error-text"));
  }

  async getPasswordReset() {
    return await this.driver.findElement(By.linkText("Reset your password"));
  }
}
