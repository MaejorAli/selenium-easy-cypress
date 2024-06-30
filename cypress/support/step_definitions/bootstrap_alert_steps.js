import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { bootstrapAlertPage } from '../pages/bootstrap_alert_page';

Given('I navigate to the Bootstrap Alert Messages page', () => {
  bootstrapAlertPage.navigate();
});

When('I trigger an alert message', () => {
  bootstrapAlertPage.triggerAlert();
});

Then('the alert message should be displayed', () => {
  bootstrapAlertPage.verifyAlertIsDisplayed();
});

When('I close the alert message', () => {
  bootstrapAlertPage.closeAlert();
});

Then('the alert message should be dismissed', () => {
  bootstrapAlertPage.verifyAlertIsDismissed();
});
