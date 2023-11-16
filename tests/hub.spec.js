const {test, expect} = require('@playwright/test');

test('Checking the Hubtel Food page', async({page, context}) => {
    await context.addCookies([
        {
            name: "consumerAuth",
            value: 
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjIzMzI0NzI3ODczOCIsImp0aSI6IjNmMzgxZTk5LTY4MDktNGUyZS1hMWQxLWQ2OGQ0NDNjMDY2YSIsIm5iZiI6MTcwMDA3OTI3NiwiZXhwIjoxNzMxNjE1Mjc2LCJpc3MiOiJodHRwOi8vaHVidGVsLmNvbSIsImF1ZCI6Imh0dHA6Ly9odWJ0ZWwuY29tIn0.n3ArgLNqF8JFs9X6Ra2rHRKJRfMw7fJFSvABwyuo9wM",
            url: "https://hubtel.com/",
        },
    ]);
    const restaurantName = 'KFC';
    const food = page.locator(".card-body");
    await page.goto("https://www.hubtel.com/food");
    
    //Check if the title is correct
    expect(await page.title()).toBe("Hubtel - Food & Beverages");
    //waiting for loading of the foods
    await page.waitForLoadState('networkidle')
    const titles = await page.locator("card-body h6").allTextContents();
    console.log(titles);

    //Iterate through the food
    const count = food.count();
    for(let i=0; i < count; ++i)
    {
    if(await food.nth(i).locator("h6").textContent() === restaurantName)
    {
        //clicking the KFC card
        await food.nth(i).click();
        break;
    }
    }
    // Waiting for list of food to load and place it in an idle state.
    await page.waitForLoadState('networkidle');
    

    
});

//https://github.com/Khartapius/Practice.git