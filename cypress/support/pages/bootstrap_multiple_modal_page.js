class BootstrapMultipleModalPage {
  navigate() {
    cy.visit('/bootstrap-modal-demo.html#multipleModal');
  }

  openFirstModal() {
    cy.get('div.panel-body > a').eq(1).click();
  }

  verifyFirstModalIsDisplayed() {
    cy.get('#myModal').should('be.visible');
  }

  openSecondModal() {
    cy.get('div.modal-body > a').click();
  }

  verifySecondModalIsDisplayed() {
    cy.get('#myModal2').should('be.visible');
  }

  closeSecondModal() {
    cy.get('#myModal2').contains('Close').click();
  }

  verifyFirstModalIsStillDisplayed() {
    cy.get('#myModal').should('be.visible');
  }

  closeFirstModal() {
    cy.get('#myModal').contains('Close').click();
  }

  verifyFirstModalIsDismissed() {
    cy.get('#myModal').should('not.be.visible');
  }
}

export const bootstrapMultipleModalPage = new BootstrapMultipleModalPage();
