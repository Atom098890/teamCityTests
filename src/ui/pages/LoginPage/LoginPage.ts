import {BasePage} from "../BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {TUser} from "@src/api/models/User";

export class LoginPage extends BasePage {
    private usernameInput: Locator;
    private userPasswordInput: Locator;
    private submitLogin: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.usernameInput = this.page.locator('[id="username"]');
        this.userPasswordInput = this.page.locator('[id="password"]');
        this.submitLogin = this.page.locator('[name="submitLogin"]')
    }

    getPath(): string {
        return '/login.html';
    }

    public async login(user: TUser) {
        await this.usernameInput.fill(user.username);
        await this.userPasswordInput.fill(user.password);

        await this.submitLogin.click();
        await this.usernameInput.waitFor( { state: 'hidden' })
    }
}