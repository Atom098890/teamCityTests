export class Project {
    readonly id: string;
    private name: string;
    private locator: string = "_Root";

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    get getProject(): object {
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