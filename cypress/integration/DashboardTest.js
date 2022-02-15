

describe('Sugar dashboard test', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('As a user, when I visit the homepage I should see the name of the company', () => {
    cy.get('.header-container')
      .contains('Sugar')
      .should('have.length', 1)
  })

  it('should display all community requests', () => {
    cy.get('.dashboard-container')
    .children()
      .should('contain', 'David')
      .and('contain', 'Tony')
  })

  it('should see a footer', () => {
    cy.get('.footer-container')
    .children()
      .should('contain', 'Contact Us')
      .and('contain', 'Billy')
      .and('contain', 'Didi')
  })




})