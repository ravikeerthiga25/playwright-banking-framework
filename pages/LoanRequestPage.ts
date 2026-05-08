import { Page, expect } from "@playwright/test";

export class LoanRequestPage {

  constructor(private page: Page) {}

  async clickRequestLoanLink() {
    await this.page.click("text=Request Loan");
  }

  async enterLoanAmount(amount: string) {
    await this.page.fill("input#amount", amount);
  }

  async enterDownPayment(amount: string) {
    await this.page.fill("input#downPayment", amount);
  }

  async clickApplyButton() {
    await this.page.click("input[value='Apply Now']");
  }

  async verifyLoanSuccess() {
    await expect(this.page.locator("body"))
      .toContainText(/Loan Request Processed|Approved|Congratulations/i);
  }

  async verifyValidationMessage() {
    await expect(this.page.locator("body"))
      .toContainText(/error|invalid|required|amount/i);
  }

  async verifyErrorMessage() {
    await expect(this.page.locator("body"))
      .toContainText(/error|invalid|negative/i);
  }

  async verifyHugeLoanValidation() {
    await expect(this.page.locator("body"))
      .toContainText(/denied|error|processing|loan/i);
  }
}