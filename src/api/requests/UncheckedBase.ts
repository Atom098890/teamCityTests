import {RequestAPI} from "./RequestAPI";
import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";
import {ICrudInterface} from "./crudInterface.interface";

export class UncheckedBase extends RequestAPI implements ICrudInterface {
    constructor(requestApi: APIRequestContext) {
        super(requestApi);
    }
    
    async create(endpoint: string, model?: any): Promise<APIResponse> {
        return this.request(Methods.POST, endpoint, model);
    }

    async read(endpoint: string, id: string): Promise<APIResponse> {
        return this.request(Methods.GET, `${endpoint}${id}`);
    }

    async update(endpoint: string, id: string, model?: any): Promise<APIResponse> {
        return this.request(Methods.PUT, `${endpoint}${id}`, model);
    }

    async delete(endpoint: string, id: string): Promise<APIResponse> {
        return this.request(Methods.DELETE, `${endpoint}${id}`);
    }
}