import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";
import {getPropertiesConfig} from "../../config/config";


export class RequestAPI {
    constructor(protected readonly requestApi: APIRequestContext) {
    }

    async request(method: Methods, endpoint: string, options?: any): Promise<APIResponse> {
        try {
            return this.requestApi[method](
                `http://${getPropertiesConfig('USERNAME')}:${getPropertiesConfig('PASSWORD')}@0.0.0.0:8111/` + endpoint,
                {
                    headers: {
                        Accept: "application/json"
                    },
                    ...options
                }
            );
        } catch (e) {
            throw new Error(`Error =>, ${e.message}`);
        }
    }
}