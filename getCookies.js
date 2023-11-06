const urlHomePage = 'https://hellcase.com/dailyfree';  
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const fs = require('fs').promises;

const buttonSelecDailyFree = 'div.daily-free > div.daily-free-tape.daily-free__tape > button';

async function getCookies()  {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();
    
  await page.goto(urlHomePage, {
    waitUntil: "networkidle2",
    userDataDir: "./data"
  });         // opens the browser

  await page.waitForTimeout(10000)
  await page.waitForSelector(buttonSelecDailyFree, {visible: true})

  console.log("saving cookies..\n")
  
  await page.screenshot({
    path: 'testresult.png',
    fullPage: true
  })
  
  //save cookies
  const cookies = await page.cookies();
  await fs.writeFile('./data/cookies6.json', JSON.stringify(cookies, null, 2));

  console.log("cookies saved!\n")
  await browser.close()
};
getCookies()