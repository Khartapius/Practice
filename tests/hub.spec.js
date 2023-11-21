const {test, expect} = require('@playwright/test');

test('Checking the Hubtel Food page', async({page, context}) => {
    await context.addCookies([
        {
            name: "consumerAuth",
            value: 
                process.env.COOKIE,               
                url: "https://hubtel.com/",
        },
    ]);
    await page.goto("https://hubtel.com/food");
    
    //Check if the title is correct
    expect(await page.title()).toBe("Hubtel - Find and pay for everyday essentials");
    
    // const restaurantName = 'KFC';
    
    await page.waitForLoadState('networkidle');
    await page.getByText('Airtime, Data & Bills').click();
    await page.getByRole('tab', {name: 'History'}).click();
    await page.locator(".col-12 a").last().click();
    await page.locator("[placeholder='0.00']").fill("1");
    await page.getByRole('button', { name: ' NEXT '}).click();
    await page.waitForLoadState('networkidle');
    await page.locator("[value='hubtel_wallet']").click();
    await page.getByRole('button', { name: ' PAY NOW '}).click();
    await page.getByRole('link', {name: ' I have paid for this '}).click();

    await page.pause();
    // await page.getByText('Add a new location').click();

    // const location = await page.locator("[placeholder='Search for places']").type("Dansoman Roundabout, Accra, Ghana",{delay:100});
    // await location.getByText('Dansoman RoundaboutAccra, Ghana').click();
    // await page.locator("[placeholder='Enter name']").type("Dansoman Roundabout",{delay:100});

    // await page.getByRole('button', { name: 'Save'}).click();
    // await page.pause();
   
    
});

//https://github.com/Khartapius/Practice.git