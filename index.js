import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate to the website
await page.goto('https://github.com/drewlong314?tab=overview&from=2025-03-01&to=2025-03-29');

await page.waitForSelector('[data-date]', { timeout: 10000 });

// Get today's date in the format "YYYY-MM-DD"
const today = new Date().toISOString().split('T')[0];

const element = await page.evaluate((date) => {
  return document.querySelector(`[data-date="${date}"]`).getAttribute('data-level');
}, today);

if (element) {
  console.log('Found element:', element);
} else {
  console.log('Element not found.');
}

await browser.close();
