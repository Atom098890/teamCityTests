import {APIResponse, request} from "@playwright/test";
import {Methods} from "../enums/methods";
import {Spec} from "../spec/SpecificationsApi";


export class RequestAPI {
    protected async request(method: Methods, spec: Spec, endpoint: string, options: object = {}): Promise<APIResponse> {
        try {
            const req = await request.newContext ({ baseURL: `http:/${spec}/`})
            return req[method](
                 endpoint,
                {
                    headers: {
                        Accept: "application/json",
                        'Content-Type': "application/json"
                    },
                    data: options
                }
            );
        } catch (e) {
            throw new Error(`Error =>, ${e.message}`);
        }
    }
}