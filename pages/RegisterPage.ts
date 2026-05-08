import { Page, expect } from "@playwright/test";

export class RegisterPage {

  constructor(private page: Page) {}

  async clickRegisterLink() {

    await this.page.click("text=Register");

  }

  async fillRegistrationDetails() {

    const randomNumber = Date.now();

    await this.page.fill(
      "input[name='customer.firstName']",
      "Keerthiga"
    );

    await this.page.fill(
      "input[name='customer.lastName']",
      "R"
    );

    await this.page.fill(
      "input[name='customer.address.street']",
      "Chennai"
    );

    await this.page.fill(
      "input[name='customer.address.city']",
      "Chennai"
    );

    await this.page.fill(
      "input[name='customer.address.state']",
      "Tamil Nadu"
    );

    await this.page.fill(
      "input[name='customer.address.zipCode']",
      "600001"
    );

    await this.page.fill(
      "input[name='customer.phoneNumber']",
      "9876543210"
    );

    await this.page.fill(
      "input[name='customer.ssn']",
      "123456"
    );

    await this.page.fill(
      "input[name='customer.username']",
      `keerthi${randomNumber}`
    );

    await this.page.fill(
      "input[name='customer.password']",
      "Test@123"
    );

    await this.page.fill(
      "input[name='repeatedPassword']",
      "Test@123"
    );

  }

  async clickRegisterButton() {

    await this.page.click("input[value='Register']");

  }

  async verifyAccountCreated() {

    await expect(this.page.locator("body"))
      .toContainText(/Welcome|created successfully/i);

  }

}