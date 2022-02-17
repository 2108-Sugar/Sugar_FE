
describe('New Request test', ()=> {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should go to the new request form', () => {
    cy.get('.header-container')
      .contains('My Stuff')
      .click()
  })

  it('should make a new request', () => {
    cy.get('.button-container').click()
    .get('.item-name').type('drill')
    .get('.date-needed').type('2022-03-02')
    .get('.date-return').type('2002-03-12')
    .get('.item-details').type('Need to build a treehouse')
    .get('.request-btn').click()
  })

  it('should check if the request was posted', () => {

    cy.get('.borrowed-items-container')
    .children()
    .should('contain', 'drill')
  })
})