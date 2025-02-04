import { test as base } from '@playwright/test';
import {Route} from "../api/requests/Route";
import {LoginPage} from "../ui/pages/LoginPage/LoginPage";
import {Spec} from "@src/api/spec/SpecificationsApi";
import {Endpoints} from "@src/api/enums/endpoints";
import {TUser} from "@src/api/models/User";

type PlaywrightFixture = {
    api: Route;
    login: (customGetUser: TUser) => Promise<void>;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({}, use) => {
        const apiPage = new Route();
        await use(apiPage);
    },
    login: async ({page, api}, use) => {
        await use( async (customGetUser: TUser) => {
            await api.checked.create(Spec.superAuthSpec, Endpoints.USERS, customGetUser);
            const loginPage = new LoginPage(page);
            await loginPage.open();
            await loginPage.login(customGetUser);
        });
    }
});

export { expect } from '@playwright/test';