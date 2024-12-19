import {Project} from "./Project";
import {User} from "./User";
import {BuildType} from "./BuildType";
import {fakerEN} from "@faker-js/faker";
import {Role, Roles} from "@src/api/models/Roles";
import {Steps} from "@src/api/models/Steps";

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
        this.project = new Project(
            'test' + fakerEN.number.int(),
            'projectTest' + fakerEN.internet.username()
        );
        this.user = new User(
            fakerEN.internet.username(),
            fakerEN.internet.username(),
            fakerEN.internet.password(),
            fakerEN.internet.email(),
            new Roles(Role.ADMIN)
        );
        this.buildType = new BuildType(
            this.project.id,
            'buildId' + fakerEN.number.int(),
            'templateId' + fakerEN.number.int(),
            'buildName' + fakerEN.internet.username(),
            new Steps()
        );
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