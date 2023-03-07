# Welcome to PHPTRAVELS Tests

This is the automation project made in **javascript** to test the PHPTravels features specified in Cocus Challenge. Here you can find instructions to install/run the project, and some explanation about the structure of the project.


# Setup

First of all you need install and configure node.js in your machine. You can find the instructions [here](https://nodejs.org/en/).

After that,  clone the PHPTravels project from the gitlab repository to your machine. 
Using the terminal or prompt you should navigate to the root of the local project.

The project uses Cypress Framework. So you need install and configure the Cypress in you machine. To do that, you need insert:

    cd /your/project/path
    npm install cypress --save-dev

The instructions are [here](https://docs.cypress.io/guides/getting-started/installing-cypress).


## Running the tests

Using npx (already installed with node):

    npx cypress open

If the first one doesn't work, you can use npm and module path:

    ./node_modules.bin/cypress open

You will see the LaunchPad screen, there select the **E2E Testing** and **Chrome** browser. 
After that, just click in **Start E2E Testing in Chrome**.

The tests are in the spec files. The login_spec and offers_spec. Just choose one and you will see the option to run the test. Maybe the firewall of your machine block the test page and you need disable the firewall option.

More details about running tests you can find [here](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test).
