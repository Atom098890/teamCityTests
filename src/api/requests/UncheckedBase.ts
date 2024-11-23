import {RequestAPI} from "./RequestAPI";
import {APIRequestContext, APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";
import {ICrudInterface} from "./crudInterface.interface";
import {Spec} from "../spec/SpecificationsApi";

export class UncheckedBase extends RequestAPI implements ICrudInterface {
    constructor(requestApi: APIRequestContext) {
        super(requestApi);
    }
    
    async create(spec: Spec, endpoint: string, options?: any): Promise<APIResponse> {
        return this.request(Methods.POST, spec, endpoint, options);
    }

    async read(spec: Spec, endpoint: string, id: string): Promise<APIResponse> {
        return this.request(Methods.GET, spec, `${endpoint}${id}`);
    }

    async update(spec: Spec, endpoint: string, id: string, options?: any): Promise<APIResponse> {
        return this.request(Methods.PUT, spec, `${endpoint}${id}`, options);
    }

    async delete(spec: Spec, endpoint: string, id: string): Promise<APIResponse> {
        return this.request(Methods.DELETE, spec, `${endpoint}${id}`);
    }
}