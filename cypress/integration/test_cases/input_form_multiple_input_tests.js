import { simpleFormPageMultiple } from '../../support/pages/simple_form_multiple_input_page';

describe('Simple Form Demo - Multiple Input Fields', () => {
  it('should accept numbers and display the correct sum', () => {
    
    simpleFormPageMultiple.navigate();

   
    const firstNumber = 10;
    simpleFormPageMultiple.enterFirstNumber(firstNumber);

   
    const secondNumber = 20;
    simpleFormPageMultiple.enterSecondNumber(secondNumber);

    
    simpleFormPageMultiple.clickGetTotal();

    //Verify that the displayed result matches the sum of the entered numbers
    const expectedSum = firstNumber + secondNumber;
    simpleFormPageMultiple.verifyTotalSum(expectedSum.toString());
  });
});