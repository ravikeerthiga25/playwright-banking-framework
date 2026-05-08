import { Page, expect } from "@playwright/test";

export class UIPage {

  constructor(private page: Page) {}

  async verifyLogo() {

    await expect(
      this.page.locator(".logo")
    ).toBeVisible();

  }

async verifyNavigationLinks() {

  await expect(
    this.page.locator("#headerPanel").getByRole("link", { name: "About Us" })
  ).toBeVisible();

  await expect(
    this.page.locator("#headerPanel").getByRole("link", { name: "Services" })
  ).toBeVisible();

  await expect(
    this.page.locator("#headerPanel").getByRole("link", { name: "Products" })
  ).toBeVisible();

  await expect(
    this.page.locator("#headerPanel").getByRole("link", { name: "Locations" })
  ).toBeVisible();

  }

  async verifyPageTitle() {

    await expect(this.page).toHaveTitle(/ParaBank/i);

  }

  async verifyResponsiveUI() {

    await expect(
      this.page.locator("#topPanel")
    ).toBeVisible();

    await expect(
      this.page.locator("#leftPanel")
    ).toBeVisible();

  }
}