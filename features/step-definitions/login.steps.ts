import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/LoginPage";
import { testData } from "../../utils/testData";
import { CustomWorld } from "../../support/world";

Given("I open the ParaBank website", async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.launchWebsite();
});

When("I enter valid username and password", async function (this: CustomWorld) {
  await this.loginPage.enterUsername(testData.validUsername);
  await this.loginPage.enterPassword(testData.validPassword);
});

When("I enter valid username and invalid password", async function (this: CustomWorld) {
  await this.loginPage.enterUsername(testData.validUsername);
  await this.loginPage.enterPassword(testData.invalidPassword);
});

When("I leave username empty and enter password", async function (this: CustomWorld) {
  await this.loginPage.enterPassword(testData.validPassword);
});

When("I enter username and leave password empty", async function (this: CustomWorld) {
  await this.loginPage.enterUsername(testData.validUsername);
});

When("I leave username and password empty", async function () {
  console.log("Username and Password Empty");
});

When("I click the login button", async function (this: CustomWorld) {
  await this.loginPage.clickLoginButton();
});

Then("I should login successfully", async function (this: CustomWorld) {
  await this.loginPage.verifyLoginSuccess();
});

Then("Error message should display", async function (this: CustomWorld) {
  await this.loginPage.verifyErrorMessage();
});

Then("Login should fail", async function (this: CustomWorld) {
  await this.loginPage.verifyLoginFailure();
});

When("I login with valid credentials", async function (this: CustomWorld) {
  await this.loginPage.enterUsername(testData.validUsername);
  await this.loginPage.enterPassword(testData.validPassword);
  await this.loginPage.clickLoginButton();
});

When("I click logout button", async function (this: CustomWorld) {
  await this.loginPage.clickLogoutButton();
});

Then("I should logout successfully", async function (this: CustomWorld) {
  await this.loginPage.verifyLogoutSuccess();
});