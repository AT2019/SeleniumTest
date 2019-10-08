import { By } from "selenium-webdriver";

export class ResetPasswordPage {
  constructor(driver) {
    this.driver = driver;
  }

  async changePassword(currentPassword, newPassword, confirmNewPassword) {
    const changePassword = await this.submitButton();

    await changePassword.click();
  }

  async submitButton() {
    return await this.driver.findElement(By.css(".submit"));
  }

  async getCurrentPasswordText() {
    return await this.driver.findElement(By.css(".error"));
  }

  async getNewPasswordText() {
    return await this.driver.findElement(By.css(".error"));
  }

  async getConfirmNewPasswordText() {
    return await this.driver.findElement(By.css(".error"));
  }
}
