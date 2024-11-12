import { test as base } from '@playwright/test';
import {RequestAPI} from "../api/requests/RequestAPI";

type PlaywrightFixture = {
    api: RequestAPI;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({ request }, use) => {
        const apiPage = new RequestAPI(request);
        await use(apiPage);
    },
});

export { expect } from '@playwright/test';