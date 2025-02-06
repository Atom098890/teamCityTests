import {expect, test} from "@src/fixtures/fixtures";
import {allure} from "allure-playwright";
import {TestData} from "@src/api/models/TestData";
import {Role} from "@src/api/models/Roles";
import {TestDataStorage} from "@src/api/models/TestDataStorage";
import {CreateProjectPage} from "../../ui/pages/admin/CreateProjectPage/CreateProjectPage";
import {GITHUB_URL} from "../../ui/pages/admin/CreateProjectPage/testUrls.constants";
import {Spec} from "@src/api/spec/SpecificationsApi";
import {Endpoints} from "@src/api/enums/endpoints";
import {ProjectPage} from "../../ui/pages/ProjectPage/ProjectPage";

test.describe('UI tests. Project', async () => {
    let createProjectPage: CreateProjectPage;
    let projectPage: ProjectPage;

    test.beforeEach(async ({page}) => {
        await allure.suite('Regression');
        createProjectPage = new CreateProjectPage(page);
        projectPage = new ProjectPage(page);
    });

    test.afterEach(async () => {
        await TestDataStorage.getStorage().deleteAllEntities();
    });

    test.only('User creates project', async ({login, api }) => {
        const data = TestData.generate(Role.ADMIN);
        await allure.logStep('Login');
        await login(data.getUser);

        await allure.logStep('Open project page');
        await createProjectPage.open('_Root');

        await allure.logStep('Fill project repository');
        await createProjectPage.createForm(GITHUB_URL);
        await expect(createProjectPage.connectionRepository).toContainText('The connection to the VCS repository has been verified');

        await allure.logStep('Fill project name and buildType name');
        await createProjectPage.setupProject(data.getProject.name, data.getBuildType.name);

        await allure.logStep('Project was created');
        const response = await api.checked.read(Spec.authSpec(data.getUser), Endpoints.PROJECTS, `name:${data.getProject.name}`);
        const {name: createdProjectName} = await response.json();

        await allure.logStep('Check project title');
        await projectPage.open(createdProjectName);
        await expect(projectPage.title).toContainText(data.getProject.name);
    });
});