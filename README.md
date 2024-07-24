# Summary

This repository contains auto tests for verifying registration, authorization and article function on the [conduit](https://conduit.realworld.how/) website.

# Requirements

1. Install [Visual Studio code](https://code.visualstudio.com/)
2. Install [Node.js](https://nodejs.org/en)
3. Sign up on [Cloud Cypress](https://cloud.cypress.io/)

# Steps to install, launch and creating a report

1. Copy the repository
```
git clone https://github.com/gantz26/Task3-Cypress.git
```

2. Open this folder in Visual Studio Code and install all dependencies
```
npm ci
```

3. Run the tests with one of the next commands
```
// To run tests in Cypress app
npm run cy:open:default
npm run cy:open:alternative

// To run tests in terminal
npm run cy:run:chrome:default
npm run cy:run:edge:alternative
```

4. To view the report, open the index.html in reports folder or you can record results to the Cloud ID account
    - Open Cypress app and connect the project
    - Copy the key on the "Runs" tab
    - Run the tests with the next command
```
npx cypress run --record --key <record key>
```