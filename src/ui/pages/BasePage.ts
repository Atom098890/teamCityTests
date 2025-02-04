import {Page} from "@playwright/test";

export abstract class BasePage {
    protected constructor(public readonly page: Page) {
    }

    async open(path: string = '') {
        const p = this.getPath(path);
        await this.page.goto(p);
    }

    abstract getPath(path?: string): string;
}