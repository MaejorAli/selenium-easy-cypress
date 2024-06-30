class SingleModalPage {
  navigate() {
    cy.visit('/bootstrap-modal-demo.html');
  }

  openModal() {
    cy.get('.btn-primary').eq(0).click();
  }

  verifyModalIsDisplayed() {
    cy.get('#myModal0').should('be.visible');
  }

  closeModal() {
    cy.get('.btn').contains('Close').click();
  }

  verifyModalIsDismissed() {
    cy.get('#myModal0').should('not.have.css', 'display', 'block');
  }
}

export const singleModalPage = new SingleModalPage();
