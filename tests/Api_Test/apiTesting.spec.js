const {test, expect} = require('@playwright/test');

test.only('API testing', async() => {
    // This is a global setup that will be run before all tests
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://hubtelappproxy.hubtel.com/api/v1/account/getprofile",
    {
        data: loginPayLoad,
        headers: {
            'Authorization': process.env.AUTH_TOKEN,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = loginResponse.json();
   
});