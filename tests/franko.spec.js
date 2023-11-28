const {test, expect} = require('@playwright/test');

test('Checking Franko Trading Webpage', async({page}) => {
    // Go to the webpage
    await page.goto("https://frankotrading.com");
    //checking the title of the page
    const title = await expect(page).toHaveTitle('Franko Trading Enterprise - Ghana');
    console.log(title);

    //Registering an account on franko
    // await page.locator('.icon-user').click();
    // await page.waitForLoadState("networkidle");
    // await page.locator('#reg_username').type(process.env.USERNAME, {delay:100});
    // await page.locator('#reg_email').type(process.env.EMAIL, {delay:100});
    // await page.locator("[value='Register']").click();

    //making a purchase or adding to cart
    await page.getByRole('link', { name: 'Desktops' }).click();
    await page.getByTitle('Add “HP desktop i5 (8/512ssd) CB1023nh (all-in-one) 23"” to your cart').click();
    await page.locator('.wc-proceed-to-checkout').click();
    await page.pause();
})