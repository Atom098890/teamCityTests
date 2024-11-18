import {APIResponse} from "@playwright/test";

export interface ICrudInterface {
    create(endpoint: string, model: any): Promise<APIResponse>;
    read(endpoint: string, id: string): Promise<APIResponse>;
    update(endpoint: string, id: string, model: any): Promise<APIResponse>;
    delete(endpoint: string, id: string): Promise<APIResponse>;
}