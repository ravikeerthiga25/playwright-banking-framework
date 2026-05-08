import { Page, expect } from "@playwright/test";

export class LoginPage {

  constructor(private page: Page) {}

  async launchWebsite() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async enterUsername(username: string) {
    await this.page.locator('input[name="username"]').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('input[name="password"]').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('input[value="Log In"]').click();
  }

  async clickLogoutButton() {
    await this.page.locator("text=Log Out").click();
  }

  async verifyLoginSuccess() {
  await expect(
    this.page.getByRole("heading", { name: "Accounts Overview" })
  ).toBeVisible();
}

async verifyErrorMessage() {
  await expect(this.page.locator("body")).toContainText(
    /username and password|could not be verified|error|invalid/i
  );
}
  async verifyLoginFailure() {
    await expect(
      this.page.locator('input[value="Log In"]')
    ).toBeVisible();
  }

  async verifyLogoutSuccess() {
    await expect(
      this.page.locator('input[value="Log In"]')
    ).toBeVisible();
  }
}