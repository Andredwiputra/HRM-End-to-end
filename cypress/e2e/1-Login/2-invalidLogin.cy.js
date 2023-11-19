import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login', () => {
  it('Invalid Login', () => {
    //Redirect to login
    cy.visit('/')

    //Fill the form with username and password different
    cy.fixture('loginFixture.json').then((login) => {
      cy.get('input[name="username"]').type(login.username).should('have.value', login.username)
      cy.get('input[type="password"]').type(login.password2).should('have.value', login.password2)
      cy.get('form').submit()
      cy.wait(4000)
      cy.contains("Invalid credentials")
    })
      
  })
})
