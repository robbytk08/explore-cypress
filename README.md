## cypress-cucumber-test

## **Prerequisites**

Before you continue, ensure you meet the following requirements:

* Visual Code: https://code.visualstudio.com/
* Install VS code extension: [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/alexkrechik/vsextensions/cucumberautocomplete/2.15.2/vspackage)
* Latest nodejs:  [NodeJS Pages](https://nodejs.org/en/download/)
* Latest npm: ```npm install -g npm```
* Install dependency at current working directory: ```npm install```

## Execute cli by using terminal:

### To run all test cases
```
- Headed: npx cypress run -e isCliRun=true --headed -b chrome 
- Headless: npx cypress run -e isCliRun=true -b chrome 
```