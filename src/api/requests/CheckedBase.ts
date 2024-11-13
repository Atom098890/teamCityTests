import {RequestAPI} from "./RequestAPI";
import {ICrudInterface} from "./crudInterface.interface";
import {APIRequestContext, APIResponse, expect} from "@playwright/test";
import {UncheckedBase} from "./UncheckedBase";

export class CheckedBase<T> extends RequestAPI implements ICrudInterface {
    private uncheckedBase: UncheckedBase;

    constructor(requestApi: APIRequestContext, endpoint: string) {
        super(requestApi);
        this.uncheckedBase = new UncheckedBase(requestApi, endpoint);
    }

    async create<T>(model: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.create(model);
        expect(response.status()).toEqual(200);
        return response.json();
    }

    async delete<T>(id: string): Promise<APIResponse> {
        const response = await this.uncheckedBase.delete(id);
        expect(response.status()).toEqual(200);
        return response.json();
    }

    async read<T>(id: string): Promise<APIResponse> {
        const response = await this.uncheckedBase.read(id);
        expect(response.status()).toEqual(200);
        return response.json();
    }

    async update<T>(id: string, model: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.update(id, model);
        expect(response.status()).toEqual(200);
        return response.json();
    }
}