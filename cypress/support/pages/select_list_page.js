class SelectListPage {
  navigate() {
    cy.visit('/basic-select-dropdown-demo.html');
  }

  selectDay(day) {
    cy.get('#select-demo').select(day);
  }

  verifySelectedDayMessage(day) {
    cy.get('.selected-value').should('have.text', `Day selected :- ${day}`);
  }
}

export const selectListPage = new SelectListPage();
