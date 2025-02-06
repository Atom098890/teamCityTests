import {Spec} from "@src/api/spec/SpecificationsApi";
import {Page} from "@playwright/test";
import {TServerAuthSetting} from "@src/api/models/ServerAuthSetting";

export class ServerAuthRequest {
    private SERVER_AUTH_SETTING_URL: string = '/app/rest/server/authSettings';
    private spec: Spec;

    constructor(public readonly page: Page, spec: Spec) {
        this.spec = spec;
    }

    public async update(authSettings: TServerAuthSetting) {
        try {
            const csrfResponse = await this.page.request.get(`http://${this.spec}/authenticationTest.html?csrf`);
            const response = await this.page.request.put('http://' + this.spec + this.SERVER_AUTH_SETTING_URL, {
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                    "X-TC-CSRF-Token": await csrfResponse.text()
                },
                data: authSettings
            });
            response.ok();
        } catch (e) {
            throw new Error(`Error, ServerAuthRequest method Update => ${e.message}`);
        }
    }
}