const { expect } = require('@playwright/test');

class AdditionPage {
  constructor(page) {
    this.page = page;
    this.buildSelect = page.getByTestId('selectBuild');
    this.firstNumberInput = page.getByTestId('number1Field');
    this.secondNumberInput = page.getByTestId('number2Field');
    this.operationSelect = page.getByTestId('selectOperationDropdown');
    this.integerOnlyCheckbox = page.getByTestId('integerSelect');
    this.calculateButton = page.getByTestId('calculateButton');
    this.clearButton = page.getByTestId('clearButton');
    this.result = page.getByTestId('numberAnswerField');
    this.errorMessage = page.getByTestId('errorMsgField');
  }

  async goto(build = process.env.CALCULATOR_BUILD || '0') {
    const url = process.env.ADDITION_URL || 'https://testsheepnz.github.io/BasicCalculator.html';
    await this.page.goto(url);
    await expect(this.page).toHaveTitle('Basic Calculator');
    
    const buildLabel = build === '0' ? 'Prototype' : build;
    await this.buildSelect.selectOption({ label: buildLabel });
    await this.operationSelect.selectOption({ label: 'Add' });
  }

  async selectBuild(build) {
    const buildLabel = build === '0' ? 'Prototype' : build;
    await this.buildSelect.selectOption({ label: buildLabel });
  }

  async add({ first, second, integerOnly }) {
    await this.firstNumberInput.fill(first);
    await this.secondNumberInput.fill(second);

    const integerOnlyEnabled = await this.integerOnlyCheckbox.isEnabled();
    const integerOnlyChecked = await this.integerOnlyCheckbox.isChecked();

    if (!integerOnlyEnabled && integerOnlyChecked !== integerOnly) {
      throw new Error(
        `Không thể đặt Integers only thành ${integerOnly ? 'On' : 'Off'}: checkbox đang bị vô hiệu hóa ở trạng thái ${integerOnlyChecked ? 'On' : 'Off'}.`,
      );
    }

    if (integerOnlyEnabled) {
      await this.integerOnlyCheckbox.setChecked(integerOnly);
    }

    await this.calculateButton.click();
  }

  async expectOutput(expected) {
    if (/^Number [12] is not a number$/.test(expected)) {
      await expect(this.errorMessage).toHaveText(expected);
      await expect(this.result).toHaveValue('');
      return;
    }

    await expect(this.errorMessage).toHaveText('');
    await expect(this.result).toHaveValue(expected);
  }

  async clear() {
    await this.clearButton.click();
  }
}

module.exports = { AdditionPage };
