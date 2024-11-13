import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";

export class RequestAPI {
    constructor(private readonly requestApi: APIRequestContext) {
    }

    async request<T>(method: Methods, endpoint: string, options?: any): Promise<APIResponse> {
        return this.requestApi[method](
            `http://${process.env.USERNAME}:${process.env.PASSWORD}@0.0.0.0:8111/` + endpoint,
            {
                headers: {
                    Accept: "application/json"
                },
                ...options
            }
        );
    }
}