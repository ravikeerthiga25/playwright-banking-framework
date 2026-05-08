import { Page, expect } from "@playwright/test";

export class FundTransferPage {
  constructor(private page: Page) {}

  async clickTransferFundsLink() {
    await this.page.click("text=Transfer Funds");
  }

  async enterAmount(amount: string) {
    await this.page.fill("input#amount", amount);
  }

  async clickTransferButton() {
    await this.page.click("input[value='Transfer']");
  }

 async verifyTransferSuccess() {
 
    await expect(this.page.locator("body")).toContainText("Transfer Complete");
}
  async verifyValidationMessage() {
  await expect(this.page.locator("body")).toContainText(/error|invalid|amount/i);
}

async verifyErrorMessage() {
  await expect(this.page.locator("body")).toContainText(/error|invalid|amount/i);
}
  async verifyInsufficientBalanceMessage() {
    await expect(this.page.locator("body")).toContainText(/insufficient|error|failed/i);
  }
}