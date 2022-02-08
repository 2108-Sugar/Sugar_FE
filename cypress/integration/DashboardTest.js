import cypress = require("cypress")

describe('Sugar dashboard test', () => {
  it('As a user, when I visit the homepage I should see the name of the company', () => {
    cy.get('header[class="header-container"]')
      .contains('Sugar')
      .should('have.length', 1)
  })




})