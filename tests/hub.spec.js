const {test, expect, request} = require('@playwright/test');

const orderPayLoad =  {itemId:"80418b6e300242808daa918a74a77ef8",quantity:1,options:[{quantity:1,differentiator:"Accompaniment",itemId:"42008efeb9a04b4c8a52f6fee924220b",name:"Fried Sausage",price:18,operation:"set"}],notes:"",packagingStyle:{}}
let orderId;
//Order API
test.beforeAll( async() =>
{
   const apiContext = await request.newContext();

   //Using API to create an order
   const orderResponse = await apiContext.post("https://cart-proxy-api.hubtel.com/api/restaurantcart",
{
    data: orderPayLoad,
    headers: {
        'Authorization': process.env.AUTH_TOKEN,
        'Content-Type': "application/json"
    },
});

const orderResponseJson = await orderResponse.body().id;
console.log(orderResponseJson);
//orderId = orderResponseJson.itemId;

});

test('Checking the Hubtel Food page', async({page, context}) => {
    
    await context.addCookies([
        {
            name: "consumerAuth",
            value: process.env.AUTH_TOKEN,
            url: "https://hubtel.com/",
        },
    ]);
   
    
    await page.goto("https://hubtel.com/food");
    
    //Check if the title is correct
    expect(await page.title()).toBe("Hubtel - Find and pay for everyday essentials");
    
    // const restaurantName = 'KFC';
    
    await page.waitForLoadState('networkidle');
    // await page.getByText('Airtime, Data & Bills').click();
    // await page.getByRole('tab', {name: 'History'}).click();
    // await page.locator(".col-12 a").last().click();
    // await page.locator("[placeholder='0.00']").fill("1");
    // await page.getByRole('button', { name: ' NEXT '}).click();
    // await page.waitForLoadState('networkidle');
    // await page.locator("[value='hubtel_wallet']").click();
    // await page.getByRole('button', { name: ' PAY NOW '}).click();
    // await page.getByRole('link', {name: ' I have paid for this '}).click();
    // await page.pause();
    await page.getByRole('button', { name: 'Change Location'}).click();
    await page.getByText('Add a new location').click();

    const location = await page.locator("[placeholder='Search for places']").type("Dansoman Roundabout, Accra, Ghana",{delay:100});
    await page.getByText('Dansoman RoundaboutAccra, Ghana').click();
    await page.locator("[placeholder='Enter name']").type("Dansoman Roundabout",{delay:100});

    await page.getByRole('button', { name: 'Save'}).click();
    await page.pause();
   
    
});

//https://github.com/Khartapius/Practice.git