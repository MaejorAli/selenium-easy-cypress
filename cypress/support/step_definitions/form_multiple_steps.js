import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { simpleFormPageMultiple } from '../pages/simple_form_multiple_input_page';

Given('I open the simple form page', () => {
  simpleFormPageMultiple.navigate();
});

When('I enter a number {string} into the first input field', (number) => {
  simpleFormPageMultiple.enterValueInFirstInput(number);
});

When('I enter a number {string} into the second input field', (number) => {
  simpleFormPageMultiple.enterValueInSecondInput(number);
});

When('I click the "Get Total" button', () => {
  simpleFormPageMultiple.clickGetTotal();
});

Then('I should see the total {string} displayed', (total) => {
  simpleFormPageMultiple.verifyTotal(total);
});