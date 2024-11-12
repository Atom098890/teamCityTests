import {Project} from "./Project";
import {Steps} from "./Steps";

export class BuildType {
    private id: string;
    private name: string;
    private project: Project;
    private steps: Steps;
}