describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/shares')
    })
    
    it("Should have an add to portfolio button", () => {
        const counter = cy.get('button');
        counter.should('contain', '');
    });

    it("Should have a search field", () => {
        const counter = cy.get('input');
        counter.should('contain', '');
    });
  
  });