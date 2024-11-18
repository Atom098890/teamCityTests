import { test as base } from '@playwright/test';
import {CheckedBase} from "../api/requests/CheckedBase";

type PlaywrightFixture = {
    api: CheckedBase;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({ request }, use) => {
        const apiPage = new CheckedBase(request);
        await use(apiPage);
    },
});

export { expect } from '@playwright/test';