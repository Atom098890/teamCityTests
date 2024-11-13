import { test as base } from '@playwright/test';
import {RequestAPI} from "../api/requests/RequestAPI";
import {CheckedBase} from "../api/requests/CheckedBase";

type PlaywrightFixture = {
    api: RequestAPI;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({ request }, use) => {
        const apiPage = new RequestAPI(request);
        //const checkedBase = new CheckedBase(request);
        await use(apiPage);
    },
});

export { expect } from '@playwright/test';