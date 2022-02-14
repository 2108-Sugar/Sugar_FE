// import cypress from "cypress"
import { before } from "cypress/types/lodash"

describe('My Stuff dashboard tests', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should show the My Stuff page', () => {
    cy.get('h2')
      .contains('My Stuff')
    .get('.column-container')
      .children()
      .should('contain', 'Loaned Items')
      .and('contain', 'Borrowed Items')
  })

})