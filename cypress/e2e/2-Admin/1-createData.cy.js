//plugin slowdown cypress
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login', () => {
  //Session login using command.js
  beforeEach(() => {
    cy.login('Admin','admin123')
  })

  it('Valid Login', () => {
    //Redirect to login
    cy.visit('/')
    cy.contains("Admin").click()
    cy.url().should('include', '/admin/viewSystemUsers')
    cy.get('.orangehrm-header-container > .oxd-button').click()

    //Fill the form
    cy.fixture('adminFixture.json').then((admin) => {
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get('.oxd-autocomplete-text-input > input').type(admin.employee).should('have.value', admin.employee)
      cy.get('.oxd-autocomplete-option').click()
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(admin.username).should('have.value', admin.username)
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(admin.password).should('have.value', admin.password)
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(admin.password2).should('have.value', admin.password2)
      cy.get('form').submit()

    })
      
  })
})
