// full path to your cookies files
const cookieFiles = ['C:/Users/your-user-name/Documents/HellCaseBot/data/cookies.json' ,
                     'C:/Users/your-user-name/Documents/HellCaseBot/data/cookies2.json'];

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const url = 'https://hellcase.com/dailyfree';  
const fs = require('fs').promises;
const fsV = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'log.txt');
const logStream = fsV.createWriteStream(logFilePath, { flags: 'a' });

// Redirect console.log output to the log file
console.log = function(message) {
  logStream.write(message + '\n');
  process.stdout.write(message + '\n');
};

// Your script logic here
const currentDate = new Date();
console.log(`DATE OF EXECUTION: ${currentDate}\n`);

//constants and variables
const buttonSelecDailyFree = 'div.daily-free > div.daily-free-tape.daily-free__tape > button';
const disButton = 'div.daily-free > div.daily-free-tape.daily-free__tape > button > disabled';
var successCounter = 0;
var currentCookieFile = '';


//takes a cookie file and redeems daily reward of the associated account.
async function redeemDaily() {
  const browser = await puppeteer.launch({
    headless: 'old',
    defaultViewport: null
  });

  const page = await browser.newPage();
  
  const file_exists = fsV.existsSync(currentCookieFile)
  if (!file_exists) {
    //file doesn't exist
    console.log("ERROR: "+currentCookieFile+" isn't a valid path to a cookie file.\nExiting script.\n")
    await browser.close()
    return
  }

  //load cookies
  const cookiesString = await fs.readFile(currentCookieFile);
  if (cookiesString.length === 0) {
    console.log('ERROR: cookie file: '+currentCookieFile+' is empty\nExiting script.\n')
    await browser.close()
    return
  }
  const cookiesLoad = JSON.parse(cookiesString);
  await page.setCookie(...cookiesLoad);
  console.log("cookies loaded succesfully")

  await page.goto(url, {
    waitUntil: "networkidle2",
    userDataDir: "./data"
  });         // opens the browser

  await page.waitForSelector(buttonSelecDailyFree, {visible: true})
  const button = await page.$(buttonSelecDailyFree)

  const disButton = await page.$(buttonSelecDailyFree+"[disabled]");

  const is_disabled = disButton !== null;
  

  if (is_disabled) {
    console.log("button is disabled:")
    const text = await (await button.getProperty('textContent')).jsonValue()
    console.log(text+'\n')
  }
  else {
    await button.click();
    await page.waitForTimeout(500)
    console.log("Daily claimed succesfully!")
    successCounter+=1;
  }
  
  //rewrite cookies to update them 
  console.log("saving cookies..");
  const cookies = await page.cookies();
  await fs.writeFile(currentCookieFile, JSON.stringify(cookies, null, 2));
  
  console.log("cookies rewritten!\n");
  await browser.close()
};


async function main() {
  file_len=cookieFiles.length;
  for (let i = 0; i < file_len; i++) {
    currentCookieFile = cookieFiles[i];
    console.log("attempting script: "+i+'\n');
    await redeemDaily();
  } 
  console.log(`Program completed with: ${successCounter}/${file_len} successes.`)
  console.log("Now exiting program.\n")
  console.log("----------------------------------------------------------------------\n\n\n")
};

main();




