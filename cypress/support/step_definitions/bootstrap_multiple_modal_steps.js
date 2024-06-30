import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { bootstrapMultipleModalPage } from '../pages/bootstrap_multiple_modal_page';

Given('I navigate to the Multiple Modal Example page', () => {
  bootstrapMultipleModalPage.navigate();
});

When('I open the first modal', () => {
  bootstrapMultipleModalPage.openFirstModal();
});

Then('the first modal should be displayed', () => {
  bootstrapMultipleModalPage.verifyFirstModalIsDisplayed();
});

When('I open the second modal from within the first modal', () => {
  bootstrapMultipleModalPage.openSecondModal();
});

Then('the second modal should be displayed', () => {
  bootstrapMultipleModalPage.verifySecondModalIsDisplayed();
});

When('I close the second modal', () => {
  bootstrapMultipleModalPage.closeSecondModal();
});

Then('the first modal should still be displayed', () => {
  bootstrapMultipleModalPage.verifyFirstModalIsStillDisplayed();
});

When('I close the first modal', () => {
  bootstrapMultipleModalPage.closeFirstModal();
});

Then('the first modal should be dismissed', () => {
  bootstrapMultipleModalPage.verifyFirstModalIsDismissed();
});
