import {expect, test} from "@src/fixtures/api.fixture";
import {allure} from "allure-playwright";
import {Endpoints} from "@src/api/enums/endpoints";
import {Spec} from "@src/api/spec/SpecificationsApi";
import {testData} from "@src/api/models/TestData";
import {TestDataStorage} from "@src/api/models/TestDataStorage";

test.describe('Api test', async () => {
    test.beforeEach(async () => {
        await allure.suite('Regression');
    });

    test.afterEach(async () => {
       TestDataStorage.getStorage().deleteEntities();
    });

   test('Build configuration', async ({api, request}) => {
        const data = testData.generateData();
        await allure.label('Positive', 'CRUD');

        await allure.logStep('Create user');
        await api.checked.create(Spec.superAuthSpec, Endpoints.USERS, data.getUser);

        await allure.logStep('Create project');
        await api.checked.create(Spec.authSpec(data.getUser), Endpoints.PROJECTS, data.getProject);

        await allure.logStep('Create buildType');
        const resBuildType = await api.checked.create(Spec.authSpec(data.getUser), Endpoints.BUILD_TYPES, data.getBuildType);
        const { id: buildTypeId, name: buildName } = await resBuildType.json();

        const resCreatedBuildType = await api.checked.read(Spec.authSpec(data.getUser), Endpoints.BUILD_TYPES, `id:${buildTypeId}`);
        const { name: createdBuildName } = await resCreatedBuildType.json();

        await allure.logStep('Check buildType => created');
        expect(buildName).toContain(createdBuildName);
   });

    test('Build configuration with the same Id', async ({api}) => {
        const data = testData.generateData();
        await allure.label('Negative', 'CRUD');

        await allure.logStep('Create user');
        await api.checked.create(Spec.superAuthSpec, Endpoints.USERS, data.getUser);

        await allure.logStep('Create project');
        await api.checked.create(Spec.authSpec(data.getUser), Endpoints.PROJECTS, data.getProject);

        await allure.logStep('Create buildTypeOne');
        await api.checked.create(Spec.authSpec(data.getUser), Endpoints.BUILD_TYPES, data.getBuildType);

        await allure.logStep('Try to create buildTypeTwo with id as buildTypeOne');
        const response = await api.unchecked.create(Spec.authSpec(data.getUser), Endpoints.BUILD_TYPES, data.getBuildType);

        await allure.logStep('Check buildType => Not created')
        expect(response.status()).toEqual(400);
        const text = await response.text();
        expect(text.includes('is already used by another configuration or template')).toBeTruthy();
    });

    test('Project admin can create buildType', async () => {
        await allure.label('Positive', 'Roles');

        await allure.logStep('Create user');
        await allure.logStep('Create project');
        await allure.logStep('Grant user PROJECT_ADMIN role in project')
        await allure.logStep('Create buildType');
        await allure.logStep('Check buildType => created');
    });

    test('Project admin can create buildType for another user', async () => {
        await allure.label('Negative ', 'Roles');

        await allure.logStep('Create userOne');
        await allure.logStep('Create projectOne');
        await allure.logStep('Grant userOne PROJECT_ADMIN role in projectOne')


        await allure.logStep('Create userTwo');
        await allure.logStep('Create projectTwo');
        await allure.logStep('Grant userTwo PROJECT_ADMIN role in projectTwo')

        await allure.logStep('Create buildType for projectOne by userTwo');
        await allure.logStep('Check buildType => is impossible. Forbidden code');
    });
});
