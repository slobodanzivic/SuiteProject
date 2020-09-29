///<reference types ="Cypress"/>
import LoginPage from '../../support/pageObjects/LoginPage.js'
describe('Login form test', function () {

    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('https://the.suite.st/login')

    })

    it('Happy path - user should be able to enter correct username / password and be loggedin.', function () {
        cy.url().should('include', '/login')
        loginPage.getUsername().type('slobodan.m.zivic@gmail.com').should('have.value', 'slobodan.m.zivic@gmail.com')
        loginPage.getPassword().type('Test123456').should('have.value', 'Test123456')
        loginPage.getLoginBtn().click()
        cy.title().should('equal', 'Suitest - Test Editor')

    })

    it('Form should not submit if either username is empty ', function () {
        loginPage.getPassword().type('Test123456').should('have.value', 'Test123456')
        loginPage.getLoginBtn().click()
        loginPage.getMessageEmailIsRequired().should('contain', 'E-mail is required')

    })

    it('Form should not submit if either password is empty ', function () {
        loginPage.getUsername().type('slobodan.m.zivic@gmail.com').should('have.value', 'slobodan.m.zivic@gmail.com')
        loginPage.getLoginBtn().click()
        loginPage.getMessagePasswordIsRequired().should('contain', 'Password is required')
    })

    it('Form should validate username to be a valid email address ', function () {
        loginPage.getUsername().type('slobodanzivic').should('have.value', 'slobodanzivic')
        loginPage.getPassword().type('Test123456').should('have.value', 'Test123456')
        loginPage.getLoginBtn().click()
        loginPage.getMessageEmailIncorrect().should('contain', "This doesn't look like a valid e-mail address")
    })

    it('Form should display an error message in case of failed login', function () {
        loginPage.getUsername().type('slobodanzivic').should('have.value', 'slobodanzivic')
        loginPage.getPassword().type('Test654321').should('have.value', 'Test654321')
        loginPage.getLoginBtn().click()
        loginPage.getMessageWrongCredentials().should('contain', "We don't have an account with these credentials")

    })

})

