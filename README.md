![Cypress Logo](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)
# SuiteProject

#### Version 1.0.0

## Description
---
#### SuiteProject is used for testing Login functionality. There are 5 tests in this project.
* Happy path - user should be able to enter correct username / password and be loggedin
* Form should not submit if either username is empty
* Form should not submit if either password is empty
* Form should validate username to be a valid email address
* Form should display an error message in case of failed login
---
#### Target application URL is: https://the.suite.st/login
---
#### Target browser: Chrome, Chromium, Firefox, Electron
#### Chrome version: 83.0.4103.61 (Official build)(64-bit)
#### Chromium version: 83.0.4103.116 
#### Firefox version: 68.12.Oesr(64-bit)
#### Electron version: 8.3.0(64-bit)
---
---
## Help
---

#### The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#Running-tests "Cypress documentation")

## Install Cypress

[Follow these instructions to install Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements "Installing Cypress")

## Opening Cypress

`node_modules/.bin/cypress open`


## This `project` contains the following:
* cypress
* node_modules
* cypress.json
* package.json
* package-lock.json

## Package Cypress contains 6 folders:
* fixtures
* integration
* plugins
* screenshots
* support
* videos   

## Folder Integration contains:
* examples folder
    * Login form test.js


## Folder Support contains:
* pageObjects folder
    * LoginPage.js
    
## Running tests from Terminal

`npm run test`

## Cypress `Dashboard`
[Cypress Dashboard](https://dashboard.cypress.io/projects/n74fah/runs/1/specs)

## Cypress Video
[Cypress Video](https://dashboard.cypress.io/projects/n74fah/runs/1/specs/5bd44684-6cf7-4bd1-bce1-f86ffeeec4da/video)
