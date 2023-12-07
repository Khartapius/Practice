const {test, expect} = require('@playwright/test');


test('Accessing the Hubtel page using the QRcode', async({browser}) => {
    const context = await browser.newContext({
        storageState: "./authToken.json"
    })

    const page = await context.newPage();

    // Accessing the hubtel page
    await page.goto("https://hubtel.com");
    const title = await expect(page).toHaveTitle('Hubtel - Find and pay for everyday essentials');
    console.log(title);
    await page.waitForLoadState('networkidle');

    //Navigating to Everyday Essentials page    
    await page.getByRole('link', {name: 'Everyday Essentials'}).first().click();
    await page.getByText('Non Alcoholic Drinks').click();
    await page.waitForLoadState("load");

    //Searching for a product using the search bar
    await page.locator(".form-control").type("welch's", {delay:1000});
    await page.locator("[type='submit']").click();
    
    const names = await page.locator(".card-body h6").allTextContents();
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h5 span")).toHaveText(" welch's ");
    expect(await page.getByRole('link', { name: 'product Welch\'s Fruit Juice 473ml GHS 35.00' }).click());
    await page.locator(".add-cart-button").click();
    await page.waitForLoadState("networkidle");

    //Confirming your order
    await page.locator(".alert").first().click();

    //Taking screenshot of the product added to cart
    expect(await page.screenshot()).toMatchSnapshot('addedToCart.png');
     await page.pause();
        console.log(names);
   
       
})