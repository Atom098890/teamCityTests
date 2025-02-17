import {BasePage} from "../pages/BasePage";
import {Locator, Page} from "@playwright/test";

export class FirstStartPage extends BasePage {
    private proceedButton: Locator;
    private dbTypeSelect: Locator;
    private acceptLicenseCheckbox: Locator;
    private submitButton: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.proceedButton = this.page.locator('#proceedButton');
        this.dbTypeSelect = this.page.locator('#dbType');
        this.acceptLicenseCheckbox = this.page.locator('#accept');
        this.submitButton = this.page.locator("input[type='submit']");
    }

    getPath(): string {
        return '';
    }

    public async setupStart() {
        await this.proceedButton.isVisible({timeout: 3000});
        await this.proceedButton.click();
        await this.proceedButton.waitFor({state: 'hidden'});

        await this.dbTypeSelect.isVisible({timeout: 3000});
        await this.proceedButton.click();
        await this.proceedButton.waitFor({state: 'hidden'});

        await this.acceptLicenseCheckbox.isVisible({timeout: 2000});
        await this.acceptLicenseCheckbox.scrollIntoViewIfNeeded();
        await this.acceptLicenseCheckbox.click();

        await this.submitButton.click();
    }
}