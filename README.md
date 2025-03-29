# GitHub Streak Checker

## Overview
The **GitHub Streak Checker** is a Node.js command-line tool that monitors your GitHub contribution streak. It automates the process of checking your commit history by scraping your GitHub profile using Puppeteer.

## Prerequisites
Ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (or **yarn**)

## Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/drewlong314/github-streak-checker.git
    cd github-streak-checker
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Ensure the script is executable:

    ```bash
    chmod +x index.js
    ```

## Usage
Run the script using Node.js:

```bash
./index.js
```

Alternatively:

```bash
node index.js
```

### Output
- If you have not committed today, you will receive a warning:

    ```bash
    Your github streak is 45. Warning! You have not committed today.
    ```

- If you have committed today, it will display your current streak:

    ```bash
    Your github streak is 46.
    ```

## How It Works
1. **Launch Puppeteer**: Opens a headless browser.
2. **Navigate to GitHub Profile**: Goes to your GitHub profile page.
3. **Scrape Contribution Data**: Collects the commit levels for each day.
4. **Analyze Streak**: Counts consecutive days of commits.
5. **Check Today's Activity**: Warns if no commit has been made today.
6. **Output Result**: Prints the current streak and a warning if applicable.

## Configuration
To check another user's streak, update the target URL in the following line:

```javascript
await page.goto('https://github.com/USERNAME');
```

Replace `USERNAME` with the GitHub username you want to track.

## Troubleshooting
- **Timeout Error**: Ensure your internet connection is stable and the GitHub profile is public.
- **Empty Output**: Verify the username and that the contribution graph is visible.

## Dependencies
- [puppeteer](https://www.npmjs.com/package/puppeteer): Headless browser automation.

## License
This project is licensed under the MIT License.

