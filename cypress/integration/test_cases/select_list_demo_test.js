import { selectListPage } from '../../support/pages/select_list_page';

describe('Select List Demo - Select Dropdown List', () => {
  it('should allow selecting a day from the dropdown list and display the correct message', () => {
    //Navigate to the Select List Demo page
    selectListPage.navigate();

  //Select a day from the dropdown list
    const day = 'Monday';
    selectListPage.selectDay(day);

   //Verify that the displayed message matches the selected day
    selectListPage.verifySelectedDayMessage(day);
  });
});
