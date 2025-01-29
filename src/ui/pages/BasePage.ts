import {Page} from "@playwright/test";

export class BasePage {
    constructor(public readonly page: Page) {
    }

    async open(endpoint: string) {
        await this.page.goto(endpoint);
    }
}