import {Steps} from "./Steps";

export class BuildType {
    private id: string;
    private templateId: string;
    private name: string;
    private projectId: string;
    private steps: object;

    constructor(projectId: string, id: string, templateId: string, name: string, steps: Steps) {
        this.projectId = projectId;
        this.id = id;
        this.templateId = templateId;
        this.name = name;
        this.steps = steps.getSteps;
    }

    get getBuildType() {
        return {
            "id": this.id,
            "name": this.name,
            "project": {
                "id": this.projectId
            },
            "steps": this.steps
        }
    }
}