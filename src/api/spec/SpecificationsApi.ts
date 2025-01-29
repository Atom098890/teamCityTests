import {getPropertiesConfig} from "../../config/config";

export class Spec {
    static authSpec(user: any): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('BASE_URL')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('BASE_URL')}/httpAuth`
    }
}