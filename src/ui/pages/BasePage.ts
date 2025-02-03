import {Page} from "@playwright/test";

export abstract class BasePage {
    protected constructor(public readonly page: Page) {
    }

    async open(endpoint: string = '') {
        const path = this.getPath(endpoint);
        await this.page.goto(`${path}`);
    }

    abstract getPath(path?: string): string;
}