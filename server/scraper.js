'use strict';
const puppeteer = require('puppeteer'); //

/**
 * The function launches the browser,
 * Creates a new page and navigates to the url 
 * Gets all instances of the html
 * class that holds the title of a post on reddit
 * and store them into an array
 * close the browser and return the array 
 * 
 * TODO: refactor the querySelectorAll with a $ selector
 * to avoid code obfuscation changes
 */
async function scrape() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://www.reddit.com/');


    const text = await page.evaluate(() =>
        Array.from(document.querySelectorAll('._eYtD2XCVieq6emjKBH3m'), element => element.textContent));
    browser.close()
    return text;
}

//Export the scrape function 
module.exports = {
    scrape
}

