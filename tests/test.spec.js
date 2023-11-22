const {test, expect} = require ('@playwright/test');

test ('Testing out Jumia Webpage', async({page, context}) => {
    //Injecting Cookies
    await context.addCookies([
        {
            name: "cto_bundle",
            value: 
                process.env.JUMIA_AUTH,               
                url: "https://www.jumia.com.gh",
        },
    ]);
    //Opening the Jumia Webpage
    await page.goto("https://www.jumia.com.gh/");
    await page.waitForLoadState('networkidle');
    await page.pause();
    
    //Logining In into your Jumia Accounts
    // await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
    // await page.locator("[for='dpdw-login']").click();
    // await page.getByRole('link', { name: 'Sign In'}).click();
    // await page.locator("#input_identifierValue").type(process.env.EMAIL, {delay:100});
    // await page.locator("[type='submit']").click();
    // await page.waitForLoadState('networkidle');
    // await page.locator(".mdc-text-field__input").type(process.env.PASSWORD, {delay:100});
    // await page.locator(".mdc-button__ripple").first().click();

});