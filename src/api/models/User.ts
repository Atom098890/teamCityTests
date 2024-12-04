import {fakerEN} from "@faker-js/faker";
import {Role, Roles} from "./Roles";

export class User {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly roles: object;

    constructor() {
        this.username = fakerEN.internet.username();
        this.name = fakerEN.internet.username();
        this.password = fakerEN.internet.password();
        this.email = fakerEN.internet.email();
        this.roles = new Roles(Role.ADMIN).getRole;
    }

    get getUser(): object {
        return {
            username: this.username,
            name: this.name,
            password: this.password,
            email: this.email,
            roles: this.roles
        };
    }
}