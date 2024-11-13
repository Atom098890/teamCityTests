import {APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";

export interface ICrudInterface {
    //request<T>(method: Methods, endpoint: string, options?: any): Promise<APIResponse>;
    create(model: any): Promise<APIResponse>;
    read(id: string): Promise<APIResponse>;
    update(id: string, model: any): Promise<APIResponse>;
    delete(id: string): Promise<APIResponse>;
}