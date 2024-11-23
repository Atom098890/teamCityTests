import {RequestAPI} from "./RequestAPI";
import {ICrudInterface} from "./crudInterface.interface";
import {APIRequestContext, APIResponse, expect} from "@playwright/test";
import {UncheckedBase} from "./UncheckedBase";
import {Spec} from "../spec/SpecificationsApi";

export class CheckedBase extends RequestAPI implements ICrudInterface {
    private uncheckedBase: UncheckedBase;

    constructor(protected readonly requestApi: APIRequestContext) {
        super(requestApi);
        this.uncheckedBase = new UncheckedBase(requestApi);
    }

    async create(spec: Spec, endpoint: string, options?: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.create(spec, endpoint, options);
        expect(response.status()).toEqual(200);
        return response;
    }

    async delete(spec: Spec, endpoint: string, id: string): Promise<APIResponse> {
        const response = await this.uncheckedBase.delete(spec, endpoint, id);
        expect(response.status()).toEqual(200);
        return response;
    }

    async read(spec: Spec, endpoint: string, id: string = ''): Promise<APIResponse> {
        const response = await this.uncheckedBase.read(spec, endpoint, id);
        expect(response.status()).toEqual(200);
        return response;
    }

    async update(spec: Spec, endpoint: string, id: string, options?: any): Promise<APIResponse> {
        const response = await this.uncheckedBase.update(spec, endpoint, id, options);
        expect(response.status()).toEqual(200);
        return response;
    }
}