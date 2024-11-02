import {BaseApiTest} from "../BaseApiTest";
import {APIRequestContext, APIResponse} from "@playwright/test";


export class ApiSpec {
    private baseApi: BaseApiTest;

    constructor(private readonly requestApi: APIRequestContext) {
        this.baseApi = new BaseApiTest(this.requestApi);
    }

    public async authRequest(endpoint: string, options?: any): Promise<APIResponse> {
        return  this.baseApi.request<any>(
            'get',
            `http://${process.env.USERNAME}:${process.env.PASSWORD}@0.0.0.0:8111/` + endpoint,
            {
                headers: {
                    Accept: "application/json"
                },
                ...options
            }
        );
    }

    public async unauthSpec() {}
}