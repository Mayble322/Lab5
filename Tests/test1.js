const playwright = require('playwright');

(async ()=>{
 {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.demoblaze.com/');
  await page.click('id=login2');
  await page.fill('#loginusername', '123');
  await page.fill('#loginpassword', '123');
  await page.keyboard.press("Tab"); 
  await page.keyboard.press("Tab"); 
  await page.keyboard.press("Enter");

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  await delay(6000);
  await page.screenshot({ path: "./Tests/Login.png" });
  console.log ('finish');
  await browser.close();
 }
})();