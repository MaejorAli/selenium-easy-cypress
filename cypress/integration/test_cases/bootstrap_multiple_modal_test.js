import { bootstrapMultipleModalPage } from '../../support/pages/bootstrap_multiple_modal_page';

describe('Bootstrap Multiple Modal Example', () => {
  beforeEach(() => {
    //Navigate to the Multiple Modal Example 
    bootstrapMultipleModalPage.navigate();
  });

  it('should open and close multiple modals correctly', () => {
    //Open the first modal and verify it is displayed
    bootstrapMultipleModalPage.openFirstModal();
    bootstrapMultipleModalPage.verifyFirstModalIsDisplayed();

    //Open the second modal from within the first modal and verify it is displayed
    bootstrapMultipleModalPage.openSecondModal();
    bootstrapMultipleModalPage.verifySecondModalIsDisplayed();

    //Close the second modal and verify that the first modal is still displayed
    bootstrapMultipleModalPage.closeSecondModal();
    bootstrapMultipleModalPage.verifyFirstModalIsStillDisplayed();

    //Close the first modal and verify that it is dismissed
    bootstrapMultipleModalPage.closeFirstModal();
    bootstrapMultipleModalPage.verifyFirstModalIsDismissed();
  });
});

