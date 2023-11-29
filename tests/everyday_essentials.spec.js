const {test, expect, request} = require('@playwright/test');

const loginPayLoad = {msisdn:"0247278738",authToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjIzMzI0NzI3ODczOCIsImp0aSI6ImQ3ZDQyZjcwLWUwZDUtNDVkNC1iNGExLWY3Zjk3OWJhZThmNiIsIm5iZiI6MTcwMTI2MzQ3NSwiZXhwIjoxNzMyNzk5NDc1LCJpc3MiOiJodHRwOi8vaHVidGVsLmNvbSIsImF1ZCI6Imh0dHA6Ly9odWJ0ZWwuY29tIn0.Orixl73LCc7A3k93hjQqOwc1S0VhbnDa_WtLufjtRIU"};

console.log(loginPayLoad)

let token;



//Test to access the everyday essentials and place an order.
test('Everyday Essentials Tab', async({page, context}) => {


    // page.addInitScript(value => {
    //     window.localStorage.setItem('token', value);
    // }, token);

    // Injecting Cookies to skip Login process
    await context.addCookies([
        {
            name: 'consumerAuth',
            value: process.env.AUTH_TOKEN,
            url: "https://hubtel.com/",
        },
    ]);

    const productName = "Welch's Fruit Juice 473ml";
    const products = await page.locator(".card-body");
    //Navigating to the Everyday Essentials page
    await page.goto("https://hubtel.com/shop");
    await page.waitForLoadState("networkidle");
    //Check if the tab is present
    // await page.getByText('Everyday Essentials').click();
    // await page.getByText('Non Alcoholic Drinks').click();
    // await page.waitForLoadState("networkidle");
    // //Select a product in the list of products
    // const names = await page.locator(".card-body h6").allContents();
    // console.log(names);
    // const count = await products.count();
    // for (let i = 0; i < count; ++i) {
    //     if (await products.nth(i).locator("h6").textContent() === productName){
    //         //Click on the product
    //         await products.nth(i).click();
    //         await page.waitForLoadState("networkidle");
    //         await page.locator(".add-cart-button").click();
    //         break;
    //     }
    // }
    
    await page.pause();
});