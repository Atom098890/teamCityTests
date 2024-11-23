import {getPropertiesConfig} from "../../config/config";

export class Spec {
    static authSpec(): string {
        return `${getPropertiesConfig('USERNAME')}:${getPropertiesConfig('PASSWORD')}@${getPropertiesConfig('host')}`;
    }

    static superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('host')}/httpAuth`
    }
}