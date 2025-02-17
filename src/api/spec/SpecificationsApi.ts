import {getPropertiesConfig} from "../../config/config";
import {TUser} from "@src/api/models/User";

export class Spec {
    static authSpec(user: TUser): string {
        return `${user.username}:${user.password}@${getPropertiesConfig('BASE_URL')}`;
    }

    static get superAuthSpec(): string {
        return `:${getPropertiesConfig('TOKEN')}@${getPropertiesConfig('BASE_URL')}/httpAuth`;
    }
}