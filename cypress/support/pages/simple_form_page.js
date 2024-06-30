class SimpleFormPage {
  navigate() {
    cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html');
  }

  enterMessage(message) {
    cy.get('#user-message').eq(0).type(message);
  }

  showMessage() {
    cy.get('#get-input > button').click();
  }

  verifyMessage(message) {
    cy.get('#display').should('have.text', message);
  }
}

export const simpleFormPage = new SimpleFormPage();

