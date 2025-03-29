import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
let count = 0;
let status;
let today = true;

// Navigate to the website
await page.goto('https://github.com/drewlong314');

await page.waitForSelector('[data-date]', { timeout: 10000 });

const date = new Date()
date.setDate(date.getDate() - 1)

// first time through it should do the same but if the data-level is 0 it should
// set the status to warning
// go to the next day

const getDataLevel = async (date) => {
    const element = await page.evaluate((date) => {
        return document.querySelector(`[data-date="${date}"]`)?.getAttribute('data-level');
    }, date.toISOString().split('T')[0]);
    return element
}

const handleDataLevel = (element) => {
    if (element > 0) {
        console.log('Found element:', element);
        count++
        date.setDate(date.getDate() - 1)
    } else {
        console.log('Element not found.');
        if (count === 0 && today === true) {
            status = "Warning! You have not committed today"
            today = false
        }
        isTrue = false
    }
}

let isTrue = true;
while (isTrue) {
    const element = await getDataLevel(date)
    handleDataLevel(element)
}
console.log(count, status)



await browser.close();
