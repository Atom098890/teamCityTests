import { test as base } from "@playwright/test";
import { Route } from "../api/requests/Route";
import { LoginPage } from "../ui/pages/LoginPage/LoginPage";
import { Spec } from "@src/api/spec/SpecificationsApi";
import { Endpoints } from "@src/api/enums/endpoints";
import { TUser } from "@src/api/models/User";
import { BaseApi } from "@src/api/BaseApi";
import { BrowserContext, Page } from "@playwright/test";

type PlaywrightFixture = {
    api: Route;
    login: (customGetUser: TUser) => Promise<void>;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({}, use) => {
        const apiPage = new Route();
        await use(apiPage);
    },
    login: async ({ page, api }, use) => {
        await use(async (customGetUser: TUser) => {
            await api.checked.create(Spec.superAuthSpec, Endpoints.USERS, customGetUser);
            const loginPage = new LoginPage(page);
            await loginPage.open();
            await loginPage.login(customGetUser);
        });
    }
});

let browserContext: BrowserContext;
let basePage: Page;
let baseApi: BaseApi;

test.beforeAll(async ({ browser }) => {
    browserContext = await browser.newContext();
    basePage = await browserContext.newPage();
    baseApi = new BaseApi(basePage);

    await baseApi.setUpAuthSettings();
});

test.afterAll(async () => {
    await baseApi.cleanUpAuthSettings();
    await browserContext.close();
});

export { expect } from "@playwright/test";
