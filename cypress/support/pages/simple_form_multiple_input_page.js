class SimpleFormPageMultiple {
  navigate() {
    cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html');
  }

  enterFirstNumber(number) {
    cy.get('#value1').clear().type(number);
  }

  enterSecondNumber(number) {
    cy.get('#value2').clear().type(number);
  }

  clickGetTotal() {
    cy.get('button').contains('Get Total').click();
  }

  verifyTotalSum(expectedSum) {
    cy.get('#displayvalue').should('have.text', expectedSum);
  }
}

export const simpleFormPageMultiple = new SimpleFormPageMultiple();