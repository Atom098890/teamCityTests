import {Project, TProject} from "./Project";
import {TUser, User} from "./User";
import {BuildType, TBuildType} from "./BuildType";
import {fakerEN} from "@faker-js/faker";
import {Role, Roles} from "@src/api/models/Roles";
import {Steps} from "@src/api/models/Steps";

interface GeneratedData {
    getUser: TUser;
    getProject: TProject;
    getBuildType: TBuildType;
}

export class TestData {
    static generate(role: Role): GeneratedData {
        const project = new Project(
            'test' + fakerEN.number.int(),
            'projectTest' + fakerEN.number.int()
        );
        const user = new User(
            fakerEN.internet.username(),
            fakerEN.internet.username(),
            fakerEN.internet.password(),
            fakerEN.internet.email(),
            new Roles(role)
        );
        const buildType = new BuildType(
            project.id,
            'buildId' + fakerEN.number.int(),
            'templateId' + fakerEN.number.int(),
            'buildName' + fakerEN.number.int(),
            new Steps()
        );

        return {
            getUser: user.getUser,
            getProject: project.getProject,
            getBuildType: buildType.getBuildType
        };
    }
}
