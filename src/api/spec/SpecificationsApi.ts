import {getPropertiesConfig} from "../../config/config";
import {User} from "../models/User";

export class Spec {
    // static get authSpec(): string {
    //     return `${getPropertiesConfig('USERNAME')}:${getPropertiesConfig('PASSWORD')}@${getPropertiesConfig('host')}`;
    // }

    static authSpec(user: User): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('host')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('host')}/httpAuth`
    }
}