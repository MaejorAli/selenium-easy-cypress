import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { simpleFormPage } from '../pages/simple_form_page';

Given('I navigate to the Simple Form Demo page', () => {
  simpleFormPage.navigate();
});

When('I enter a message {string}', (message) => {
  simpleFormPage.enterMessage(message);
});

When('I click the Show Message button', () => {
  simpleFormPage.showMessage();
});

Then('I should see {string} displayed', (message) => {
  simpleFormPage.verifyMessage(message);
});

