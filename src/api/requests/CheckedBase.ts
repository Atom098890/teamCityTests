import {RequestAPI} from "./RequestAPI";
import {ICrudInterface} from "./crudInterface.interface";
import {APIRequestContext, APIResponse, expect} from "@playwright/test";
import {UncheckedBase} from "./UncheckedBase";

export class CheckedBase extends RequestAPI implements ICrudInterface {
    private uncheckedBase: UncheckedBase;

    constructor(protected readonly requestApi: APIRequestContext) {
        super(requestApi);
        this.uncheckedBase = new UncheckedBase(requestApi);
    }

    async create(endpoint: string, model: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.create(endpoint, model);
        expect(response.status()).toEqual(200);
        return response;
    }

    async delete(endpoint: string, id: string): Promise<APIResponse> {
        const response = await this.uncheckedBase.delete(endpoint, id);
        expect(response.status()).toEqual(200);
        return response;
    }

    async read(endpoint: string, id: string = ''): Promise<APIResponse> {
        const response = await this.uncheckedBase.read(endpoint, id);
        expect(response.status()).toEqual(200);
        return response;
    }

    async update(endpoint: string, id: string, model?: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.update(endpoint, id, model);
        expect(response.status()).toEqual(200);
        return response;
    }
}