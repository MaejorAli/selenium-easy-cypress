import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { selectListPage } from '../pages/select_list_page';

Given('I navigate to the Select List Demo page', () => {
  selectListPage.navigate();
});

When('I select {string} from the dropdown list', (day) => {
  selectListPage.selectDay(day);
});

Then('the displayed message should match the selected day {string}', (day) => {
  selectListPage.verifySelectedDayMessage(day);
});