import { By } from "selenium-webdriver";

export class HomePage {   
  constructor(driver) {
    this.driver = driver;
  }

  async getLoginRegisterButton(){
    return await this.driver.findElement(By.css(".login"));        
  }
}