import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login', () => {
  it('Valid Login', () => {
    //Redirect to login
    cy.visit('/')

    //Fill the form
    cy.fixture('loginFixture.json').then((login) => {
      cy.get('input[name="username"]').type(login.username).should('have.value', login.username)
      cy.get('input[type="password"]').type(login.password).should('have.value', login.password)
      cy.get('form').submit()
      cy.url().should('include', '/index')
    })
      
  })
})
