// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get('form[action="https://phptravels.net/login"]')
        .find('input[name="email"]')
        .type(email, {force: true})
    cy.get('form[action="https://phptravels.net/login"]')
        .find('input[name=password]')
        .type(password, {force: true})
    cy.get('form[action="https://phptravels.net/login"]')
        .find('button[type="submit"]')
        .click({force: true})
})

Cypress.Commands.add('check_offer_property', (tag, condition) =>{
    cy.contains('Offers').click()
      cy.get('section[class="card-area section--padding"]')
        .find('div[class="col-lg-4 responsive-column"]')
        .each(($element) => {
            cy.wrap($element).find('a').first()
                .click({force: true})
            cy.find(tag)
                .should(condition)
        })
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })