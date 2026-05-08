import { When, Then } from "@cucumber/cucumber";
import { BillPayPage } from "../../pages/BillPayPage";
import { CustomWorld } from "../../support/world";

let billPayPage: BillPayPage;

When("I click bill pay link", async function (this: CustomWorld) {
  billPayPage = new BillPayPage(this.page);
  await billPayPage.clickBillPayLink();
});

When("I enter valid bill payment details", async function () {
  await billPayPage.enterValidBillPaymentDetails();
});

When("I leave payee name empty", async function () {
  await billPayPage.leavePayeeNameEmpty();
});

When("I enter invalid bill account number", async function () {
  await billPayPage.enterInvalidAccountNumber();
});

When("I leave bill amount empty", async function () {
  await billPayPage.leaveAmountEmpty();
});

When("I click send payment button", async function () {
  await billPayPage.clickSendPaymentButton();
});

Then("bill payment should be successful", async function () {
  await billPayPage.verifyBillPaymentSuccess();
});

Then("bill pay validation message should display", async function () {
  await billPayPage.verifyValidationMessage();
});

Then("bill pay error message should display", async function () {
  await billPayPage.verifyErrorMessage();
});