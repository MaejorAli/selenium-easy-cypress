import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { bootstrapAutoAlertPage } from '../pages/bootstrap_auto_alert_page';

Given('I navigate to the Bootstrap Alert Messages page', () => {
  bootstrapAutoAlertPage.navigate();
});

When('I trigger an alert message', () => {
  bootstrapAutoAlertPage.triggerAlert();
});

Then('the alert message should be displayed', () => {
  bootstrapAutoAlertPage.verifyAlertIsDisplayed();
});

Then('Then I wait for 5 seconds', () => {
  bootstrapAutoAlertPage.closeAlert();
});

Then('the alert message should be dismissed', () => {
  bootstrapAutoAlertPage.verifyAlertIsDismissed();
});