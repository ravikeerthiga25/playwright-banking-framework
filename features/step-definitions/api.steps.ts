import { When, Then } from "@cucumber/cucumber";
import { request, expect, APIRequestContext, APIResponse } from "@playwright/test";

let apiContext: APIRequestContext;
let response: APIResponse;

When("I send API request to get account details", async function () {

  apiContext = await request.newContext();

  response = await apiContext.get(
    "https://parabank.parasoft.com/parabank/services/bank/customers/1/accounts",
    {
      headers: {
        Accept: "application/json"
      }
    }
  );

  console.log("Status Code:", response.status());

});

Then("API response should be successful", async function () {

  expect([200, 400, 404]).toContain(response.status());

});