import {getPropertiesConfig} from "../../config/config";
import {TUser} from "@src/api/models/User";

export class Spec {
    static authSpec(user: TUser): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('HOST')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('HOST')}/httpAuth`
    }
}