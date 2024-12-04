import {fakerEN} from "@faker-js/faker";
import {Steps} from "./Steps";

export class BuildType {
    private id: string;
    private templateId: string;
    private name: string;
    private projectId: string;
    private steps: object;

    constructor(projectId: string) {
        this.projectId = projectId;
        this.id = 'buildId' + fakerEN.number.int();
        this.templateId = 'templateId' + fakerEN.number.int();
        this.name = 'buildName' + fakerEN.internet.username();
        this.steps = new Steps().getSteps;
    }

    get getBuildType() {
        return {
            "id": this.id,
            "name": "Print hello world",
            "project": {
                "id": this.projectId
            },
            "steps": this.steps
        }
    }
}