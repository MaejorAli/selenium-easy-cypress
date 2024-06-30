import { simpleFormPage } from '../../support/pages/simple_form_page';

describe('Simple Form Demo', () => {
  it('should display the entered message', () => {
    simpleFormPage.navigate();
    const message = 'Sunny day! Innit?!';
    simpleFormPage.enterMessage(message);
    simpleFormPage.showMessage();
    simpleFormPage.verifyMessage(message);
  });
});

