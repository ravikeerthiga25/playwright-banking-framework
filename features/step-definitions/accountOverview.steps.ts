import { When, Then } from "@cucumber/cucumber";
import { AccountOverviewPage } from "../../pages/AccountOverviewPage";
import { CustomWorld } from "../../support/world";

let accountOverviewPage: AccountOverviewPage;

When("I click accounts overview link", async function (this: CustomWorld) {
  accountOverviewPage = new AccountOverviewPage(this.page);
  await accountOverviewPage.clickAccountsOverviewLink();
});

Then("account details should display", async function () {
  await accountOverviewPage.verifyAccountDetails();
});

Then("account balance should display correctly", async function () {
  await accountOverviewPage.verifyBalance();
});

When("I click account number", async function () {
  await accountOverviewPage.clickAccountNumber();
});

Then("transaction history should display", async function () {
  await accountOverviewPage.verifyTransactionHistory();
});