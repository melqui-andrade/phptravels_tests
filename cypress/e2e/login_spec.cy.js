describe('Login in page', () => {
  
  beforeEach(() =>{
    cy.visit('https://www.phptravels.net/login')
  })

  it('With valid credentials should redirects to home page', () => {
    cy.login('user@phptravels.com', 'demouser')
    cy.url().should('include', 'account/dashboard')
  })
  
  it('With wrong password should show an error message', () => {
    cy.login('user@phptravels.com', 'Demouser') 
    cy.on('Wrong credentials')
  })
    
})