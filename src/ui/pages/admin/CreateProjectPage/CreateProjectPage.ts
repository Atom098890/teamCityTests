import {Locator, Page} from "@playwright/test";
import {CreateBasePage} from "../CreateBasePage";

export class CreateProjectPage extends CreateBasePage {
    private SHOW_MODE: string = 'createProjectMenu';
    private projectNameInput: Locator;
    private buildNameInput: Locator;
    readonly connectionRepository: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.projectNameInput = this.page.locator('[name="projectName"]');
        this.buildNameInput = this.page.locator('[name="buildTypeName"]');
        this.connectionRepository = this.page.locator('[class="connectionSuccessful"]');
    }

    getPath(projectId: string): string {
        return this.createEndpoint(projectId, this.SHOW_MODE);
    }

    public async createForm(urlGitHub: string) {
        await this.baseCreateForm(urlGitHub)
    }

    public async setupProject(projectName: string, buildName: string) {
        await this.projectNameInput.fill(projectName);
        await this.buildNameInput.fill(buildName);
        await this.submit.click();
    }
}