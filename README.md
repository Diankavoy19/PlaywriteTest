# PlaywriteTest
### Description
[Playwright framework for Web Testing and Automation](https://playwright.dev/) with [allure report](https://docs.qameta.io/allure/#_copyright). 

### Setup
Before using a framework for Web Testing and Automation, you need to install [node.js](https://nodejs.org/en/), install all the dependencies for doing the full operation of the node.js.

Also you need to install allure report with command:
```console
npm i -D @playwright/test allure-playwright
```
Download git repository and use install node modules.

After that we can run all our tests.
```console
npx playwright test
```
We can run only one test, example "Testcase1".
```console
npm  run testcase1
```
We need generate and open Allure Report.
```console
npx allure generate allure-results --clean
allure open allure-report
```
or for this project
```console
npm run generate
npm run report
```
You must have these allure reports:
![](https://diankavoy19.github.io/TestRail-Homework/picture/Screenshot_4.png)
