class BootstrapAutoAlertPage {
  navigate() {
    cy.visit('/bootstrap-alert-messages-demo.html');
  }

  triggerAlert() {
    // click button to trigger an alert
    cy.contains('#autoclosable-btn-success', 'Autocloseable success message').click();
  }

  verifyAlertIsDisplayed() {
    cy.get('.alert-autocloseable-success').should('be.visible');
  }

  closeAlert() {
    // wait for alert message to close
    cy.wait(5000);
  }

  verifyAlertIsDismissed() {
    cy.get('.alert-autocloseable-success').should('not.have.css', 'display', 'block');
  }
}

export const bootstrapAutoAlertPage = new BootstrapAutoAlertPage();