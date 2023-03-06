describe('Verify offers menu', () => {
  
    beforeEach(() =>{
        cy.visit('https://www.phptravels.net/login')
    })
  
    it('All offers must have a picture', () => {
        cy.login('user@phptravels.com', 'demouser')
        cy.contains('Offers').click()
      cy.get('section[class="card-area section--padding"]')
        .find('div[class="col-lg-4 responsive-column"]')
        .each(($element) => {
            cy.wrap($element).find('a').first()
                .click({force: true})
            cy.get('img')
                .should('have.attr', 'src').go('back')            
            
        })
    })
    
    it('All offers must have a title', () => {
        cy.login('user@phptravels.com', 'demouser')
        cy.check_offer_property('h3', 'not.be.empty') 
    })
    

    it('All offers must have a description', () => {
        cy.login('user@phptravels.com', 'demouser') 
        cy.check_offer_property('p', 'not.be.empty')        
    })

      it('All offers must have a price localized to the user s currency and bigger than zero', () => {
        cy.login('user@phptravels.com', 'demouser') 
        cy.contains('Offers').click()
        cy.get('section[class="card-area section--padding"]')
            .find('div[class="col-lg-4 responsive-column"]')
            .each(($element) => {
            cy.wrap($element).find('a').first()
                .click({force: true})
            cy.get('button[id="currency"]').invoke('text').as('currency')
            cy.contains('Price').next()
                .should('include', this.currency)
                .then((s) => {
                    return s.split(" ")[1]
                })
                .should('be.a', 'string')
                .then(parseInt)
                .should('be.a', 'number')
                .and('be.greaterThan', 0)

        })
      })  

      it('All offers must have a contact phone number and e-mail address', () => {
        cy.login('user@phptravels.com', 'demouser') 
        cy.contains('Offers').click()
        cy.get('section[class="card-area section--padding"]')
            .find('div[class="col-lg-4 responsive-column"]')
            .each(($element) => {
            cy.wrap($element).find('a').first()
                .click({force: true})            
            cy.contains('Phone').next()
                .should('not.be.empty')
            cy.contains('Email')
                .should('not.be.empty')

        })
        
      }) 

      it('All offers must have an expiry date localized to the user s language and equal to 01/01/1970', () => {
        cy.login('user@phptravels.com', 'demouser') 
        cy.contains('Offers').click()
        cy.get('section[class="card-area section--padding"]')
            .find('div[class="col-lg-4 responsive-column"]')
            .each(($element) => {
            cy.wrap($element).find('a').first()
                .click({force: true})            
            cy.contains('Expiry Date').next()
                .should('be.equal', 'January 1 1970')
            cy.contains('Email').next()
                .should('not.be.empty')

        })
      }) 
      
  })