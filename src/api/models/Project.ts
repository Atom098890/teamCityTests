import {fakerEN} from "@faker-js/faker";

export class Project {
    private id: string;
    private name: string;
    private locator: string = "_Root";

    constructor() {
        this.id = `test${fakerEN.number.int()}`;
        this.name = 'projectTest' + fakerEN.internet.username();
    }

    get project(): object {
        return {
            parentProject: {
                locator: this.locator
            },
            name: this.name,
            id: this.id,
            copyAllAssociatedSettings: true
        }
    }
}