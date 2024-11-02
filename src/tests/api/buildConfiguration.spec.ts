import {expect, test} from "@src/fixtures/api.fixture";


test.describe('Api test', async () => {
   test('ShowProject', async ({api}) => {
       const response = await api.authRequest('app/rest/projects/');
       expect(response.status()).toEqual(200);
       const json = await response.json()
       console.log(json)
   });
});
