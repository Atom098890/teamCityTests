import {expect, test} from "@src/fixtures/api.fixture";
import {allure} from "allure-playwright";
import {TestData} from "@src/api/models/TestData";
import {Role} from "@src/api/models/Roles";
import {Spec} from "@src/api/spec/SpecificationsApi";
import {Endpoints} from "@src/api/enums/endpoints";
import {LoginPage} from "../../ui/pages/LoginPage/LoginPage";
import {TestDataStorage} from "@src/api/models/TestDataStorage";

test.describe('UI tests', async () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        await allure.suite('Regression');
        loginPage = new LoginPage(page);
    });

    test.afterEach(async () => {
        await TestDataStorage.getStorage().deleteEntities();
    });

   test.only('User creates project', async ({api, page}) => {
       const data = TestData.generate(Role.ADMIN);

       await allure.logStep('Create user');
       await api.checked.create(Spec.superAuthSpec, Endpoints.USERS, data.getUser);

       await allure.logStep('login');
       await loginPage.open();
       await loginPage.login(data.getUser);
       await page.pause();
   });
});