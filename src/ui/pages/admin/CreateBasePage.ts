import {BasePage} from "../BasePage";
import {Locator, Page} from "@playwright/test";

export abstract class CreateBasePage extends BasePage {
    protected urlInput: Locator;
    protected submit: Locator;

    protected constructor(public readonly page: Page) {
        super(page);
        this.urlInput = this.page.locator('[name="url"]');
        this.submit = this.page.locator('[value="Proceed"]');
    }

    protected createEndpoint(projectId: string, showMode: string): string {
        return `/admin/createObjectMenu.html?projectId=${projectId}&showMode=${showMode}`; //createProjectMenu
    }

    protected async baseCreateForm(urlGitHub: string) {
        await this.urlInput.fill(urlGitHub);
        await this.submit.click();
    }
}