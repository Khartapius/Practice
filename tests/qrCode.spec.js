const {test, expect} = require('@playwright/test');


test('Accessing the Hubtel page using the QRcode', async({browser}) => {
    const context = await browser.newContext({
        storageState: "./authToken.json"
    })

    const page = await context.newPage();

    //Aborting some API calls
    // page.route('**/*.js',route=> route.abort());

    // Accessing the hubtel page
    await page.goto("https://hubtel.com");
    await page.waitForLoadState('networkidle');

    // const productName = " Don Simon Fruit Juice 1L ";
    // const products = await page.locator(".card-body");
    
    //Console logging the request methods
    // page.on('request', request=> console.log(request.url()));
    // page.on('response', response=> console.log(response.url(), response.status()));


    //Navigating to Everyday Essentials page
    
    await page.getByRole('link', {name: 'Everyday Essentials'}).click();
    await page.getByText('Non Alcoholic Drinks').click();
    await page.waitForLoadState("networkidle");

    //Select a product in the list of products
    const names = await page.locator(".card-body h6").allTextContents();
    await page.waitForLoadState("networkidle");
    await page.getByRole('link', { name: 'product Welch\'s Fruit Juice 473ml GHS 35.00' }).click();    
    await page.locator(".add-cart-button").click();

    //Taking screenshot of the product added to cart
    await page.locator("[alt='product-image']").first().screenshot({path: 'product.png'});
     await page.pause();
        console.log(names);
   
    // const count = await products.count();
    // for (let i = 0; i < count; ++i) {
    //     if (await products.nth(i).locator(".card-body h6").textContent() === productName)
    //     {
    //         //Click on the product
    //         await products.nth(i).click();
    //         await page.waitForLoadState("networkidle");
    //         await page.locator(".add-cart-button").click();
    //         break;            
    //     }}
       
})