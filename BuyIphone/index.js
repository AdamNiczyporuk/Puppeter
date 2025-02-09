const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

const locateChrome = require('chrome-location');
const {executablPath} = require('puppeteer');

const url_16= "https://www.apple.com/pl/shop/buy-iphone/iphone-16-pro"


async function givePage()
{ 
    const browser = await puppeteer.launch({ headless: false, executablePath: locateChrome  });
    let page = await browser.newPage()
    return page;
}

async function run(){ 
    let page = await givePage();
    await page.goto(url_16);
}

run();