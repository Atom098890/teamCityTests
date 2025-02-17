import {test} from "@playwright/test";
import {FirstStartPage} from "../../ui/setup/FirstStartPage";

test.describe('Setup tests', async () => {
   test('Setup settings', async ({page}) => {
      const firstStartPage = new FirstStartPage(page);
      await firstStartPage.setupStart();
   });
});
