import {expect, test} from "@src/fixtures/api.fixture";
import {allure} from "allure-playwright";

test.describe('UI tests', async () => {
    test.beforeEach(async () => {
        await allure.suite('Regression');
    });

   test('User creates project', async () => {

   });
});