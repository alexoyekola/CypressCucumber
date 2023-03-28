# cypress-cucumber-e2e-testing

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Allure reporter
   Windows: scoop install allure 
            (user can download scoop from https://scoop.sh/)
   MacOS: brew install allure
3. Optional: Java 8 for Allure Reporter

## 🚀 Install the project

Install project dependencies with: npm i

## Run the scripts:

1. Standard Execution: npm run cypress:execution
2. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/
3. Visual Execution: npx cypress open


