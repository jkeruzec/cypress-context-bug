context('Contextual bug', function() {

	it('Context bug', function() {

		const stub = cy.stub();

		cy.on('window:alert', stub);
		
		// Access user creation page
		cy.visit('http://localhost:3000/');
		cy.get('[data-cy=menu]').trigger('contextmenu');
		cy.get('.react-contexify__item__data').click().then(() => {
			 expect(stub).to.be.calledWith('Hello bug !');
		});
		
		
	})

});