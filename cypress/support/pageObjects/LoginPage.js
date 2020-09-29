class LoginPage {

    getUsername() {
        return cy.get('input#username')
    }

    getPassword() {
        return cy.get('input[name="password"]')
    }

    getLoginBtn() {
        return cy.get('button[type="submit"]')
    }

    getMessageEmailIsRequired() {
        return cy.get('p[data-testid="emailRequired"]')
    }

    getMessagePasswordIsRequired() {
        return cy.get('p[data-testid="passwordRequired"]')
    }

    getMessageEmailIncorrect() {
        return cy.get('p[data-testid="emailIncorrect"]')
    }

    getMessageWrongCredentials() {
        return cy.get('p[data-testid="infoWrongCredentials"]')
    }

}
export default LoginPage;