context('Contextual bug', function() {

	it('Context bug', function() {

		// Access user creation page
		cy.visit('http://localhost:3000/');
		cy.get('[data-cy=menu]').trigger('contextmenu');
		cy.get('.react-contexify__item__data').click();
		
	})

});