import {getPropertiesConfig} from "../../config/config";

export class Spec {
    static authSpec(user: any): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('HOST')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('HOST')}/httpAuth`
    }
}