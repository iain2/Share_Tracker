describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it("Loads the app", () => {
        const counter = cy.get('h1');
        counter.should('contain', 'THIS IS A HOMEPAGE!');
    }) 
  
  });