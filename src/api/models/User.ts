import {fakerEN} from "@faker-js/faker";

export class User {
    private name: string;
    private username: string;
    private password: string;
    private email: string;

    constructor() {
        this.username = fakerEN.internet.username();
        this.name = fakerEN.internet.username();
        this.password = fakerEN.internet.password();
        this.email = fakerEN.internet.email();
    }

    get getUser(): object {
        return {
            username: this.username,
            name: this.name,
            password: this.password,
            email: this.email
        };
    }
}