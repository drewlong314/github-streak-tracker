import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
let count = 0;
let status;
let today = true;

await page.goto('https://github.com/drewlong314');

await page.waitForSelector('[data-date]', { timeout: 10000 });

const date = new Date()

const getDataLevel = async (date) => {
    const element = await page.evaluate((date) => {
        return document.querySelector(`[data-date="${date}"]`)?.getAttribute('data-level');
    }, date.toISOString().split('T')[0]);
    return element
}

const handleDataLevel = (element) => {
    if (element > 0) {
        count++
        date.setDate(date.getDate() - 1)
    } else {
        if (count === 0 && today === true) {
            status = "Warning! You have not committed today"
            today = false
            date.setDate(date.getDate() - 1)
        } else isTrue = false
    }
}

const changeYear = async (date) => {
    const year = date.getFullYear()
    await page.evaluate((year) => {
        return document.getElementById(`year-link-${year}`)?.click();
    }, year);
}

let isTrue = true;
while (isTrue) {
    const element = await getDataLevel(date)
    if (element) handleDataLevel(element)
    else await changeYear(date)
}

if (status) console.log(`Your github streak is ${count}. ${status}.`)
else console.log(`Your github streak is ${count}.`)

await browser.close();
