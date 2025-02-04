export type TProject = {
    parentProject: {
        locator: string ,
    },
    name: string,
    id: string,
    copyAllAssociatedSettings: boolean,
}

export class Project {
    readonly id: string;
    private name: string;
    private locator: string = "_Root";

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    get getProject(): TProject {
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