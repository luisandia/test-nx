describe('courseitem: Courseitem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=courseitem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Courseitem!');
    });
});
