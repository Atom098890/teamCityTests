import {APIRequestContext, APIResponse} from "@playwright/test";
import {BaseTest} from "./BaseTest";

export class BaseApiTest extends BaseTest {
    constructor(protected readonly requestApi: APIRequestContext) {
        super();
    }

    public async request<T>(method: 'get' | 'post' | 'put' | 'delete', url: string, options?: any): Promise<APIResponse> {
        return this.requestApi[method](url, options);
    }
}