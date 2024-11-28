import {expect, test} from "@src/fixtures/api.fixture";
import {allure} from "allure-playwright";
import {Endpoints} from "../../api/enums/endpoints";
import {Spec} from "../../api/spec/SpecificationsApi";
import {User} from "../../api/models/User";
import {Project} from "../../api/models/Project";
import {Role, Roles} from "../../api/models/Roles";

test.describe('Api test', async () => {
   test('ShowProject', async ({api}) => {
       await allure.suite('Regression');
       await allure.label('Positive', 'CRUD');

       const response = await api.read(Spec.superAuthSpec, Endpoints.PROJECTS);
       expect(response.status()).toEqual(200);
   });

   test.only('Build configuration', async ({api, request}) => {
        await allure.suite('Regression');
        await allure.label('Positive', 'CRUD');

        await allure.logStep('Create user');
        const user = new User()
        const res = await api.create(Spec.superAuthSpec, Endpoints.USERS, user.user);

        await allure.logStep('Create project');
        const response = await api.create(Spec.authSpec(user), Endpoints.PROJECTS, new Project().project);

        await allure.logStep('Create buildType');
        await allure.logStep('Check buildType => created');
   });

    test('Build configuration with the same ID', async () => {
        await allure.suite('Regression');
        await allure.label('Negative', 'CRUD');


        await allure.logStep('Create user');
        await allure.logStep('Create project');
        await allure.logStep('Create buildTypeOne');
        await allure.logStep('Try to create buildTypeTwo with id as buildTypeOne');
        await allure.logStep('Check buildType => Not created')
    });

    test('Project admin can create buildType', async () => {
        await allure.suite('Regression');
        await allure.label('Positive', 'Roles');

        await allure.logStep('Create user');
        await allure.logStep('Create project');
        await allure.logStep('Grant user PROJECT_ADMIN role in project')
        await allure.logStep('Create buildType');
        await allure.logStep('Check buildType => created');
    });

    test('Project admin can create buildType for another user', async () => {
        await allure.suite('Regression');
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
