import { test as base } from '@playwright/test';
import {CheckedBase} from "../api/requests/CheckedBase";

type PlaywrightFixture = {
    api: CheckedBase;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({}, use) => {
        const apiPage = new CheckedBase();
        await use(apiPage);
    },
});

export { expect } from '@playwright/test';