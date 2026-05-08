import { Page, expect } from "@playwright/test";

export class AccountOverviewPage {
  constructor(private page: Page) {}

  async clickAccountsOverviewLink() {
    await this.page.click("text=Accounts Overview");
  }

  async verifyAccountDetails() {
    await expect(this.page.locator("body")).toContainText(/Accounts Overview|Account|Balance|Available Amount/i);
  }

  async verifyBalance() {
    await expect(this.page.locator("body")).toContainText(/\$/);
  }

  async clickAccountNumber() {
    await this.page.locator("table a").first().click();
  }

  async verifyTransactionHistory() {
    await expect(this.page.locator("body")).toContainText(/Account Details|Transaction|Funds Transfer/i);
  }
}