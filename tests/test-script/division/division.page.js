const { expect } = require('@playwright/test');

class DivisionPage {
  constructor(page) {
    this.page = page;
    this.buildSelect = page.getByTestId('selectBuild');
    this.firstNumberInput = page.getByTestId('number1Field');
    this.secondNumberInput = page.getByTestId('number2Field');
    this.operationSelect = page.getByTestId('selectOperationDropdown');
    this.calculateButton = page.getByTestId('calculateButton');
    this.clearButton = page.getByTestId('clearButton');
    this.result = page.getByTestId('numberAnswerField');
    this.errorMessage = page.getByTestId('errorMsgField');
  }

  async goto(build = process.env.CALCULATOR_BUILD || '1') {
    const url =
      process.env.DIVISION_URL ||
      'https://testsheepnz.github.io/BasicCalculator.html';

    await this.page.goto(url);
    await expect(this.page).toHaveTitle('Basic Calculator');
    await this.buildSelect.selectOption({ label: build });
    await this.operationSelect.selectOption({ label: 'Divide' });
  }

  async divide({ first, second }) {
    await this.firstNumberInput.fill(first);
    await this.secondNumberInput.fill(second);
    await this.calculateButton.click();
  }

  async expectOutput(testCase) {
    if (testCase.expectedError) {
      await expect(this.errorMessage).toHaveText(testCase.expectedError);
      await expect(this.result).toHaveValue('');
      await expect(this.calculateButton).toBeEnabled();
      await expect(this.clearButton).toBeEnabled();
      return;
    }

    await expect(this.errorMessage).toHaveText('');
    await expect(this.result).toHaveValue(testCase.expected);
  }
}

module.exports = { DivisionPage };
