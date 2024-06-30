import { bootstrapAutoAlertPage } from '../../support/pages/bootstrap_auto_alert_page';

describe('Bootstrap Auto Alert Messages', () => {
  beforeEach(() => {
    //Navigate to the Bootstrap Alert Messages page
    bootstrapAutoAlertPage.navigate();
  });

  it('should display and auto-close alert messages', () => {
    //Trigger an alert message
    bootstrapAutoAlertPage.triggerAlert();

    //Verify that the alert message is displayed
    bootstrapAutoAlertPage.verifyAlertIsDisplayed();

    //Wait for message to close
    bootstrapAutoAlertPage.closeAlert();

    //Verify that the alert message is dismissed
    bootstrapAutoAlertPage.verifyAlertIsDismissed();
  });
});