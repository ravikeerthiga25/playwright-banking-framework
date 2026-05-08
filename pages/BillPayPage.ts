import { Page, expect } from "@playwright/test";

export class BillPayPage {
  constructor(private page: Page) {}

  async clickBillPayLink() {
    await this.page.click("text=Bill Pay");
  }

  async enterValidBillPaymentDetails() {
    await this.page.fill("input[name='payee.name']", "Electricity Board");
    await this.page.fill("input[name='payee.address.street']", "Chennai");
    await this.page.fill("input[name='payee.address.city']", "Chennai");
    await this.page.fill("input[name='payee.address.state']", "Tamil Nadu");
    await this.page.fill("input[name='payee.address.zipCode']", "600001");
    await this.page.fill("input[name='payee.phoneNumber']", "9876543210");
    await this.page.fill("input[name='payee.accountNumber']", "12345");
    await this.page.fill("input[name='verifyAccount']", "12345");
    await this.page.fill("input[name='amount']", "100");
  }

  async leavePayeeNameEmpty() {
    await this.enterValidBillPaymentDetails();
    await this.page.fill("input[name='payee.name']", "");
  }

  async enterInvalidAccountNumber() {
    await this.enterValidBillPaymentDetails();
    await this.page.fill("input[name='payee.accountNumber']", "abc");
    await this.page.fill("input[name='verifyAccount']", "abc");
  }

  async leaveAmountEmpty() {
    await this.enterValidBillPaymentDetails();
    await this.page.fill("input[name='amount']", "");
  }

  async clickSendPaymentButton() {
    await this.page.click("input[value='Send Payment']");
  }

  async verifyBillPaymentSuccess() {
    await expect(this.page.locator("body")).toContainText(/Bill Payment Complete|Payment Complete|complete/i);
  }

  async verifyValidationMessage() {
    await expect(this.page.locator("body")).toContainText(/required|error|invalid|amount|payee/i);
  }

  async verifyErrorMessage() {
    await expect(this.page.locator("body")).toContainText(/error|invalid|account/i);
  }
}