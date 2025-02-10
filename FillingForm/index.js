const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function run() {
    const browser = await puppeteer.launch({headless: false}); 
    const page = await browser.newPage()
    await page.goto("   ");

    let selector = "input[id='cc-name']";
    await page.waitForSelector(selector);
    await page.type(selector, "John Doe");

    selector = "select[id='cc-type']";
    await page.waitForSelector(selector);
    await page.type(selector, "visa");

    selector = "input[id='cc-number']";
    await page.type(selector, "112312314141");

    selector = "input[id='cc-number']";
    
    selector = "input[id='cc-csc']";
    await page.type(selector, "4242424242424242");

    selector = "select[id='cc-exp-month']";
    await page.select(selector, "12");
    

    selector = "select[id='cc-exp-year']";
    await page.select(selector, "2025");

    selector = "button[type='submit']";
    await page.click(selector);

    
}

run();