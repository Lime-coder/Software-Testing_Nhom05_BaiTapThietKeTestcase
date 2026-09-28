const { expect } = require('@playwright/test');

class ConcatenationPage {
  constructor(page) {
    this.page = page;
    this.buildSelect = page.getByTestId('selectBuild');
    this.firstNumberInput = page.getByTestId('number1Field');
    this.secondNumberInput = page.getByTestId('number2Field');
    this.operationSelect = page.getByTestId('selectOperationDropdown');
    this.integerOnlyCheckbox = page.getByTestId('integerSelect');
    this.integerOnlyLabel = page.locator('#intSelectionLabel');
    this.calculateButton = page.getByTestId('calculateButton');
    this.clearButton = page.getByTestId('clearButton');
    this.result = page.getByTestId('numberAnswerField');
    this.errorMessage = page.getByTestId('errorMsgField');
  }

  async goto(build = process.env.CALCULATOR_BUILD || 'Prototype') {
    const url =
      process.env.CONCATENATION_URL ||
      process.env.CALCULATOR_URL ||
      'https://testsheepnz.github.io/BasicCalculator.html#main-body';

    await this.page.goto(url);
    await expect(this.page).toHaveTitle('Basic Calculator');
    await this.selectBuild(build);
    await this.operationSelect.selectOption({ label: 'Concatenate' });
  }

  async selectBuild(build) {
    await this.buildSelect.selectOption({ label: build });
  }

  async selectOperation(operationLabel) {
    await this.operationSelect.selectOption({ label: operationLabel });
  }

  async concatenate({ first, second }) {
    await this.firstNumberInput.fill(first);
    await this.secondNumberInput.fill(second);
    await this.calculateButton.click();
  }

  async expectOutput(expected) {
    await expect(this.errorMessage).toHaveText('');
    await expect(this.result).toBeVisible();
    await expect(this.result).toHaveValue(expected);
  }

  async clear() {
    await this.clearButton.click();
  }
}

module.exports = { ConcatenationPage };
