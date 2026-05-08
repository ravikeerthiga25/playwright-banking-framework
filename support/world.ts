import { setWorldConstructor, World, setDefaultTimeout } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

setDefaultTimeout(30000);

export class CustomWorld extends World {
  page!: Page;
  loginPage!: LoginPage;
}

setWorldConstructor(CustomWorld);