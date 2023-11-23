const {test, expect, request} = require('@playwright/test');

test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
   const loginResponse = await apiContext.get("https://hubtel.com/shop")


    //Checking if status code is true.
   expect(loginResponse.ok()).toBeTruthy();
   const jsonResponse =  loginResponse.json();
   const token = jsonResponse.token;
   console.log(token);
});

test('Checking the Hubtel Food page', async({page}) => {
    
    await page.goto("https://hubtel.com/food");
    //console.log(process.env.AUTH_TOKEN);
    
    //Check if the title is correct
    expect(await page.title()).toBe("Hubtel - Find and pay for everyday essentials");
});