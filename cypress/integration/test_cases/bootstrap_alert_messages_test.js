import { bootstrapAlertPage } from '../../support/pages/bootstrap_alert_page';

describe('Bootstrap Alert Messages', () => {
  beforeEach(() => {
    //Navigate to the Bootstrap Alert Messages page
    bootstrapAlertPage.navigate();
  });

  it('should display and close alert messages', () => {
    //Trigger an alert message
    bootstrapAlertPage.triggerAlert();

    //Verify that the alert message is displayed
    bootstrapAlertPage.verifyAlertIsDisplayed();

    //Click the close button
    bootstrapAlertPage.closeAlert();

    //Verify that the alert message is dismissed
    bootstrapAlertPage.verifyAlertIsDismissed();
  });
});