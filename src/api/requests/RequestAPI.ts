import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";
import {Spec} from "../spec/SpecificationsApi";


export class RequestAPI {
    constructor(protected readonly requestApi: APIRequestContext) {
    }

    async request(method: Methods, spec: Spec, endpoint: string, options?: any): Promise<APIResponse> {
        try {
            return this.requestApi[method](
                `http:/${spec}/` + endpoint,
                {
                    headers: {
                        Accept: "application/json",
                        'Content-Type': "application/json"
                    },
                    ...options
                }
            );
        } catch (e) {
            throw new Error(`Error =>, ${e.message}`);
        }
    }
}