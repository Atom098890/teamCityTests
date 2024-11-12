import {APIResponse} from "@playwright/test";
import {Methods} from "../enums/methods";

export interface ICrudInterface {
    request<T>(method: Methods, endpoint: string, options?: any): Promise<APIResponse>;
}