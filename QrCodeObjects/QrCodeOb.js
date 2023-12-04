class LoginPage
{
    constructor(browser)
    {
        this.loginToken = browser.newContext({storageState: "./authToken.json"});
            
    }
}

module.exports=LoginPage;