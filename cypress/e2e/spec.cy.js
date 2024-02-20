//checek if the app loads
describe('Load the app', () => {
  it('loads', () => {
    cy.visit('http://localhost:3000')
  })
});

//navbar present
describe('Check the navbar is present', () => {
  it('present', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').should('be.visible') 
    // yields <nav>
  }
)});

//footer present 
describe('Check if the footer is present and at the bottom of the page', () => {
  it('present', () => {
    cy.visit('http://localhost:3000')
    cy.get('h2').should('contain', 'LRNR') 
  }
)});

// btn to start quiz 
describe('Check the start quiz button is present', () => {
  it('present', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').should('contain', 'Start Quiz Here')
  })
});

