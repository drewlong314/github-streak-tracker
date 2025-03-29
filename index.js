import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
let count = 0;

// Navigate to the website
await page.goto('https://github.com/drewlong314');

await page.waitForSelector('[data-date]', { timeout: 10000 });

const date = new Date()

let isTrue = true;
while (isTrue) {
    const element = await page.evaluate((date) => {
        return document.querySelector(`[data-date="${date}"]`)?.getAttribute('data-level');
    }, date.toISOString().split('T')[0]);

    if (element > 0) {
        console.log('Found element:', element);
        count++
        date.setDate(date.getDate() - 1)
    } else {
        console.log('Element not found.');
        isTrue = false
    }
}
console.log(count)

await browser.close();
