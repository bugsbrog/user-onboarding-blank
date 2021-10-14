/* eslint-disable no-undef */
// write tests here

// arrange
describe('Add Friends', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email');
    const passwordInput = () => cy.get('input[name=password]');
    const termCheckbox = () => cy.get('[type="checkbox"]').check()
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    // act
    it('sanity check to make sure tests work', () => {
        // assert
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    // act
    it('the proper elements should be showing', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termCheckbox().should('exist');
        submitBtn().should('exist');
    })

    // arrange
    describe('Filling out inputs and submit button', () => {

        // act
        it('can navigate to the url' , () => {
            cy.url().should('include', 'localhost');
        })

        // act
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        // act
        it('All inputs working', () => {
            firstNameInput().type('Hannah');
            lastNameInput().type('Brog');
            emailInput().type('bugsbrog@gmail.com');
            passwordInput().type('ksyvqely');
            firstNameInput().should('have.value', 'Hannah');
            lastNameInput().should('have.value', 'Brog');
            emailInput().should('have.value', 'bugsbrog@gmail.com');
            passwordInput().should('have.value', 'ksyvqely');
            // termCheckbox().should('be.checked');
        })

        // act
        it('Empty fields', () => {
            firstNameInput().type('Danielle').clear();
            lastNameInput().type('Strazzeri').clear();
            emailInput().type('dstrazzeri303@gmail.com').clear();
            passwordInput().type('randompassword').clear();
            termCheckbox().check().uncheck();
        })
    })
})