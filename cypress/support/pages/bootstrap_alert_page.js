class BootstrapAlertPage {
  navigate() {
    cy.visit('/bootstrap-alert-messages-demo.html');
  }

  triggerAlert() {
    // click button to trigger an alert
    cy.contains('#normal-btn-success', 'Normal success message').click();
  }

  verifyAlertIsDisplayed() {
    cy.get('.alert-normal-success').should('be.visible');
  }

  closeAlert() {
    // close button within the alert
    cy.get('.close').contains('×').click();
  }

  verifyAlertIsDismissed() {
    cy.get('.alert-normal-success').contains("I'm a normal success message. To close use  the appropriate button."
    ).should('not.exist');
  }
}

export const bootstrapAlertPage = new BootstrapAlertPage();