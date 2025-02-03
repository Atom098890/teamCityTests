import {Roles} from "./Roles";

export type TUser = {
    username: string,
    name: string,
    password: string,
    email: string,
    roles: object,
}

export class User {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly roles: object;

    constructor(username: string, name: string, password: string, email: string, roles: Roles) {
        this.username = username;
        this.name = name;
        this.password = password;
        this.email = email;
        this.roles = roles.getRole;
    }

    get getUser(): TUser {
        return {
            username: this.username,
            name: this.name,
            password: this.password,
            email: this.email,
            roles: this.roles
        };
    }
}