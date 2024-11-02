import { test as base } from '@playwright/test';
import {ApiSpec} from "../api/spec/apiSpec";

type PlaywrightFixture = {
    api: ApiSpec;
};

export const test = base.extend<PlaywrightFixture>({
    api: async ({ request }, use) => {
        const apiPage = new ApiSpec(request);
        await use(apiPage);
    },
});

export { expect } from '@playwright/test';