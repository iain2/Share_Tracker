describe('App', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it("Loads the app", () => {
        const counter = cy.get('h1');
        counter.should('contain', 'THIS IS A HOMEPAGE!');
    });

    it("Have a NavBar", () => {
        const counter = cy.get('nav');
        counter.should('contain', 'Home');
    });

    it("Should have a footer", () => {
        const counter = cy.get('h3');
        counter.should('contain', 'Stocks is so fun!');
    });


  
  });