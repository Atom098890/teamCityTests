import {RequestAPI} from "./RequestAPI";
import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";
import {ICrudInterface} from "./crudInterface.interface";

export class UncheckedBase extends RequestAPI implements ICrudInterface {
    readonly endpoint: string;

    constructor(requestApi: APIRequestContext, endpoint: string) {
        super(requestApi);
        this.endpoint = endpoint;
    }
    
    async create(model: any): Promise<APIResponse> {
        return this.request(Methods.POST, this.endpoint, model);
    }

    async read(id: string): Promise<APIResponse> {
        return this.request(Methods.GET, `${this.endpoint}id:${id}`);
    }

    async update(id: string, model: any): Promise<APIResponse> {
        return this.request(Methods.PUT, `${this.endpoint}id:${id}`, model);
    }

    async delete(id: string): Promise<APIResponse> {
        return this.request(Methods.DELETE, `${this.endpoint}id:${id}`);
    }
}