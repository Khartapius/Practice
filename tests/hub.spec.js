const {test, expect} = require('@playwright/test');

test('Testing Hubtels Webpages', async({page, context}) => {   
    await context.addCookies([
        {
            name: "consumerAuth",
            value: 
             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjIzMzI0NzI3ODczOCIsImp0aSI6IjEzODZlNjU5LTc1MDQtNDhhZS05ZDRiLTQwZGI3MWVkN2Y5OSIsIm5iZiI6MTY5OTkzMDc5OSwiZXhwIjoxNzMxNDY2Nzk5LCJpc3MiOiJodHRwOi8vaHVidGVsLmNvbSIsImF1ZCI6Imh0dHA6Ly9odWJ0ZWwuY29tIn0.pItE0_z9Joe4qf8x4qQqvKaRLDyaXhOgf84DS0Q534s",
            url: "https://hubtel.com/",
        },
    ]);

    await page.goto("https://www.hubtel.com/food");
    page.pause();
    
    
  
    
});

//https://github.com/Khartapius/Practice.git