import { test as base } from '@playwright/test';
import {Route} from "../api/requests/Route";

type PlaywrightFixture = {
    api: Route;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({}, use) => {
        const apiPage = new Route();

        await use(apiPage);
    },
});

export { expect } from '@playwright/test';