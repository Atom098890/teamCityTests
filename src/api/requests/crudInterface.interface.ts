import {APIResponse} from "@playwright/test";

export interface ICrudInterface {
    create(spec: string, endpoint: string, model: any): Promise<APIResponse>;
    read(spec: string, endpoint: string, id: string): Promise<APIResponse>;
    update(spec: string, endpoint: string, id: string, model: any): Promise<APIResponse>;
    delete(spec: string, endpoint: string, id: string): Promise<APIResponse>;
}