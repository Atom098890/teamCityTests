import {ServerAuthRequest} from "@src/api/requests/ServerAuthRequest";
import {Page} from "@playwright/test";
import {Spec} from "@src/api/spec/SpecificationsApi";
import {ServerAuthSetting} from "@src/api/models/ServerAuthSetting";

export class BaseApi {
    private serverAuthReq: ServerAuthRequest;

    constructor(public readonly page: Page) {
        this.serverAuthReq = new ServerAuthRequest(this.page, Spec.superAuthSpec);
    }

    async setUpAuthSettings() {
        await this.serverAuthReq.update(new ServerAuthSetting(true).settings);
    }

    async cleanUpAuthSettings() {
        await this.serverAuthReq.update(new ServerAuthSetting(false).settings);
    }
}