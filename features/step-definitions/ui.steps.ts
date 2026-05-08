import { Then } from "@cucumber/cucumber";
import { UIPage } from "../../pages/UIPage";
import { CustomWorld } from "../../support/world";

Then("application logo should display", async function (this: CustomWorld) {
  const uiPage = new UIPage(this.page);
  await uiPage.verifyLogo();
});

Then("all navigation links should display", async function (this: CustomWorld) {
  const uiPage = new UIPage(this.page);
  await uiPage.verifyNavigationLinks();
});

Then("correct page title should display", async function (this: CustomWorld) {
  const uiPage = new UIPage(this.page);
  await uiPage.verifyPageTitle();
});

Then("UI should align properly", async function (this: CustomWorld) {
  const uiPage = new UIPage(this.page);
  await uiPage.verifyResponsiveUI();
});