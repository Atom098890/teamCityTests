import {BasePage} from "../BasePage";
import {Locator, Page} from "@playwright/test";

export class ProjectPage extends BasePage {
    readonly title: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.title = this.page.locator('[class="ProjectPageHeader__title--ih"]');
    }

    getPath(projectId: string): string {
        return '/project/' + projectId;
    }
}