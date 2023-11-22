const {test, expect} = require('@playwright/test');

test('Accessing the Shopify Page', async({page}) => {
    await page.goto("https://www.shopify.com");
    //Checking the title of the page
    await expect(page).toHaveTitle("Start and grow your e-commerce business - 3-Day Free Trial - Shopify USA");
    
    
})