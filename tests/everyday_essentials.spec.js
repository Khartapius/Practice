const {test, expect, request} = require('@playwright/test');

const orderPayLoad = {itemId:"c500508e2b7243549d1c1817e0b3b09e",quantity:1,customerName:"Pius Chiir-Deri",varietyAttributeValues:null}

//Using API to order from everyday essentials
test.beforeAll( async() => 
{
    const apiContext = request.newContext();
    const orderResponse = await apiContext.post("https://cart-proxy-api.hubtel.com/api/shopcart",
    {
        data: orderPayLoad,
        headers: {
            'Authorization':process.env.AUTH_TOKEN,
            'content-type': "application/json"
        },
    });

    const orderResponseJson = orderResponse.json();
    console.log(orderResponseJson);
});

//Test to access the everyday essentials and place an order.
test('Everyday Essentials Tab', async({page, context}) => {
    //Injecting Cookies to skip Login process
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
    await page.getByText('Everyday Essentials').click();
    await page.getByText('Non Alcoholic Drinks').click();
    await page.waitForLoadState("networkidle");
    //Select a product in the list of products
    const names = await page.locator(".card-body h6").allContents();
    console.log(names);
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("h6").textContent() === productName){
            //Click on the product
            await products.nth(i).click();
            await page.waitForLoadState("networkidle");
            await page.locator(".add-cart-button").click();
            break;
        }
    }
    
    await page.pause();
});