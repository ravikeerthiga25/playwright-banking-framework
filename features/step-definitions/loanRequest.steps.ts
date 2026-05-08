import { When, Then } from "@cucumber/cucumber";
import { LoanRequestPage } from "../../pages/LoanRequestPage";
import { CustomWorld } from "../../support/world";

let loanRequestPage: LoanRequestPage;

When("I click request loan link", async function (this: CustomWorld) {

  loanRequestPage = new LoanRequestPage(this.page);

  await loanRequestPage.clickRequestLoanLink();

});

When("I enter valid loan amount", async function () {

  await loanRequestPage.enterLoanAmount("1000");

  await loanRequestPage.enterDownPayment("100");

});

When("I leave loan amount empty", async function () {

  await loanRequestPage.enterLoanAmount("");

  await loanRequestPage.enterDownPayment("100");

});

When("I enter negative loan amount", async function () {

  await loanRequestPage.enterLoanAmount("-500");

  await loanRequestPage.enterDownPayment("100");

});

When("I enter huge loan amount", async function () {

  await loanRequestPage.enterLoanAmount("999999999");

  await loanRequestPage.enterDownPayment("100");

});

When("I click apply loan button", async function () {

  await loanRequestPage.clickApplyButton();

});

Then("loan request should be successful", async function () {

  await loanRequestPage.verifyLoanSuccess();

});

Then("loan validation message should display", async function () {

  await loanRequestPage.verifyValidationMessage();

});

Then("loan error message should display", async function () {

  await loanRequestPage.verifyErrorMessage();

});

Then("proper loan validation should display", async function () {

  await loanRequestPage.verifyHugeLoanValidation();

});