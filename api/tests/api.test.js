import {test , expect} from '@playwright/test';


test.describe('api tests', () => {


test("Sample API Test", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users/page-1')
      
    const responseBody = await response.json();

    console.log(responseBody);


});
});