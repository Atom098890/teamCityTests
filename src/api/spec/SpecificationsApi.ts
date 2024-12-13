import {getPropertiesConfig} from "../../config/config";

export class Spec {
    static authSpec(user): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('host')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('host')}/httpAuth`
    }
}