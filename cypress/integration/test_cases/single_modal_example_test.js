import { singleModalPage } from '../../support/pages/single_modal_page';

describe('Single Modal Example', () => {
  beforeEach(() => {
    //Navigate to the Single Modal Example page
    singleModalPage.navigate();
  });

  it('should open and close the single modal', () => {
    //Click the button to open the modal
    singleModalPage.openModal();

    //Verify that the modal is displayed
    singleModalPage.verifyModalIsDisplayed();

    // Close the modal
    singleModalPage.closeModal();

    // Verify that the modal is dismissed
    singleModalPage.verifyModalIsDismissed();
  });
});
