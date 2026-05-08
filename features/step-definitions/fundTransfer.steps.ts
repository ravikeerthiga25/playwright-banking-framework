import { When, Then } from "@cucumber/cucumber";
import { FundTransferPage } from "../../pages/FundTransferPage";
import { CustomWorld } from "../../support/world";

let fundTransferPage: FundTransferPage;

When("I click transfer funds link", async function (this: CustomWorld) {
  fundTransferPage = new FundTransferPage(this.page);
  await fundTransferPage.clickTransferFundsLink();
});

When("I enter valid transfer amount", async function () {
  await fundTransferPage.enterAmount("100");
});

When("I enter zero transfer amount", async function () {
  await fundTransferPage.enterAmount("0");
});

When("I enter negative transfer amount", async function () {
  await fundTransferPage.enterAmount("-100");
});

When("I enter huge transfer amount", async function () {
  await fundTransferPage.enterAmount("999999999");
});

When("I click transfer button", async function () {
  await fundTransferPage.clickTransferButton();
});

Then("fund transfer should be successful", async function () {
  await fundTransferPage.verifyTransferSuccess();
});

Then("transfer validation message should display", async function () {
  await fundTransferPage.verifyValidationMessage();
});

Then("transfer error message should display", async function () {
  await fundTransferPage.verifyErrorMessage();
});

Then("insufficient balance message should display", async function () {
  await fundTransferPage.verifyInsufficientBalanceMessage();
});