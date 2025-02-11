import {BasePage} from "../pages/BasePage";
import {Locator, Page} from "@playwright/test";

export class FirstStartPage extends BasePage {
    private proceedButton: Locator;
    private dbTypeSelect: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.proceedButton = this.page.locator('#proceedButton');
        this.dbTypeSelect = this.page.locator('#dbType');
    }

    getPath(path?: string): string {
        return '';
    }

    public async setupStart() {
        await this.proceedButton.isVisible({timeout: 3000});
        await this.proceedButton.click();
        await this.proceedButton.waitFor({state: 'hidden'});

        await this.dbTypeSelect.isVisible({timeout: 3000});
        await this.proceedButton.click();
        await this.proceedButton.waitFor({state: 'hidden'});
    }
}