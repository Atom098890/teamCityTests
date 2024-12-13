import {Project} from "./Project";
import {User} from "./User";
import {BuildType} from "./BuildType";

interface GeneratedData {
    getUser: object;
    getProject: object;
    getBuildType: object;
}

class TestData {
    private project: Project;
    private user: User;
    private buildType: BuildType;

    constructor() {
        this.project = new Project();
        this.user = new User();
        this.buildType = new BuildType(this.project.id);
    }

    generateData(): GeneratedData {
        return {
            getUser: this.user.getUser,
            getProject: this.project.getProject,
            getBuildType: this.buildType.getBuildType
        }
    }
}

export const testData = new TestData();