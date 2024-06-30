import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { singleModalPage } from '../pages/single_modal_page';

Given('I navigate to the Single Modal Example page', () => {
  singleModalPage.navigate();
});

When('I click the button to open the modal', () => {
  singleModalPage.openModal();
});

Then('the modal should be displayed', () => {
  singleModalPage.verifyModalIsDisplayed();
});

When('I close the modal', () => {
  singleModalPage.closeModal();
});

Then('the modal should be dismissed', () => {
  singleModalPage.verifyModalIsDismissed();
});
