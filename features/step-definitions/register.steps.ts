import { When, Then } from "@cucumber/cucumber";
import { RegisterPage } from "../../pages/RegisterPage";
import { CustomWorld } from "../../support/world";

let registerPage: RegisterPage;

When("I click register link", async function (this: CustomWorld) {
  registerPage = new RegisterPage(this.page);
  await registerPage.clickRegisterLink();
});

When("I fill all valid registration details", async function () {
  await registerPage.fillRegistrationDetails();
});

When("I click register button", async function () {
  await registerPage.clickRegisterButton();
});

Then("account should be created successfully", async function () {
  await registerPage.verifyAccountCreated();
});