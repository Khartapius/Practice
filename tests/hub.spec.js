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
    //waiting for loading of the foods
    await page.waitForLoadState('networkidle')
    await page.getByRole('button', { name: 'Change Location' }).click();
    await page.getByText('Add a new location').click();

    await page.locator("[placeholder='Search for places']").type("Dansoman Roundabout, Accra, Ghana",{delay:1000});
    await page.locator("[placeholder='Enter name']").type("Dansoman Roundabout",{delay:1000});

    await page.getByRole('button', { name: 'Save'}).click();
    page.pause();
   
    
});

//https://github.com/Khartapius/Practice.git